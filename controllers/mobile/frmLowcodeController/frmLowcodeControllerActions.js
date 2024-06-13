define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnLogin **/
    AS_Button_i8038d5fefdf429695a2f6b0ea413808: function AS_Button_i8038d5fefdf429695a2f6b0ea413808(eventobject) {
        var self = this;

        function SHOW_ALERT_ff379a7851f04676a563f493e8ffc0ee_True() {}

        function INVOKE_IDENTITY_SERVICE_c93aa2a300fe439cb1f0f35e09d78ea1_Success(response) {
            voltmx.application.dismissLoadingScreen();

            function SHOW_ALERT_cc7f76ccf45143a18e076b0f49e626cf_Callback() {
                SHOW_ALERT_cc7f76ccf45143a18e076b0f49e626cf_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "You have successfully logged in.",
                "alertHandler": SHOW_ALERT_cc7f76ccf45143a18e076b0f49e626cf_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }

        function INVOKE_IDENTITY_SERVICE_c93aa2a300fe439cb1f0f35e09d78ea1_Failure(error) {
            voltmx.application.dismissLoadingScreen();

            function SHOW_ALERT_ff379a7851f04676a563f493e8ffc0ee_Callback() {
                SHOW_ALERT_ff379a7851f04676a563f493e8ffc0ee_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Login failed. Please try again.",
                "alertHandler": SHOW_ALERT_ff379a7851f04676a563f493e8ffc0ee_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }

        function SHOW_ALERT_cc7f76ccf45143a18e076b0f49e626cf_True() {}
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        var uname = request.POST['username'];
        var passwd = request.POST['password'];
        var sql = "SELECT id FROM users WHERE username=’" + uname + "’ AND password=’" + passwd + "’";
        database.execute(sql);
        if (login_inputparam == undefined) {
            var login_inputparam = {};
        }
        login_inputparam["serviceID"] = "userRepoIdentity$login";
        login_inputparam["operation"] = "login";
        userRepoIdentity$login = mfidentityserviceinvoker("userRepoIdentity", login_inputparam, INVOKE_IDENTITY_SERVICE_c93aa2a300fe439cb1f0f35e09d78ea1_Success, INVOKE_IDENTITY_SERVICE_c93aa2a300fe439cb1f0f35e09d78ea1_Failure);
    }
});