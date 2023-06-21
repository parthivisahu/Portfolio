import React from "react";
import "./Education.css"
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import school1 from "../../img/school1.jpg"
import school2 from "../../img/school2.jpg"
import college from "../../img/college.jpeg"

export default function Education() {
  return (
    <section id='education'>
    <MDBContainer fluid className="py-5" >
      <h1 className="col1">My Education</h1>
      <div className="main-timeline-2">
        <div className="timeline-2 left-2">
          <MDBCard className="cards1">
            <MDBCardImage
              src={school1}
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">Secondary Education</h4>
              <p className="text mb-4">
                <MDBIcon far icon="clock" /> 2018
              </p>
              <p className="mb-5">
               Delhi Public School,Durg.<br /> 90.6%
              </p>
            </MDBCardBody>
          </MDBCard>
          <br />
        </div>
        <br />  <br />  <br />  
        <div className="timeline-2 right-2">
          <MDBCard className="cards2" >
            <MDBCardImage
              src={school2}
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">Senior Secondary School</h4>
              <p className="text mb-4">
                <MDBIcon far icon="clock"  /> 2020
              </p>
              <p className="mb-0">
                Shri Sankara Vidhyalaya, Bhilai <br></br> 77.8%
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <br />  <br />  <br /> 
        <div className="timeline-2 left-2">
          <MDBCard className="cards1">
            <MDBCardImage
              src={college}
              alt="Responsive image"
              position="top"
            />
            <MDBCardBody className="p-4">
              <h4 className="fw-bold mb-4">B.Tech</h4>
              <p className="text mb-4">
                <MDBIcon far icon="clock" /> 2020-Present
              </p>
              <p className="mb-0">
               VIT Bhopal University, Bhopal <br /> 8.74 
                
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>    
      </div>
      <br />  <br />  <br />  <br />  <br />  <br />  <br />
    </MDBContainer>
    </section>
  );
}