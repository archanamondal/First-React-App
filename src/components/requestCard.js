import logo from "../assets/imgs/logo.png";

const RequestCard = () => {
    return (
      <div
        style={styles.container}>
        
        <img src= {logo} alt="" style={styles.img} />
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <p style={styles.para}>Not seeing a shoe</p>
        <p style={styles.para}>you'd like in your</p>
        <p style={styles.para}>collections?</p>
        </div>
        <div>
            <button style={{border:"none", outline:"inherit", padding:"10px 20px", backgroundColor:"black", color:"white",boxShadow: "0 10px 15px rgba(0,0,0,0.2)"}}>Request a shoe</button>
        </div>
      </div>
    );
  };


const styles = {
  flex:{
    display:"flex"
  },
  container:{
    height: "280px",
    width: "230px",
    backgroundColor: "white",
    border: "3px solid black",
    padding: "15px",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    margin: "10px",
    alignItems:"center",
    boxShadow: "0 10px 15px rgba(0,0,0,0.3)",
  },
  para:{
    fontWeight:"bold", fontSize:"17px"
  },
  img:{
    height:"50px", width:"50px", alignSelf:"center" 
 }
}

export default RequestCard