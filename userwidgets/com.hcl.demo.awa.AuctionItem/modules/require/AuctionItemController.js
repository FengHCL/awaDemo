define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.flxLike.onClick = () => {
        voltmx.print("click!!!"+this.view.lblLike.skin);
        if(this.view.lblLike.skin === 'iconRed')
          this.view.lblLike.skin = 'iconGris';
        else
          this.view.lblLike.skin = 'iconRed';
      };
      this.view.btnBidNow.onClick = () => {
        const bidValue = parseInt(this.view.lstBid.selectedKey)?parseInt(this.view.lstBid.selectedKey):100;
        const total = parseInt(parseValue(this.view.lblValue.text))+bidValue;
        const bids = parseInt(this.view.lblBids.text)+1;
        this.updateBid(total,bids);
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
    },
    
    
    updateBid(total,bids){

      voltmx.application.showLoadingScreen(null, '', constants.LOADING_SCREEN_POSITION_FULL_SCREEN, 
                                           true, true, {});

      const objSvc = VMXFoundry.getObjectService('awaObject', {access: 'online'});
      const vehicleObj = new voltmx.sdk.dto.DataObject("vehicle");
      vehicleObj.addField("value", total);
      vehicleObj.addField("bids", bids);
      vehicleObj.addField("vehicleID", this.uid);

      objSvc.update({dataObject: vehicleObj}, (responsevehicle) => {
        this.view.lblValue.text =formatValue(total.toString());
        this.view.lblBids.text = formatValue(bids.toString());
        const car = globals.getCarById(this.uid);
        car.value = total;
        car.bids = bids;
        voltmx.application.dismissLoadingScreen();
      }, (errorVehicles) => {
        voltmx.application.dismissLoadingScreen();
        alert(JSON.stringify(errorVehicles));
      });
    }
    
  };
});