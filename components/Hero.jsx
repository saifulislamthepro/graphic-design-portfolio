import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero hero-gradient">
      {/* Column 1: Profile */}
      <div className="hero-col hero-profile">
        <Image
          src="/profile.jpg"
          alt="Saiful Islam"
          width={240}
          height={240}
          priority
          className="hero-avatar"
        />
        <h1 className="hero-name">MD SAIFUL ISLAM</h1>
        <p className="hero-role">Graphic & Motion Designer</p>
      </div>

      {/* Column 2: Contact & Social */}
      <div className="hero-col hero-info">
        <ul className="info-list">
          <li><a href="tel:+8801648898129"><span><i className="fa-solid fa-phone"></i></span> +880 1648898129</a></li>
          <li><a href="mailto:saifislamgfx@gmail.com"><span><i className="fa-solid fa-message"></i></span> saifislamgfx@gmail.com</a></li>
          <li><span><i className="fa-solid fa-location-arrow"></i></span>mazar road, Mirpur 1, Dhaka, Bangladesh</li>
          <li><span><i className="fa-solid fa-file"></i></span><a href="/files/cv-saiful.pdf" download="CV-SAIFUL.pdf">Download my CV</a></li>
        </ul>

        <div className="socials">
          <a href="https://www.facebook.com/saiful.islam.facebook.profile" target="_blank" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.linkedin.com/in/saiful-islam-8942792a4/" target="_blank" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>

      {/* Column 3: About */}
      <div className="hero-col hero-about">
        <h2>About Me</h2>
        <p>
          I create visually striking graphics and engaging motion animations
          for brands, startups and digital products. My focus is clean design,
          storytelling and performance-friendly visuals. Each
          project is approached with attention to detail, ensuring both aesthetic
          impact and functional clarity. My goal is to help brands communicate
          their vision effectively through memorable digital experiences.
        </p>
      </div>
    </section>
  );
}
