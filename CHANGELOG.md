# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

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
