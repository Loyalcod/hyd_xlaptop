import "./pagebody.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


function PageBody() {
  
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nemo, eligendi magnam nam dolorem nobis porro? Vel dicta sint ex!
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
        <div className="pcsales"></div>
      </div>
    </div>
  );
}

export default PageBody;
