import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yahyo Sobirjonov </span>
            from <span className="purple"> Busan, South Korea.</span>
            <br /> Finished School in exact Languages and science in Tashkent.
                   Completed World Languages Lyceum in Tashkent,Uzbekistan..
            <br />
            Also being a top student with an honor diploma enrolled to Ulsan University & College in South Korea by earning full points (110/110) and graduated the university Computer Science and Technology engineering with 3+ years of experience in a full-stack web development. 
            Excels at Python (Django) and JavaScript-based technologies.
            <br />
            <br />
            Passionate on reading books, coding and Mixed martial art. Possesses advanced (C1) (IELTS 7+)level of English and Korean Level of 5+ .
            Experience on Data Science and Artificial Intelligence: Matplotlib,Scikit learn,Seaborn,Tenserflow,Numpy,Keras,Pandas,Pytorch.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Yahyo Sobirjonov</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
