import React, { FC } from "react";
import "./Home.scss";
import NextImg from "../assets/next.svg";

interface HomeFooterProps {
  step: number;
  setStep: (step: number) => void;
}

const HomeFooter: FC<HomeFooterProps> = ({
  step,
  setStep,
}: HomeFooterProps) => {
  return (
    <div id="home-footer">
      {step === 0 && (
        <div className="footer-main" onClick={() => setStep(1)}>
          <p>Tab to continue</p>
          <img src={NextImg} alt="" />
        </div>
      )}

      {step === 3 && 
      <div className="start-button">Let’s get started!</div>}
    </div>
  );
};

export default HomeFooter;
