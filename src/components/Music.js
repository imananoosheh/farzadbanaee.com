import React from "react";
import ThreeColPage from './ThreeColPage';

function Music() {
  const data = [
    {
      type: "text",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices dignissim lacus eu vestibulum. Aliquam ornare leo vitae nunc gravida, et lacinia velit convallis. Suspendisse condimentum, sem vitae ultrices semper, justo lectus suscipit libero, vitae accumsan arcu enim vulputate nibh. Donec luctus sapien sed pharetra tempus. Nam mollis vestibulum molestie. Praesent eu tempus nulla. Donec suscipit finibus metus id placerat. In ultricies mattis sapien eget mollis. Maecenas tincidunt est velit, vel placerat libero fermentum in.",
    },
    {
      type: "img",
      url: "https://direct.rhapsody.com/imageserver/images/alb.463594958/500x500.jpg",
      desc: "This is the Decription of this Artwork",
    },
    {
      type: "img",
      url: "https://www.designformusic.com/wp-content/uploads/2016/09/electro-synthwave-album-cover-500x500.jpg",
      desc: "This is the Decription of this Artwork",
    },
    {
      type: "text",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices dignissim lacus eu vestibulum. Aliquam ornare leo vitae nunc gravida, et lacinia velit convallis. Suspendisse condimentum, sem vitae ultrices semper, justo lectus suscipit libero, vitae accumsan arcu enim vulputate nibh. Donec luctus sapien sed pharetra tempus. Nam mollis vestibulum molestie. Praesent eu tempus nulla. Donec suscipit finibus metus id placerat. In ultricies mattis sapien eget mollis. Maecenas tincidunt est velit, vel placerat libero fermentum in.",
    },
    {
      type: "img",
      url: "https://direct.rhapsody.com/imageserver/images/alb.463594958/500x500.jpg",
      desc: "This is the Decription of this Artwork",
    },{
      type: "img",
      url: "https://direct.rhapsody.com/imageserver/images/alb.463594958/500x500.jpg",
      desc: "This is the Decription of this Artwork",
    },
    {
      type: "img",
      url: "https://www.designformusic.com/wp-content/uploads/2016/09/electro-synthwave-album-cover-500x500.jpg",
      desc: "This is the Decription of this Artwork",
    },
    {
      type: "text",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices dignissim lacus eu vestibulum. Aliquam ornare leo vitae nunc gravida, et lacinia velit convallis. Suspendisse condimentum, sem vitae ultrices semper, justo lectus suscipit libero, vitae accumsan arcu enim vulputate nibh. Donec luctus sapien sed pharetra tempus. Nam mollis vestibulum molestie. Praesent eu tempus nulla. Donec suscipit finibus metus id placerat. In ultricies mattis sapien eget mollis. Maecenas tincidunt est velit, vel placerat libero fermentum in.",
    },
    {
      type: "img",
      url: "https://direct.rhapsody.com/imageserver/images/alb.463594958/500x500.jpg",
      desc: "This is the Decription of this Artwork",
    },{
      type: "img",
      url: "https://direct.rhapsody.com/imageserver/images/alb.463594958/500x500.jpg",
      desc: "This is the Decription of this Artwork",
    },
    {
      type: "img",
      url: "https://www.designformusic.com/wp-content/uploads/2016/09/electro-synthwave-album-cover-500x500.jpg",
      desc: "This is the Decription of this Artwork",
    },
    {
      type: "text",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices dignissim lacus eu vestibulum. Aliquam ornare leo vitae nunc gravida, et lacinia velit convallis. Suspendisse condimentum, sem vitae ultrices semper, justo lectus suscipit libero, vitae accumsan arcu enim vulputate nibh. Donec luctus sapien sed pharetra tempus. Nam mollis vestibulum molestie. Praesent eu tempus nulla. Donec suscipit finibus metus id placerat. In ultricies mattis sapien eget mollis. Maecenas tincidunt est velit, vel placerat libero fermentum in.",
    },
    {
      type: "img",
      url: "https://direct.rhapsody.com/imageserver/images/alb.463594958/500x500.jpg",
      desc: "This is the Decription of this Artwork",
    },
  ];
  return(
    <ThreeColPage data={data} />
  )
  // const imageNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // return (
  //   <div className="border-theme">
  //     <div className="bg-dark">
  //       <Container style={{ padding: "5vw" }}>
  //         <div className="row">
  //           {imageNames.map((name, idx) => {
  //             return (
  //               <Container
  //                 key={idx}
  //                 className="col-sm-6 col-lg-4 mt-3 acc position-relative text-center"
  //               >
  //                 <div className="acc-hover">
  //                   <Container className="acc-description">
  //                     Description of the artwork
  //                   </Container>
  //                   <img
  //                     style={{
  //                       width: "100%",
  //                       height: "auto",
  //                     }}
  //                     alt={name}
  //                     src={`https://www.designformusic.com/wp-content/uploads/2016/09/electro-synthwave-album-cover-500x500.jpg`}
  //                   ></img>
  //                 </div>
  //               </Container>
  //             );
  //           })}
  //         </div>
  //       </Container>
  //     </div>
  //   </div>
  // );
}

export default Music;
