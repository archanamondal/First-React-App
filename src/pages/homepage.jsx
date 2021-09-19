// import
import React from "react";
import Logo from "../components/logo";
import Card from "../components/card";
import Para from "../components/para";
import InputBox from "../components/inputBox";
import RequestCard from "../components/requestCard";
import TagLine from "../components/tagLine";
// import sneakerImage from "../assets/imgs/sneaker-image.png";


const HomePage = () => {
  // return statement:

  return (
    <div>
      <Logo />
      <TagLine />
      <InputBox />
      <Para />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}>

        <Card
          id="#00001"
          date="18.09.2021"
          background="#CE3341"
          brand="NIKE JORDAN 1"
          color="Chicago"
          price="0.25 ETH"
          textcolor="white"
          image="./assets/imgs/sneaker-image.png"/>

        <Card
          id="#00002"
          date="18.09.2021"
          background="#2CAFD0"
          brand="YEEZY BOOST 700"
          color="Bright Blue"
          price="0.25 ETH"
          textcolor="black"/>

        <Card
          id="#00003"
          date="19.09.2021"
          background="#FFB932"
          brand="CROCS CLOG"
          color="Lighting McQueen"
          price="0.25 ETH"
          textcolor="black"/>

        <Card
          id="#00004"
          date="20.09.2021"
          background="#4F5455"
          brand="NIKE OFFLINE"
          color="Black Menta"
          price="0.25 ETH"
          textcolor="white"/>
        </div>

        <div  
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}>

        <RequestCard/>

        <Card
          id="#00006"
          date="21.09.2021"
          background="#6DE48E"
          brand="NIKE AIR MAX"
          color="90s"
          price="0.25 ETH"
          textcolor="black"/>

        <Card
          id="#00007"
          date="22.09.2021"
          background="#8E9C8C"
          brand="REEBOK CLASIC"
          color="Hrmony Green"
          price="0.25 ETH"
          textcolor="white"/>

        <Card
          id="#00008"
          date="23.09.2021"
          background="#C7622E"
          brand="GUCCI ACE"
          color="Leather"
          price="0.25 ETH"
          textcolor="white"/>
        </div>

        <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}>

        <Card
          id="#00009"
          date="24.09.2021"
          background="#CADEEE"
          brand="NIKE JORDAN 1"
          color="Cloud"
          price="0.25 ETH"
          textcolor="black"/>

        <Card
          id="#00010"
          date="25.09.2021"
          background="#916530"
          brand="YEEZY BOOST 700"
          color="Brown"
          price="0.25 ETH"
          textcolor="white"/>

        <Card
          id="#000011"
          date="26.09.2021"
          background="#585C5B"
          brand="GUCCI ACE"
          color="Smoke"
          price="0.25 ETH"
          textcolor="white"/>

        <Card
          id="#00012"
          date="27.09.2021"
          background="#2DBCE9"
          brand="REEBOK CLASIC"
          color="Bright Blue"
          price="0.25 ETH"
          textcolor="black"/>
        </div>
    </div>
  );
};

export default HomePage;