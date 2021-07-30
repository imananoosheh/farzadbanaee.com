import React from "react";
import { Container } from "react-bootstrap";

function Biography() {
  const items = ["", "", "", "", "", ""];
  return (
    <Container className="my-5">
      <Container className="my-5 text-uppercase" style={{ color: "#d2d2d2" }}>
        <h2>Biography</h2>
      </Container>
      <div className="row">
        {items.map((val, idx) => {
          return (
            <Container
              key={idx}
              className="col-sm-6 mt-3 acc position-relative text-center"
            >
              {idx % 2 ? (
                <Container
                  style={{
                    minHeight: "450px",
                    position: "relative",
                    display: "table",
                  }}
                >
                  <div
                    style={{
                      display: "table-cell",
                      verticalAlign: "middle",
                      color: "#d2d2d2",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ultrices dignissim lacus eu vestibulum. Aliquam
                    ornare leo vitae nunc gravida, et lacinia velit convallis.
                    Suspendisse condimentum, sem vitae ultrices semper, justo
                    lectus suscipit libero, vitae accumsan arcu enim vulputate
                    nibh. Donec luctus sapien sed pharetra tempus. Nam mollis
                    vestibulum molestie. Praesent eu tempus nulla. Donec
                    suscipit finibus metus id placerat. In ultricies mattis
                    sapien eget mollis. Maecenas tincidunt est velit, vel
                    placerat libero fermentum in.
                  </div>
                </Container>
              ) : (
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  alt={val}
                  src={`https://www.designformusic.com/wp-content/uploads/2016/09/electro-synthwave-album-cover-500x500.jpg`}
                ></img>
              )}
            </Container>
          );
        })}
      </div>
    </Container>
    // <Container
    //   key={"1"}
    //   className="col-sm-6 mt-3 acc position-relative text-center"
    // >
    //   <div className="acc-hover">
    //     <Container className="acc-description">
    //       Description of the artwork
    //     </Container>
    //     <img
    //       style={{
    //         width: "100%",
    //         height: "auto",
    //       }}
    //       alt={``}
    //       src={`https://www.designformusic.com/wp-content/uploads/2016/09/electro-synthwave-album-cover-500x500.jpg`}
    //     ></img>
    //   </div>
    // </Container>
  );
}

export default Biography;
