import React from "react";
import image from "../images/education.jpg";

const imageAltText = "purple and blue abstract background";
const Education = () => {
  const educationDetails = [
    {
      institution: "Sreyas Institute of Engineering and Technology",
      degree: "Btech Computer Science",
      year: "2024",
    },
    { institution: "Sri Chaitanya Junior College", degree: "MPC", year: "2020" },
    { institution: "Bhashyam High School", degree: "SSC", year: "2018" },
  ];

  return (
    <section className="padding" id="education">
      <img className="background" src={image} alt={imageAltText} />

      <div
        style={{
          backgroundColor: "white",
          width: "55%",
          padding: "20px",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>Education</h2>
        <div className="education-grid">
          {educationDetails.map((edu, index) => (
            <div className="education-cell" key={index}>
              <h3>{edu.institution}</h3>
              <p>
                {edu.degree} - {edu.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
