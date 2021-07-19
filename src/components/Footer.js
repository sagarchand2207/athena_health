import React, { useContext } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomToggle from "./CustomToggle";

const Footer = () => {
  return (
    <div
      className="footer-wrapper"
      data-componentname="Footer"
      data-componentid="Footer"
    >
      <div className="mobile-hide">
        <footer className="footer">
          <div className="footer-rows">
            <div>
              <Link to="/">
                <img
                  src="https://caas.athenahealth.com/sites/default/files/logo_0.png"
                  alt="Footer Logo"
                  className="footer-logo"
                />
              </Link>
            </div>
            <div className="footer-content-wrapper" id="0" name="Solutions">
              <h4>
                <span name="Solutions">Solutions</span>
              </h4>
              <div className="footer-submenu">
                <ul className="footer-links">
                  <li>
                    <a>Electronic Health Records</a>
                  </li>
                  <li>
                    <a>Medical Billing</a>
                  </li>
                  <li>
                    <a>Patient Engagement</a>
                  </li>
                  <li>
                    <a>Care Coordination</a>
                  </li>
                  <li>
                    <a>Enterprise Revenue Cycle</a>
                  </li>
                  <li>
                    <a>Telehealth</a>
                  </li>
                  <li>
                    <a>Mobile Capabilities</a>
                  </li>
                  <li>
                    <a>Advisory Services</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-wrapper" id="1" name="Who We Serve">
              <h4>
                <span name="Who We Serve">Who We Serve</span>
              </h4>
              <div className="footer-submenu">
                <ul className="footer-links">
                  <li>
                    <a>Who We Serve</a>
                  </li>
                  <li>
                    <a>OBGYN</a>
                  </li>
                  <li>
                    <a>Orthopedics</a>
                  </li>
                  <li>
                    <a>FQHC</a>
                  </li>
                  <li>
                    <a>Health Plans</a>
                  </li>
                  <li>
                    <a>Member-Centric Organizations</a>
                  </li>
                  <li>
                    <a>Start-Ups</a>
                  </li>
                  <li>
                    <a>Ancillary Service Organizations</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-wrapper" id="2" name="Why Choose Us">
              <h4>
                <span name="Why Choose Us">Why Choose Us</span>
              </h4>
              <div className="footer-submenu">
                <ul className="footer-links">
                  <li>
                    <a>Interoperability</a>
                  </li>
                  <li>
                    <a>The athenahealth network</a>
                  </li>
                  <li>
                    <a>Customer support</a>
                  </li>
                  <li>
                    <a>Improved efficiency</a>
                  </li>
                  <li>
                    <a>Master MACRA and MIPS</a>
                  </li>
                  <li>
                    <a>Cost and value</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-wrapper" id="3" name="About">
              <h4>
                <span name="About">About</span>
              </h4>
              <div className="footer-submenu">
                <ul className="footer-links">
                  <li>
                    <a>Who We Are</a>
                  </li>
                  <li>
                    <a>Careers</a>
                  </li>
                  <li>
                    <a>Newsroom</a>
                  </li>
                  <li>
                    <a>Investor relations</a>
                  </li>
                  <li>
                    <a>Marketplace Partners</a>
                  </li>
                  <li>
                    <a>athenaGives</a>
                  </li>
                  <li>
                    <a>Contact Us</a>
                  </li>
                  <li>
                    <a>Leadership</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-wrapper" id="4" name="Resources">
              <h4>
                <span name="Resources">Resources</span>
              </h4>
              <div className="footer-submenu">
                <ul className="footer-links">
                  <li>
                    <a>Knowledge Hub</a>
                  </li>
                  <li>
                    <a>Real-Time Care Notifications</a>
                  </li>
                  <li>
                    <a>Webinars</a>
                  </li>
                  <li>
                    <a>Case Studies</a>
                  </li>
                  <li>
                    <a>Whitepapers</a>
                  </li>
                  <li>
                    <a>Developer Portal</a>
                  </li>
                  <li>
                    <a>Marketplace</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 footer-cta">
              {" "}
              <a className="one-button" href="javascript:void(0)">
                Schedule a 1:1 meeting
              </a>
              <div className="Gatedform">
                {" "}
                <div></div>
              </div>{" "}
            </div>
            <div className="col-sm-5 footer-cta-contents">
              <a className="footer-links-sublink">
                {" "}
                <span>Privacy Policy</span>
              </a>
              <a className="footer-links-sublink">
                {" "}
                <span>Terms of Use</span>
              </a>
              <a className="footer-links-sublink">
                {" "}
                <span>Disclaimers</span>
              </a>
              <a className="footer-links-sublink">
                {" "}
                <span>Do Not Sell My Personal Information </span>
              </a>
              <a className="footer-links-sublink">
                {" "}
                <span>Code of Conduct</span>
              </a>
              <span className="footer-links-sublink">
                Call us anytime <span>800.981.5084</span>
              </span>
            </div>
            <div className="col-sm-3 footer-cta-icons">
              <a
                target="_blank"
                className="Footer__megafooter-links-sublink--1rCrI"
                href="https://www.facebook.com/athenahealth"
              >
                <img
                  className="Footer__icon-image--19LGQ"
                  src="https://caas.athenahealth.com/sites/default/files/icon_fct_facebook_dgt.png"
                />
              </a>
              <a
                target="_blank"
                className="Footer__megafooter-links-sublink--1rCrI"
                href="https://twitter.com/athenahealth"
              >
                <img
                  className="Footer__icon-image--19LGQ"
                  src="https://caas.athenahealth.com/sites/default/files/icon_fct_twitter_dgt.png"
                />
              </a>
              <a
                target="_blank"
                className="Footer__megafooter-links-sublink--1rCrI"
                href="https://www.youtube.com/user/athenahealth"
              >
                <img
                  className="Footer__icon-image--19LGQ"
                  src="https://caas.athenahealth.com/sites/default/files/icon_fct_youtube_dgt.png"
                />
              </a>
              <a
                target="_blank"
                className="Footer__megafooter-links-sublink--1rCrI"
                href="https://www.linkedin.com/company/athenahealth/"
              >
                <img
                  className="Footer__icon-image--19LGQ"
                  src="https://caas.athenahealth.com/sites/default/files/ICON_FCT_linkedin_DGT.png"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
      <div className="desktop-hide">
        <div className="footer-mobile-wrapper">
          <footer className="footer">
            <div className="container">
              <div className="logo-wrapper">
                <a href="/">
                  <img
                    src="https://caas.athenahealth.com/sites/default/files/logo_0.png"
                    alt="Footer Logo"
                    className="footer-logo-mobile"
                  />
                </a>
              </div>
              <Accordion flush>
                <Card>
                  <CustomToggle title="Solutions" eventKey="0" />
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <ul>
                        <li>
                          <a>Electronic Health Records</a>
                        </li>
                        <li>
                          <a>Medical Billing</a>
                        </li>
                        <li>
                          <a>Patient Engagement</a>
                        </li>
                        <li>
                          <a>Care Coordination</a>
                        </li>
                        <li>
                          <a>Enterprise Revenue Cycle</a>
                        </li>
                        <li>
                          <a>Telehealth</a>
                        </li>
                        <li>
                          <a>Mobile Capabilities</a>
                        </li>
                        <li>
                          <a>Advisory Services</a>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <CustomToggle title="Who We Serve" eventKey="1" />
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <ul>
                        <li>
                          <a>Who We Serve</a>
                        </li>
                        <li>
                          <a>OBGYN</a>
                        </li>
                        <li>
                          <a>Orthopedics</a>
                        </li>
                        <li>
                          <a>FQHC</a>
                        </li>
                        <li>
                          <a>Health Plans</a>
                        </li>
                        <li>
                          <a>Member-Centric Organizations</a>
                        </li>
                        <li>
                          <a>Start-Ups</a>
                        </li>
                        <li>
                          <a>Ancillary Service Organizations</a>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <CustomToggle title="Why Choose Us" eventKey="2" />
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <ul>
                        <li>
                          <a>Interoperability</a>
                        </li>
                        <li>
                          <a>The athenahealth network</a>
                        </li>
                        <li>
                          <a>Customer support</a>
                        </li>
                        <li>
                          <a>Improved efficiency</a>
                        </li>
                        <li>
                          <a>Master MACRA and MIPS</a>
                        </li>
                        <li>
                          <a>Cost and value</a>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <CustomToggle title="About" eventKey="3" />
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <ul>
                        <li>
                          <a>Who We Are</a>
                        </li>
                        <li>
                          <a>Careers</a>
                        </li>
                        <li>
                          <a>Newsroom</a>
                        </li>
                        <li>
                          <a>Investor relations</a>
                        </li>
                        <li>
                          <a>Marketplace Partners</a>
                        </li>
                        <li>
                          <a>athenaGives</a>
                        </li>
                        <li>
                          <a>Contact Us</a>
                        </li>
                        <li>
                          <a>Leadership</a>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <CustomToggle title="Resources" eventKey="4" />
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <ul>
                        <li>
                          <a>Knowledge Hub</a>
                        </li>
                        <li>
                          <a>Real-Time Care Notifications</a>
                        </li>
                        <li>
                          <a>Webinars</a>
                        </li>
                        <li>
                          <a>Case Studies</a>
                        </li>
                        <li>
                          <a>Whitepapers</a>
                        </li>
                        <li>
                          <a>Developer Portal</a>
                        </li>
                        <li>
                          <a>Marketplace</a>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <div className="footer-mobile-icons">
                <a target="_blank" href="https://www.facebook.com/athenahealth">
                  <img src="https://caas.athenahealth.com/sites/default/files/icon_fct_facebook_dgt.png" />
                </a>
                <a target="_blank" href="https://twitter.com/athenahealth">
                  <img src="https://caas.athenahealth.com/sites/default/files/icon_fct_twitter_dgt.png" />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/user/athenahealth"
                >
                  <img src="https://caas.athenahealth.com/sites/default/files/icon_fct_youtube_dgt.png" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/athenahealth/"
                >
                  <img src="https://caas.athenahealth.com/sites/default/files/ICON_FCT_linkedin_DGT.png" />
                </a>
              </div>
              <div className="footer-mobile-btn-cntnr">
                <a className="one-button" href="javascript:void(0)">
                  Schedule a 1:1 meeting
                </a>
              </div>
              <div className="footer-mobile-sublinks">
                <a className="footer-mobile-sublink" href="javascript:void(0)">
                  <span>Privacy Policy</span>
                </a>
                <a className="footer-mobile-sublink" href="javascript:void(0)">
                  <span>Terms of Use</span>
                </a>
                <a className="footer-mobile-sublink" href="javascript:void(0)">
                  <span>Disclaimers</span>
                </a>
                <a className="footer-mobile-sublink" href="javascript:void(0)">
                  <span>Do Not Sell My Personal Information </span>
                </a>
                <a className="footer-mobile-sublink" href="javascript:void(0)">
                  <span>Code of Conduct</span>
                </a>
                <p>
                  <span className="footer-mobile-sublink">
                    Call us anytime{" "}
                    <span className="highlighted">800.981.5084</span>
                  </span>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
