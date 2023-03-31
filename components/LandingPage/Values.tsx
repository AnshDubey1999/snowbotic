import React from "react";
import styled from "@emotion/styled";
import styles from "../../styles/LandingPage/Home.module.css";
import { ourValues } from "../../shared/constants";
import { ValueCard } from "./ValueCard";

const CustomSubtitle = styled("p")`
  color: #949494;
`;

const ValueCardDiv = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  margin-top: 10vh;
  flex-wrap: wrap;
`;

const Values = () => {
  return (
    <div className={styles.valuesContainer}>
      <h1>Our Values</h1>
      <CustomSubtitle>
        Built on a foundation of socioeconomic sustainability, Snowbotics
        delivers innovative, all-electric snow removal solutions
      </CustomSubtitle>
      <ValueCardDiv>
        {ourValues.map((value) => (
          <ValueCard {...value} key={value.id} />
        ))}
      </ValueCardDiv>
    </div>
  );
};

export { Values };
