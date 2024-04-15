const recipes =  window.__recipes;
console.log(recipes);

$(() => {
  
  $('#add-recipe').hide();
  let isLoggedIn = window.__storageKeys.isLoggedIn;
  console.log(isLoggedIn);
  if (isLoggedIn) {
    $('#add-recipe').show();
    $("#logbtn").text("Logout");
  } else {
    $("#logbtn").click((e) => {
      e.preventDefault();
      $(location).attr("href", "/registration");
    });
  }
    $(document).ready(function(){
        $('.bxslider').bxSlider(
            {
        mode: 'fade',
        responsive: true,
        wrapperClass: 'bx-wrapper'
        
      });
    });
    
    const recipeContainer = document.getElementById("recipeContainer");
    
    recipes.forEach(recipe => {


        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        if (recipe.imgSrc) {
            const img = document.createElement("img");
            img.src = recipe.imgSrc;
            img.classList.add("recipe-img");
            recipeCard.appendChild(img);
        }
        
        const recipeContent = document.createElement("div");
        recipeContent.classList.add("recipe-content");
        recipeCard.appendChild(recipeContent);
    
        const h2 = document.createElement("h2");
        const strongTitle = document.createElement("strong");
        strongTitle.textContent = recipe.title;  
        h2.appendChild(strongTitle);
        recipeContent.appendChild(h2);

        const pIngredients = document.createElement("p");
        pIngredients.classList.add("recipe-ingredients");
        const strongIngredientsLabel = document.createElement("strong");
        strongIngredientsLabel.textContent = "Ingredients:";
        pIngredients.appendChild(strongIngredientsLabel);
        const italicIngredients = document.createElement("i");
        italicIngredients.textContent = recipe.ingredients;
        pIngredients.appendChild(italicIngredients);
        recipeContent.appendChild(pIngredients);
    
        const pInstructions = document.createElement("p");
        pInstructions.classList.add("recipe-instructions");
        const strongInstructions = document.createElement("strong");
        strongInstructions.textContent = "Instructions:";
        pInstructions.appendChild(strongInstructions);
        pInstructions.innerHTML += " " + recipe.instructions;
        recipeContent.appendChild(pInstructions);
    
        const pcategory = document.createElement("p");
        pcategory.classList.add("recipe-category");
        const strongCategory = document.createElement("strong");
        strongCategory.textContent = "Category:";
        pcategory.appendChild(strongCategory);
        pcategory.innerHTML += " " + recipe.category;
        recipeContent.appendChild(pcategory);
    
        const porigin = document.createElement("p");
        porigin.classList.add("recipe-origin");
        const strongOrigin = document.createElement("strong");
        strongOrigin.textContent = "Origin:";
        porigin.appendChild(strongOrigin);
        porigin.innerHTML += " " + recipe.origin;
        recipeContent.appendChild(porigin);
        
        
        const readMoreBtn = document.createElement("button");
        readMoreBtn.textContent = "Read More";
        readMoreBtn.classList.add("read-more-btn");
        readMoreBtn.addEventListener("click", () => {
           getId(recipe.id);
        });
        recipeContent.appendChild(readMoreBtn);
    
       recipeContainer.append(recipeCard);
    });
  
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
});
function getId(productId) {
 
  localStorage.setItem(window.__storageKeys.productId, productId);
  window.location.href = "../recipe_details/index.html";
}

function redirectTo() {
  window.location.href = "../add_recipe/index.html";
}
