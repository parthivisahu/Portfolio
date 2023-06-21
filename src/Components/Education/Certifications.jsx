import React from 'react';
import "./Certification.css"
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

import certificate1 from "../../img/certificate1.png";
import certificate2 from "../../img/certificate2.png";
import certificate3 from "../../img/certificate3.png";
import certificate4 from "../../img/certificate4.png";
import certificate5 from "../../img/certificate5.png";
import certificate6 from "../../img/certificate6.png";

export default function Certifications() {
  return (
    <div>
    <h1 className='h1-cert'> My Certifications</h1>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
       
      <MDBCol>
        <MDBCard className='h-100 card3'>
          <a href='https://drive.google.com/file/d/1B8z90QDdOnRBFwoGYpYmMnFH6uLaXQST/view?usp=sharing' alt="">
          <MDBCardImage
            src={certificate1}
            alt=''
            position='top'
            style={{borderRadius:"10px", marginTop:"10px",height:"150px"}}
          />
          </a>
          <MDBCardBody>
            <MDBCardTitle>Cybersecurity Essentials</MDBCardTitle>
            {/* <MDBCardText>
            
            </MDBCardText> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100 card3'>
          <a href='https://drive.google.com/file/d/1FlI0-URSO4TQXxl1YcORJmao0pbW9P1V/view?usp=sharing'>
          <MDBCardImage
            src={certificate2}
            alt='...'
            position='top'
            style={{borderRadius:"10px", marginTop:"10px" ,height:"150px"}}
          />
          </a>
          <MDBCardBody>
            <MDBCardTitle>Programming Foundations with JavaScript, HTML and CSS</MDBCardTitle>
            <MDBCardText></MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100  card3'>
          <a href='https://drive.google.com/file/d/1ddUMRZtJjmXd97fMh51m5BgLiQZHsPZm/view?usp=sharing'>
          <MDBCardImage
            src={certificate3}
            alt='...'
            position='top'
            style={{borderRadius:"10px", marginTop:"10px",height:"150px"}}
          />
          </a>
          <MDBCardBody>
            <MDBCardTitle>React.js Essential Training</MDBCardTitle>
            {/* <MDBCardText>
              
            </MDBCardText> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100 card3'>
          <MDBCardImage
            src={certificate4}
            alt='...'
            position='top'
            style={{borderRadius:"10px", marginTop:"-27px", width:"17rem"}}
          />
          <MDBCardBody>
            <MDBCardTitle>ECMAScript</MDBCardTitle>
            {/* <MDBCardText>
            
            </MDBCardText> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100 card3'>
          <MDBCardImage
            src={certificate5}
            alt='...'
            position='top'
            style={{borderRadius:"10px",marginTop:"-27px", width:"17rem"}}
          />
          <MDBCardBody>
            <MDBCardTitle>JavaScript Essential Training</MDBCardTitle>
            {/* <MDBCardText>
              
            </MDBCardText> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100 card3'>
          <MDBCardImage
            src={certificate6}
            alt='...'
            position='top'
            style={{borderRadius:"10px", marginTop:"-27px", width:"17rem"}}
          />
          <MDBCardBody>
            <MDBCardTitle>Git Essential Training : The Basics</MDBCardTitle>
            {/* <MDBCardText>
              
            </MDBCardText> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    
    </div>
  );
}