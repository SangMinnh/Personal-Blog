import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./Main.css"
import Main__title_top from "./Main__title/Main__ttitle_top/Main__title_top"
import Main__title_item from "./Main__title/Main__title_item/Main__title_item"
import Categories from "./Main__scroll/Categories/Categories"
import PopularPost from "./Main__scroll/PopularPost/PopularPost"

// const titles2 = titles
// titles2.shift()

// titles.map(title => console.log(title.url))
Main.propTypes = {}

function Main(props) {
  // const  = [
  //   {
  //     id: 1,
  //     title: "Top NodeJS Frameworks to use in 2021",
  //     url:
  //       "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     content:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi odio consequuntur qui sunt. Officia consequatur saepe suscipit placeat consequuntur. Quos esse soluta ab ut voluptates modi labore, qui voluptatum ea!"
  //   },
  //   {
  //     id: 2,
  //     title: "Learn ReactJS from the beginning is hard?",
  //     url:
  //       "https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsJTIwc2V4eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     content:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi odio consequuntur qui sunt. Officia consequatur saepe suscipit placeat consequuntur. Quos esse soluta ab ut voluptates modi labore, qui voluptatum ea!"
  //   },
  //   {
  //     id: 3,
  //     title: "Be confident to learn new technology",
  //     url:
  //       "https://images.unsplash.com/photo-1596873031381-d46c56146b83?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNhcmQlMjBtYWdpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  //     content:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi odio consequuntur qui sunt. Officia consequatur saepe suscipit placeat consequuntur. Quos esse soluta ab ut voluptates modi labore, qui voluptatum ea!"
  //   },
  //   {
  //     id: 4,
  //     title: "Be confident to learn new technology",
  //     url:
  //       "https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/157250530_2807786612768070_3203283049516010977_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pkWDL0bXJkQAX8ae8sM&_nc_ht=scontent.fsgn4-1.fna&oh=99990c2fb36f75f5b64ed631e61d24af&oe=609E674E",
  //     content:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi odio consequuntur qui sunt. Officia consequatur saepe suscipit placeat consequuntur. Quos esse soluta ab ut voluptates modi labore, qui voluptatum ea!"
  //   },
  //   {
  //     id: 5,
  //     title: "Be confident to learn new technology",
  //     url:
  //       "https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/157250530_2807786612768070_3203283049516010977_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pkWDL0bXJkQAX8ae8sM&_nc_ht=scontent.fsgn4-1.fna&oh=99990c2fb36f75f5b64ed631e61d24af&oe=609E674E",
  //     content:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi odio consequuntur qui sunt. Officia consequatur saepe suscipit placeat consequuntur. Quos esse soluta ab ut voluptates modi labore, qui voluptatum ea!"
  //   }
  // ]
  const [titleList, settitleList] = useState([
    {
      id: 1,
      title: "Top NodeJS Frameworks to use in 2021",
      imageUrl: "",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi odio consequuntur qui sunt. Officia consequatur saepe suscipit placeat consequuntur. Quos esse soluta ab ut voluptates modi labore, qui voluptatum ea!"
    }
  ])

  useEffect(() => {
    async function fetchtitleList() {
      try {
        const requestUrl =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1"
        const response = await fetch(requestUrl)
        const responeJSON = await response.json()
        const data = responeJSON["data"]
        settitleList(data)
      } catch (error) {
        console.log("Faild to fetch list: ", error.message)
      }
    }
    fetchtitleList()
  }, [])
  const titles2 = [...titleList]
  titles2.shift()

  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="main__wrap">
            <div className="main__title">
              <Main__title_top title__top_item={titleList[0]}></Main__title_top>
              {titles2.map(title => (
                <Main__title_item
                  title__item={title}
                  key={title.id}
                ></Main__title_item>
              ))}
            </div>
            <div className="main__scroll">
              <Categories categoriesList={titleList}></Categories>
              <PopularPost></PopularPost>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
