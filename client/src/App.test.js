import { render, screen } from "@testing-library/react"
import App from "./App"
var a = document.querySelectorAll("a")
a.forEach(function (item) {
  console.log(item)
  item.addEventListener("click", function () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  })
})
test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
