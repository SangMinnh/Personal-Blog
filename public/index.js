var a = document.querySelectorAll("a")
a.forEach(function (item) {
  console.log(item)
  item.addEventListener("click", function () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  })
})
