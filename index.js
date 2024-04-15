let user = JSON.parse(localStorage.getItem(window.__storageKeys.user));
$(() => {
    let textWidth = $(".scrolling-text").width();
    let containerWidth = $(".scrolling-text").parent().width();
    let isLoggedIn = JSON.parse(localStorage.getItem(window.__storageKeys.isLoggedIn))
    // isLoggedIn = undefined ? false : true;
    console.log(isLoggedIn)
    if(isLoggedIn) {
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

    $('#logbtn').click((e) => { 
        console.log("coming here")
        if(isLoggedIn) {
        console.log("coming here")
        localStorage.setItem(window.__storageKeys.isLoggedIn , false);
        setTimeout(() => {
            window.location.reload();
        }, 5000)
        }
    });

});