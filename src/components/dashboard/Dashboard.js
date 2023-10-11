import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

import "./dashboard.css";
import cat1 from "./images/Cat_August_2010-4.jpg";
import cat2 from "./images/images.jpeg";
import cat3 from "./images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg";
import cat4 from "./images/egypt_kitty_social.webp";
import searchIcon from "./images/search_FILL0_wght400_GRAD0_opsz24.svg";

import NewPost from "./NewPost";

import api from "../../api";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({});
  const [userInfoloading, setUserInfoLoading] = useState(true);

  console.log(userInfo);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await api.getUser();
      setUserInfoLoading(false);

      setUserInfo(user);
    };
    fetchUser();
  }, []);

  return (
    <>
      <div className="dashboard-container">
        <header class="header">
          <div className="header-left">
            <div>item</div>
            <div>item</div>
          </div>
          <div className="header-middle">
            <div className="search-bar-container">
              <input className="search-bar" type="text"></input>
              <button className="search-bar-button">
                <img className="search-icon" src={searchIcon}></img>
              </button>
            </div>
          </div>
          <div className="header-right">
            <div>item</div>
            <div>item</div>
            <div>item</div>
          </div>
        </header>
        {/* <div className="dev-info">{JSON.stringify(userInfo)}</div> */}
        <div className="main-container">
          <div className="content">
            <NewPost userInfo={userInfo} />
            <div className="posts">
              <div class="post-container">
                <div className="post">
                  <div className="post-header">
                    <div className="user-icon">
                      <img src={cat3}></img>
                    </div>
                    <div className="post-stuff">
                      <div className="post-stuff-left-rows">
                        <div className="post-stuff-left">
                          <div className="post-name">Tofu</div>
                          <div className="post-handle">@tofu_the_cat</div>
                        </div>
                        <div className="post-stats">
                          <div>1 d</div>
                        </div>
                      </div>
                      <div className="post-header-right">
                        <div>more</div>
                      </div>
                    </div>
                  </div>
                  <div className="post-title">Just Chillin'</div>
                  <div className="post-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut elementum erat. Quisque accumsan maximus neque, vitae
                    malesuada est tempor at. Sed pellentesque ligula fringilla,
                    vehicula turpis in, ultrices magna
                  </div>
                  <div className="image-container">
                    <img className="post-image" src={cat1}></img>
                  </div>
                </div>
              </div>
              <div class="post-container">
                <div className="post">
                  <div className="post-header">
                    <div className="user-icon">
                      <img src={cat4}></img>
                    </div>
                    <div className="post-stuff">
                      <div className="post-stuff-left-rows">
                        <div className="post-stuff-left">
                          <div className="post-name">Bob</div>
                          <div className="post-handle">@bobster</div>
                        </div>
                        <div className="post-stats">
                          <div>1 d</div>
                        </div>
                      </div>
                      <div className="post-header-right">
                        <div>more</div>
                      </div>
                    </div>
                  </div>
                  <div className="post-title">Hellooo</div>
                  <div className="post-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ut elementum erat. Quisque accumsan maximus neque.
                  </div>
                  <div className="image-container">
                    <img className="post-image" src={cat2}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">footer</div>
      </div>
    </>
  );
};

export default Dashboard;
