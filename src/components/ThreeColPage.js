import {React, useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import AdminFace from "./AdminFace";

function ThreeColPage({ data, title, isAdmin }) {

  console.log("isAdmin value passed to ThreeColPage:", isAdmin);
  return (
    <div className="border-theme">
      {title && (
        <Container className="my-5 text-uppercase" style={{ color: "#d2d2d2" }}>
          <h2>{title}</h2>
        </Container>
      )}
      <div className="bg-dark">
        <Container style={{ padding: "5vw" }}>
          <div className="row">
            {data.map((item, idx) => {
              return (
                item.type === "img" && (
                  <Container
                    key={idx}
                    className="col-sm-6 col-lg-4 mt-3 acc position-relative text-center"
                  >
                    {isAdmin && <AdminFace idx={idx} />}
                    <div className="acc-hover">
                      <Container className="acc-description">
                        {item.desc}
                      </Container>
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
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
