import PropTypes from "prop-types";

const Card = (props) => {
    return (
      <div
        style={{
          height: "280px",
          width: "230px",
          backgroundColor: props.background,
          padding: "15px",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          margin: "10px",
          border:"2px solid black",
          boxShadow: "0 10px 15px rgba(0,0,0,0.3)",
        }}>
  
        <div
          style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: props.textcolor, fontSize: "10px", opacity: "0.6" }}>{props.id}{" "}</p>
          <p style={{ color: props.textcolor, fontSize: "10px", opacity: "0.6" }}>{props.date}</p>
        </div>
  
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <img
            src={props.image} alt="" style={{ height: "80px", width: "auto"}}/></div>
  
        <div>
          <p style={{ color: props.textcolor, fontSize: "10px", opacity: "0.6" }}>{props.brand}</p>
          <p style={{ color: props.textcolor, fontSize: "14px" }}>{props.color}</p>
          <p style={{ color: props.textcolor, fontSize: "11px" }}>{props.price}</p>
        </div>
      </div>
    );
  };


  // Setting the proptypes for understanding what props to send:
    Card.propTypes = {
    id: PropTypes.string,
    date: PropTypes.string,
    background: PropTypes.string,
    brand: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.string,
    textcolor: PropTypes.string,
    image: PropTypes.string
  };


export default Card