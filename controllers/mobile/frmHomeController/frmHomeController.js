define({ 

  cars: [],

  onViewCreated(){
    this.view.init = () => {
      this.view.SimpleHeader.onClickLeft = () => this.view.HamburgerMenu.toggle(true); 
      this.view.SimpleHeader.onClickRight = () => this.view.Filters.isVisible = true;
    };

    this.view.preShow = () => {
      this.initData(); 
    };
  },

  initData(){
    this.view.flxCars.removeAll();

    voltmx.application.showLoadingScreen(null, '', constants.LOADING_SCREEN_POSITION_FULL_SCREEN, 
                                         true, true, {});

    const objSvc = VMXFoundry.getObjectService('awaObject', {access: 'online'});
    const vehicleObj = new voltmx.sdk.dto.DataObject("vehicle");
    objSvc.fetch({dataObject: vehicleObj}, (responsevehicles) => {
      globals.cars = [...responsevehicles.records];
      const picObj = new voltmx.sdk.dto.DataObject("vehiclepics");
      objSvc.fetch({dataObject: picObj}, (responsePics) => {
        globals.pics = [...responsePics.records];
        this.initWidgets();
        voltmx.application.dismissLoadingScreen();
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
    globals.cars.forEach((car, index) => {
      const auctionItem = new com.hcl.demo.awa.AuctionItem({
        id: `item${index}${new Date().getTime()}`
      }, {}, {});
      const vehicleName = car.vehicleName;
      const value = formatValue(car.value.toString());
      const bids = car.bids;
      const mileage = car.mileage;
      const uid = car.vehicleID;
      const imageBase64 = globals.getPicsForCar(uid)[0].pic;//globals.pics[index].pic;

      auctionItem.imageBase64 = imageBase64;
      auctionItem.vehicleName = vehicleName;
      auctionItem.value = value;
      auctionItem.bids = bids;
      auctionItem.mileage = mileage;
      auctionItem.uid = uid;

      auctionItem.onClickCar = () => new voltmx.mvc.Navigation('frmDetails').navigate({
        uid
      });
      this.view.flxCars.add(auctionItem);
    });
    this.view.flxCars.forceLayout();
  }

});