define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
            defineGetter(this, 'imageBase64', () => {
                return this._imageBase64;
            });
            defineSetter(this, 'imageBase64', value => {
                this._imageBase64 = value;
	            this.view.imgPic.base64 = value;
            });
        }
	};
});