import "./newPost.css";
import cat3 from "./images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg";

const NewPost = ({ userInfo }) => {
  return (
    <div className="new-post-container">
      <div className="new-post-content">
        <div className="new-post-user-icon">
          <img src={cat3}></img>
        </div>
        <input
          placeholder={`What's on your mind, ${userInfo.name}?`}
          className="new-post-text-box"
          type="text"
        ></input>
      </div>
    </div>
  );
};

export default NewPost;
