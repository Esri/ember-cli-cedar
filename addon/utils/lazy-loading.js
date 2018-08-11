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

export function loadAmChartsFiles(path, fileNames) {
  if (!path) {
    return reject(new Error('You must supply the root path to AmCharts (typically the AmCharts_path global) in order to lazy-load AmCharts'));
  }
  if (!fileNames) {
    return reject(new Error('You must supply the AmCharts files you wish to lazy load'));
  }
  // don't mutate fileNames that are passed in
  const fileNamesCopy = fileNames.concat();
  // first have to load the main amCharts script
  // which by convention MUST be the first file
  const amchartsFileName = fileNamesCopy.shift();
  return loadScript(`${path}/${amchartsFileName}`)
  .then(() => {
    // load the remaining scripts
    return allSettled(fileNamesCopy.map(fileName => {
      const isScript = /\.js$/i.test(fileName);
      return isScript
        ? loadScript(`${path}/${fileName}`)
        : loadStylesheet(`${path}/${fileName}`);
    }));
  });
}
