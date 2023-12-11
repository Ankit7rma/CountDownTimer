import { useEffect, useState } from "react";
import "./index.css";
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import { BiReset } from "react-icons/bi";

const CountDown = () => {
  const [inputMinutes, setInputminutes] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const hours = 0;

  useEffect(() => {
    let countdownInterval;

    if (isActive) {
      countdownInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            clearInterval(countdownInterval);
            setIsActive(false);
          }
        }
      }, 1000);
    }

    return () => clearInterval(countdownInterval);
  }, [isActive, minutes, seconds]);

  const handlePlay = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };
  const handleReset = () => {
    setIsActive(false);
    setMinutes(inputMinutes);
    setSeconds(0);
  };
  const handlePause = () => {
    setIsActive(false);
  };

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

        <span className="buttons">
          <FaPlayCircle onClick={handlePlay} disabled={isActive} />
          <FaCirclePause onClick={handlePause} disabled={!isActive} />
          <BiReset onClick={handleReset} />
        </span>
        <span>
          <p className="display">
            {hours >= 0 && `${hours.toString().padStart(2, "0")}:`}
            {`${minutes.toString().padStart(2, "0")}:${seconds
              .toString()
              .padStart(2, "0")}`}
          </p>
        </span>
      </div>
    </div>
  );
};

export default CountDown;
