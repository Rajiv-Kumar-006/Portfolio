import React from "react";
import skills from "./data/Data/skills.json";
const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1 data-aos="zoom-in-up"
          data-aos-duration="1000">SKILLS</h1>
        <div className="items" >
          {skills.map((data) => {
            return (
              <>
                <div className="item bg-dark" key={data.id} data-aos="flip-left"
                  data-aos-duration="1000">
                  <img src={`/assets/Images/${data.imageSrc}`} alt="" />
                  <h3>{data.title}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
