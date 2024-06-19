
let mainImage = document.querySelector(".main-pic");


let thumbnails = document.querySelectorAll(".pic");


for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("mouseenter", function() {
    mainImage.setAttribute("src", thumbnails[i].getAttribute("src"));
  });
}
