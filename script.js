document.getElementById("loginBtn").addEventListener("click", function () {

    gigya.accounts.showScreenSet({
        screenSet: "Default-RegistrationLogin",
        startScreen: "gigya-identifier-screen",
        containerID: "cdc-container"
    });

});
