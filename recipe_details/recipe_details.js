$(document).ready(function(){
    fetchJSDataGET();
});

function fetchJSDataGET() {
    fetch("../constants.js")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.text(); 
        })
        .then((jsCode) => {
            // Evaluate the fetched JavaScript code
            eval(jsCode);
            productsArray = window.__recipes;
            let count = productsArray.length;
            changeItem(productsArray, count);
        })
        .catch((error) => {
            console.error("Unable to fetch data:", error);
        });
}

function changeItem(productsArray, count) {
    let prd_id = sessionStorage.getItem("product_id");
    for (let i = 0; i < count; i++) {
        if (i == prd_id) {
            let product = productsArray[i];
            let images = product.images;
            let slider = $('.bxslider');
            images.forEach(image => {
                slider.append('<li><img src="' + image + '" class="d-block w-100" alt="recipe-img"></li>');
            });
            slider.bxSlider({
                auto: true,
                autoControls: true,
                stopAutoOnClick: true,
                pager: true,
                slideWidth: 600,
                pause: 3000 
            });
            // Display recipe details
            $('.recipe-title').text(product.title);
            let ingredients = product.ingredients.split(',');
            let ingredientsHTML = ingredients.map(ingredient => '<li>' + ingredient.trim() + '</li>').join('');
            $('.recipe-ingredients').html('<ul>' + ingredientsHTML + '</ul>');
            let instructions = product.instructions.split('.');
            let instructionsHTML = instructions.map(instruction => '<li>' + instruction.trim() + '.</li>').join('');
            $('.recipe-instructions').html('<ul>' + instructionsHTML + '</ul>');
        }
    }
}
