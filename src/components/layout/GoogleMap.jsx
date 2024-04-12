import React from 'react';

function Location() {
  return (
    <div className="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70343.69697053001!2d-9.470042213694102!3d38.81455792993371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1edb7599ad7303%3A0x92198d3159b91a24!2sEsquadria%20-%20Transforma%C3%A7%C3%A3o%20de%20Madeiras%20do%20Mucifal%20SA!5e0!3m2!1spt-PT!2sie!4v1627640896619!5m2!1spt-PT!2sie"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        title="Google Maps"
      ></iframe>
    </div>
  );
}

export default Location;

