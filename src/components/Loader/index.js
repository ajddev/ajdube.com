import ReactVivus from "react-vivus";
import AJD from "../../assets/images/vector.svg";
import "./index.css";

const Loader = () => {
  function done() {
    const el = document.getElementById("ajd");
    el.classList.add("finished");
    setTimeout(() => {
      el.style.animation = "fadeOut 0.5s";
    }, 2000);
  }
  return (
    <ReactVivus
      id="ajd"
      option={{
        file: AJD,
        type: "sync",
        animTimingFunction: "EASE",
        duration: 50,
      }}
      style={{
        height: "300px",
        width: "250px",
        fillOpacity: "0",
        transition: "fill-opacity 1s",
      }}
      callback={done}
    />
  );
};

export default Loader;
