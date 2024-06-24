import "./WorkCard.css";
import WorkCard from "../WorkCards/WorkCard";
import WorkCardData from "../WorkCardData/WorkCardData";

const Work = () => {
  return (
    <div className="work">
      <div className="work__cont">
        <h3 className="work__heading">Project</h3>
        <div className="work__proj">
          {WorkCardData.map((val, index) => {
            return (
              <WorkCard
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
