import React, { useState } from "react";

// Certificates
import certificate1 from "../Images/certificates/work1.png";
import certificate2 from "../Images/certificates/work2.png";
import certificate3 from "../Images/certificates/work3.png";
import certificate4 from "../Images/certificates/work4.png";

import "../Css/Certificate.css";

const Certificates = () => {
  const [certificates] = useState([
    {
      id: 1,
      img: certificate1,
    },
    {
      id: 2,
      img: certificate2,
    },
    {
      id: 3,
      img: certificate3,
    },
    {
      id: 4,
      img: certificate4,
    },
  ]);
  return (
    <div className="bodyCert">
      <p className="sideHeadings">Certificates</p>
      <div className="certificates">
        {certificates.map((certificate) => (
          <div className="certificate-items" key={certificate.id}>
            <img src={certificate.img} alt="" className="certificateImages" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
