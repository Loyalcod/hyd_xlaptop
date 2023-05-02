import "./pagebody.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import imageit from "../../images/mac_pro.jpg";
import dellproduct from '../../images/dell_pro.jpg'
import hp_product from '../../images/hp_pro.jpg'
import { Link } from "react-router-dom";
import leneovo_pro from '../../images/lenovo_pro.jpg'
import phoneApple from '../../images/iphone.jpg'
import phoneSamsung from '../../images/samsung.jpg'
import phoneTecno from '../../images/tecno.jpg'
import phoneInfinix from '../../images/infinix_smart_6_1.jpg'

function PageBody() {
  const allPc = [
    { imageall: imageit, alt: "Apple Product" },
    { imageall: dellproduct, alt: "HP Product" },
    { imageall: hp_product, alt: "Dell Product" },
    { imageall: leneovo_pro, alt: "Lenovo Product" },
  ];

  const allPhone = [
    { imageall: phoneApple, alt: "Iphone Product" },
    { imageall: phoneSamsung, alt: "Samsung Product" },
    { imageall: phoneTecno, alt: "Tecno Product" },
    { imageall: phoneInfinix, alt: "Infinix Product" },
  ];

  return (
    <div className="pageBody">
      <div className="container">
        {/* wallpaper image start here */}

        <div className="wallpaper">
          <div className="wallone">
            <div className="slide-container">
              <div className="opacitywall">
                <h1>HYD-X COMPANY LTD.</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                  <br /> Nobis facilis ipsa obcaecati tempora ut debitis eius{" "}
                  <br /> beatae consequuntur perferendis numquam!
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>

          <h3>Category </h3>
        </div>

        {/* card component */}
        <div className="category">
          <div className="categorystyle">
            <Card sx={{ maxWidth: 540 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="320"
                image="https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?size=626&ext=jpg&ga=GA1.1.2118178676.1682424131&semt=robertav1_2_sidr"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Smart Laptops & Tablet
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  nemo, eligendi magnam nam dolorem nobis porro? Vel dicta sint
                  ex!
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div className="categorystyle">
            <Card sx={{ maxWidth: 540 }}>
              <CardMedia
                sx={{ height: 320 }}
                image="https://img.freepik.com/free-vector/realistic-phones-different-views_52683-28436.jpg?w=740&t=st=1682956944~exp=1682957544~hmac=6b907517e9a05e8c27ef8cce693870657c3ed85f0737f318b444b6e6ee0141b6../images/img1.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Phone
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere minima tempora praesentium corrupti nesciunt
                  repudiandae maxime rem hic
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read More</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        </div>
        <h4>Features for PC</h4>
        <div className="pcsales">

          {allPc.map((items) => (
            <div className="pcsalebox">
              <Link to="/" className="pcsaleboximg">
                <img src={items.imageall} alt="" />
              </Link>
              <Link className="pcsaleboxtxt">
                <p>
                  <strong>{items.alt} </strong>
                </p>
                <small>View More</small>
              </Link>
            </div>
          ))}

        </div>
        <h4 className="styleh4">Feaures of Phones</h4>
        <div className="phonescale">
            {allPhone.map((phoneItems)=>(
              <div className="phone_box">
              <div className="phone_box_img">
                <img src={phoneItems.imageall} alt="" />
              </div>
              <div className="phone_box_txt">
              <p>
                  <strong>{phoneItems.alt}</strong>
                </p>
                <small>View More</small>
              </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PageBody;
