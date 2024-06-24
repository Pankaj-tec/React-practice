import "./WorkCard.css";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="work__card">
      <div className="work__img">
        <img src={props.imgsrc} alt="heroImg" className="hero__img" />
      </div>
      <h2 className="work__title">{props.title}</h2>
      <div className="work__details">
        <p>{props.text}</p>
        <div className="work__btns">
          <NavLink to="Url.com" className="btn">
            View
          </NavLink>
          <NavLink to="Url.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
