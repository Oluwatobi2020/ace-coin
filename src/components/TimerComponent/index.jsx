import dayjs from "dayjs";

const MyTimer = () => {


  const newTime = dayjs().format("hhmm")

  const result = newTime.match(/.{1,1}/g) || [];


  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "20px" }}>
        <span
          className="timerStyle"
        >
          {result[0]}
        </span>
        <span
          className="timerStyle_1"
        >
          {result[1]}
        </span>
        <span style={{ fontWeight: "600", fontSize: "0.75em", margin:"0 0.5rem 0 0.5rem" }}>:</span>

        <span
          className="timerStyle"
        >
          {result[2]}
        </span>
        <span
          className="timerStyle"
        >
          {result[3]}
        </span>
      </div>
    </div>
  );
};

export default MyTimer;
