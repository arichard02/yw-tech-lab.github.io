import React from 'react';
import Nav from '../components/Nav.jsx';
const Bio = () => {
  return (
    <>
      <Nav />
      <section className="panel">
        <div className="two-column-layout">
          <h2 className="md:col-span-2">About Me</h2>
          <div>
            <p className="body-text">
              I'm a front-end web developer with a passion for solving complex problems and turning
              ideas into intuitive, functional websites. My background in customer support and
              healthcare taught me to stay curious, think critically, and always focus on helping
              people — skills I now bring to every project I code. I love using both logic and
              creativity to build user-centered products that make a real impact. My process is
              grounded in research, collaboration, and a commitment to continuous learning. I'm
              excited to contribute to teams that value thoughtful design, clear communication, and
              purposeful development.
            </p>
            <p className="body-text">
              Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
              tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
              fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia
              integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos.
            </p>
          </div>
          <div className="bg-indigo-100">
            <div className="p-16 flex justify-center items-center h-full min-h-[300px]">
              <p>Maybe a picture here?</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;
