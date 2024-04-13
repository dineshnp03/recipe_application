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
})