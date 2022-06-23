import React from "react";
import { Nav } from "react-bootstrap";
import redesig from "../../images/icono-4.png";
import redesface from "../../images/icono-1.png";
import redestw from "../../images/icono-3.png";
import redeswp from "../../images/icono-2.png";
const Redes =()=>{
    return( <div className=" redes-efiener">
    <Nav.Item>
      <Nav.Link>
        <img
          className="logo-coope-home"
          src={redesface}
          alt="logo-coope-face"
        />
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <img
          className="logo-coope-home"
          src={redeswp}
          alt="logo-coope-ig"
        />
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <img
          className="logo-coope-home"
          src={redestw}
          alt="logo-coope-tw"
        />
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <img
          className="logo-coope-home"
          src={redesig}
          alt="logo-coope-ig"
        />
      </Nav.Link>
    </Nav.Item>
  </div>)
}
export default Redes;