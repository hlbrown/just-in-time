import React from "react";
// importing 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "index.css";
import { Avatar } from "@material-ui/core";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {/* <ArrowBackIos style={{ color: "black", fontSize: "55px" }} /> */}
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {/* <ArrowForwardIos style={{ color: "black", fontSize: "55px" }} /> */}
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
    >
      <div style={{ width: "80%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 10, color: "black" }}>TESTIMONIALS</h1>
        <Slider  prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} >
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
        </Slider>
      </div>
    </div>
  );
};
const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "white",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid black",
          padding: 1.5,
          marginBottom: 5,
        }}
      />
      <p>
        Acne astigmatism blood glucose level chronic er external otitis
        farsighted lacrimal glands larynx nearsighted nicotine pulse sebaceous
        glands triggers urticaria whitehead. Blood glucose meter blood type
        bronchoconstriction contact lenses lung function tests nits papillae
        polyphagia retinopathy retractions rheumatologist vitreous body.
      </p>
      <p style={{ fontStyle: "italic", marginTop: 15 }}>
        <span style={{ fontWeight: 1000, color: "black" }}>
          FirstName LastName
        </span>
        , OccupationTitle
      </p>
    </div>
  );
};

export default Testimonial;
