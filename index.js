$(() => {
    let isLoggedIn = window.__storageKeys.isLoggedIn;
    isLoggedIn = isLoggedIn == undefined ? false : true;
    console.log(isLoggedIn)
    if(isLoggedIn) {
        $('#profile').show();
        $('#logbtn').text('Logout');
    } else {
        $('#profile').hide();
        $('#logbtn').click((e) => { 
            e.preventDefault();
            $(location).attr("href", "/registration");
        });
    }

    $('.view-all').click((e) => {
        e.preventDefault();

        if(isLoggedIn) {
            $(location).attr("href", "/recipe_list")
        } else {
            $(location).attr("href", "/registration");
        }
    })

    $('#logbtn').click( (e) => { 
        e.preventDefault();
        if(isLoggedIn) {
        localStorage.setItem(window.__storageKeys.isLoggedIn , false);
        window.location.reload();
        } 
    });
})