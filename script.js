window.onload = function () {

    document.getElementById("loginBtn").addEventListener("click", function () {

        gigya.accounts.showScreenSet({
            screenSet: "Default-RegistrationLogin",
            startScreen: "gigya-login-screen",
           
        });

    });

};
