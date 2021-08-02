import React from "react";
import { Container } from "react-bootstrap";

function TwoColPage({ title, data }) {
  const itemStyle = { color: "#d2d2d2", paddingTop: "1rem" };
  return (
    <Container className="my-5">
      <Container className="my-5 text-uppercase" style={{ color: "#d2d2d2" }}>
        <h2>{title}</h2>
      </Container>
      <div className="row">
        {data.map((val, idx) => {
          return (
            <Container
              key={idx}
              className="col-sm-6 mt-3 acc"
            >
              <div style={itemStyle}>
                {val.type==="text" ? (
                  <p style={{ textAlign: "left" }}>
                      {val.text}
                  </p>
                ) : (
                  <img width="85%" alt={val.type} src={val.url}></img>
                )}
              </div>
            </Container>
          );
        })}
      </div>
    </Container>
  );
}

export default TwoColPage;
