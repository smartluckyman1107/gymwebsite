import Header from '../../Components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
   <>
   <Header title="Get In Touch" image={HeaderImage}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quos eius est quis obcaecati praesentium.
   </Header>
   <section className="container">
    <div className="container contact__container">
      <div className="contact__wrapper">
        <a href="mailto:vikashsahu9262gmail.com" target="_blank" rel='norefferer noopener'><MdEmail/></a>
        <a href="https://m.me/itsyourboyviki" target="_blank" rel='norefferer noopener'>< BsMessenger/></a>
        <a href="https://w.me/+919179434555" target="_blank" rel='norefferer noopener'><IoLogoWhatsapp/></a>
      </div>
    </div>
   </section>
   </>
  )
}

export default Contact