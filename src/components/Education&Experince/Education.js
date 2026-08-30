import React, { useState } from 'react';
import './Education.css';

const Education = () => {
  const [activeSection, setActiveSection] = useState('experience');

  const education = [
    { id: 1, degree: 'B.Tech - CS & IT', institution: 'Chameli Devi Group', year: '2024 - 2028' },
    { id: 2, degree: 'Higher Secondary (PCM)', institution: 'Brilliant Academy', year: '2012 - 2024' }
  ];

  const experience = [
    {
      id: 1,
      role: 'Campus Ambassador',
      company: 'GeeksforGeeks',
      duration: '6 months',
      description: 'Promoted coding culture, organized events, built leadership skills.'
    }
  ];

  const certificates = [
    { id: 1, title: 'Python Basics', issuer: 'CICO', year: '2026', image: 'python.png' },
    { id: 2, title: 'Linux Fundamentals', issuer: 'Redhat', year: '2025', image: 'redhat.jpeg' },
    { id: 3, title: 'Cloud Essentials', issuer: 'AWS', year: '2026', image: 'AWS.png' }
  ];

  const renderContent = () => {
    if (activeSection === 'education') {
      return (
        <div className="horizontal-box">
          <div className="horizontal-content">
            {education.map((edu) => (
              <div key={edu.id} className="card">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <p>{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeSection === 'experience') {
      return (
        <div className="horizontal-box">
          <div className="horizontal-content single-column">
            {experience.map((exp) => (
              <div key={exp.id} className="card">
                <h3>{exp.role}</h3>
                <p>{exp.company}</p>
                <p>{exp.duration}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="edu-scroll-box-horizontal">
        <div className="edu-scroll-content-horizontal">
          {certificates.concat(certificates).map((cert, index) => (
            <div key={`${cert.id}-${index}`} className="card cert-card">
              <img src={cert.image} alt={cert.title} className="cert-img" />
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <p>{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="education-container">
      <div className="sidebar">
        <h2
          className={activeSection === 'experience' ? 'active' : ''}
          onMouseEnter={() => setActiveSection('experience')}
        >
          Experience
        </h2>
        <h2
          className={activeSection === 'education' ? 'active' : ''}
          onMouseEnter={() => setActiveSection('education')}
        >
          Education
        </h2>
        <h2
          className={activeSection === 'certificates' ? 'active' : ''}
          onMouseEnter={() => setActiveSection('certificates')}
        >
          Certificates
        </h2>
      </div>

      <div className="content-area">{renderContent()}</div>
    </div>
  );
};

export default Education;
