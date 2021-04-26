import Intro from "./Intro";
import { useState } from "react";
import College from "./College";
import Certificate from "./Certificate";
import Aboutme from "./Aboutme";
import Personal from "./Personal";
import Moreprojects from "./Moreprojects";

const Body = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      heading: "Summer InternShip",
      img:
        "https://raw.githubusercontent.com/ChittojiMuraliSreeKrishna/images/main/images/college/cs5.png",
      text:
        "have done a dynamic messaging website named smart radio which uses HTML, CSS, javascript as frontend, PHP as backend, MySQL store the information & googleTextToSpeech to convert the messages to speech, this has users and admins, users send the messages by logging inWhile admins have the right to play or Delete messages",
      btn:
        "https://github.com/ChittojiMuraliSreeKrishna/collegeProjects/tree/main/summerinternship/smartradio",
    },
    {
      id: 2,
      heading: "Mini Project",
      img:
        "https://raw.githubusercontent.com/ChittojiMuraliSreeKrishna/images/main/images/college/cs9.jpg",
      text:
        "I have done my mini-project on IOT named armySecuritySystem which sends co-ordinates by SMS or mail whenever the motion is detected, in this i have used PIR-sensor(HCSR-501), wifi-module(ESP8266), gsm-module(SIM800L), GPS-module(SIM28ML), so that when the PIR-sensor gets motion it wakes the system to send the message of the particular location",
      btn:
        "https://github.com/ChittojiMuraliSreeKrishna/collegeProjects/tree/main/miniProject",
    },
  ]);
  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };
  const toggleImage = (id) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, img: !project.img } : project
      )
    );
  };
  return (
    <div className="Body container">
      <Intro />
      {projects.length > 0 ? (
        <College
          projects={projects}
          onDelete={deleteProject}
          onToggle={toggleImage}
        />
      ) : (
        "Reload The Page To Get The Data"
      )}
      <Certificate />
      <Aboutme />
      <Personal />
      <Moreprojects />
    </div>
  );
};
export default Body;
