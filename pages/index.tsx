import Head from "next/head";
import Image from "next/image";
import styles from "../styles/LandingPage/Home.module.css";
import styled from "@emotion/styled";
import { darkTheme } from "../theme/themes";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@mui/material";
import { Values } from "../components/LandingPage/Values";

import { Header } from "../components/LandingPage/Header";
import { Products } from "../components/LandingPage/Products";
import { Testimonials } from "../components/LandingPage/Testimonials";

const ImageAndInfoDiv = styled("div")`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

const InfoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: calc(100vw - 500px);
  text-align: left;
  align-items: left;
`;

const StyledParagh = styled("p")`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  text-align: left;
  text-justify: inter-word;
  margin-top: 20px;
`;

const SnowRobotImage = styled(Image)`
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  filter: grayscale(50%);
  transition: all 0.3s ease;
  border: 2px solid white;

  &:hover {
    filter: grayscale(0%);
    transform: translateY(-5px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.25);
    border: 2px solid ${darkTheme.primaryColor};
  }
`;

const BuyNowButton = styled(Button)`
  position: relative;
  border-radius: 20px;
  text-transform: none;
  width: 100px;
  color: ${darkTheme.primaryColor};
`;

const LandingDiv = styled("div")`
  height: 60vh;
  width: 100%;
  display: flex;
  flex: 1;
  background-color: ${darkTheme.backgroundColor02};
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

const LandingHeader = styled("h1")`
  width: 50vw;
  justify-content: center;
  span {
    color: ${darkTheme.primaryColor04};
  }
`;

const CustomSubtitle = styled("p")`
  color: #949494;
`;

const ExploreProductsButtonDiv = styled("div")`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ExploreProductsButton = styled(Button)`
  display: inline-block;
  position: relative;
  z-index: 0;
  whitespace: no-wrap;
  color: ${darkTheme.primaryColor};
  font-family: "Open Sans";
  width: 300px;
  height: 50px;

  ::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    z-index: -1;
    filter: blur(4px);
    width: calc(100% + 3px);
    height: calc(100% + 3px);
    opacity: 1;
    background-image: linear-gradient(
      45deg,
      #ffffff,
      ${darkTheme.primaryColor},
      ${darkTheme.primaryColor02},
      ${darkTheme.primaryColor03},
      ${darkTheme.primaryColor04},
      ${darkTheme.primaryColor05}
    );
    animation: coolgradient 10s linear 0s infinite alternate;
    transition: opacity 0.3s ease-in-out 0s;

    @keyframes coolgradient {
      from {
        background-position: -250px 0;
      }
      to {
        background-position: 250px 0;
      }
    }
  }

  ::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(17, 17, 17);
    left: 0px;
    top: 0px;
  }
`;

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Head>
          <title>Snowbotics</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <LandingDiv>
          <LandingHeader>
            Unleash the <span>power</span> of high-performance snow blowers with{" "}
            <span>SnowBot.</span>
          </LandingHeader>
          <CustomSubtitle>
            No installations. Comes prepackaged with all features and more!
          </CustomSubtitle>
          <ExploreProductsButtonDiv>
            <ExploreProductsButton>Explore Products</ExploreProductsButton>
          </ExploreProductsButtonDiv>
        </LandingDiv>
      </div>
      <main className={styles.main}>
        <ImageAndInfoDiv>
          <SnowRobotImage
            src="/images/products/snowrobot.png"
            height={220}
            width={400}
            alt="Snow Plougher"
            style={{}}
          />
          <InfoContainer>
            <TypeAnimation
              sequence={[
                "I am SnowBot!",
                1000,
                "I am easy to use!",
                1000,
                "I am smart!",
                1000,
                "I require minimal maintenance!",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "2rem",
                color: darkTheme.primaryColor,
              }}
            />
            <StyledParagh>
              Introducing our state-of-the-art snow clearing robot - the perfect
              solution for clearing snow from driveways, sidewalks, and other
              outdoor areas. Our robot is equipped with powerful brushes and a
              durable snow blower that can quickly and efficiently clear snow,
              even in the harshest winter conditions.
            </StyledParagh>
            <BuyNowButton variant="outlined">Buy now</BuyNowButton>
          </InfoContainer>
        </ImageAndInfoDiv>
      </main>
      <Values />
      <Products />
      <Testimonials />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
