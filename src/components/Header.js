import React, { useState } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomToggle from "./CustomToggle";
const Header = () => {
  const [navState, setNavState] = useState({
    activeMega: false,
    mobileMenu: false,
    showMega: "",
    showColumn: 1,
  });

  const subMenu = {
    solutions: ["Electronic Health Records", "Telehealth"],
    whoWe: ["Who We Serve"],
    whyUs: ["Increase Revenue", "Cost And Value"],
    about: ["Who we are", "Careers"],
    resources: ["COVID-19", "Knowledge Hub"],
  };

  const getSubmenu = (arr) => {
    return arr.map((data, i) => (
      <li
        class={`nav__submenu__item ${
          navState.showColumn == i + 1 ? "active_menu" : ""
        }`}
        dataindex={i + 1}
      >
        <span>{data}</span>
      </li>
    ));
  };

  return (
    <div className="header__container">
      <Container fluid>
        <header
          onMouseLeave={() => {
            setNavState({
              ...navState,
              activeMega: false,
              showMega: "",
            });
          }}
          className="main__header"
        >
          <div className="header__logo__cont">
            <Link to="/">
              <img
                src="https://caas.athenahealth.com/sites/default/files/logo_0.png"
                alt="Athenahealth"
              />
            </Link>
          </div>
          <div
            className={`navigation__wrapper ${
              navState.mobileMenu ? "open_nav" : ""
            }`}
          >
            <div>
              <ul
                className="nav__items"
                onMouseOver={(e) => {
                  setNavState({
                    ...navState,
                    activeMega: true,
                    showMega: e.target.getAttribute("menuItem"),
                    showColumn: 1,
                  });
                }}
                onClick={(e) => {
                  setNavState({
                    ...navState,
                    activeMega: true,
                    showMega: e.target.getAttribute("menuItem"),
                  });
                }}
              >
                <li
                  className={`nav_item ${
                    navState.showMega === "solutions" ? "active_link" : ""
                  }`}
                  menuItem="solutions"
                >
                  <span menuItem="solutions" className="desktop_nav_item">
                    Solutions
                  </span>
                  <span menuItem="solutions" className="mobile_nav_item">
                    Solutions
                  </span>
                </li>
                <li
                  className={`nav_item ${
                    navState.showMega === "whoWe" ? "active_link" : ""
                  }`}
                  menuItem="whoWe"
                >
                  <span menuItem="whoWe" className="desktop_nav_item">
                    Who We Serve
                  </span>
                  <span menuItem="whoWe" className="mobile_nav_item">
                    Who We Serve
                  </span>
                </li>
                <li
                  className={`nav_item ${
                    navState.showMega === "whyUs" ? "active_link" : ""
                  }`}
                  menuItem="whyUs"
                >
                  <span menuItem="whyUs" className="desktop_nav_item">
                    Why Choose Us
                  </span>
                  <span menuItem="whyUs" className="mobile_nav_item">
                    Why Choose Us
                  </span>
                </li>
                <li
                  className={`nav_item ${
                    navState.showMega === "about" ? "active_link" : ""
                  }`}
                  menuItem="about"
                >
                  <span menuItem="about" className="desktop_nav_item">
                    About
                  </span>
                  <span menuItem="about" className="mobile_nav_item">
                    About
                  </span>
                </li>
                <li
                  className={`nav_item ${
                    navState.showMega === "resources" ? "active_link" : ""
                  }`}
                  menuItem="resources"
                >
                  <span menuItem="resources" className="desktop_nav_item">
                    Resources
                  </span>
                  <span menuItem="resources" className="mobile_nav_item">
                    Resources
                  </span>
                </li>
              </ul>
            </div>
            <div className="nav__actions_container">
              <div className="nav_schedule_contn">
                <span
                  id="g_cta"
                  className="one-button mobile__hide"
                  href="javascript:void(0)"
                >
                  Schedule a 1:1 meeting
                </span>
                <span
                  id="g_cta"
                  className="one-button desktop__hide"
                  href="javascript:void(0)"
                >
                  Schedule a 1:1 meeting
                </span>
              </div>
              <div className="patient__login">
                <Link to="/">Patients</Link>
              </div>
              <div className="normal__login">
                <Link to="/">Login</Link>
              </div>
            </div>
          </div>
          <div
            className={`mobile__menu__button ${
              navState.mobileMenu ? "active" : ""
            }`}
            onClick={() => {
              setNavState({ ...navState, mobileMenu: !navState.mobileMenu });
            }}
          >
            <div className="hamburger-cont">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="title">Menu</span>
          </div>
          <div className="navigation__wrapper">
            <div>
              <div
                className={`subnavigation__wrapper ${
                  navState.activeMega ? "active-meganav" : ""
                }`}
              >
                <div
                  className={`subnavigation__container ${
                    navState.showMega === "solutions" ? "show-meganav" : ""
                  }`}
                >
                  <div
                    className="subnav__title"
                    onClick={() => {
                      setNavState({
                        ...navState,
                        showMega: "",
                      });
                    }}
                  >
                    Solutions
                  </div>
                  <ul
                    onMouseOver={(e) => {
                      setNavState({
                        ...navState,
                        showColumn: e.target.parentElement.getAttribute(
                          "dataindex"
                        )
                          ? e.target.parentElement.getAttribute("dataindex")
                          : navState.showColumn,
                      });
                    }}
                    class="nav__submenu__list mobile__hiden"
                  >
                    {getSubmenu(subMenu["solutions"])}
                  </ul>
                  <Accordion className="desktop__hidden" flush>
                    <Card>
                      <CustomToggle
                        headerClass="nav__submenu__item"
                        title="Electronic Health Records"
                        eventKey="0"
                      />
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <div class="submenu-title">
                            <Link to="/">Electronic Health Records</Link>
                          </div>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">Electronic Health Records</Link>
                            </li>
                            <li>
                              <Link to="/">Mobile Capabilities</Link>
                            </li>
                            <li>
                              <Link to="/">Voice Solutions</Link>
                            </li>
                            <li>
                              <Link to="/">athenaOne</Link>
                            </li>
                          </ul>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">See our EHR solution in action</Link>
                              <div>
                                <p>
                                  athenaClinicals is our cloud-based EHR that
                                  supports faster, more accurate documentation,
                                  allowing your staff to focus on the moment of
                                  care.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <CustomToggle
                        headerClass="nav__submenu__item"
                        title="Revenue Management"
                        eventKey="1"
                      />
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <div class="submenu-title">
                            <Link to="/">Revenue Management</Link>
                          </div>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">Revenue Management</Link>
                            </li>
                            <li>
                              <Link to="/">Revenue Capabilities</Link>
                            </li>
                            <li>
                              <Link to="/">Revenue Solutions</Link>
                            </li>
                            <li>
                              <Link to="/">athenaOne</Link>
                            </li>
                          </ul>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">
                                See our Revenue Management solution in action
                              </Link>
                              <div>
                                <p>
                                  athenaClinicals is our cloud-based EHR that
                                  supports faster, more accurate documentation,
                                  allowing your staff to focus on the moment of
                                  care.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <div
                    class={`nav__nested-columns ${
                      navState.showColumn == 1 ? "showcolumn" : ""
                    }`}
                  >
                    <ul class="nav_nested_submenu">
                      <li>
                        <Link to="/">
                          <h6>Electronic Health Records</h6>
                          <div>
                            <p>
                              A solution that uses intuitive workflows to
                              support clinicians throughout the patient visit.
                            </p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <h6>Mobile Capabilities</h6>
                          <div>
                            <p>
                              Accomplish meaningful clinical work on the go from
                              your mobile device.
                            </p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <h6>Voice Solutions</h6>
                          <div>
                            <p>
                              Fully integrated hands-free solutions that save
                              time and boost clinical efficiency.
                            </p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <h6>athenaOne</h6>
                          <div>
                            <p>
                              The industry’s most adaptable, network-enabled
                              suite of healthcare solutions.
                            </p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                    <ul class="nav_nested_submenu with_image">
                      <li>
                        <div class="img_container">
                          <Link to="/">
                            <img
                              src="https://caas.athenahealth.com/sites/default/files/CND_FemaleDr_FemalePatient_MOC_DGT.jpg"
                              alt="EHR"
                            />
                          </Link>
                        </div>
                        <p class="title">See our EHR solution in action</p>
                        <div>
                          <p>
                            athenaClinicals is our cloud-based EHR that supports
                            faster, more accurate documentation, allowing your
                            staff to focus on the moment of care.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    class={`nav__nested-columns ${
                      navState.showColumn == 2 ? "showcolumn" : ""
                    }`}
                  >
                    <ul class="nav_nested_submenu">
                      <li>
                        <Link to="/">
                          <h6>Mobile Capabilities</h6>
                          <div>
                            <p>
                              Accomplish meaningful clinical work on the go from
                              your mobile device.
                            </p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <h6>Voice Solutions</h6>
                          <div>
                            <p>
                              Solutions that save time and boost clinical
                              efficiency.
                            </p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <h6>athenaOne</h6>
                          <div>
                            <p>
                              The industry’s most adaptable, network-enabled
                              suite of healthcare solutions.
                            </p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className={`subnavigation__container ${
                    navState.showMega === "whoWe" ? "show-meganav" : ""
                  }`}
                >
                  <div
                    className="subnav__title"
                    onClick={() => {
                      setNavState({
                        ...navState,
                        showMega: "",
                      });
                    }}
                  >
                    Who We Serve
                  </div>
                  <ul
                    onMouseOver={(e) => {
                      setNavState({
                        ...navState,
                        showColumn: e.target.parentElement.getAttribute(
                          "dataindex"
                        )
                          ? e.target.parentElement.getAttribute("dataindex")
                          : navState.showColumn,
                      });
                    }}
                    class="nav__submenu__list mobile__hiden"
                  >
                    {getSubmenu(subMenu["whoWe"])}
                  </ul>
                  <Accordion className="desktop__hidden" flush>
                    <Card>
                      <CustomToggle
                        headerClass="nav__submenu__item"
                        title="Who we serve"
                        eventKey="1"
                      />
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <div class="submenu-title">
                            <Link to="/">Who we serve</Link>
                          </div>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">Ob-Gyn</Link>
                            </li>
                            <li>
                              <Link to="/">Urgent Care</Link>
                            </li>
                            <li>
                              <Link to="/">Revenue Solutions</Link>
                            </li>
                            <li>
                              <Link to="/">FQHC</Link>
                            </li>
                            <li>
                              <Link to="/">Cardiology</Link>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <div
                    class={`nav__nested-columns ${
                      navState.showColumn == 1 ? "showcolumn" : ""
                    }`}
                  >
                    <ul class="nav_nested_submenu">
                      <li>
                        <Link to="/">
                          <h6>Who we serve</h6>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <h6>Ob-Gyn</h6>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <h6>Urgent Care</h6>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <h6>FQHC</h6>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <h6>Cardiology</h6>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`subnavigation__container ${
                    navState.showMega === "whyUs" ? "show-meganav" : ""
                  }`}
                >
                  <div
                    className="subnav__title"
                    onClick={() => {
                      setNavState({
                        ...navState,
                        showMega: "",
                      });
                    }}
                  >
                    Why Us
                  </div>
                  <ul
                    onMouseOver={(e) => {
                      setNavState({
                        ...navState,
                        showColumn: e.target.parentElement.getAttribute(
                          "dataindex"
                        )
                          ? e.target.parentElement.getAttribute("dataindex")
                          : navState.showColumn,
                      });
                    }}
                    class="nav__submenu__list mobile__hiden"
                  >
                    {getSubmenu(subMenu["whyUs"])}
                  </ul>
                  <Accordion className="desktop__hidden" flush>
                    <Card>
                      <CustomToggle
                        headerClass="nav__submenu__item"
                        title="Increase Revenue"
                        eventKey="0"
                      />
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <div class="submenu-title">
                            <Link to="/">Increase Revenue</Link>
                          </div>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">Increase Revenue</Link>
                            </li>
                          </ul>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">
                                A Partner that's invested in your future
                              </Link>
                              <div>
                                <p>
                                  athenaClinicals is our cloud-based EHR that
                                  supports faster, more accurate documentation,
                                  allowing your staff to focus on the moment of
                                  care.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <CustomToggle
                        headerClass="nav__submenu__item"
                        title="Cost And Value"
                        eventKey="1"
                      />
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <div class="submenu-title">
                            <Link to="/">Cost And Value</Link>
                          </div>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">Cost And Value</Link>
                            </li>
                          </ul>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">
                                Get more value from your healthcare IT
                              </Link>
                              <div>
                                <p>
                                  athenaClinicals is our cloud-based EHR that
                                  supports faster, more accurate documentation,
                                  allowing your staff to focus on the moment of
                                  care.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <div
                    class={`nav__nested-columns ${
                      navState.showColumn == 1 ? "showcolumn" : ""
                    }`}
                  >
                    <ul class="nav_nested_submenu">
                      <li>
                        <Link to="/">
                          <h6>Increase Revenue</h6>
                          <div>
                            <p>
                              Accomplish meaningful clinical work on the go from
                              your mobile device.
                            </p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                    <ul class="nav_nested_submenu with_image">
                      <li>
                        <div class="img_container">
                          <Link to="/">
                            <img
                              src="https://caas.athenahealth.com/sites/default/files/CND_FemaleDr_FemalePatient_MOC_DGT.jpg"
                              alt="EHR"
                            />
                          </Link>
                        </div>
                        <p class="title">
                          A Partner that invested in your future
                        </p>
                        <div>
                          <p>
                            athenaClinicals is our cloud-based EHR that supports
                            faster, more accurate documentation, allowing your
                            staff to focus on the moment of care.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    class={`nav__nested-columns ${
                      navState.showColumn == 2 ? "showcolumn" : ""
                    }`}
                  >
                    <ul class="nav_nested_submenu">
                      <li>
                        <Link to="/">
                          <h6>Cost and Value</h6>
                          <div>
                            <p>
                              Accomplish meaningful clinical work on the go from
                              your mobile device with cost and value.
                            </p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                    <ul class="nav_nested_submenu with_image">
                      <li>
                        <div class="img_container">
                          <Link to="/">
                            <img
                              src="https://caas.athenahealth.com/sites/default/files/CND_FemaleDr_FemalePatient_MOC_DGT.jpg"
                              alt="EHR"
                            />
                          </Link>
                        </div>
                        <p class="title">
                          Get more value from your healthcare IT.
                        </p>
                        <div>
                          <p>
                            athenaClinicals is our cloud-based EHR that supports
                            faster, more accurate documentation, allowing your
                            staff to focus on the moment of care.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`subnavigation__container ${
                    navState.showMega === "about" ? "show-meganav" : ""
                  }`}
                >
                  <div
                    className="subnav__title"
                    onClick={() => {
                      setNavState({
                        ...navState,
                        showMega: "",
                      });
                    }}
                  >
                    About
                  </div>
                  <ul
                    onMouseOver={(e) => {
                      setNavState({
                        ...navState,
                        showColumn: e.target.parentElement.getAttribute(
                          "dataindex"
                        )
                          ? e.target.parentElement.getAttribute("dataindex")
                          : navState.showColumn,
                      });
                    }}
                    class="nav__submenu__list mobile__hiden"
                  >
                    {getSubmenu(subMenu["about"])}
                  </ul>
                  <Accordion className="desktop__hidden" flush>
                    <Card>
                      <CustomToggle
                        headerClass="nav__submenu__item"
                        title="Who We are"
                        eventKey="0"
                      />
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/who-we">Who We are</Link>
                            </li>
                          </ul>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">
                                Helping shape the future of healthcare.
                              </Link>
                              <div>
                                <p>
                                  athenaClinicals is our cloud-based EHR that
                                  supports faster, more accurate documentation,
                                  allowing your staff to focus on the moment of
                                  care.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <CustomToggle
                        headerClass="nav__submenu__item"
                        title="Careers"
                        eventKey="1"
                      />
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <div class="submenu-title">
                            <Link to="/">Careers</Link>
                          </div>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">Careers at athenahealth</Link>
                            </li>
                            <li>
                              <Link to="/">Culture</Link>
                            </li>
                          </ul>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">Ready to join the team</Link>
                              <div>
                                <p>
                                  athenaClinicals is our cloud-based EHR that
                                  supports faster, more accurate documentation,
                                  allowing your staff to focus on the moment of
                                  care.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <div
                    class={`nav__nested-columns ${
                      navState.showColumn == 1 ? "showcolumn" : ""
                    }`}
                  >
                    <ul class="nav_nested_submenu with_image with__big__image">
                      <li>
                        <Link to="/who-we">
                          <img
                            class="ahMegaNav__media--37axm"
                            src="https://caas.athenahealth.com/sites/default/files/IMG_who-we-are-graphic_Teal_DGT.jpg"
                            alt=""
                          />
                        </Link>
                      </li>
                    </ul>
                    <ul class="nav_nested_submenu with_image">
                      <li>
                        <p class="title">
                          Helping shape the future of healthcare
                        </p>
                        <div>
                          <p>
                            athenaClinicals is our cloud-based EHR that supports
                            faster, more accurate documentation, allowing your
                            staff to focus on the moment of care.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    class={`nav__nested-columns ${
                      navState.showColumn == 2 ? "showcolumn" : ""
                    }`}
                  >
                    <ul class="nav_nested_submenu">
                      <li>
                        <Link to="/">
                          <h6>Careers at athenahealth</h6>
                          <div>
                            <p>Help us make health system better.</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <h6>Culture</h6>
                          <div>
                            <p>It's about culture.</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                    <ul class="nav_nested_submenu with_image">
                      <li>
                        <div class="img_container">
                          <Link to="/">
                            <img
                              src="https://caas.athenahealth.com/sites/default/files/CND_FemaleDr_FemalePatient_MOC_DGT.jpg"
                              alt="EHR"
                            />
                          </Link>
                        </div>
                        <p class="title">Ready to join the team?</p>
                        <div>
                          <p>
                            athenaClinicals is our cloud-based EHR that supports
                            faster, more accurate documentation, allowing your
                            staff to focus on the moment of care.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`subnavigation__container ${
                    navState.showMega === "resources" ? "show-meganav" : ""
                  }`}
                >
                  <div
                    className="subnav__title"
                    onClick={() => {
                      setNavState({
                        ...navState,
                        showMega: "",
                      });
                    }}
                  >
                    Resources
                  </div>
                  <ul
                    onMouseOver={(e) => {
                      setNavState({
                        ...navState,
                        showColumn: e.target.parentElement.getAttribute(
                          "dataindex"
                        )
                          ? e.target.parentElement.getAttribute("dataindex")
                          : navState.showColumn,
                      });
                    }}
                    class="nav__submenu__list mobile__hiden"
                  >
                    {getSubmenu(subMenu["resources"])}
                  </ul>
                  <Accordion className="desktop__hidden" flush>
                    <Card>
                      <CustomToggle
                        headerClass="nav__submenu__item"
                        title="COVID-19"
                        eventKey="0"
                      />
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">COVID-19</Link>
                            </li>
                          </ul>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">COVID-19 Hub</Link>
                              <div>
                                <p>
                                  athenaClinicals is our cloud-based EHR that
                                  supports faster, more accurate documentation,
                                  allowing your staff to focus on the moment of
                                  care.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <CustomToggle
                        headerClass="nav__submenu__item"
                        title="Knowledge Hub"
                        eventKey="1"
                      />
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <div class="submenu-title">
                            <Link to="/">Knowledge Hub</Link>
                          </div>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">Knowledge Hub</Link>
                            </li>
                          </ul>
                          <ul class="nav-submenu-wrap">
                            <li>
                              <Link to="/">Knowledge Hub</Link>
                            </li>
                            <li>
                              <Link to="/">Clinical Trends and News</Link>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <div
                    class={`nav__nested-columns ${
                      navState.showColumn == 1 ? "showcolumn" : ""
                    }`}
                  >
                    <ul class="nav_nested_submenu with_image with__big__image">
                      <li>
                        <Link to="/">
                          <img
                            class="ahMegaNav__media--37axm"
                            src="https://caas.athenahealth.com/sites/default/files/IMG_Heroes-Healthcare_Artwork_DGT.jpg"
                            alt=""
                          />
                        </Link>
                      </li>
                    </ul>
                    <ul class="nav_nested_submenu with_image">
                      <li>
                        <p class="title">COVID-19 Hub</p>
                        <div>
                          <p>
                            athenaClinicals is our cloud-based EHR that supports
                            faster, more accurate documentation, allowing your
                            staff to focus on the moment of care.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    class={`nav__nested-columns ${
                      navState.showColumn == 2 ? "showcolumn" : ""
                    }`}
                  >
                    <ul class="nav_nested_submenu">
                      <li>
                        <Link to="/">
                          <h6>Knowledge Hub</h6>
                          <div>
                            <p>The home of healthcare</p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <h6>Clinical Trends and News</h6>
                          <div>
                            <p>Major regulatory clinical news and stuff</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                    <ul class="nav_nested_submenu">
                      <li>
                        <Link to="/">
                          <h6>Patient Experience</h6>
                          <div>
                            <p>The home of patient experience</p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navigation__wrapper__overlay show_overlay"></div>
        </header>
      </Container>
    </div>
  );
};

export default Header;
