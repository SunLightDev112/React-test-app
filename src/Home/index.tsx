import React, { FC, useState } from "react";
import "./Home.scss";
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import HomeContent from "./HomeContent";

interface HomeProps {}

const Home: FC<HomeProps> = (_props: HomeProps) => {
  const [step, setStep] = useState(0);
  return (
    <div id="home-container">
      {step !== 0 && <HomeHeader step={step}/>}
      <HomeContent step={step} setStep={setStep} />
      <HomeFooter step={step} setStep={setStep} />
    </div>
  );
};

export default Home;
