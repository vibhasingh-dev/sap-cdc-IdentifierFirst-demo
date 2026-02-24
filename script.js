window.onload = function () {

    const loginBtn = document.getElementById("loginBtn");

    if (!loginBtn) {
        console.error("Login button not found");
        return;
    }

    loginBtn.addEventListener("click", function () {

        console.log("Login button clicked");

        if (typeof gigya === "undefined") {
            console.error("Gigya SDK not loaded");
            alert("Gigya not loaded");
            return;
        }

        gigya.accounts.showScreenSet({
            screenSet: "dentifier-First-Login",
            startScreen: "gigya-identify-screen"
        });

    });

};
