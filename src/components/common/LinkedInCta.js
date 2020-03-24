import React from 'react';

import './LinkedInCta.scss';

export const LinkedInCta = ({ open, setOpen }) => {
  return (
    open && (
      <div className="LinkedInCta">
        <div className="LinkedInCta__Header">
          <div className="LinkedInCta__Message">
            <div>Let us talk!</div>
            <div className="LinkedInCta__Close" onClick={() => setOpen(false)}>
              {'×'}
            </div>
          </div>
          <div
            className="LI-profile-badge"
            data-version="v1"
            data-size="medium"
            data-locale="en_US"
            data-type="vertical"
            data-theme="dark"
            data-vanity="ilya-kushlianski"
          >
            <a
              className="LI-simple-link"
              href="https://by.linkedin.com/in/ilya-kushlianski?trk=profile-badge"
            >
              Ilya Kushlianski
            </a>
          </div>
        </div>
      </div>
    )
  );
};
