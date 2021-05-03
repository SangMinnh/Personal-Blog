var a = document.querySelectorAll("a")
a.forEach(function (item) {
  item.addEventListener("click", function () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  })
})

window.onscroll = function () {
  myFunction()
}

var navbar = document.getElementById("mainNav")

var h = document.querySelector("body")

console.log(h.offsetHeight)
function myFunction() {
  if (window.pageYOffset < h.offsetHeight - 300 - 800) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed")
  }
}
