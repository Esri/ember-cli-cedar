# Ember-cli-cedar

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
  onError=(action 'showError')
}}
```

### Shim

This addon also exposes a shim you can use to work w/ the cedar library directly:

```js
import cedar from 'cedar';

this.chart = new cedar.Chart(this.elementId, definition);
```

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

@esri/cedar depends on [amCharts](https://www.amcharts.com/javascript-charts/), which will be installed locally as an npm dependency. However, you can choose whether your app loads amCharts from local files or from the CDN.

To load amCharts from local files, include the following configuration in ember-cli-build.js:

```js
cedar: {
  amCharts: {
    // publicPath: amCharts will be included at this path in the public folder
    // use this if you are not loading amCharts from the CDN
    publicPath: 'amcharts',
    // imports: an array of amcharts files to be imported (bundled) in vendor files
    imports: ['amcharts.js', 'serial.js', 'xy.js', 'pie.js', 'radar.js', 'plugins/export/export.js', 'plugins/export/export.css']
  }
}
```

To load amCharts from the CDN, simply add the appropriate amCharts scripts and/or styles to your index.html _before_ the vendor.js script:

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

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

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
