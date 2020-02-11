import React from 'react';

export const HireMe = ({ lookingForJob, mainSkills }) => {
  return (
    <div className="HireMe">
      <div>If you are interested, consider hiring me!</div>

      {lookingForJob ? (
        <>
          <div className="HireMe__LiveIndicator"></div>
          <div className="HireMe__LiveText">Considering new opportunities</div>
        </>
      ) : (
        <div className="HireMe__Later">
          I am not currently looking for new opportunities but would be glad to
          stay in touch!
          <div className="HireMe__SocialLink">LinkedIn</div>
        </div>
      )}

      <div className="HireMe__MainSkills">
        {/* TODO: make it dynamic: mainSkills */}
        <div className="HireMe__MainSkillsHeader">My main skills</div>
        <div className="HireMe__MainSkill">React</div>
        <div className="HireMe__MainSkill">Typescript</div>
        <div className="HireMe__MainSkill">Node.js</div>
      </div>
      <div className="HireMe__Controls">
        <button>Skills button</button>
        <button>CV button</button>
      </div>
    </div>
  );
};
