import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import './Skill.css';
import LogoLoop from '../LogoLoop/LogoLoop';
import { GitHubActivityGrid } from '../wensity/github-activity-grid';

const GITHUB_USERNAME = 'AadarshDubey-dotcom';

const Skill = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activityDays, setActivityDays] = React.useState([]);
  const [activityStatus, setActivityStatus] = React.useState('loading');

  React.useEffect(() => {
    const controller = new AbortController();

    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error('GitHub activity request failed');
        return response.json();
      })
      .then((data) => {
        setActivityDays(data.contributions || []);
        setActivityStatus('ready');
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setActivityStatus('error');
      });

    return () => controller.abort();
  }, []);

  return (
    <motion.section 
      id="skills" 
      className="skills"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <h1>Teach Skill</h1>
      <div className="logo-loop-wrapper">
        <LogoLoop />
      </div>
      <div className="github-activity-wrapper">
        {activityStatus === 'loading' && <p className="github-activity-status">Loading GitHub activity...</p>}
        {activityStatus === 'error' && <p className="github-activity-status">GitHub activity is unavailable right now.</p>}
        <GitHubActivityGrid
          days={activityDays}
          cellSize={11}
          cellGap={3}
          className="github-activity-grid"
        />
      </div>

    </motion.section>
  )
}

export default Skill