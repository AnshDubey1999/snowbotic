import React from "react";
import styled from "@emotion/styled";
import styles from "../../styles/LandingPage/Home.module.css";
import { testimonials } from "../../shared/constants";
import { TestimonialCard } from "./TestimonialCard";
import Marquee from "react-fast-marquee";
import { darkTheme } from "../../theme/themes";

const CustomSubtitle = styled("p")`
  color: #949494;
  margin-bottom: 50px;
`;

const TestimonialCardDiv = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  margin-top: 10vh;
`;

const Testimonials = () => {
  return (
    <div className={styles.testimonialsContainer}>
      <h1>What Our Testimonials Says</h1>
      <CustomSubtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </CustomSubtitle>
      <Marquee gradientColor={[18, 18, 18]}>
        {testimonials.map((testimonial) => (
          <TestimonialCard {...testimonial} key={testimonial.id} />
        ))}
      </Marquee>
    </div>
  );
};

export { Testimonials };
