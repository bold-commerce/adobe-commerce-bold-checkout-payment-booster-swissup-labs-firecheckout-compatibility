define([
    'Bold_BoosterSwissupFirecheckoutCompatibility/js/action/general/update-payment-methods',
], function (updatePaymentMethods) {
    'use strict';

    return function (target) {
        return target.extend({
            applyShippingMethod: function (force) {
                this._super(force);
                if (!jQuery('input[value^="bold"]:visible').length) {
                    updatePaymentMethods();
                }
            }
        });
    };
});
