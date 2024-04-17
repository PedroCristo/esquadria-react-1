import aboutDB from "../data/about";

function AboutSection() {
  return (
    <section id="about" className="about">
      <h1 className="title">Quem Somos</h1>
      <img
        src="images/logos/esquadria_logo.png"
        className="img-title"
        alt="Esquadria Logo"
      />
      {aboutDB.map((aboutItem, index) => (
        <div
          className={`row ${index === 1 ? "row-reverse" : ""}`}
          key={aboutItem.id}
        >
          {/* About content column */}
          <div className="col-md-6">
            <h1>{aboutItem.title}</h1>
            {aboutItem.content.map((aboutParagraph) => (
              <p key={aboutParagraph.id}>{aboutParagraph.content_paragraph}</p>
            ))}
          </div>
          {/* Image column */}
          <div className="col-md-6">
            <img src={aboutItem.imgUrl} alt={aboutItem.title} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default AboutSection;
