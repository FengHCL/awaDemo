define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'base64', () => {
        return this._base64;
      });
      defineSetter(this, 'base64', value => {
        this._base64 = value;
        value && (this.view.imgPicture.base64 = value);
      });
    },
    
    removeAll(){
      this.view.flxCarousel.removeAll();
      if(eventManager.subscriptions['selectCarouselItem']){
        delete eventManager.subscriptions['selectCarouselItem'];
      }
    },
    
    add({base64, selected}){
      const item = new com.hcl.demo.awa.CarouselItem({
        id: `picture${new Date().getTime()}`
      }, {}, {});
      item.selected = selected;
      item.base64 = base64;
      item.onSelect = (value) => this.base64 = value;
      this.view.flxCarousel.add(item);
    }
  };
});