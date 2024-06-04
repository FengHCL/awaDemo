define({ 

  onMapping: function() {
    var self = this;

    function INVOKE_SERVICE_Callback(vehicle) {
      voltmx.application.dismissLoadingScreen();
      if (vehicle.opstatus === 0){
        var tempCollection2501 = [];
        var tempData8413 = vehicle.records;
        for (var each5304 in tempData8413) {
          var mileageText = voltmx.i18n.getLocalizedString("msgMileage") + " " + voltmx.visualizer.toString(tempData8413[each5304]["millage"]) + " " + voltmx.i18n.getLocalizedString("msgKM");
          tempCollection2501.push({
            "lblVehicleName": {
              "text": tempData8413[each5304]["vehicleName"]
            },
            "lblMileage": {
              "text": mileageText
            },
            "lblValue": {
              "text": voltmx.visualizer.toString(tempData8413[each5304]["value"])
            },
            "lblID": {
              "text": tempData8413[each5304]["vehicleID"]
            },
            "lblBids": {
              "text": voltmx.visualizer.toString(tempData8413[each5304]["bids"])
            },
          });
        }
        self.view.segVehicles.setData(tempCollection2501);
      } else {
        alert(voltmx.i18n.getLocalizedString("msgErrorVehicles"));
      }
    }
    voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
    if (vehicle_inputparam == undefined) {
        var vehicle_inputparam = {};
    }
    vehicle_inputparam["serviceID"] = "awaObject$vehicle$get";
    vehicle_inputparam["options"] = {
      "access": "online",
      "CRUD_TYPE": "get"
    };
    var vehicle_httpheaders = {};
    vehicle_inputparam["httpheaders"] = vehicle_httpheaders;
    var vehicle_httpconfigs = {};
    vehicle_inputparam["httpconfig"] = vehicle_httpconfigs;
    awaObject$vehicle$get = mfobjectsecureinvokerasync(vehicle_inputparam, "awaObject", "vehicle", INVOKE_SERVICE_Callback);
  }

 });