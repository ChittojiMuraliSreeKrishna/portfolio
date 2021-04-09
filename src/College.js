import './College.css';

function College() {
  return (
    <div className="College">
      <h2 className="projects__title" id="college">College Projects</h2>
	<div className="projects container mt-5">
			<div className="card">
                    <div className="card-header">
					<h3 className="card-title mt-3">Summer Internship</h3>
                    </div>
				    <div className="card-body">
					<p className="card-text">I have done a dynamic messaging website named smart radio which uses HTML, CSS, javascriptas frontend, PHP as backend, MySQL store the information & googleTextToSpeechto convert the messages to speech, this has users and admins, users send the messages by logging inWhile admins have the right to play or Delete messages</p>
                    <img src="./images/college/cs5.png" alt="" className="card-img-bottom" />
                    <div className="card-footer">
                	<a href="https://github.com/ChittojiMuraliSreeKrishna/collegeProjects/tree/main/summerinternship/smartradio"
                  className="codebtn">CODE</a>
                    </div>
				</div>
			</div>
			<br />
			<div className="card">
                <div className="card-header">
					<h3 className="card-title mt-3">Mini Project</h3>
                </div>
				<div className="card-body">	
					<p className="card-text">I have done my mini-project on IOT named armySecuritySystem which sends co-ordinates by SMS or mail wheneverthe motion is detected, in this i have used PIR-sensor(HCSR-501), wifi-module(ESP8266), gsm-module(SIM800L), GPS-module(SIM28ML), so that when the PIR-sensor gets motion it wakes the system to send the message of the particular
                    location</p>
                    <img src="./images/college/cs9.jpg" alt="" className="card-img-bottom" />
                    <div className="card-footer">
                    <a href="https://github.com/ChittojiMuraliSreeKrishna/collegeProjects/tree/main/miniProject" 
                    className="codebtn">CODE</a>
                    </div>
				</div>
			</div>
	</div>
    </div>
  );
}

export default College;
