import React from 'react';

import { Button } from '../ui-kit/Button';

import './MyTopSkills.scss';

export const MyTopSkills = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [topSkills, setTopSkills] = React.useState([]);

  // in a bigger app we would use some kind of `client` for api requests
  // but in this one, let's do with simple `fetch`es
  React.useEffect(() => {
    setLoading(true);

    fetch(`${process.env.API_URL}/skills/top`)
      .then(res => res.json())
      .then(skills => {
        setTopSkills(skills);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading top skills', error);
        setError('Could not load top skills');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="MySkills">
        <div className="MySkills__Loading">Loading skills...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="MySkills">
        <div className="MySkills__Error">
          <p>An error occurred</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="MySkills">
      {topSkills.length > 0 ? (
        <>
          <h2 className="MySkills__Header">Major skills</h2>
          <div className="MySkills__SkillsList">
            {topSkills.map(skill => (
              <div className="MySkills__Box" key={skill.id}>
                <img
                  className="MySkills__Skill"
                  src={`/${skill.image}`}
                  alt={skill.name}
                />
              </div>
            ))}
          </div>
          {topSkills.length > 0 && (
            <div className="MySkills__Controls">
              <Button href="/skills" inverted>
                Explore all my skills
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="MySkills__NotFound">No top skills found</div>
      )}
    </div>
  );
};
