// Author: Dinesh Narasimhalu Punniyamoorthy
// Student Id: 8972738


let user = JSON.parse(localStorage.getItem(window.__storageKeys.user));
$(() => {
  let isLoggedIn = window.__storageKeys.isLoggedIn;
  console.log(isLoggedIn);
  if (isLoggedIn) {
    $("#logbtn").text("Logout");
  } else {
    $("#logbtn").click((e) => {
      e.preventDefault();
      $(location).attr("href", "/registration");
    });
  }

      // Logout FUnctionality
      $('#logbtn').click((e) => { 
        console.log("coming here")
        if(isLoggedIn) {
        console.log("coming here")
        localStorage.setItem(window.__storageKeys.isLoggedIn , false);
        setTimeout(() => {
            window.location.reload();
        }, 1000)
        }
    });
  $(".banner").text(`Hey, ${user.username}`);

  $("#profile-image").css({
    "background-image": "url('/assets/chef-image.jpg')",
    'height': "180px",
    'width': "150px",
    "border-radius": "16px",
    "background-size": "cover",
    "background-position": "top",
    "box-shadow":
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  });
  $('#username').text(`${user.username}`);

  $('#recipe-count').text(`${user.recipes.length} recipes`);

  $( "#tabs" ).tabs();

  getTabdata();

});

function getTabdata() {  
    if(user.recipes && user.recipes.length ) {
    } else {
        const html = `<div class="row">
            <div class="d-flex justify-content-center align-items-center no-data-display"><p>No Recipes to display!</p></div>
        </div>`;
        $('#my-recipes').append(html); ;
    }


    if(user.likedRecipes && user.likedRecipes.length) {

    } else {
        const html = `<div class="row">
            <div class="d-flex justify-content-center align-items-center no-data-display"><p>No Liked Recipes to display!</p></div>
        </div>`;
        $('#liked-recipes').append(html); ;
    }
}
