function AS_Button_hfef38fa15bb4bcebf4a263091589bf9(eventobject) {
    var self = this;
    this.view.lstFrom.selectedKey = "From";
    this.view.lstLocation.selectedKey = "Location";
    this.view.lstMake.selectedKey = "Make";
    this.view.lstModel.selectedKey = "Model";
    this.view.lstTo.selectedKey = "to";
    this.view.lstType.selectedKey = "Type";
    this.view.txtKeyword.text = "";
    this.view.txtLot.text = "";
    this.view.txtMileageFrom.text = "";
    this.view.txtMileageTo.text = "";
    this.view.segVehicles.setData(gv_vechicleTable);
}