import React from "react";
import { Container } from "react-bootstrap";

function ThreeColPage({ data }) {
  return (
    <div className="border-theme">
      <div className="bg-dark">
        <Container style={{ padding: "5vw" }}>
          <div className="row">
            {data.map((item, idx) => {
                console.log(item)
              return (
                item.type === "img" && (
                  <Container
                    key={idx}
                    className="col-sm-6 col-lg-4 mt-3 acc position-relative text-center"
                  >
                    <div className="acc-hover">
                      <Container className="acc-description">
                        {item.desc}
                      </Container>
                      <img
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        alt={item}
                        src={item.url}
                      ></img>
                    </div>
                  </Container>
                )
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ThreeColPage;
