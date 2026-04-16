import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="gallery-placeholder">
              <span>Image {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
