# Changelog
## Latest version [0.3.2] - 12/19/2020
### Fixed
- Date component bug fixed
- PostfixContainer bug fixed

## [0.3.1] - 12/16/2020
### Fixed
- theme of Checkbox and FormControlLabel changed ( samples exist in tatareact-components-sample)

## [0.3.0] - 12/13/2020
### Added
- **requestHandler** and **params** properties added to DownloadFile component
- openGeneralError action to Modal component ( const { openGeneralError } = useModal(); )

### Changed
- background color of Dialog Backdrop (alpha parameter 0.5 => 0.2)

## [0.2.9] - 12/08/2020
### Added
- PostfixContainer component

### Fixed
- change value of Date component fixed

## [0.2.8] - 12/06/2020
### Added
- SimpleDataTable component

## [0.2.7] - 12/05/2020
### Changed
- add isValid, onError property to DownloadFile component

## [0.2.6] - 12/02/2020
### Fixed
- DownloadFile Button Theme

### Added
- TejaratLoading component to show progress  

### Changed
- add README for openModal action of Modal component

## [0.2.5] - 11/18/2020
### Fixed
- TabControl render problem  
- Accordion onChange event problem
###Changed
- default line-height changed to 1.5 in ThemeProvider globalStyle (body)
- Section header margin changed

## [0.2.4]
### Added
- Add Tree component
### Changed
- Renamed Group component to FocusManager: The FocusManager can move focus from one input to another control using Enter Key and move focus from one button to another control using Left or Right Arrow keys
- Change Accordion component : changes are add icon for expand/collapse and showIcon property
    

## [0.2.3]
### Changed
- removed style (lineHeight: 'initial') from Section component

## [0.2.2]
### Added
- added Yekan font to show Persian numbers
### Changed
- Input Component style changed (color,  fontFamily, and FontWeight)

## [0.2.1]
### Added
- added **`required`** property to Input, Date, AmountInput, NumberInput, CodeCombo, CodeTextLookup
shows red start in front of component
```angular2html
example :
<Input required />

```
 




