/**
 * Created by shannonlal on 15-10-18.
 */
/**
 * Created by shannonlal on 15-10-18.
 */

var SalesDemo = SalesDemo || {REVISION: '1.0.0'};

/**
 * The following is the class definition for the
 * Sales Demo Config.  This will encapsulate
 * environment specific variables and methods
 *
 * @constructor SalesDemoConfig
 * @class SalesDemoConfig
 */

SalesDemo.SalesDemoConfig = (function() {

    function SalesDemoConfig(){
        /**
         * The following method returns the url
         * for getting Device Types
         * @param deviceClassFamilyName
         * @method getInstallDeviceTypeURL
         * @return {string}
         */
        this.getInstallDeviceTypeURL = function(deviceClassFamilyName){
            return '/shopscreen-install-web/test/sample_data/devicetypes.json';
        };


    };


    var instance;

    return {

        /**
         * The following method will return a reference to the
         * BootstrapCommonConfig instance
         * @returns {*}
         */
        getInstance : function(){
            if( ( instance == null ) || (typeof instance === 'undefined') ){
                instance = new SalesDemoConfig();

            }

            return instance;
        }
    };

})();