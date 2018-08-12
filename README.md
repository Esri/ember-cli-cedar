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

### Service

This addon exposes the `cedar-loader` service that you can use to manually lazy-load cedar dependencies. This can be useful if you want to implement your own chart component instead of using [`{{cedar-chart}}`](#component). The service exposes a single function `loadDependencies()` which returns a `Promise` that will resolve with the `cedar` global once the dependencies have been loaded.

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

NOTE: If you will be [lazy-loading cedar's dependencies](#dependencies), you should probably use the [service](#service) instead the shim.

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
To consume this addon in any ember application:
```
ember install ember-cli-cedar
```

### Dependencies

@esri/cedar depends on [amCharts](https://www.amcharts.com/javascript-charts/), which will be installed locally as an npm dependency. However, you have a few options as to how your application will load amCharts.

#### Use locally installed amCharts

If you want to use the amCharts package that is installed locally (in node_modules), you will need to start by adding the following to in ember-cli-build.js:

```js
{
  cedar: {
    amCharts: {
      // publicPath - amCharts will be included at this path in the public folder
      // use this if you are not loading amCharts from the CDN
      // i.e. and are either going to bundle amcharts into vendor.js (below)
      // or going to lazy-load amcharts from window.AmCharts_path
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

#### Lazy-load amCharts

The ideal way to load amCharts is only once a cedar chart is going to be rendered.

Either way, you will need to configure an array of the amCharts files you want to use like this in config/environment.js:

```js
    cedar: {
      // dependencies - the amCharts resources that your application needs
      // these will be lazy-loaded the first that the application either
      // - renders a {{cedar-chart}} component
      // - calls this.get('cedarLoader').loadDependencies()
      // NOTE: all paths are relative to window.AmCharts_path
      amCharts: {
        dependencies: [
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
      }
    }
```

#### Import amCharts in vendor bundles

Instead of lazy-loading, you can configure ember-cli-cedar to import the amCharts dependencies into vendor.js and vendor.css. To do this, _instead_ of adding the above config/enviroment.js, add the following list of `imports` to the `cedar.amCharts` section that you added to ember-cli-build.js above (i.e. right below `publicPath`) :

```js
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

#### Load amCharts from a CDN

To load amCharts from a CDN, you can _skip all of the above configuration steps_ and simply add the required amCharts scripts, themes, and/or styles to your index.html _before_ the vendor.js script:

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

Copyright 2017 Esri

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
