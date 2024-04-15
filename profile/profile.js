// Author: Dinesh Narasimhalu Punniyamoorthy
// Student Id: 8972738


let user = JSON.parse(localStorage.getItem(window.__storageKeys.user));
$(() => {
  let isLoggedIn = JSON.parse(localStorage.getItem(window.__storageKeys.isLoggedIn));
  console.log(isLoggedIn);
  if (isLoggedIn) {
    $("#logbtn").text("Logout");
  } else if(user) {
    localStorage.setItem(window.__storageKeys.isLoggedIn, true);
    $(location).attr("href", "/profile");
}
  else {
    $('#profile').hide();
    $('#logbtn').text('Login');
    $(location).attr("href", "/registration");
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
        user.recipes.forEach(recipe => {
            const html = `
            <div class="col-sm-12 col-md-6 col-lg-3">

            <div class="card" style="width: 18rem;">
      <img src="${recipe.imgSrc}" class="card-img-top" alt="${recipe.title}">
      <div class="card-body">
        <h5 class="card-title  text-info fw-bold fst-italic">${recipe.title}</h5>
        <p class="card-text">${recipe.ingredients}</p>
      </div>
      <div class="card-body">
        <a class="card-link  cursor text-light" onclick="goToRecipe(${recipe})">know more</a>
      </div>
    </div>
    </div>`;
    $('#my-recipes').append(html); ;
        });

    } else {
        const html = `
            <div class="d-flex justify-content-center align-items-center no-data-display"><p>No Recipes to display!</p></div>`;
        $('#my-recipes').append(html); ;
    }


    if(user.likedRecipes && user.likedRecipes.length) {
        
        user.likedRecipes.forEach(recipe => {
        const html = `
        <div class="col-sm-12 col-md-6 col-lg-3">

        <div class="card" style="width: 18rem;">
  <img src="${recipe.imgSrc}" class="card-img-top" alt="${recipe.title}">
  <div class="card-body">
    <h5 class="card-title text-info fw-bold fst-italic">${recipe.title}</h5>
    <p class="card-text">${recipe.ingredients}</p>
  </div>
  <div class="card-body">
    <a class="card-link cursor text-light" onclick="goToRecipe(${recipe.id})">know more</a>
  </div>
</div>
</div>`;
$('#liked-recipes').append(html); 
        });
    } else {
        const html = `<div class="row">
            <div class="d-flex justify-content-center align-items-center no-data-display"><p>No Liked Recipes to display!</p></div>
        </div>`;
        $('#liked-recipes').append(html); 
    }
}


function goToRecipe(recipe) {
    localStorage.setItem(window.__storageKeys.productId, recipe);
    window.location.href = "../recipe_details/index.html";
}