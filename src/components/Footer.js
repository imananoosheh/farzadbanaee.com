import { React } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

function Footer() {
  const socialMedias = [
    "facebook-f",
    "soundcloud",
    "spotify",
    "linkedin-in",
    "twitter",
    "telegram-plane",
    "youtube",
  ];
  library.add(fab);

  return (
    <div className="border-theme">
      <Container className="d-flex justify-content-around align-items-center py-5">
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        {socialMedias.map((sc, idx) => {
          return (
            <a href="#" target="_blank">
              <FontAwesomeIcon
                key={idx}
                icon={["fab", sc]}
                color="white"
                size="lg"
              ></FontAwesomeIcon>
            </a>
          );
        })}
      </Container>
    </div>
  );
}

export default Footer;
