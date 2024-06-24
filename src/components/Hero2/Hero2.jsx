import "./Hero2.css"
const Hero2 = (props) => {
  return (
    <div className="heroImg">
        <div className="heroImg__cont">
            <div className="heroImg__heading">
                <h3 className="heroImg__title">{props.title}</h3>
                <p className="heroImg__des">{props.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Hero2