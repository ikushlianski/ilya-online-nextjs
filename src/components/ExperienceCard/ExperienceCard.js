import React from 'react';

import './ExperienceCard.scss';

export const ExperienceCard = ({
  company,
  dates,
  position,
  projectDescription,
  techStack,
  responsibilities,
}) => {
  return (
    <div className="ExperienceCard">
      <div className="ExperienceCard__TopSection">
        <div className="ExperienceCard__Company">
          <small className="ExperienceCard__SectionTitle">Company</small>
          <div>{company}</div>
        </div>
        <div className="ExperienceCard__Position">
          <small className="ExperienceCard__SectionTitle">Position</small>
          <div>{position}</div>
        </div>
        <div className="ExperienceCard__Dates">
          <small className="ExperienceCard__SectionTitle">Dates</small>
          <span>{dates}</span>
        </div>
      </div>
      {(projectDescription || techStack) && (
        <div className="ExperienceCard__MiddleSection">
          {projectDescription && (
            <div className="ExperienceCard__ProjectDescription">
              <small className="ExperienceCard__SectionTitle">
                Project description
              </small>
              <div className="ExperienceCard__ProjectDescriptionText">
                {projectDescription}
              </div>
            </div>
          )}
          {techStack && (
            <div className="ExperienceCard__TechStack">
              <small className="ExperienceCard__SectionTitle">
                Technologies
              </small>
              <div className="ExperienceCard__TechStackText">{techStack}</div>
            </div>
          )}
        </div>
      )}
      <div className="ExperienceCard__BottomSection">
        <div className="ExperienceCard__Responsibilities">
          <small className="ExperienceCard__SectionTitle">
            Responsibilities
          </small>
          <ul className="ExperienceCard__ResponsibilitiesList">
            {responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
