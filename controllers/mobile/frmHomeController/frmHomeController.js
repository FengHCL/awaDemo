define({ 

  cars: [],
  pics: [], 

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
        id: `item${index}${new Date().getTime()}`
      }, {}, {});
      auctionItem.imageBase64 = this.pics[index].pic;
      auctionItem.vehicleName = car.vehicleName;
      auctionItem.value = formatValue(car.value.toString());
      auctionItem.bids = car.bids;
      auctionItem.mileage = car.millage;
      auctionItem.uid = car.vehicleID;

      auctionItem.onClickCar = () => new voltmx.mvc.Navigation('frmDetails').navigate(car.vehicleID);
      this.view.flxCars.add(auctionItem);
    });
    this.view.flxCars.forceLayout();
  }

});