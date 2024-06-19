let mainImage = document.querySelector(".main-pic");


let thumbnails = document.querySelectorAll(".pic");
console.log(thumbnails)



  thumbnails[0].addEventListener("mouseenter", function() {
    mainImage.setAttribute("src", thumbnails[0].getAttribute("src"));
  })
  
  thumbnails[1].addEventListener("mouseenter", function() {
    mainImage.setAttribute("src", thumbnails[1].getAttribute("src"));
  })

  thumbnails[2].addEventListener("mouseenter", function() {
    mainImage.setAttribute("src", thumbnails[2].getAttribute("src"));
  })
  thumbnails[3].addEventListener("mouseenter", function() {
    mainImage.setAttribute("src", thumbnails[3].getAttribute("src"));
  })
  thumbnails[4].addEventListener("mouseenter", function() {
    mainImage.setAttribute("src", thumbnails[4].getAttribute("src"));
  })