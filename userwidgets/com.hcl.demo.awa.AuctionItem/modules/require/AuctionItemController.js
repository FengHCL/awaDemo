define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        if(!this.initDone){
          this.view.lblLike.onTouchEnd = () => {
            voltmx.print("click!!!"+this.view.lblLike.skin);
            if(this.view.lblLike.skin === 'iconRed')
              this.view.lblLike.skin = 'iconGris';
            else
              this.view.lblLike.skin = 'iconRed';
          };
          this.initDone = true;
        }
      };

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