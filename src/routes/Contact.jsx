import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import Hero2 from '../components/Hero2/Hero2';
import Form from  "../components/Form/Form"

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <Hero2 title={"CONTACT."} 
       desc={"Lets have a chat"} />
       <Form />
      <Footer/>
    </div>
  )
}

export default Contact