var fs = require("fs");
var https = require("https");

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great!</h1>", error => {
  if (error) {
    return console.log(error);
  } else {
    return console.log("success!");
  }
});

const PhotoLocation =
  "https://avatars0.githubusercontent.com/u/33432628?s=400&u=8b7cd4c8cf4b5fbf25d3e12da708cdd6cf78d311&v=4";

https.get(PhotoLocation, response => {
  response.pipe(fs.createWriteStream(__dirname + "/myphoto.jpg"));
});

