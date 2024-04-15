$(document).ready(function () {
    
    let slider = $('.bxslider');

    slider.bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 600,
        pause: 3000
    });

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
;
    let prd_id = sessionStorage.getItem("product_id")

    for (let i = 0; i < count; i++) {
        if (i == prd_id) {
            let product = productsArray[i]

            $('#recipe_name').text(product.title);

            let ingredients = product.ingredients.split(',');
            let ingredientsHTML = ingredients.map(ingredient => '<li>' + ingredient.trim() + '</li>').join('');
            $('.recipe-ingredients').html('<ul>' + ingredientsHTML + '</ul>');
            let instructions = product.instructions.split('.');
            let instructionsHTML = instructions.map(instruction => '<li>' + instruction.trim() + '.</li>').join('');
            $('.recipe-instructions').html('<ul>' + instructionsHTML + '</ul>');
        }
    }
}
