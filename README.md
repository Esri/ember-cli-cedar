# Ember-cli-cedar

Ember addon for Esri's [Cedar](https://esri.github.io/cedar) charting library.

## Usage
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

See the [Cedar documentation](http://esri.github.io/cedar/) for details on how to construct a chart specification and other chart parameters.

## Installation
Run the following in any ember application:
```
ember install ember-cli-cedar
```

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running the Dummy App

You can test this addon in the dummy app with:

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

### License

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
