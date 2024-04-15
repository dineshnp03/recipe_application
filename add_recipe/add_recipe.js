// Author: Venkat Lavu
// Student Id: 8968788


$(document).ready(function() {

    // Loggin error check
    let data=window.__recipes
    console.log(data)
    let isLoggedIn = JSON.parse(localStorage.getItem(window.__storageKeys.isLoggedIn));
    console.log(isLoggedIn);
    if (isLoggedIn) {
      $("#logbtn").text("Logout");
    } else {
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


    // Textarea auto-resize
    $('textarea').each(function() {
      this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
  
    // Form submission
    $('#submit').click(function(event) {
      //event.Default(); // Prevent form submission
      // Get form data
      var recipeName = $('#recipe_name').val();
      var ingredients = $('#Ingredients').val();
      var instructions = $('#Instructions').val();
      var category = $('select[aria-label="category"]').val();
      var origin = $('select[aria-label="origins"]').val();
  
      // Perform form validation
      if (recipeName && ingredients && instructions && category && origin) {
        let newRecipe = {
            title: recipeName,
            ingredients: ingredients,
            instructions: instructions,
            category: category,
            origin: origin,
            imgSrc: "/assets/mexican.jpg"
        };

        // Push new recipe to data array
        addRecipe(data, newRecipe);

        // Update window.__recipes with the modified data
        window.__recipes = data;

        // Log updated data
        console.log('Updated Recipes Data:', window.__recipes);

        // Toaster Data
        const html = `<div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="submit" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
           
            <strong class="me-auto">Submitted</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            ${newRecipe.title} is Submitted.
          </div>
        </div>
      </div>`;
        $('.toaster').append(html);
        $("form").reset();
    } 

});

});

// Add Recipe Functionality
function addRecipe(recipes, newRecipe) {
    // Assign a new unique ID based on the current array length
    newRecipe.id = recipes.length + 1;
  
    // Add the new recipe to the end of the array
    recipes.push(newRecipe);
    user.recipes.push(newRecipe);
    localStorage.setItem(window.__storageKeys.recipes, JSON.stringify(recipes));
    localStorage.setItem(window.__storageKeys.user, user);
  
    console.log("Recipe added successfully with ID:", newRecipe.id);
  }

