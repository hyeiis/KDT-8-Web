import "./Worm.css";
import grass from "./grass.png";

const Warm = () => {
  return (
    <>
      <div className="parent">
        <div className="eye eye1"></div>
        <div className="eye eye2"></div>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5"></div>
        <img className="grass" src={grass} alt="grass" />
      </div>
    </>
  );
};

export default Warm;
