import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Recusandae, animi autem fugiat est quas dolorum temporibus officia sequi id quae!
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>

        <div className="about__section-content">
          <h1>Our Story</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dignissimos ea, maiores quasi, sunt officia quam magni 
            omnis consequuntur consectetur quisquam iusto commodi provident
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam ut rem minima doloremque veritatis corrupti.
            Doloribus asperiores, esse enim fugiat,
          </p>

          <p>
            autem, odio minima dolore sit nostrum impedit neque dignissimos!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis illum a quo minima consequatur.
          </p>
        </div>
      </div>
    </section>


    <section className="about__vision">
      <div className="container about__vision-container">
       
        <div className="about__section-content">
          <h1>Our Vision</h1>

          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dignissimos ea, maiores quasi, sunt officia quam magni 
            omnis consequuntur consectetur quisquam iusto commodi provident
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam ut rem minima doloremque veritatis corrupti.
            Doloribus asperiores, esse enim fugiat,
          </p>

        </div>

        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>


    
    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>

        <div className="about__section-content">
          <h1>Our Mission</h1>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dignissimos ea, maiores quasi, sunt officia quam magni 
            omnis consequuntur consectetur quisquam iusto commodi provident
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam ut rem minima doloremque veritatis corrupti.
            Doloribus asperiores, esse enim fugiat,
          </p>

          <p>
            autem, odio minima dolore sit nostrum impedit neque dignissimos!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos blanditiis illum a quo minima consequatur.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About