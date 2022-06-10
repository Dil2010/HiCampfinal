import { Container, Row,Col } from "reactstrap";
// import DisplayList from "../features/display/DisplayList";
import SubHeader from "../components/SubHeader";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import reduxWoodsImg from './hicamp1.webp';
import beachImg from './beach.webp';
import petImg from './pet_friendly.jpg';
import lakeImg from './lake.jpg';
import recreateImg from './Recreate.webp';
import leveImg from './leaveno.webp';

const HomePage = () => {
  return (
    <Container>
      <SubHeader current="Home" />
      <h1 style={{textAlign: "center"}}>Find yourself outside.</h1>
      <h3 style={{textAlign: "center"}}>Discover and book tent camping, RV parks, cabins, treehouses, and glamping</h3>
      {/* <DisplayList />   */}
      <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'50px'}}>
            <CardImg src={reduxWoodsImg} style={{borderRadius:'20px'}} />
            <CardBody>
                <CardTitle style={{textAlign: "center"}}>Own land? Earn money with HiCamp.</CardTitle>
                <CardText style={{textAlign: "center"}}>Host our community of good-natured campers, glampers, and RV travelers on your land or at your cabin.</CardText>
            </CardBody>
        </Card>
        
        <h1 style={{marginTop:'50px'}}>Find your next getaway</h1>
        <Row>
        <Col sm='4'>
        <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'50px'}}>
            <CardImg src={beachImg} style={{borderRadius:'20px'}} />
            <CardBody>
                <CardTitle style={{textAlign: "center"}}>Beach stays</CardTitle>
                <CardText style={{textAlign: "center"}}>Set up by the water</CardText>
            </CardBody>
        </Card>          
        </Col>   
        <Col sm='4'>
        <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'50px'}}>
            <CardImg src={petImg} style={{borderRadius:'20px'}} />
            <CardBody>
                <CardTitle style={{textAlign: "center"}}>Pet-friendly spots</CardTitle>
                <CardText style={{textAlign: "center"}}>Bring your best friend</CardText>
            </CardBody>
        </Card>          
        </Col>  
        <Col sm='4'>
        <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'50px'}}>
            <CardImg src={lakeImg} style={{borderRadius:'20px'}} />
            <CardBody>
                <CardTitle style={{textAlign: "center"}}>Lake camping</CardTitle>
                <CardText style={{textAlign: "center"}}>Go for a classic</CardText>
            </CardBody>
        </Card>          
        </Col> 
        </Row> 
        
        <Row>
        <h2 style={{marginTop:'50px'}}>Provinces & Territories</h2>
        <Col sm='3'>
          <ul className='list-unstyled'>
            <li>Ontario</li>
            <li>Nova Scotia</li>
            <li>Quebec</li>
          </ul>
        </Col>
        <Col sm='3'>
          <ul className='list-unstyled'>
            <li>Alberta</li>
            <li>New Brunswick</li>
            <li>Newfoundland and Labrador</li>
          </ul>
        </Col>
        <Col sm='3'>
          <ul className='list-unstyled'>
            <li>Manitoba</li>
            <li>Saskatchewan</li>
            <li>Northwest Territories</li>
          </ul>
        </Col>
        <Col sm='3'>
          <ul className='list-unstyled'>
            <li>British Columbia</li>
            <li>Yukon</li>
            <li>Nunavut</li>
          </ul>
        </Col>
        </Row>

        <Row>
        <h2 style={{marginTop:'50px'}}>Public Parks</h2>
        <Col sm='3'>
          <ul className='list-unstyled'>
            <li>Dinosaur Provincial Park</li>
            <li>Pinery Provincial Park</li>
            <li>Killarney Provincial Park</li>
          </ul>
        </Col>
        <Col sm='3'>
          <ul className='list-unstyled'>
            <li>Lake Superior Provincial Park</li>
            <li>Sasquatch Provincial Park</li>
            
          </ul>
        </Col>
        <Col sm='3'>
          <ul className='list-unstyled'>
            <li>Golden Ears Provincial Park</li>
            <li>Bronte Creek Provincial Park</li>
            
          </ul>
        </Col>
        <Col sm='3'>
          <ul className='list-unstyled'>
            <li>Killbear Provincial Park</li>
            <li>Wheatley Provincial Park</li>            
          </ul>
        </Col>
        </Row>

        <Row>
        <h2 style={{marginTop:'50px'}}>Cities</h2>
        <Col sm='3'>
          <ul className='list-unstyled'>
            <li>Penticton</li>
            <li>Parksville</li>
            <li>Campbell River</li>
          </ul>
        </Col>
        <Col sm='3'>
          <ul className='list-unstyled'>
            <li>Revelstoke</li>
            <li>Powell River</li>
            
          </ul>
        </Col>
        <Col sm='3'>
          <ul className='list-unstyled'>
            <li>Chilliwack</li>
            <li>Victoria</li>
            
          </ul>
        </Col>
        <Col sm='3'>
          <ul className='list-unstyled'>
            <li>Mirabel</li>
            <li>Prince Edward County</li>            
          </ul>
        </Col>
        </Row>

        <Row>
        <h2 style={{marginTop:'50px'}}>Safety at HiCamp</h2>
        <Col sm='12'>
        <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'50px'}} >            
            <CardBody>
                <CardTitle style={{fontSize:"30px"}} >Inclusion Policy</CardTitle>
                <CardText style={{fontSize:"20px"}}>We have a zero-tolerance policy against discrimination at Hipcamp and are committed to helping our Host and Hipcamper community be inclusive.</CardText>
            </CardBody>
        </Card>          
        </Col> 
        </Row> 
        <Row>
        
        <Col sm='6'>
        <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'50px'}} >            
            <CardBody>
                <CardTitle style={{fontSize:"30px"}} >Hosting Standards</CardTitle>
                <CardText style={{fontSize:"20px"}}>All Hosts should review and adhere to these standards around providing a positive Hipcamp experience, being a thoughtful neighbor, and serving as a responsible citizen.</CardText>
            </CardBody>
        </Card>          
        </Col> 
        <Col sm='6'>
        <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'50px'}}>            
            <CardBody>
                <CardTitle style={{fontSize:"30px"}} >HiCamper Standards</CardTitle>
                <CardText style={{fontSize:"20px"}}>All Hipcampers should review and adhere to these standards for safety, trip preparation, and respect in order to uphold Hipcamp’s most important value: “leave it better.”</CardText>
            </CardBody>
        </Card>          
        </Col> 
        </Row> 

        <Row>
        <h2 style={{marginTop:'50px'}}>Safety partners</h2>
        <Col sm='6' >
        <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'50px'}}>            
            <CardBody>
            <CardImg src={recreateImg} style={{borderRadius:'20px',width:'100px',height:'100px'}} />
                <CardTitle style={{fontSize:"30px"}} >Recreate Responsibly</CardTitle>
                <ol >
                  <li>Know before you go</li>
                  <li>Practice physical distancing</li>
                  <li>Plan ahead</li>
                  <li>Play it safe</li> 
                  <li>Explore locally</li>
                  <li>Leave no trace</li>
                  <li>Build an inclusive outdoors</li>          
                </ol>
            </CardBody>
        </Card>          
        </Col> 
        <Col sm='6'>
        <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'50px'}}>            
            <CardBody>
            <CardImg src={leveImg} style={{borderRadius:'20px',width:'100px',height:'100px'}} />
                <CardTitle style={{fontSize:"30px"}} >Leave No Trace</CardTitle>
                <ol >
                  <li>Plan ahead and prepare</li>
                  <li>Travel and camp on durable surfaces</li>
                  <li>Plan ahead</li>
                  <li>Dispose of waste properly</li> 
                  <li>Leave what you find</li>
                  <li>Respect wildlife</li>
                  <li>Be considerate of other visitors</li>          
                </ol>
            </CardBody>
        </Card>          
        </Col> 
        </Row> 
    </Container>
    
  );
};


export default HomePage;