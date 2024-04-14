let user = JSON.parse(localStorage.getItem(window.__storageKeys.user));
$(() => {
  let isLoggedIn = window.__storageKeys.isLoggedIn;
  console.log(isLoggedIn);
  if (isLoggedIn) {
    $("#logbtn").text("Logout");
  } else {
    $("#logbtn").click((e) => {
      e.preventDefault();
      $(location).attr("href", "/registration");
    });
  }
  $(".banner").text(`Hey, ${user.username}`);

  $("#profile-image").css({
    "background-image": "url('/assets/chef-image.jpg')",
    'height': "180px",
    'width': "150px",
    "border-radius": "16px",
    "background-size": "cover",
    "background-position": "top",
    "box-shadow":
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  });
  $('#username').text(`${user.username}`);

  $('#recipe-count').text(`${user.recipes.length} recipes`);

  $( "#tabs" ).tabs();
});
