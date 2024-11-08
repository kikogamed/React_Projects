import './header.css';

function Header() {
  return (
    <div className='header'>
      <div className='logo' data-aos="zoom-out-right"><a href='#home'>KIKO</a></div>
      <div className='sections' data-aos="zoom-out-left">
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#services'>Services</a>
        <a href='#portfolio'>Portfolio</a>
        <a href='#testimonials'>Testmonials</a>
        <a href='#blog'>Blog</a>
        <a href='#contact'>Contact</a>
      </div>
    </div>
  );
}

export default Header;
