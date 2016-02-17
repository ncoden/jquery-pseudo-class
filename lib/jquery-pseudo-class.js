'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

    function _onPseudoClass(elem, type, handlerIn, handlerOut) {
        var t;
        var isActive = false;

        if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) == 'object') {
            for (t in type) {
                _onPseudoClass(elem, t, type[t][0], type[t][1]);
            }
            return elem;
        }

        var onIn = function onIn(e) {
            if (!isActive) {
                isActive = true;
                handlerIn(e);
            }
        };
        var onOut = function onOut(e) {
            if (isActive) {
                handlerOut(e);
                isActive = false;
            }
        };

        switch (type) {
            case 'active':
                elem.on('mousedown', onIn);
                elem.on('mouseup', onOut);
                $(document).on('mouseup dragend', onOut);
                break;
            case 'hover':
                elem.on('mouseenter', onIn);
                elem.on('mouseleave', onOut);
                break;
        }

        return elem;
    };

    $.fn.extend({
        onPseudoClass: function onPseudoClass(type, handlerIn, handlerOut) {
            return _onPseudoClass(this, type, handlerIn, handlerOut);
        }
    });
})(_jquery2.default);