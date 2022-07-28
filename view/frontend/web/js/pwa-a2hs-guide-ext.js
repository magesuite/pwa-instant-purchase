define(['jquery', 'Magento_Customer/js/customer-data'], function($, customerData) {
    return function(PwaA2hsGuide) {
        /**
         * Check if instant-purchase module is active and change text of PWA Guide.
         * It does not assure that instant purchase payments are available in the projects,
         * it has to be first set up and configured properly in the admin panel.
         */

        if (!customerData.get('instant-purchase')().hasOwnProperty('available')) {
            return PwaA2hsGuide;
        }

        const instantPurchasePwaGuideMessage = $.mage.__('Re-order products in 4 clicks.');

        return PwaA2hsGuide.extend({
            defaults: {
                headerIOS: instantPurchasePwaGuideMessage,
                headerAndroid: instantPurchasePwaGuideMessage,
                headerDesktop: instantPurchasePwaGuideMessage,
            },
        });
    };
});
