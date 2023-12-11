import { useState } from "react";
import "./index.css";
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import { BiReset } from "react-icons/bi";

const CountDown = () => {
  const [inputMinutes, setInputminutes] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handlePlay = () => {};
  const handlePause = () => {};
  const handleReset = () => {};

  const handleMinutesChange = (e) => {
    const inputValue = e.target.value;
    const newMinutes =
      inputValue !== "" ? Math.max(0, parseInt(inputValue, 10)) : 0;
    setInputminutes(newMinutes);
    setMinutes(newMinutes);
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="countdown">
      <div>
        <div>
          <p>Enter Minutes</p>
          <input
            min="0"
            className="inputMinutes"
            value={minutes > 0 ? inputMinutes : ""}
            onChange={handleMinutesChange}
          />
        </div>

        <div className="buttons">
          <FaPlayCircle onClick={handlePlay} />
          <FaCirclePause onClick={handlePause} />
          <BiReset onClick={handleReset} />
        </div>
      </div>
    </div>
  );
};

export default CountDown;
