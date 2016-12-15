# Ember-cli-cedar

Ember addon for Esri's [Cedar](https://github.com/esri/cedar) charting library.

## Usage
This addon exposes a component you can use to declaratively add a Cedar chart to your ember application:

```hbs
{{cedar-chart specification=model.specification overrides=model.overrides options=model.options}}
```

See the [Cedar documentation](http://esri.github.io/cedar/) for details on how to construct a chart specification and other chart parameters.

## Installation
Run the following in any ember application:
```
ember install ember-cli-cedar
```

## Collaborating

The rest of this README outlines the details of collaborating on this Ember addon.

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
