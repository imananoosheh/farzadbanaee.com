import { React, useState } from "react";
import { Container } from "react-bootstrap";

function OneColPage({ title, data }) {
  const itemStyle = { color: "#d2d2d2" };
  const [descAnime, setDescAnime] = useState(false);
  return (
    <Container className="my-5">
      <Container className="my-5 text-uppercase" style={{ color: "#d2d2d2" }}>
        <h2>{title}</h2>
      </Container>
      <Container className="row">
        {data.map((item, idx) => {
          // return(img.type === "img" &&
          //     <img src={img.url} alt={img.url.slice(-20)}></img>
          // )

          return item.type === "img" ? (
            <Container
              key={idx}
              className="col-sm-6 col-lg-4 mt-3 acc position-relative text-center"
            >
              <div className={descAnime && `acc-hover`}>
                <Container className="acc-description">{item.desc}</Container>
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  alt={item.url.slice(-20)}
                  src={item.url}
                ></img>
              </div>
            </Container>
          ) : (
            <Container className="col-sm-6 col-lg-4 p-4 my-2">
              <div style={itemStyle}>
                {item.type === "text" ? (
                  <p style={{ textAlign: "left" }}>{item.text}</p>
                ) : (
                  <img
                    width="85%"
                    alt={item.url.slice(-20)}
                    src={item.url}
                  ></img>
                )}
              </div>
            </Container>
          );
        })}
      </Container>
    </Container>
  );
}

export default OneColPage;
