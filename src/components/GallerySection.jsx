import React from "react";
import galleryDB from "../data/gallery";

function GallerySection() {
  return (
    <section id="gallery" className="gallery">
      <h1 className="title">Galeria</h1>
      <img src="images/esquadria_logos_restaurados/esquadria_logo.png" className="img-title" alt="Esquadria Logo" />
      <div className="container-fluid">
        <div className="row mt-4">
          {galleryDB.map((item) => (
            <div key={item.id} className="item col-sm-6 col-md-4 mb-3">
              <a href={item.ImageUrl} className="fancybox" data-fancybox="gallery1">
                <img src={item.ImageUrl} alt={item.Name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
