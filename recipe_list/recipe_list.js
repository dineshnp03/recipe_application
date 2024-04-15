// Author: Darbar, Virajsinh Maheshbhai
// Student Id: 8969625


// get recipes data from window object
const recipes = window.__recipes;
// getting user details from local storage
let user = JSON.parse(localStorage.getItem(window.__storageKeys.user));
let isLoggedIn = JSON.parse(localStorage.getItem(window.__storageKeys.isLoggedIn));

  $(() => {
  
  $("#add-recipe").hide();

  console.log(isLoggedIn);
  if (isLoggedIn && isLoggedIn != null) {
    $("#add-recipe").show();
    $("#logbtn").text("Logout");
  } else if(user) {
    localStorage.setItem(window.__storageKeys.isLoggedIn, true);
    $(location).attr("href", "/recipe_list");
}
  else {
    $('#profile').hide();
        $('#logbtn').text('Login');
        $(location).attr("href", "/registration");
        $('#logbtn').click((e) => { 
            e.preventDefault();
            $(location).attr("href", "/registration");
        }); 
  }
  
  $(document).ready(function () {
    // bxslider plugin for image slider
    $(".bxslider").bxSlider({
      mode: "fade",
      responsive: true,
      wrapperClass: "bx-wrapper",
    });
  });

  const recipeContainer = document.getElementById("recipeContainer");

  // loop for each recipe in the recipes array
  recipes.forEach((recipe) => {
    // create div element for recipe-card
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    // create img element for recipe-img
    if (recipe.imgSrc) {
      const img = document.createElement("img");
      img.src = recipe.imgSrc;
      img.classList.add("recipe-img");
      recipeCard.appendChild(img);
    }

    // create div element for recipe-content
    const recipeContent = document.createElement("div");
    recipeContent.classList.add("recipe-content");
    recipeCard.appendChild(recipeContent);

    // create h2 element for recipe-title
    const h2 = document.createElement("h2");
    const strongTitle = document.createElement("strong");
    strongTitle.textContent = recipe.title;
    h2.appendChild(strongTitle);
    recipeContent.appendChild(h2);

    // create p element for recipe-ingredients
    const pIngredients = document.createElement("p");
    pIngredients.classList.add("recipe-ingredients");
    const strongIngredientsLabel = document.createElement("strong");
    strongIngredientsLabel.textContent = "Ingredients:";
    pIngredients.appendChild(strongIngredientsLabel);
    const italicIngredients = document.createElement("i");
    italicIngredients.textContent = recipe.ingredients;
    pIngredients.appendChild(italicIngredients);
    recipeContent.appendChild(pIngredients);

    // create p element for recipe-instructions
    const pInstructions = document.createElement("p");
    pInstructions.classList.add("recipe-instructions");
    const strongInstructions = document.createElement("strong");
    strongInstructions.textContent = "Instructions:";
    pInstructions.appendChild(strongInstructions);
    pInstructions.innerHTML += " " + recipe.instructions;
    recipeContent.appendChild(pInstructions);

    // create p element for recipe-category
    const pcategory = document.createElement("p");
    pcategory.classList.add("recipe-category");
    const strongCategory = document.createElement("strong");
    strongCategory.textContent = "Category:";
    pcategory.appendChild(strongCategory);
    pcategory.innerHTML += " " + recipe.category;
    recipeContent.appendChild(pcategory);

    // create p elemet for recipe-origin
    const porigin = document.createElement("p");
    porigin.classList.add("recipe-origin");
    const strongOrigin = document.createElement("strong");
    strongOrigin.textContent = "Origin:";
    porigin.appendChild(strongOrigin);
    porigin.innerHTML += " " + recipe.origin;
    recipeContent.appendChild(porigin);
   
    const divElement = document.createElement("div");
    divElement.classList.add("d-flex", "justify-content-center", "m-3");
     //creating like button and readmore
    const likeBtn = document.createElement("button");
    likeBtn.textContent = "Like";
    likeBtn.classList.add("like-btn", "btn", "btn-warning", "me-3");
    likeBtn.addEventListener("click", () => {
      addToLikedRecipe(recipe);
      likeBtn.textContent = "Liked";
      $(".like-btn").attr("disabled", true);
    });
    divElement.appendChild(likeBtn);
    // checking if recipie is already liked.
    if (user.likedRecipes) {
      let likedOne = hasValueInUser(user.likedRecipes, recipe.id);
      console.log(likedOne);
      if (likedOne) {
        likeBtn.textContent = "Liked";
        likeBtn.setAttribute("disabled", true);
      }
    }

    const readMoreBtn = document.createElement("button");
    readMoreBtn.textContent = "Read More";
    readMoreBtn.classList.add("read-more-btn", "btn", "btn-danger", "me-3");
    // add event listener to readmore
    readMoreBtn.addEventListener("click", () => {
      getId(recipe.id);
    });
    divElement.appendChild(readMoreBtn);
    recipeContent.appendChild(divElement);

    recipeContainer.append(recipeCard);
  });

  if (isLoggedIn) {
    $(".likeBtn").show();
  } else {
    $(".likeBtn").hide();
  }

  // Logout Function
  $("#logbtn").click((e) => {
    console.log("coming here");
    if (isLoggedIn) {
      console.log("coming here");
      localStorage.setItem(window.__storageKeys.isLoggedIn, false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  });
});

//function to set productid and redirect to recipe details page.
function getId(productId) {
  localStorage.setItem(window.__storageKeys.productId, productId);
  window.location.href = "../recipe_details/index.html";
}

function redirectTo() {
  window.location.href = "../add_recipe/index.html";
}
//function to add reciepe to liked.
function addToLikedRecipe(recipe) {
  user.likedRecipes.push(recipe);
  localStorage.setItem(window.__storageKeys.user, JSON.stringify(user));
}
//function to check if recipe is liked by user
function hasValueInUser(arr, id) {
  return arr.some((obj) => obj.id === id);
}
