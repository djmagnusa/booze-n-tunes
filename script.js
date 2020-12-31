$(document).ready(function () {
  var happyPlaylistIDs = [
    "37i9dQZF1DX9u7XXOp0l5L",
    "37i9dQZF1DX0UrRvztWcAU",
    "37i9dQZF1DWVOMXLzSabIM",
    "37i9dQZF1DX5YTAi6JhwZm",
    "37i9dQZF1DX1H4LbvY4OJi",
    "37i9dQZF1DWSf2RDTDayIx",
    "37i9dQZF1DX84kJlLdo9vT",
    "37i9dQZF1DWWS0ll5RduHB",
    "37i9dQZF1DWSqmBTGDYngZ",
    "37i9dQZF1DX1BzILRveYHb",
    "37i9dQZF1DWVinJBuv0P4z",
  ];
  var sadPlaylistIDs = [
    "37i9dQZF1DWVV27DiNWxkR",
    "37i9dQZF1DXbm0dp7JzNeL",
    "37i9dQZF1DWVrtsSlLKzro",
    "37i9dQZF1DX64Y3du11rR1",
    "37i9dQZF1DX7gIoKXt0gmx",
    "37i9dQZF1DX3YSRoSdA634",
    "37i9dQZF1DWUNIrSzKgQbP",
    "37i9dQZF1DWYxwmBaMqxsl",
    "37i9dQZF1DWTtTyjgd08yp",
    "37i9dQZF1DWX83CujKHHOn",
    "37i9dQZF1DWSqBruwoIXkA",
  ];
  var angryPlaylistIDs = ["6ZiBt4CBkFV3INclWxn8Z0", "15Glcc8LdAloMFFfbODCl7"];
  var excitedPlaylistIDs = [
    "37i9dQZF1DX6GwdWRQMQpq",
    "37i9dQZF1DX4fpCWaHOned",
    "37i9dQZF1DWYBO1MoTDhZI",
    "37i9dQZF1DX2SlyIbbHgFa",
  ];
  var chillPlaylistIDs = [
    "37i9dQZF1DX2yvmlOdMYzV",
    "37i9dQZF1DWUE76cNNotSg",
    "37i9dQZF1DWYiR2Uqcon0X",
    "37i9dQZF1DXa3NnZWk6Z3T",
    "37i9dQZF1DWYzpSJHStHHx",
    "37i9dQZF1DWYMroOc5KTTh",
    "37i9dQZF1DXcNb6Ba0LuVc",
    "37i9dQZF1DX1tW4VlEfDSS",
    "37i9dQZF1DWWQRwui0ExPn",
    "0vvXsWCC9xrXsKd4FyS8kM",
  ];

  var giphyAPIKey = "enKBHKanFHkoiz7Nc7Yu1UeJWgpX2seY";

  

  $("#btn-search").on("click", function () {
    var queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&limit=1&q=cheese`;
    $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  });
});
