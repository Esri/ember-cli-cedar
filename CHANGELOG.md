# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

### Fixed
- fixed syntax of `addPackagesToProject()` in default blueprint
- remove example in amcharts plugin that uses a vulnerable library for the build [111 a-e-s](https://devtopia.esri.com/WebGIS/arcgis-enterprise-sites/issues/111)

## v1.0.0
### Added
- `onUpdateEnd` now passes a reference to the Cedar chart instance

## v1.0.0
### Changed
- make @esri/cedar a peer dependency & use ember-auto-import to load it and it's dependencies

## v1.0.0-rc.2
### Changed
- get the definition JSON files from raw.githubusercontent.com
- make it compatible w/ Ember engines

## v1.0.0-rc.1
### Changed
- Bump to cedar@v1.0.0-rc.1

### Changed
- convert tests to new format and use stubs instead of fetch-mock
- configure eslint to treat use of jQuery as an error
- configure eslint to treat use of global fetch as an error

## v1.0.0-beta.10
### Fixed
- guard against query after loading dependencies and component is destroying/ed

## v1.0.0-beta.9
### Changed
- cedar-chart component lazy-loads cedar dependencies by default
### Added
- add cedar-loader service to lazy-load cedar dependencies
- configure cedar to use ember-fetch

## v1.0.0-beta.8
### Changed
- Bump to cedar@v1.0.0-beta.8

## v1.0.0-beta.7
### Changed
- use latest arcgis-rest.js library, with new filenames

## v1.0.0-beta.6
### Added
- bump to [cedar@v1.0.0-beta.6](https://github.com/Esri/cedar/releases/tag/v1.0.0-beta.6)

## v1.0.0-beta.5
### Added
- Legend and style now added to api
- bump to [cedar@v1.0.0-beta.5](https://github.com/Esri/cedar/releases/tag/v1.0.0-beta.5)

## v1.0.0-beta.4
### Fixed
- bump to [cedar@v1.0.0-beta.4](https://github.com/Esri/cedar/releases/tag/v1.0.0-beta.4) and include arcgis-rest-js libs in vendor.js

## v1.0.0-beta.3
### Added
- bump to [cedar@v1.0.0-beta.3](https://github.com/Esri/cedar/releases/tag/v1.0.0-beta.3)

## v1.0.0-beta.2
### Added
- consumers can specify timeout error message
### Fixed
- {{cedar-chart}} doesn't error if no definition properties are passed in
- {{cedar-chart}} doesn't error if it's been destroyed before query rerturns
- {{cedar-chart}} calls `onUpdateEnd` _after_ the chart is rendered
- don't include pdfmake.js in builds [#76](https://github.com/Esri/ember-cli-cedar/issues/76)
- Timeout actually works once again [#81](https://github.com/Esri/ember-cli-cedar/issues/81)
### Changed
- updated to Ember 2.18
- add component test for {{cedar-chart}} that actually renders a chart
- bumped @esri/cedar to beta.1 and removed unused amcharts
- using yarn instead of npm
- dummy app runs in IE11 by polyfilling Promise/fetch
- update to @esri/cedar to help support IE11
- re-add lost ember-cli-release
## v1.0.0-beta.1
### Added
- add assetBaseUrl environment config to support external assets

## v1.0.0-beta.0
### Fixed
- bump cedar to v1-beta to fix multi-dataset joins
### Changed
- dummy app requests chart specs over HTTPS so it works on gh-pages

## v1.0.0-alpha.7
### Fixed
- bump cedar for better support of v0.x charts
### Changed
- dummy site works off of chart JSON on cedar's v1 docs site

## v1.0.0-alpha.6
### Fixed
- bump cedar to fix timeline labels and font color

## v1.0.0-alpha.5
- fixes long URLs and overriding graphs

## v1.0.0-alpha.4
### Changed
- bump cedar to get changes needed when using in Hub

## v1.0.0-alpha.3
### Changed
- ember-cli-cedar now emits onUpdateStart and onUpdateEnd

## v1.0.0-alpha.2
### Fixed
- bump cedar version so deepMerge will no longer iterate over ember array properties

## v1.0.0-alpha.1
### Fixed
- AmCharts path should be relative to app rootURL

## v1.0.0-alpha.0
### BREAKING CHANGES
- Replace arcgis-cedar with @esri/cedar, see https://github.com/Esri/cedar/releases/tag/v1.0.0-alpha

## v0.7.2
### Changed
- Bump cedar version to 0.9.2 resolving axis label truncation. Also adds axis titles to timeline charts

## v0.7.1
### Changed
-Bump cedar version to 0.9.1 allowing tooltips to be generated for new json spec

## v0.7.0
### Added
- Supports series and datasets, new properties for the new json specification

### Changed
- bump cedar version to 0.9.0

## v0.6.0
### Added
- add properties for all chart constructor options

### Support
- update dummy app to use constructor properties instead of specification

## v0.5.0

### Added
- added onError attribute for closure actions to handle errors

### Changed
- deprecated invalidSpecMessage in favor of onError
- destroy chart before recreating and only run once in run loop

### Support
- added error handling route to dummy app
- added bootstrap CSS to dummy app

## v0.4.1

### Fixed
- fix vega parse error by bumping cedar version to 0.8.2

## v0.4.0

### Added
- add attribute for Cedar data transform function

### Changed
- bump cedar version to 0.8.0


## v0.3.1

### Fixed
- revert back to cedar 0.6.1 b/c 0.7.0 breaks this addon


## v0.3.0

### Added
- add attributes for Cedar event handlers

### Changed
- bump cedar version to 0.7.0


## v0.2.12

### Fixed
- add missing broccoli dependencies for real

### Support
- add basic usage to README


## v0.2.11

### Changed
- add missing broccoli dependencies


## v0.2.10

### Changed
- update to Ember v2.8


## v0.2.9

### Changed
- update cedar dependency to v0.6.1 for real this time


## v0.2.8

### Changed
- update cedar dependency to v0.6.1
- copy Specification so as to prevent cedar from making mutations upstream


## v0.2.6

### Changed
- update cedar dependency to v0.4.4 for better error handling


## v0.2.5

### Changed
- update dummy app to cedar v0.4.4 for better error handling


## v0.2.4

## Support
- fix failing build when used outside of dummy app

## v0.2.3

### Changed
- update to use latest version of Cedar
- removes deprecated (and potentially unsafe) binding to cedar-chart style attribute
- use didReceiveAttrs() instead of observers to listen to changes to chart spec/options

### Support
- added content security policies in dummy app b/c Cedar uses inline styles and remote services
- include chart JSON specs in `treeForPublic` instead of multiple calls to app.import()

## v0.2.2

### Changed
- if no show options passed, default to an empty object (instead of bailing)
- if type is pie chart, don't allow autolabels option

### Support
- added pie chart example to dummy app

## v0.2.1

### Changed
- observers on specification, options, and override properties use run loop to schedule chart renderring only once all databinding operations have completed.

## v0.2.0

### Added
- chart component applies [override](http://esri.github.io/cedar/examples/style-overrides.html) when drawing chart if `override` property is specified
- chart component listens for changes to new `override` property and re-draws chart

### Changed
- removed support for `options.elementId` and getting id from

### Support
- added route to show chart overrides

## v0.1.3

### Added
- chart component listens for changes to options prop and re-draws chart

## v0.1.2

### Added
- chart component listens for changes to specification prop and re-draws chart

## v0.1.1

### Changed
- using `specification` and `options` properties instead of `settings` property

## v0.1.0

## Added
- Added `cedar-chart` component
