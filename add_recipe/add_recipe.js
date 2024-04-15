
    //console.log(window.__recipes);
$(document).ready(function() {

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
            origin: origin
        };

        // Push new recipe to data array
        data.push(newRecipe);

        // Update window.__recipes with the modified data
        window.__recipes = data;

        // Log updated data
        console.log('Updated Recipes Data:', window.__recipes);
        // Reset form
     //   $('form')[0].reset();
    } /*else {
        alert('Please fill in all fields.');
    }*/
});

});

/*$(document).ready(function() {
    let data = window.__recipes || []; // Initialize data or get existing data if available
    console.log(data);

    // Textarea auto-resize
    $('textarea').each(function() {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    // Form submission
    $('form').submit(function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        var recipeName = $('#Recipe_name').val(); // Changed from 'Recipe name' to 'Recipe_name'
        var ingredients = $('#Ingredients').val();
        var instructions = $('#Instructions').val();
        var category = $('select[aria-label="category"]').val();
        var origin = $('select[aria-label="origins"]').val();

        // Perform form validation
        if (recipeName && ingredients && instructions && category && origin) {
            let newRecipe = {
                recipeName: recipeName,
                ingredients: ingredients,
                instructions: instructions,
                category: category,
                origin: origin
            };

            // Push new recipe to data array
            data.push(newRecipe);

            // Update window.__recipes with the modified data
            window.__recipes = data;

            // Log updated data
            console.log('Updated Recipes Data:', window.__recipes);

            // Reset form
            $('form')[0].reset();
        } //else {
            //alert('Please fill in all fields.');
        //}
   });
});
*/