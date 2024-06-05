define({ 

  onViewCreated(){
    this.view.init = () => {
      this.view.cmpSimpleHeader.onClickLeft = () => this.view.cmpHamburgerMenu.toggle(true); 
      this.view.cmpHamburgerMenu.onItemSelected = (item) => {
        if(item === 'onlineAuction'){
          new voltmx.mvc.Navigation('frmHome').navigate();
        }
      };
    };
    
    this.view.preShow = () => {
      const uid = this.navigationContext.uid;
      const car = globals.getCarById(uid);
      this.view.cmpSimpleHeader.title = car.vehicleName;
      const pics = globals.getPicsForCar(uid);
      this.view.cmpCarousel.base64 = pics[0].pic;
      this.view.cmpCarousel.removeAll();
      pics.forEach((pic, index) => this.view.cmpCarousel.add({
        selected: index === 0,
        base64: pic.pic
      }));
    };
  }
});