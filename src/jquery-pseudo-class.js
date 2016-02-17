import jQuery from 'jquery';

(function($) {

    function onPseudoClass(elem, type, handlerIn, handlerOut) {
        var t;
        var isActive = false;

        if (typeof(type) == 'object') {
            for (t in type) {
                onPseudoClass(elem, t, type[t][0], type[t][1]);
            }
            return elem;
        }

        var onIn = function(e) {
            if (!isActive) {
                isActive = true;
                handlerIn(e);
            }
        };
        var onOut = function(e) {
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
        onPseudoClass: function(type, handlerIn, handlerOut) {
            return onPseudoClass(this, type, handlerIn, handlerOut)
        }
    });

}(jQuery));
