 // Author: Dinesh Narasimhalu Punniyamoorthy
// Student Id: 8972738


 
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



        
//  Registration validation function
  function validateRegistration() {
    let isValid = true;
    // Validating the user name field
    const name = $("#username").val().trim();
    if (name == "") {
      $("#username").next().text("This field is required.");
      isValid = false;
    } else {
      $("#username").next().text("\u2705");
    }
    $("#name").val(name);
    // validate the email entry with a regular expression
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const email = $("#email").val().trim();
    if (email == "") {
      $("#email").next().text("This field is required.");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      $("#email").next().text("Must be a valid email address.");
      isValid = false;
    } else {
      $("#email").next().text("\u2705");
    }
    $("#email").val(email);
    // validate the password entry
    const password = $("#password").val().trim();
    const passwordPattern = {
      charLength: /^.{6,}$/,
      charCharNumeric: /\d/,
      charCharUpper: /.*[A-Z].*/,
      charCharLower: /.*[a-z].*/,
      charCharSymbol: /[*@!#%&()^~{}]+/,
    };
    if (!passwordPattern.charLength.test(password)) {
      $("#password").next().text("Must be 6 or more characters.");
      isValid = false;
    } else if (!passwordPattern.charCharLower.test(password)) {
      $("#password").next().text("Must contain 1 lowercase character.");
      isValid = false;
    } else if (!passwordPattern.charCharNumeric.test(password)) {
      $("#password").next().text("Must contain 1 numeric character.");
      isValid = false;
    } else if (!passwordPattern.charCharSymbol.test(password)) {
      $("#password")
        .next()
        .text("Must contain 1 special character(*@!#%&()^~{}).");
      isValid = false;
    } else if (!passwordPattern.charCharUpper.test(password)) {
      $("#password").next().text("Must contain 1 uppercase character.");
      isValid = false;
    } else {
      $("#password").next().text("\u2705");
    }
    $("#password").val(password);
    // validate the verify password entry (not shown here)
    if ($("#verifyPassword").val() !== "") {
      const verifyPassword = $("#verifyPassword").val().trim();
      if (password !== verifyPassword) {
        $("#verifyPassword").next().text("Password does not match");
        isValid = false;
      } else {
        $("#verifyPassword").next().text("\u2705");
        $("#verifyPassword").val(verifyPassword);
      }
    } else {
      $("#verifyPassword").next().text("This field is required");
      isValid = false;
    }

    //if registration is valid, redirect to login
    if (isValid) {
      loginFlag = true;
      const user = {
        username: name,
        email: email,
        password: password,
        recipes: [],
        likedRecipes: []
      };
      localStorage.setItem(window.__storageKeys.user, JSON.stringify(user));
      $("#user-login-form").show();
      $("#user-registration-form").hide();
      $("#already").html(`New User? <a class="loginBtn cursor">Create an Account</a>`);
      $(".signupTitle").text(`Login`);
    } else {
      $('input + span').css("display", "inline");
    }
  }


  // Login Validation Function
  function validateLogin() {
    let isValid = true;
    const email = $("#loginEmail").val().trim();
    const password = $("#loginPassword").val().trim();
    const user = JSON.parse(
      localStorage.getItem(window.__storageKeys.user)
    );
    if (email == "") {
      $("#loginEmail").next().text("This field is required.");
      isValid = false;
    }
    $("#loginEmail").val(email);
    if (password == "") {
      $("#loginPassword").next().text("This field is required.");
      isValid = false;
    }
    $("#loginPassword").val(password);
    if (isValid) {
      if (user.email === email && user.password === password) {
        localStorage.setItem(window.__storageKeys.isLoggedIn , true);
        $(location).attr("href", "/");
      }
    }
  };



          // Display Login and Registration page
  const loginPageSwap = () => {
    if (loginFlag) {
      $(".signupTitle").text(`Login`);
      // loginFlag = true;
      $("#user-login-form").show();
      $("#user-registration-form").hide();
      $("#already").html(`New User? <a class="loginBtn cursor">Create an Account</a>`);
    } else {
      $(".signupTitle").text(`Sign Up`);
      // loginFlag = true;
      $("#user-login-form").hide();
      $("#user-registration-form").show();
      $("#already").html(
        `Already have an account? <a class="loginBtn cursor">Log In</a>`
      );
    }
    resetListeners();
  };
  resetListeners();
});

