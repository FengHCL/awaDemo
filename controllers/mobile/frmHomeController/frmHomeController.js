define({ 

  cars: [],
  pics: [], 

    onViewCreated(){
    this.view.init = () => {
      //this.view.SimpleHeader.onClickRight = () => this.view.menu.toggle(true);
    };

    this.view.preShow = () => {
      //voltmx.application.showLoadingScreen(null, 'Loading data...', constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, {});
    this.view.SimpleHeader.onClickLeft = () => this.view.HamburgerMenu.toggle(true); 
    this.initData(); 
    };
  },
  
  initData(){
    const objSvc = VMXFoundry.getObjectService('awaObject', {access: 'online'});
    const vehicleObj = new voltmx.sdk.dto.DataObject("vehicle");
    objSvc.fetch({dataObject: vehicleObj}, (responsevehicles) => {
      this.cars = [...responsevehicles.records];
      const picObj = new voltmx.sdk.dto.DataObject("vehiclepics");
      objSvc.fetch({dataObject: picObj}, (responsePics) => {
             this.pics = [...responsePics.records];
            this.initWidgets();
      }, (errorPics) => {
        voltmx.application.dismissLoadingScreen();
        alert(JSON.stringify(errorPics));
      });
    }, (errorVehicles) => {
      voltmx.application.dismissLoadingScreen();
      alert(JSON.stringify(errorVehicles));
    });
  },

  initWidgets(){
    this.view.flxCars.removeAll();
    this.cars.forEach((car, index) => {
      const auctionItem = new com.hcl.demo.awa.AuctionItem({
        id: `item${new Date().getTime()}`
      }, {}, {});
      auctionItem.imageBase64 = this.pics[index].pic;
      auctionItem.lblVehicleName = car.vehicleName;
      auctionItem.lblValue = formatValue(car.value.toString());
      auctionItem.lblBids = car.bids;
      auctionItem.lblMileage = car.millage;
      auctionItem.lblUID = car.vehicleID;

      //auctionItem.onClickTeaser = () => new voltmx.mvc.Navigation('frmDetail').navigate(car.number);
      this.view.flxCars.add(auctionItem);
    });
    this.view.flxCars.forceLayout();
  }

});