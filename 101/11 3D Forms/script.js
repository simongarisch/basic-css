const signUpBtn = document.querySelector(".signup-btn");
const signInBtn = document.querySelector(".signin-btn");
const formsWrapper = document.querySelector(".forms-wrapper");


signUpBtn.addEventListener("click", (e) => {
    console.log("signup-btn clicked");
    e.preventDefault();
    formsWrapper.classList.add("change");
});

signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formsWrapper.classList.revote("change");
});
