import React from "react";
import galleryDB from "../data/gallery";

function GallerySection() {
  return (
    <section id="gallery" className="gallery">
      <h1 className="title">Galeria</h1>
      <img
        src="images/logos/esquadria_logo.png"
        className="img-title"
        alt="Esquadria Logo"
      />
      <div className="container-fluid">
        <div className="row mt-4">
          {galleryDB.map((item) => (
            <React.Fragment key={item.id}>
              <div className="item col-sm-6 col-md-4 mb-3">
              {/* Desktop Version */}
                <a
                  href={item.ImageUrl}
                  className="fancybox show-desktop"
                  data-fancybox="gallery1"
                  >
                  <img src={item.ImageUrlTablet} alt={item.Name} />
                </a>
                  {/* Tablet/Mobile Version */}
                <a
                  href={item.ImageUrlTablet}
                  className="fancybox show-tablet"
                  data-fancybox="gallery2"
                >
                  <img src={item.ImageUrlTablet} alt={item.Name} />
                </a>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
