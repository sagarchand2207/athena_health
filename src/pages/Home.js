import React, { useState } from "react";
import Footer from "../components/Footer";
import Slider from "../components/slider/Slider";
import CustomModal from "../components/CustomModal";
import useModal from "../hooks/useModal";
import pedia from "../assets/images/child.jpeg";
import prayer from "../assets/images/doctor.jpeg";
import patienteng from "../assets/images/doctorApp.jpeg";
import telehealth from "../assets/images/doctor_mobile.jpeg";
import other from "../assets/images/other.jpg";
import SliderCard from "../components/slider/SliderCard";
import Header from "../components/Header";

const Home = () => {
  const cardList = [
    {
      id: 1,
      image: pedia,
      title: "Pediatrics",
      subTitle: "Ouchie",
    },
    {
      id: 2,
      image: prayer,
      title: "Prayers & Providers",
      subTitle: "The data exchange of the future",
    },
    {
      id: 3,
      image: patienteng,
      title: "Patient Engagement",
      subTitle: "Scheduling made easy",
    },
    {
      id: 4,
      image: telehealth,
      title: "Telehealth",
      subTitle: "In a Mobile world",
    },
    {
      id: 5,
      image: other,
      title: "Contacts",
      subTitle: "Other Contacts",
    },
  ];

  const { show, toggle } = useModal(false);
  const [activeCard, setActiveCard] = useState({});
  const onCardButtonClick = (card) => {
    setActiveCard(card);
    toggle();
  };

  return (
    <main>
      <Header />
      <div class="banner_wrapper" data-componentname="health-anner">
        <div class="banner-content">
          <div class="container bamner-container">
            <div class="align-left-banner">
              <div>
                <div class="banner-heading">
                  <p>
                    <span>athenaClinicals ®</span>
                  </p>
                </div>
                <div class="banner-title">
                  An <strong>EHR</strong> that lets you focus on delivering care
                </div>
              </div>{" "}
              <a className="one-button" href="javascript:void(0)">
                Schedule a 1:1 meeting
              </a>
            </div>
          </div>
          <img
            src="https://caas.athenahealth.com/sites/default/files/BANR_MOC_FemaleRN_MalePat_ExamRoom_DGT.jpg"
            alt="Moment-of-Care_FemaleRN_Male-Patient_Exam-Room"
          />
        </div>
      </div>
      <Slider>
        {cardList.map((card) => (
          <SliderCard
            onButtonClick={() => onCardButtonClick(card)}
            imgSrc={card.image}
            title={card.title}
            subTitle={card.subTitle}
          />
        ))}
      </Slider>
      <Footer />
      <CustomModal show={show} onClose={() => toggle()}>
        <div className="modal__card__contents">
          <div className="modal__card__img">
            <img src={activeCard.image} />
          </div>
          <div className="modal__card__desc">
            <div className="card__desc">
              <h4>{activeCard.title}</h4>
              <h3>{activeCard.subTitle}</h3>
            </div>
            <div class="item__body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </CustomModal>
    </main>
  );
};

export default Home;
