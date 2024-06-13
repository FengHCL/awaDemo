define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        //voltmx.application.showLoadingScreen(null, 'Loading data...', constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, {});
        this.view.flxCover.onTouchEnd = () => this.view.isVisible = false;
      };
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'selectedLocation', () => {
        this._selectedLocation = this.view.lstLocation.selectedKey;
        return this._selectedLocation;
      });
      defineSetter(this, 'selectedLocation', value => {
        this._selectedLocation = value;
      });
    }
  };
});