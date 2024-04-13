$(() => {
    let isLoggedIn = window.__storageKeys.isLoggedIn;
    console.log(isLoggedIn)
    if(isLoggedIn) {
        $('#logbtn').text('Logout');
    } else {
        $('#logbtn').click((e) => { 
            e.preventDefault();
            $(location).attr("href", "/registration");
        });
    }
})