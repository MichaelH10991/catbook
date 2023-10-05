import "./dashboard.css";
import cat1 from "./images/Cat_August_2010-4.jpg";
import cat2 from "./images/images.jpeg";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <header class="header">
          <div className="header-left">
            <div>item</div>
            <div>item</div>
          </div>
          <div className="header-middle">
            <input type="text"></input>
          </div>
          <div className="header-right">
            <div>item</div>
            <div>item</div>
            <div>item</div>
          </div>
        </header>
        <div className="main-container">
          <div className="content">
            <div className="posts">
              <div class="post-container">
                <div className="post">
                  <div className="post-header">
                    <div className="user-icon"></div>
                    <div className="post-stuff">
                      <div className="post-stuff-left-rows">
                        <div className="post-stuff-left">
                          <div className="post-name">Bob The Cat</div>
                          <div className="post-handle">@iobxt</div>
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
                    This is a subtitle that is quite long and should test word
                    wrapping ssa sas skj ad nwekjfscn ewkjsfn sdkjf nwkjsd{" "}
                  </div>
                  <div className="image-container">
                    <img className="post-image" src={cat1}></img>
                  </div>
                </div>
              </div>
              <div class="post-container">
                <div className="post">
                  <div className="post-header">
                    <div className="user-icon"></div>
                    <div className="post-stuff">
                      <div className="post-stuff-left-rows">
                        <div className="post-stuff-left">
                          <div className="post-name">Bob The Cat</div>
                          <div className="post-handle">@iobxt</div>
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
                    This is a subtitle that is quite long and should test word
                    wrapping ssa sas skj ad nwekjfscn ewkjsfn sdkjf nwkjsd{" "}
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
