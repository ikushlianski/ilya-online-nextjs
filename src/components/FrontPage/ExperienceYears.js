import React from 'react';

import { getOverallExperienceInYears } from '../../services/experience.service';

import './ExperienceYears.scss';

export const ExperienceYears = () => {
  const overallYears = getOverallExperienceInYears();

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
