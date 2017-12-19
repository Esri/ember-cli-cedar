# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

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
