$(document).ready(function () {
    let isLoggedIn = JSON.parse(localStorage.getItem(window.__storageKeys.isLoggedIn));
    let user = JSON.parse(localStorage.getItem(window.__storageKeys.user));
    console.log(isLoggedIn);
    if (isLoggedIn) {
        
        $('#profile').show();
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

    // to get if id of slider
    let slider = $('.bxslider');

    //to display different images every 3 seconds
    slider.bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 600,
        pause: 3000
    });
    // Logout FUnctionality
    $('#logbtn').click((e) => {
        console.log("coming here")
        if (isLoggedIn) {
            console.log("coming here")
            localStorage.setItem(window.__storageKeys.isLoggedIn, false);
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        }
    });

    //fetch data from constants.js file
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

            //store data in array
            productsArray = window.__recipes;

            //count length of the array
            let count = productsArray.length;

            //call changeitem function
            changeItem(productsArray, count);
        })
        .catch((error) => {
            console.error("Unable to fetch data:", error);
        });
}

function changeItem(productsArray, count) {
    ;

    //to get data from local storage
    let prd_id = localStorage.getItem(window.__storageKeys.productId)

    for (let i = 1; i <= count; i++) {

        if (i == prd_id) {
            let product = productsArray.find((e) => e.id == prd_id);
            // set the title
            $('#recipe_name').text(product.title);
            //split the ingridients by , and display it in new row in list 
            let ingredients = product.ingredients.split(',');
            let ingredientsHTML = ingredients.map(ingredient => '<li>' + ingredient.trim() + '</li>').join('');
            $('.recipe-ingredients').html('<ul>' + ingredientsHTML + '</ul>');

            //split the instructions by . and display it in new row in list
            let instructions = product.instructions.split('.');
            let instructionsHTML = instructions.map(instruction => '<li>' + instruction.trim() + '.</li>').join('');
            $('.recipe-instructions').html('<ul>' + instructionsHTML + '</ul>');
        }
    }
}
