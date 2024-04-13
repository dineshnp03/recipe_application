$(() => {
    let isLoggedIn = window.__storageKeys.isLoggedIn;
    console.log(isLoggedIn)
    let user = JSON.parse(
        localStorage.getItem(window.__storageKeys.user)
      );
    console.log(isLoggedIn)
    if(isLoggedIn) {
        $('#logbtn').text('Logout');
    } else {
        $('#logbtn').click((e) => { 
            e.preventDefault();
            $(location).attr("href", "/registration");
        });
    }
    $(".banner").text(`Hey, ${user.username}`)
})