$(() => {

  $('#b1').on('click', onClick);

});

const onClick = function (event) {
  console.log('click');

  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((res) => {
    console.log(res);
    for (user of res.users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;


  $('#div1').text("123");
};