import React from "react";
import Content from "./Content";
import SideBar from "./SideBar";
import "./Main.css";

const handleNext=()=>{
  const elem = document.getElementById('Q1')
  elem.style.backgroundColor ='green'
  elem.style.color= 'white'

  // console.log(elem)
}
const handleReview=()=>{
  const elem = document.getElementById('Q1')
  elem.style.backgroundColor ='yellow'
  elem.style.color= 'white'

}
const handleClickDump=()=>{
  
  const elem = document.getElementById('Q1')
  elem.style.backgroundColor ='white'
  elem.style.color= 'black'
}

const Main = () => {

  return (
    <div className="main-wrap"   style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="main-left">
        <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "60%",padding:'0.3rem 0rem' }} >
        <div className="btn btn-primary">ALL SECTION</div>
        <div className="btn btn-primary">PHYSICS</div>
        <div className="btn btn-primary">CHEMISTRY</div>
        <div className="btn btn-primary">MATHS</div>

        </div>
        <Content />
        <div style={{ display: "flex",justifyContent: "space-between", maxWidth: "70%",padding:'0.3rem 0rem' }}>
          <div className="btn btn-primary">CLEAR RESPONSE</div>
          <div className="btn btn-primary" onClick={handleReview}>REVIEW</div>
          <div className="btn btn-primary" onClick={handleClickDump}>DUMP</div>
          <div className="btn btn-primary">PREVIOUS</div>
          <div className="btn btn-primary" onClick={handleNext}>NEXT</div>
        </div>
      </div>

      <div className="main-right">
        <SideBar />
      </div>
    </div>
  );
};

export default Main;
