import React from 'react';

import './ExperienceYears.scss';

export const ExperienceYears = () => {
  const webDevWorksStart = new Date('Jun 1, 2016');
  const msInYear = 3.154e10;

  const overallYears = round((Date.now() - webDevWorksStart) / msInYear);

  return (
    <div className="Experience">
      <div className="Experience__Block">
        <div className="Experience__Years">
          <span className="Experience__Number Experience__Number--big">
            {overallYears}
          </span>{' '}
          <span className="Experience__YearsWord">years</span>
        </div>

        <div className="Experience__Text">
          of exciting web development journey
        </div>
      </div>
    </div>
  );
};

const round = date => Math.round(date * 2) / 2;
