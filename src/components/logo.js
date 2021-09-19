import logo from "../assets/imgs/logo.png";

const Logo = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}>
  
        <h3>CRYPTO</h3>
        <img src={logo} alt="logo" style={{ height: "50px", width: "50px" }} />
      </div>
    );
  };

export default Logo