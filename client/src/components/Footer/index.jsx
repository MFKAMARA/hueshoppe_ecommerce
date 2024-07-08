function Footer() {
  return (
    <>
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="footer_logo">
            <a href="index.html">
              {/* <img src="images/footer-logo.png" alt="Footer Logo" /> */}
              <h1 class="banner_taital">HueShoppe</h1>
            </a>
          </div>
          <div className="input_bt">
            <input type="text" className="mail_bt" placeholder="Your Email" />
            <span className="subscribe_bt" id="basic-addon2">
              <a href="#">Subscribe</a>
            </span>
          </div>
          <div className="footer_menu">
            <ul>
              <li><a href="#">Top Selling</a></li>
              <li><a href="#">Gift Ideas</a></li>
              <li><a href="#">Newly Added</a></li>
              <li><a href="#">Today's Deals</a></li>
              <li><a href="#">Customer Service</a></li>
            </ul>
          </div>
          <div className="location_main">
            Help Line Number : <a href="#">+1 763 923 8926</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
