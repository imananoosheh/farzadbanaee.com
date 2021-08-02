import React from 'react'
import OneColPage from './OneColPage'

function Biography() {
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
      const title = "BIOGRAPHY"
    return (
        <OneColPage title={title} data={data}/>
    )
}

export default Biography
