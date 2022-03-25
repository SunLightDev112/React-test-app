import React, { FC } from "react";
import "./Home.scss";
import Number1 from "../assets/number1.svg";
import Number2 from "../assets/number2.svg";
import Number3 from "../assets/number3.svg";

interface HomeContentProps {
  step: number;
  setStep: (step: number) => void;
}

const HomeContent: FC<HomeContentProps> = ({
  step,
  setStep,
}: HomeContentProps) => {
  const handleClick = () => {
    if (step > 0 && step < 4) {
      setStep(step + 1);
    }
  };

  return (
    <div id="home-content">
      {step === 0 && (
        <div className="home-main">
          <p className="heading">Welcome to Mission: Mentor!</p>
          <p className="description">
            Here’s a quick run-through on how to use our app.
          </p>
        </div>
      )}
      {step > 0 && (
        <div className="home-info" onClick={handleClick}>
          <img src={step === 1 ? Number1 : step === 2 ? Number2 : Number3} alt="" />
        </div>
      )}
    </div>
  );
};

export default HomeContent;
