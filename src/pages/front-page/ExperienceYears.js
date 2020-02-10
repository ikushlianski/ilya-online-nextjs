import React from 'react';

import './ExperienceYears.scss';

export const ExperienceYears = () => {
  const webDevStudiesStart = new Date('Jun 1, 2016');
  const prodStart = new Date('Jun 4, 2018');
  const msInYear = 3.154e10;

  const overallYears = round((Date.now() - webDevStudiesStart) / msInYear);
  const prodExperience = round((Date.now() - prodStart) / msInYear);

  return (
    <div className="Experience">
      <div className="Experience__Block">
        <div className="Experience__Years">
          <span className="Experience__Number Experience__Number--big">
            {prodExperience}
          </span>{' '}
          <span className="Experience__YearsWord">years</span>
        </div>
        <div className="Experience__Text">production experience</div>
      </div>
      <div className="Experience__Block">
        <div className="Experience__Years">
          <span className="Experience__Number Experience__Number--big">
            {overallYears}
          </span>{' '}
          <span className="Experience__YearsWord">years</span>
        </div>

        <div className="Experience__Text">exciting web development journey</div>
      </div>
    </div>
  );
};

const round = date => Math.round(date * 2) / 2;
