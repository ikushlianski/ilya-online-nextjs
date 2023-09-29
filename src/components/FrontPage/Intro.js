import React from 'react';

import { Button } from '../../ui-kit';

import './Intro.scss';
import { getLinkByAlias } from '../../utils/getLinkByAlias';

export const Intro = () => (
  <div className="Intro">
    <div className="Intro__Mobile hidden-md">
      <img src="/ilya.jpeg" alt="Ilya Kushlianski" className="Intro__Image" />
      <p className="Intro__Primary">Ilya Kushlianski</p>
      <p className="Intro__Secondary">
        {process.env.MODE === 'fs' ? 'Full-stack Javascript' : 'Front-End'}{' '}
        Developer
      </p>
    </div>
    <div className="Intro__Desktop shown-md">
      {/*<img src="/cover-photo-main2-optimized.jpeg" alt="Ilya Kushlianski" className="Intro__ImageDesktop" />*/}
      <div className="Intro__DesktopOverlay shown-md" />
      <div className="Intro__DesktopInfoContainer">
        <p className="Intro__PrimaryDesktop shown-md">Ilya Kushlianski</p>
        <p className="Intro__SecondaryDesktop shown-md">
          {process.env.MODE === 'fs' ? 'Full-stack Javascript' : 'Front-End'}{' '}
          Developer
        </p>
        <div className="Intro__Controls shown-md">
          <Button inverted href={getLinkByAlias('cv')}>
            See my CV
          </Button>
        </div>
      </div>
    </div>
  </div>
);
