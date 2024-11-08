import './home.css';

function Home() {

  return (
    <div className="home" id='home'>
        <p className='hello'>Hello I'M</p>
        <div className='name'>
            <p className='text1'>Karim Ashraf</p>
            <p className='text2'>FrontEnd Developer</p>
            <span className='cursor'></span>
        </div>
        <p className='par'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <button>Download CV</button>
    </div>
  );
}

export default Home;
