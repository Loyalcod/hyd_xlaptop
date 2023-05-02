import "./footercon.css";
import { Link } from "react-router-dom";

function FooterCon() {
  const fourBox = [
    { navtitle: "Home", col1: "Pc", col2: "Tablet", col3: "Phone", col4:"About-us", col5:"Contact-us" },
    { navtitle: "Pc", col1: "Mac Book", col2:"Hp", col3: "Dell", col4: "Lenovo", col5: "Spectra",col6: "Accre"},
    { navtitle: "Tablet", col1: "Apple", col2: "Samsung", col3: "Hewie", col4:"Nokia", col5:"Lorem" },
    { navtitle: "Phones", col1: "Iphone", col2: "Samsung", col3: "Tecno", col4:"Nokia", col5:"Gonie", col6:"Infinix" },
    { navtitle: "About-us", col1: "Learn More About us", col2: "Sales Solutions", col3: "Terms and Policy", col4: "Questions "},
    { navtitle: "Contact-us", col1: "Through Mail", col2: "Through Number (+234)", col3: "Social Media Handle is Below" },
  ];
  return (
    <div className="footercon">
      <div className="footercenteralign">
        <div className="footmenu">
          {fourBox.map((item) => (
            <div className="navfooter">
              <h4>{item.navtitle}</h4>
              <Link to="/" className="footerlink">
                <small className="textfooter">{item.col1}</small>               
              </Link>
              <Link to="/" className="footerlink">
                <small className="textfooter">{item.col2}</small>               
              </Link>
              <Link to="/" className="footerlink">
                <small className="textfooter">{item.col3}</small>               
              </Link>
              <Link to="/" className="footerlink">
                <small className="textfooter">{item.col4}</small>               
              </Link>
              <Link to="/" className="footerlink">
                <small className="textfooter">{item.col5}</small>               
              </Link>
              <Link to="/" className="footerlink">
                <small className="textfooter">{item.col6}</small>               
              </Link>
            </div>
          ))}
        </div>
        <div className="footericons"></div>
      </div>
    </div>
  );
}

export default FooterCon;
