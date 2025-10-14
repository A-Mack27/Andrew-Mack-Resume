export default function Gallery() {
  // Import all gallery images
  const galleryImages = [];
  for (let i = 1; i <= 18; i++) {
    galleryImages.push(new URL(`../assets/images/gallery-img-${i}.jpg`, import.meta.url).href);
  }

  return (
    <>
      <h1>Gallery</h1>
      <hr />
      <br />
      <h2>Here's the result of my latest obsession - film photography!</h2>
      <br />
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="aspect-square bg-gray-100">
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      <br />
    </>
  );
}
  