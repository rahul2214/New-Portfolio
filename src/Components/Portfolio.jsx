import React from "react";
import image from "../images/portfolio.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Hospitality",
    description:
      "Developed a Hospitality using ReactJS and NodeJS, allowing users to book rooms and hotels to manage availability using JSON as the DB.",
    url: "https://github.com/rahul2214/Hospitality",
  },
  {
    title: "Company Budget Calculation",
    description:
      "The development of a budget calculation app using React JS and Node JS, enhancing companies' financial planning and decision-making.",
    url: "https://github.com/rahul2214/Company-Budget-Calculation",
  },
  {
    title: "Job Portal",
    description:
      "Developed a job portal using HTML, CSS, JavaScript, PHP, and MySQL, streamlining job applications and vacancy postings.",
    url: "https://github.com/rahul2214/Job-Portal",
  },
  {
    title: "Reminders With Face Recognition",
    description:
      "developed a reminders system integrated with face recognition using AIML, providing personalized reminders based on facial recognition.",
    url: "https://github.com/rahul2214/Reminders-With-Face-Recognition",
  },
  {
    title: "Landing Page",
    description: "I crafted a professional landing page leveraging Next.js and Tailwind CSS.",
    url: "https://github.com/rahul2214/wasserstoff-FrontendTask",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
