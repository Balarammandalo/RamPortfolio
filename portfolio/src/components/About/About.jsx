
import './about.css'
import passphoto from "../../assets/passphoto.jpg"

const About = () => {
  return (
    <div className='about' id='about'>
          <h1 className='aboutTag'>About Me</h1>
          <div className='about-content'>
              <img src={passphoto} alt="Profile" className="profile-pic" />
            <div className='about-text'>
                <h1 className='nameHead'>Hi, I'm Balaram Mandalo</h1>
                <p className='namePara'>Aspiring Full Stack Developer skilled in the MERN stack, Python, and database management using SQL and MongoDB, with hands-on experience from internships and personal projects. Proficient in building responsive, user-friendly web applications using React.js, Node.js, and Express.js. Strong foundation in both Front-End and Back-End development, with a keen eye for scalability, performance, and data integrity. Self-motivated, detail-oriented, and eager to contribute to collaborative team environments.</p>
              <h2 className='academicHead'>Academics</h2>
              <ul className='academicUlLists'>
                    <li className='academicLiList'>B.Tech, Gayatri Institute of Engineering and Technology, Berhampur , 2020-2023 </li>
                    <li className='academicLiList'>Diploma , Govt. Polytechnic, Gajapati , 2017-2020</li>
                    <li className='academicLiList'>10th, Saraswati Sishu Vidya Mandir, Gajapati , 2016-2017 </li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default About
