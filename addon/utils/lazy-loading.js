import { Promise, allSettled, reject } from 'rsvp';

// lazy load a script
function loadScript(src) {
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.onload = resolve;
    script.src = src;
    document.head.appendChild(script);
  });
}

// lazy load a stylesheet
function loadStylesheet(href) {
  return new Promise(resolve => {
    const link = document.createElement('link');
    link.onload = resolve;
    link.rel = 'stylesheet'
    link.type = 'text/css';
    link.href = href;
    document.head.appendChild(link);
  });
}

export function loadAmChartsFiles(dependencies, baseUrl) {
  if (!dependencies) {
    return reject(new Error('You must supply the AmCharts dependencies you wish to lazy load'));
  }
  // get the URLs to load
  const prependUrl = baseUrl && baseUrl.replace(/\/$/, '');
  const urls = prependUrl
    // get fully qualified URL for each relative dependency
    ? dependencies.map(dependency => {
      const isAbsolute = /^(http(s?):)?\/(\/)?/.test(dependency);
      return isAbsolute ? dependency : `${prependUrl}/${dependency}`
    })
    // we assume all are valid URLs already
    // just copy the dependencies so we don't mutate the original
    : dependencies.concat();

  // first have to load the main amCharts script
  // which by convention MUST be the first dependency
  const amchartsUrl = urls.shift();
  return loadScript(amchartsUrl)
  .then(() => {
    // once that is loaded, we can load the remaining scripts
    return allSettled(urls.map(url => {
      const isScript = /\.js$/i.test(url);
      return isScript
        ? loadScript(url)
        : loadStylesheet(url);
    }));
  });
}
