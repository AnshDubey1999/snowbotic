import React from "react";
import styled from "@emotion/styled";
import styles from "../../styles/LandingPage/Home.module.css";
import { productsSummary } from "../../shared/constants";
import { ValueCard } from "./ValueCard";
import { SummaryProductCard } from "./SummaryProductCard";
import { Grid } from "@mui/material";

const CustomSubtitle = styled("p")`
  color: #949494;
`;

const ProductsDiv = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  margin-top: 10vh;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <h1>Our Products</h1>
      <CustomSubtitle>
        Built on a foundation of socioeconomic sustainability, Snowbotics
        delivers innovative, all-electric snow removal solutions
      </CustomSubtitle>
      <ProductsDiv>
        {productsSummary.map((product) => (
          <SummaryProductCard {...product} key={product.id} />
        ))}
      </ProductsDiv>
    </div>
  );
};

export { Products };
