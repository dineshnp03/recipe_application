const recipes =  window.__recipes;
console.log(recipes);

$(() => {
  
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
        h2.textContent = recipe.title;
        recipeContent.appendChild(h2);
    
        const pIngredients = document.createElement("p");
        pIngredients.classList.add("recipe-ingredients");
        pIngredients.textContent = "Ingredients: " + recipe.ingredients;
        recipeContent.appendChild(pIngredients);
    
        const pInstructions = document.createElement("p");
        pInstructions.classList.add("recipe-instructions");
        pInstructions.textContent = "Instructions: " + recipe.instructions;
        recipeContent.appendChild(pInstructions);
    
        const pcategory = document.createElement("p");
        pcategory.classList.add("recipe-category");
        pcategory.textContent = "Category: " + recipe.category;
        recipeContent.appendChild(pcategory);
    
        const porigin = document.createElement("p");
        porigin.classList.add("recipe-origin");
        porigin.textContent = "Origin: " + recipe.origin;
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
