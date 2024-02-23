import React from 'react'
import Masonry, {ResponsiveMasonry } from 'react-responsive-masonry'
import galleryImages from './galleryImages'
const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry>
        <Masonry gutter="1rem">
            {galleryImages.map((item,index)=>(
                <img src={item} className='masonry__img' key={index} alt="" style={{width:"100%",display:"block" ,borderRadius:"10px"}}  />
            ))}

        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery