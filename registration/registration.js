 
 
 let loginFlag = false;

// Document Ready
$(()=> {
        $(".signupTitle").text(`Sign Up`);
        $("#user-login-form").hide();
       
      // On modal swap adding the event listeners
        function resetListeners() {
      
      // Function to reset the page if the user is new/old
          $(".loginBtn").click((e) => {
            e.preventDefault();
            loginFlag = !loginFlag;
            loginPageSwap();
          });
      
      // Registration event trigger
          $("#register").click((e) => {
            e.preventDefault();
            validateRegistration();
          });
      
      // Login Event Trigger
          $("#login").click((e) => {
            e.preventDefault();
            validateLogin();
          });
      
      // logout user trigger
          $("#logout").click((e) => {
            e.preventDefault();
            localStorage.setItem(window.__storageKeys.isLoggedIn , false);
            $(location).attr("href", "/");
          });
        }

          // Display Login and Registration page
  const loginPageSwap = () => {
    if (loginFlag) {
      $(".signupTitle").text(`Login`);
      // loginFlag = true;
      $("#user-login-form").show();
      $("#user-registration-form").hide();
      $("#already").html(`New User? <a class="loginBtn">Create an Account</a>`);
    } else {
      $(".signupTitle").text(`Sign Up`);
      // loginFlag = true;
      $("#user-login-form").hide();
      $("#user-registration-form").show();
      $("#already").html(
        `Already have an account? <a class="loginBtn">Log In</a>`
      );
    }
    resetListeners();
  };
  resetListeners();
});