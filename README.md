# ember-cli-cedar

Ember addon for the [@esri/cedar](https://github.com/Esri/cedar) charting library.

[View it live](http://esri.github.io/ember-cli-cedar/#/charts/bar)

## Usage

### Component

This addon exposes the `{{cedar-chart}}` component that you can use to declaratively add a Cedar chart to your ember application.

```hbs
{{!-- you can pass the definition as an object --}}
{{cedar-chart
  definition=model
  onError=(action 'showError')
}}

{{!-- or you can pass the individual parts of a definition --}}
{{cedar-chart
  type=model.type
  datasets=model.datasets
  series=model.series
  overrides=model.overrides
  legend=model.legend
  style=model.style
  onError=(action 'showError')
}}
```

NOTE: if you've configured emeber-cli-cedar to [lazy-load cedar dependencies](#lazy-load-amcharts), then the `{{cedar-chart}}` component will handle that for you.

### Service

This addon exposes the `cedar-loader` service that you can use to control when cedar's dependencies are lazy-loaded (if you've [configured ember-cli-cedar to do so](#lazy-load-amcharts)). This can be useful if you want to implement your own chart component instead of using [`{{cedar-chart}}`](#component). The service exposes a single function `loadDependencies()` which returns a `Promise` that will resolve with the `cedar` global once the dependencies have been loaded.

```js
  this.get('cedarLoader').loadDependencies().then(cedar => {
    // now you can safely use cedar
    this.chart = new cedar.Chart(this.elementId, definition);
  });
```

### Shim

This addon also exposes a shim you can use to work w/ the cedar library directly:

```js
import cedar from 'cedar';

this.chart = new cedar.Chart(this.elementId, definition);
```

NOTE: If you will be [lazy-loading cedar's dependencies](#lazy-load-amcharts), you should probably use the [service](#service) instead the shim.

### v0.x

Below are the instructions for using v0.x.

This addon exposes a component you can use to declaratively add a Cedar chart to your ember application:

```hbs
{{cedar-chart
  type="bar"
  datasets=model.datasets
  series=model.series
  specification=model.specification
  timeout=5000
  options=model.options
  override=model.override
  onUpdateStart=(action 'onChartUpdateStart')
  onUpdateEnd=(action 'onChartUpdateEnd')
  onError=(action 'onChartError')
  transform=(action chartTransform')
}}
```

See the [Cedar documentation](https://github.com/Esri/cedar/tree/v0.x) for details on how to construct a chart specification and other chart parameters.

## Installation
To consume this addon in any ember application, run:
```
ember install ember-cli-cedar
```

Please see the [Dependencies](#dependencies) and [Configuration](#configuration) sections below for further installation steps.

## Dependencies

@esri/cedar depends on [amCharts](https://www.amcharts.com/javascript-charts/), which will be installed locally as an npm dependency. However, you have a few options as to how your application will load amCharts' scripts, styles, themes, and/or plugins. You can either:
- configure ember-cli-cedar to [lazy-load amCharts](#lazy-load-amcharts), either
  - [from a CDN](#lazy-load-amcharts-from-a-cdn)
  - [from the public folder](#lazy-load-from-the-public-folder)
- configure ember-cli-cedar to [import amCharts into the vendor js/css files](#import-amCharts-in-vendor-files)
- manually [insert amCharts `<script>` and `<link>` tags](#load-amCharts-using-script-tags)

### Lazy-load amCharts

The ideal way to load amCharts is only once a cedar chart is going to be rendered. You can configure ember-cli-cedar to lazy-load amCharts files either from a CDN, or from locally served files.

#### Lazy-load amCharts from a CDN

The easiest way to lazy-load AmCharts is to configure an array of the amCharts `dependencies` that your application needs along with an optional `baseUrl` like this in config/environment.js:

```js
// config/environment.js
let ENV = {
  cedar: {
    amCharts: {
      // baseUrl: the base URL to use for any relative dependencies below
      // if baseUrl is not defined then it will use window.AmCharts_path
      // here we'll load the dependencies below from amCharts' own CDN
      baseUrl: 'https://www.amcharts.com/lib/3'
      // dependencies - the amCharts resources that your application needs
      // these will be lazy-loaded the first that the application either
      // - renders a {{cedar-chart}} component
      // - calls this.get('cedarLoader').loadDependencies()
      dependencies: [
        // amCharts base lib, this one is required and MUST be the first element in the array
        'amcharts.js',
        // you will likely need at least one of the following:
        'serial.js', // bar and line charts
        'xy.js', // scatter charts
        'pie.js', // pie and donut charts
        'radar.js', // radar charts
        // you will also likely need a theme to style charts
        // in this case we want to use cedar's calcite theme
        // so we use a fully qualified URL since it is not hosted at the above baseUrl
        // 'https://unpkg.com/@esri/cedar@1.0.0-beta.9/dist/umd/themes/amCharts/calcite.js',
        // plugins are complely optioinal
        // this one adds a download button on the chart
        'plugins/export/export.js',
        'plugins/export/export.css'
      ]
    }
  }
}
```

#### Lazy-load from the public folder

Alternatively, you can lazy-load locally installed copy of amCharts from the public folder.

First, configure ember-cli-cedar to [serve the locally installed copy of amCharts](#serve-locally-installed-amCharts).

Next you will need to modify the `cedar.amCharts` settings in enviroment/config.js (above) by:
- removing the `baseUrl`
- change the calcite theme dependency to `'themes/calcite.js'`

NOTE: you do not _need_ to set the `baseUrl` in this case, since the cedar loader service will default to `window.AmCharts_path`, which is automatically set in `contentFor('head')` to the `publicPath` you configured in ember-cli-build.js.

This addon's dummy app is configured to lazy-load from the public folder, so you can look at [ember-cli-build.js](./tree/master/ember-cli-build.js) [tests/dummy/config/environment.js](./tree/master/tests/dummy/config/environment.js) for an example of this kind of configuration.

### Import amCharts in vendor files

Instead of lazy-loading, you can configure ember-cli-cedar to import the amCharts dependencies into vendor.js and vendor.css.

First, configure ember-cli-cedar to [serve the locally installed copy of amCharts](#serve-locally-installed-amCharts).

Next, _instead_ of adding the `cedar.amCharts` settings to config/enviroment.js (above), add the following list of `imports` to the `cedar.amCharts` section that you just added to ember-cli-build.js (i.e. right below `publicPath`) :

```js
// ember-cli-build.js
      imports: [
        // amCharts base lib, this one is required and MUST be the first element in the array
        'amcharts.js',
        // you will likely need at least one of the following:
        'serial.js', // bar and line charts
        'xy.js', // scatter charts
        'pie.js', // pie and donut charts
        'radar.js', // radar charts
        // you will also likely need a theme to style charts
        'themes/calcite.js',
        // plugins are complely optioinal
        // this one adds a download button on the chart
        'plugins/export/export.js',
        'plugins/export/export.css'
      ]
```

NOTE: the above `imports` goes in **ember-cli-build.js**, and should not be confused with the `dependencies` array that goes in **config/enviroment.js**.

### Load amCharts using script tags

To load amCharts from a CDN, you can _skip all of the above configuration steps_ and simply add `<script>` and/or `<link>` tags for the amCharts dependencies to your index.html _before_ the vendor.js script:

```html
<!-- load the amCharts base library -->
<script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
<!-- for bar, line, and area charts -->
<script src="https://www.amcharts.com/lib/3/serial.js"></script>
<!-- for pie charts -->
<script src="https://www.amcharts.com/lib/3/pie.js"></script>
<!-- for scatter and bubble charts -->
<script src="https://www.amcharts.com/lib/3/xy.js"></script>
<!-- for radar charts -->
<script src="https://www.amcharts.com/lib/3/radar.js"></script>
<!-- optionally load an amcharts theme -->
<!-- cedar provides a calcite theme -->
<script src="https://unpkg.com/@esri/cedar/dist/umd/themes/amCharts/calcite.js"></script>
<!-- or you could use one of the themes from amcharts -->
<!-- <script src="https://www.amcharts.com/lib/3/themes/light.js"></script> -->
<!-- optioinally load the amcharts plugin to export the chart as and image or table -->
<script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script>
<link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />

<script src="{{rootURL}}assets/vendor.js"></script>
```

## Configuration

### Serve locally installed amCharts

If you want to serve the amCharts package that is installed locally (in node_modules), you will need to start by adding the following options in ember-cli-build.js:

```js
// ember-cli-build.js
{
  cedar: {
    amCharts: {
      // publicPath - amCharts will be included at this path in the public folder
      // use this if you are goint to either:
      // - import amcharts into vendor files
      // - or lazy-load amcharts from the public folder
      publicPath: 'amcharts'
    }
  }
  // amCharts uses hardcoded paths to assets (like images and plugin files)
  // so you will need to make sure those don't get fingerprinted
  fingerprint: {
    // NOTE: this needs to be the same as publicPath above
    exclude: ['amcharts']
  }
}
```

### Deploying assets to a CDN

If you're serving the locally installed amCharts files, we assume that your assets are hosted under your application's `rootURL` and the `publicPath` is relative to that location. However, if for certain environments you deploy your assets to a remote CDN (i.e. using an addon like  [ember-cli-deploy-cloudfront](https://github.com/kpfefferle/ember-cli-deploy-cloudfront)), you will also need to specify the `assetBaseUrl` in config/enviroment.js.

```js
// config/enviroment.js
if (environment === 'production') {
  // tell amCharts to look for scripts, styles, themes, and assets at the CDN
  ENV.cedar.amCharts.assetBaseUrl = 'https://fa9efa977faw99.cloudfront.net/my-app/assets'
}
```

NOTE: `window.AmCharts_path` will be set to `ENV.cedar.amCharts.assetBaseUrl` concatenated with the `publicPath`.

## Development

### Running the Dummy App

After cloning the repository you can test this addon in the dummy app with:

* `ember server`
* Visit your app at http://localhost:4200.

NOTE: Windows users may need to specify an alternate livereload port like:

`ember server -lrp 9000`

### Running in Another App

In the root of this repo run:

`npm link`

In the consuming app, run:

```
npm link ember-cli-cedar
ember generate ember-cli-cedar
ember server
```

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

### Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/Esri/contributing/blob/master/CONTRIBUTING.md).

## License

Copyright &copy; 2016-2018 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE](./LICENSE) file.
