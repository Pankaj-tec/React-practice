import "./PricingCards.css";
import { Link } from "react-router-dom";
const PricingCards = () => {
  return (
    <div className="price">
        <div className="price__cont">
            <div className="price__card">
                <h3 className="price__title">- Basic -</h3>
                <span className="price__bar"></span>
                <p className="price__prices">$ 100</p>
                <p>- 3 days -</p>
                <p>- 3 pages -</p>
                <p>featured</p>
                <p>- Responsive design -</p>
                <Link to="/conatct" className="btn">Purchase Now</Link>
            </div>

            <div className="price__card">
                <h3 className="price__title">- premium -</h3>
                <span className="price__bar"></span>
                <p className="price__prices">$ 200</p>
                <p>- 2 days -</p>
                <p>- 3 pages -</p>
                <p>featured</p>
                <p>- Responsive design -</p>
                <Link to="/conatct" className="btn">Purchase Now</Link>
            </div>

            <div className="price__card">
                <h3 className="price__title">- business -</h3>
                <span className="price__bar"></span>
                <p className="price__prices">$ 500</p>
                <p>- 8 days -</p>
                <p>- 5 pages -</p>
                <p>featured</p>
                <p>- Responsive design -</p>
                <Link to="/conatct" className="btn">Purchase Now</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCards