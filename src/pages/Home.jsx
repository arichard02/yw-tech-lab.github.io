import React from 'react';
import Projects from '../components/Projects.jsx';
import Nav from '../components/Nav.jsx';

export default function Home() {
  return (
    <>
      <Nav isHome={true} />

      {/* Top Banner */}
      <div className="bg-background-50">
        <div className="panel">
          <h1 className="text-center text-blue-600 text-7xl">Adwaina Richardson</h1>
          <p className="body-text-large max-w-2xl mx-auto text-center">
            "Transforming ideas into intuitive, user-focused digital experiences through creativity,
            collaboration, and seamless code."
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="panel">
        <h2>About Me</h2>
        <p className="body-text-large">
          I'm a front-end web developer with a passion for solving complex problems and turning
          ideas into intuitive, functional websites. My background in customer support and
          healthcare taught me to stay curious, think critically, and always focus on helping people
          — skills I now bring to every project I code. I love using both logic and creativity to
          build user-centered products that make a real impact. My process is grounded in research,
          collaboration, and a commitment to continuous learning. I'm excited to contribute to teams
          that value thoughtful design, clear communication, and purposeful development.
        </p>
      </div>

      <Projects />
    </>
  );
}
