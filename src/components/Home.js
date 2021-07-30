import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  const imageNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <div className="border-theme">
      <div className="bg-dark">
        <Container style={{ padding: "5vw" }}>
          <div className="row">
            {imageNames.map((name, idx) => {
              return (
                <Container
                  key={idx}
                  className="col-sm-6 col-lg-4 mt-3 acc position-relative text-center"
                >
                  <div className="acc-hover">
                    <Container className="acc-description">
                      Description of the artwork
                    </Container>
                    <img
                      style={{
/*                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      width: "22vw",*/
                      width: '100%',
                        height: "auto",
                      }}
                      alt={name}
                      src={`https://www.designformusic.com/wp-content/uploads/2016/09/electro-synthwave-album-cover-500x500.jpg`}
                    ></img>
                  </div>
                </Container>
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
