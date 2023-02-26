import React from "react";
import "./PhotoGallery.css";
import PhotoGalleryCart from "./PhotoGalleryCart.js";
const PhotoGallery = () => {
  const data=[{"id":1},{"id":2},{"id":3},{"id":4}];
  return (
    <>
      <div className='PhotoGallery_layout'>
        <div className='PhotoGallery_box'>
          <div className='PhotoGallery_text1'>PHOTO GALLERY</div>
          <div className='PhotoGallery_line2'>
            <div className='PhotoGallery_text2'>View the wonderful places you can visit</div>
            <div className='PhotoGallery_text3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque pulvinar lorem justo, Lorem ipsum dolor sit amet, consectetur </div>
          </div>
          <div className='PhotoGallery_cart_layout'>
            {data.map((datas)=>(<PhotoGalleryCart num={datas.id} key={datas.id+3} />))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
