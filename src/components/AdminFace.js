import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AdminFace(idx) {
    return (
        <div>
            <div
                      style={{
                        position: "absolute",
                        backgroundColor: "#232323",
                        borderRadius: "50%",
                        border: "1px solid #fff",
                        width: "50px",
                        height: "50px",
                        top: "3px",
                        right: "3px",
                        marginRight: "calc(var(--bs-gutter-x) * .5)",
                        zIndex: "100",
                      }}
                    >
                      <div style={{ width: "100%", height: "100%" }}>
                        <FontAwesomeIcon
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                          }}
                          key={idx}
                          icon={["far", "edit"]}
                          color="white"
                          size="lg"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        backgroundColor: "#232323",
                        borderRadius: "50%",
                        border: "1px solid #fff",
                        width: "50px",
                        height: "50px",
                        bottom: "3px",
                        left: "3px",
                        marginLeft: "calc(var(--bs-gutter-x) * .5)",
                        zIndex: "100",
                      }}
                    >
                      <div style={{ width: "100%", height: "100%" }}>
                        <FontAwesomeIcon
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                          }}
                          key={idx}
                          icon={["far", "trash-alt"]}
                          color="white"
                          size="lg"
                        />
                      </div>
                    </div>
        </div>
    )
}

export default AdminFace
