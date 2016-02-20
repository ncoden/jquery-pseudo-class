# jQuery pseudo-class
Add pseudo-class events control to jQuery

## Install
```
npm install jquery-pseudo-class --save
```

:construction: The module is still in development.
The following pseudo-classes are supported:
- `active`
- `hover`
- *... work in progress ...*

## Usage

```javascript
$elem.onPseudoClass( pseudo_class, function_in, function_out );

$elem.onPseudoClass( {
    pseudo_class: [function_in, function_out],
    pseudo_class: [function_in, function_out],
    ...
} );
```

For exemple:
```javascript
var $elem = $('.js-button');

$elem.onPseudoClass('hover',
    function(e) {
        $elem.html('Mouse is in');
    },
    function(e) {
        $elem.html('Mouse is out');
    }
);
```
Or
```javascript
var $elem = $('.js-button');

$elem.onPseudoClass({
    hover: [
        function(e) {
            $elem.html('Mouse is in');
        },
        function(e) {
            $elem.html('Mouse is out');
        }
    ],
    active: [
        function(e) {
            $elem.html('Mouse pressed');
        },
        function(e) {
            $elem.html('Mouse released');
        }
    ]
});
```

## Licence
This plugin is under the Apache 2.0 Licence.
Please refer to the LICENCE file for more details.

*Made with :heart: in Paris*
