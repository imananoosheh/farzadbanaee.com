import { React, useState, useEffect } from "react";
import ThreeColPage from "./ThreeColPage";

function Music({isAdmin}) {
  const [musicData, setMusicData] = useState([]);
  const [fetched, setFetched] = useState(false);
  
  useEffect(() => {
    if (fetched) return;
    fetch("http://localhost:3001/", { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      setMusicData(data);
    });
    return () => {
      setFetched(true);
    };
  }, [fetched]);

console.log("isAdmin value passed to Music:", isAdmin)

  return <ThreeColPage data={musicData} isAdmin={isAdmin} />;
}

export default Music;
