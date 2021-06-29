import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./Main.css"
import Main__title_top from "./Main__title/Main__ttitle_top/Main__title_top"
import Main__title_item from "./Main__title/Main__title_item/Main__title_item"
import Categories from "./Main__scroll/Categories/Categories"
import PopularPost from "./Main__scroll/PopularPost/PopularPost"
import useFetch from "../fetch"
// const titles2 = titles
// titles2.shift()

// titles.map(title => console.log(title.url))
Main.propTypes = {}

function Main(props) {
  // const [titleList1, settitleList] = useState({
  //   title: "Getting Started With TypeScript",
  //   description:
  //     "inventore debitis doloremque harum facilis dolorem ut quia sunt cupiditate exercitationem dolorum quos illum omnis iusto eaque corrupti facere aut assumenda aut accusamus ut quaerat enim quibusdam ipsam eum aperiam sint corrupti aspernatur facilis cupiditate dolorem suscipit provident aut unde aliquam laudantium minima expedita voluptatem et neque recusandae velit numquam",
  //   body: "Loẻdsssss\n sdldsldsl",
  //   author: "",
  //   date: "10 Feb 2021",
  //   url: "https://picsum.photos/id/249/1368/400",
  //   id: 1
  // })
  // console.log(titleList1.body)
  const { data: titleList, pending, error } = useFetch(
    "http://localhost:8000/posts"
  )
  // const [titleList, setTitleList] = useState([])
  // setTitleList(data)
  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="main__wrap">
            <div className="main__title">
              {titleList && (
                <Main__title_top
                  title__top_item={titleList[0]}
                ></Main__title_top>
              )}
              {titleList &&
                titleList.map(title => (
                  <Main__title_item
                    title__item={title}
                    key={title.id}
                  ></Main__title_item>
                ))}
            </div>
            <div className="main__scroll">
              {titleList && (
                <Categories categoriesList={titleList}></Categories>
              )}
              <PopularPost></PopularPost>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
