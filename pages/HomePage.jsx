import React from "react";
import "./homepage.css";
function HomePage() {
  return (
    <div className="homepagebody">
      <div className="containerhomepage">
        <br />
        <br />
        <div className="blockhomepage">
          <div className="divdivhome">
            <h2>welcome to gymrat</h2>
            <br />
            <p>
              a low cost gym that start his first jurney join us and be one of
              the first members form many
            </p>
          </div>
          <div className="imgdivhome">
            <img
              className="imghome"
              src="https://a-cloud.b-cdn.net/media/iW=5000&iH=any/8b39839700b62bc7c24704040d98efc4/image.jpg"
              alt="gym photo"
            />
          </div>
        </div>
        <div className="blockhomepage">
          <div className="imgdivhome">
            <img
              className="imghome"
              src="https://cdn.vox-cdn.com/thumbor/2Bcpu3cwfzZJ2gUnhWaiyWFS0Mw=/0x0:8238x5492/1200x800/filters:focal(3460x2087:4778x3405)/cdn.vox-cdn.com/uploads/chorus_image/image/67606043/GettyImages_1132006407.0.jpg"
              alt="gym photo"
            />
          </div>
          <div className="divdivhome">
            <h2>about gymrat</h2>
            <br />
            <p>
              a low cost gym that start his first jurney join us and be one of
              the first members form many
            </p>
          </div>
        </div>
        <div className="blockhomepage">
          <div className="divdivhome">
            <h2>gymrat spaces</h2>
            <br />
            <p>
              a low cost gym that start his first jurney join us and be one of
              the first members form many
            </p>
          </div>
          <div className="imgdivhome">
            <img
              className="imghome"
              src="https://i.pinimg.com/originals/49/42/40/494240e2d00df7dc5f47f332c4473341.jpg"
              alt="gym photo"
            />
          </div>
        </div>
        <div className="blockhomepage">
          <div className="imgdivhome">
            <img
              className="imghome"
              src="https://morninglightyogapilates.com.au/wp-55/wp-content/uploads/sunshine-coast-reformer-pilates4.jpg"
              alt="gym photo"
            />
          </div>
          <div className="divdivhome">
            <h2>our pilatis club</h2>
            <br />
            <p>
              a low cost gym that start his first jurney join us and be one of
              the first members form many
            </p>
          </div>
        </div>
        <div className="maphomepage">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="100%"
                height="400"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=%D7%97%D7%99%D7%9C%D7%96%D7%95%D7%9F%203&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
              <br />
              <style>
                .mapouterposition:relative;text-align:right;height:400px;width:1000px;
              </style>
              {/* <a href="https://www.embedgooglemap.net">
                google maps iframe code generator
              </a> */}
              <style>
                .gmap_canvas
                overflow:hidden;background:none!important;height:400px;width:1000px;
              </style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
