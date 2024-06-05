define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      const itemId = baseConfig.id;
      
      this.view.onClick = () => {
        eventManager.publish('selectCarouselItem', {id: itemId});
        this.onSelect(this.base64);
      };

      eventManager.subscribe('selectCarouselItem', ({id}) => {
        this.selected = id === itemId;
      });
    },

    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'base64', () => {
        return this._base64;
      });
      defineSetter(this, 'base64', value => {
        this._base64 = value;
        value && (this.view.imgCarouselItem.base64 = value);
      });
      defineGetter(this, 'selected', () => {
        return this._selected;
      });
      defineSetter(this, 'selected', value => {
        this._selected = value;
        this.view && (this.view.skin = value ? 'flxSelected' : 'slFbox');
      });
    },

    onSelect(){}
  };
});