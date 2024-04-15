// get recipes data from window.__recipes
const recipes =  window.__recipes;
console.log(recipes);

$(() => {
  
  // function to execute when document is ready
    $(document).ready(function(){
      // bxslider plugin for image slider
        $('.bxslider').bxSlider(
            {
        mode: 'fade',
        responsive: true,
        wrapperClass: 'bx-wrapper'
        
      });
    });
    
    const recipeContainer = document.getElementById("recipeContainer");
    
    // loop for each recipe in the recipes array
    recipes.forEach(recipe => {
       
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
        
        
        const readMoreBtn = document.createElement("button");
        readMoreBtn.textContent = "Read More";
        readMoreBtn.classList.add("read-more-btn");
        readMoreBtn.addEventListener("click", function() {
           
            
        });
        recipeContent.appendChild(readMoreBtn);
    
       recipeContainer.append(recipeCard);
    });
  
   
});
function getId(productId) {
 
  sessionStorage.setItem("product_id", productId);
  window.location.href = "../recipe_details/index.html";
}
