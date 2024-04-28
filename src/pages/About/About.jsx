import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>BookHub adalah situs web yang didedikasikan untuk penggemar buku "The Lost Word". Kami menyajikan informasi lengkap tentang karya ini, mengambil data langsung dari API OpenLibrary. Kami fokus pada memberikan informasi yang akurat dan terkini, memastikan pengguna dapat dengan mudah menemukan segala yang mereka cari tentang buku ini. "The Lost Word" adalah karya sastra yang menarik perhatian banyak pembaca di seluruh dunia dengan alur cerita yang mendalam. Jika Anda ingin mendalami pemahaman Anda tentang karya ini, BookHub adalah tempat yang tepat untuk melakukannya.</p>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About