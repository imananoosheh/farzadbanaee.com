import { React } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

function Footer() {
  const socialMedias = [
    { iconName: "facebook-f", url: "https://www.facebook.com/" },
    { iconName: "soundcloud", url: "https://www.soundcloud.com/" },
    { iconName: "spotify", url: "https://www.spotify.com/" },
    { iconName: "linkedin-in", url: "https://www.linkedin.com/" },
    { iconName: "twitter", url: "https://www.twitter.com/" },
    { iconName: "telegram-plane", url: "https://www.telegram.com/" },
    { iconName: "youtube", url: "https://www.youtube.com/" },
  ];
  library.add(fab);

  return (
    <div className="border-theme">
      <Container className="d-flex justify-content-around align-items-center py-5">
        {socialMedias.map((sc, idx) => {
          const { iconName, url } = sc;
          return (
            <a key={idx} href={url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                key={idx}
                icon={["fab", iconName]}
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
