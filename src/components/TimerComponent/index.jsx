import { useTimer } from "react-timer-hook";

const MyTimer = ({ expiryTimestamp }) => {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "20px" }}>
        <span
          style={{
            textAlign: "center",
            fontSize: "0.75em",
            color: "#fff",
            background: "#1D2A53",
            padding: "0.6rem",
            borderRadius: "7px",
            fontWeight: "600",
            marginRight: "0.5rem",
          }}
        >
          {minutes}
        </span>
        <span style={{ fontWeight: "600", fontSize: "0.75em" }}>:</span>
        <span
          style={{
            textAlign: "center",
            fontSize: "0.75em",
            color: "#fff",
            background: "#1D2A53",
            padding: "0.6rem",
            borderRadius: "7px",
            fontWeight: "600",
            marginLeft: "0.5rem",
          }}
        >
          {seconds}
        </span>
      </div>
    </div>
  );
};

export default MyTimer;
