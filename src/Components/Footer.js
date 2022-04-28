import React from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Footer = () => {
  return (
    <React.Fragment>
      <section class="footer_section">
        <div class="container">
          <div class="row">
            <div class="col-md-custom-5">
              <div class="single_footer">
                <h4>Eesy</h4>
                <ul class="footer_links">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Company profile</a>
                  </li>
                  <li>
                    <a href="#">Leadership</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Disclaimer</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-custom-5">
              <div class="single_footer">
                <h4>Buy & Sell</h4>
                <ul class="footer_links">
                  <li>
                    <a href="#">Open Plots</a>
                  </li>
                  <li>
                    <a href="#">Flats/Apartments</a>
                  </li>
                  <li>
                    <a href="#">Individual homes</a>
                  </li>
                  <li>
                    <a href="#">Gated Villas</a>
                  </li>
                </ul>
              </div>
              <div class="single_footer">
                <h4>Home Services</h4>
                <ul class="footer_links">
                  <li>
                    <a href="#">Pest Control</a>
                  </li>
                  <li>
                    <a href="#">Home Cleaning</a>
                  </li>
                  <li>
                    <a href="#">Carpenters</a>
                  </li>
                  <li>
                    <a href="#">Electricians</a>
                  </li>
                  <li>
                    <a href="#">Home Painting</a>
                  </li>
                  <li>
                    <a href="#">Plumbers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-custom-5">
              <div class="single_footer">
                <h4>Rental Services</h4>
                <ul class="footer_links">
                  <li>
                    <a href="#">Apartments</a>
                  </li>
                  <li>
                    <a href="#">Offices</a>
                  </li>
                  <li>
                    <a href="#">Individual Houses</a>
                  </li>
                  <li>
                    <a href="#">Commercial Shops</a>
                  </li>
                  <li>
                    <a href="#">Godowns & Warehouses</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-custom-5">
              <div class="single_footer">
                <h4>Packers & Movers</h4>
                <ul class="footer_links">
                  <li>
                    <a href="#">House Shifting</a>
                  </li>
                  <li>
                    <a href="#">Office Shifting</a>
                  </li>
                </ul>
              </div>
              <div class="single_footer">
                <h4>Bank Loans</h4>
                <ul class="footer_links">
                  <li>
                    <a href="#">Personal loan</a>
                  </li>
                  <li>
                    <a href="#">Home Loan</a>
                  </li>
                  <li>
                    <a href="#">Car Loan</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-custom-5">
              <div class="single_footer">
                <h4>Online/Offline Advertising</h4>
                <ul class="footer_links">
                  <li>
                    <a href="#">Auto Campaigns</a>
                  </li>
                  <li>
                    <a href="#">Leaflets Distribution</a>
                  </li>
                  <li>
                    <a href="#">Banners Pasting</a>
                  </li>
                  <li>
                    <a href="#">Digital Media</a>
                  </li>
                </ul>
              </div>
              <div class="single_footer">
                <h4>Follow Us</h4>
                <ul class="footer_links social_links">
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-facebook-f"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-google-plus-g"></i> Google Plus
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-instagram"></i> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-youtube"></i> Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="copyright_section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="copyright_div text-center">
                <p>Copyright © 2022 Eesy.in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Login />
      <Register />
    </React.Fragment>
  );
};

export default Footer;
