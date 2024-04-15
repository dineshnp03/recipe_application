// Author: Dinesh Narasimhalu Punniyamoorthy
// Student Id: 8972738



let user = JSON.parse(localStorage.getItem(window.__storageKeys.user));

//Document Ready
$(() => {
    // Checking the user is logged in
    let isLoggedIn = JSON.parse(localStorage.getItem(window.__storageKeys.isLoggedIn))
    console.log(isLoggedIn)
    if(isLoggedIn && isLoggedIn != null) {
        $('#profile').show();
        $('#logbtn').text('Logout');
    } else {
        $('#profile').hide();
        $('#logbtn').text('Login');
        $('#logbtn').click((e) => { 
            e.preventDefault();
            $(location).attr("href", "/registration");
        });
    }



// View All functionality , if user is logged in or not , 
    $('.view-all').click((e) => {
        e.preventDefault();

        if(isLoggedIn) {
            $(location).attr("href", "/recipe_list");
        } else if(user) {
            localStorage.setItem(window.__storageKeys.isLoggedIn, true);
            $(location).attr("href", "/recipe_list");
        }
        else {
            $(location).attr("href", "/registration");
        }
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