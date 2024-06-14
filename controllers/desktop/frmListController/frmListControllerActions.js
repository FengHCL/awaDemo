define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onMapping defined for frmList **/
    AS_Form_gc1bfb3b96714cd1a04419439009ddd2: function AS_Form_gc1bfb3b96714cd1a04419439009ddd2(eventobject) {
        var self = this;

        function INVOKE_SERVICE_a62cec9aac6944af84636786aa9f7c8e_Callback(vehicle) {
            voltmx.application.dismissLoadingScreen();
            var tempCollection3960 = [];
            var tempData7432 = vehicle.records;
            for (var each4379 in tempData7432) {
                tempCollection3960.push({
                    "lblVehicleName": {
                        "text": tempData7432[each4379]["vehicleName"]
                    },
                    "lblMileage": {
                        "text": voltmx.visualizer.toString(tempData7432[each4379]["millage"])
                    },
                    "lblValue": {
                        "text": voltmx.visualizer.toString(tempData7432[each4379]["value"])
                    },
                    "lblID": {
                        "text": tempData7432[each4379]["vehicleID"]
                    },
                    "lblBids": {
                        "text": voltmx.visualizer.toString(tempData7432[each4379]["bids"])
                    },
                });
            }
            self.view.segVehicles.setData(tempCollection3960);
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
        awaObject$vehicle$get = mfobjectsecureinvokerasync(vehicle_inputparam, "awaObject", "vehicle", INVOKE_SERVICE_a62cec9aac6944af84636786aa9f7c8e_Callback);
    }
});