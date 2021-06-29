import "./ReviewSkeleton.css"

const ReviewSkeleton = () => {
  return (
    <div className="reviewSkeleton">
      <div className="backgroundLoading">
        <img
          className="zoom_image"
          src={
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          alt=""
        ></img>
      </div>

      <div className="content">
        <div className="topContentLoading">
          <div
            className="category"
            style={{ width: "40%", color: "transparent" }}
          >
            as
          </div>
          <div
            className="titleLoading"
            style={{ width: "92%", marginTop: "18px" }}
          >
            ass
          </div>
          <div className="titleLoading" style={{ width: "88%" }}>
            ass
          </div>
          <div className="titleLoading" style={{ width: "70%" }}>
            ass
          </div>

          <div className="opening" style={{ width: "92%", marginTop: "18px" }}>
            Create
          </div>
          <div className="opening" style={{ width: "94%" }}>
            Create
          </div>
          <div className="opening" style={{ width: "90%" }}>
            Create
          </div>
          <div className="opening" style={{ width: "25%" }}>
            Create
          </div>
        </div>

        <div className="moreLoading">Read more . 10 mins read</div>
      </div>
    </div>
  )
}

export default ReviewSkeleton
