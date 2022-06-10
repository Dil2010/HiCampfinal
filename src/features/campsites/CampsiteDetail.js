import { Row,Card, CardImg, CardText, CardBody, Col,CardTitle } from 'reactstrap';



const CampsiteDetail = ( {campsite} ) => {
    const { host,
        image, 
        name, 
        description,
        checkin,
        checkout,
        cancellationpolicy,
        responsetime,
        onarrival,
        minimumnights,
        acceptsbookings,
        weeknightdiscount,
        tent,
        sites,
        guests,
        walk,
        wheelchair,
        toilet,
        pets,
        fire,
        water,
        table,
        wifi,
        kitchen,
        showers,
        garbage,
        laundry,
        activity1,
        activity2,
        activity3,
        activity4,
        activity5,
        activity6,
        terrain1,
        terrain2,
        terrain3
    } = campsite;

    return (
        <Col md='6' className='m-1'>
            <Card style={{borderRadius: '20px'}}>
                <h4>Hosted by {host}</h4>
                <CardImg style={{borderRadius: '20px'}} src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                <Row>
                <h4 style={{marginTop:'20px'}}>Details</h4>
                <Col >
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px'}}>
                <CardBody>
                <h5>Check in</h5>
                <h5>Check out</h5>
                <h5>Cancellation policy</h5>
                <h5>Response time</h5>
                <h5>On arrival</h5>
                <h5>Minimum nights </h5>
                <h5>Accepts bookings </h5>
                <h5>Weeknight discount </h5>
                </CardBody>
                </Card>          
                </Col>   
                <Col sm='7'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px'}}>
                <CardBody>
                <h5>:{checkin} </h5>
                <h5>:{checkout} </h5>
                <h5>:{cancellationpolicy}&emsp;&emsp; </h5>
                <h5>:{responsetime} </h5>
                <h5>:{onarrival} </h5>
                <h5>:{minimumnights} </h5>
                <h5>:{acceptsbookings} </h5>
                <h5>:{weeknightdiscount} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</h5>
                </CardBody>
                </Card>          
                </Col> 
                </Row> 

                {/* <Row>
                <h4 style={{marginTop:'20px'}}>Details</h4>
                <Col sm='6'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px'}}>
                <CardBody>
                <h6>Check in</h6>
                <h6>Check out</h6>
                <h6>Cancellation policy</h6>
                <h6>Response time</h6>
                <h6>On arrival</h6>
                <h6>Minimum nights </h6>
                <h6>Accepts bookings </h6>
                <h6>Weeknight discount </h6>
                </CardBody>
                </Card>          
                </Col>   
                <Col sm='6'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px'}}>
                <CardBody>
                <h6>:{checkin} </h6>
                <h6>:{checkout} </h6>
                <h6>:{cancellationpolicy} </h6>
                <h6>:{responsetime} </h6>
                <h6>:{onarrival} </h6>
                <h6>:{minimumnights} </h6>
                <h6>:{acceptsbookings} </h6>
                <h6>:{weeknightdiscount} </h6>
                </CardBody>
                </Card>          
                </Col> 
                </Row>  */}

                <Row>
                <h4 style={{marginTop:'20px'}}>Campsite area</h4>
                <Col sm='6'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px'}}>
                <CardBody>
                <h5>Tent</h5>
                <h5>No of sites</h5>
                <h5>No of guests</h5>
                <h5>Walk</h5>
                <h5>Wheelchair access</h5>
                </CardBody>
                </Card>          
                </Col>   
                <Col sm='6'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px'}}>
                <CardBody>
                <h5>:{tent} </h5>
                <h5>:{sites} </h5>
                <h5>:{guests} </h5>
                <h5>:{walk} </h5>
                <h5>:{wheelchair} </h5>
                </CardBody>
                </Card>          
                </Col> 
                </Row> 

                <Row>
                <h4 style={{marginTop:'20px'}}>Essentials</h4>
                <Col sm='6'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px'}}>
                <CardBody>
                <h5>Toilets</h5>
                <h5>Pets</h5>
                <h5>Fire</h5>  
                </CardBody>
                </Card>          
                </Col>   
                <Col sm='6'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px'}}>
                <CardBody>
                <h5>:{toilet} </h5>
                <h5>:{pets} </h5>
                <h5>:{fire} </h5>  
                </CardBody>
                </Card>          
                </Col> 
                </Row> 

                <Row>
                <h4 style={{marginTop:'20px'}}>Amenities</h4>
                <Col sm='6'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px'}}>
                <CardBody>
                <h5>Water</h5>
                <h5>Table</h5>
                <h5>Wifi</h5>
                <h5>kitchen</h5>
                <h5>Showers</h5>
                <h5>Garbage</h5>
                <h5>Laundry</h5>
                </CardBody>
                </Card>          
                </Col>   
                <Col sm='6'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px'}}>
                <CardBody>
                <h5>:{water} </h5>
                <h5>:{table} </h5>
                <h5>:{wifi} </h5>
                <h5>:{kitchen} </h5>
                <h5>:{showers} </h5>
                <h5>:{garbage} </h5>
                <h5>:{laundry} </h5>
                </CardBody>
                </Card>          
                </Col> 
                </Row> 

                <Row>
                <h4 style={{marginTop:'20px'}}>Activities</h4>
                <h5>Offered on the Host's property or nearby.</h5>
                <Col sm='4'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px',height:'150px'}}>
                <CardBody>
                <h3>{activity1}</h3>
                </CardBody>
                </Card>          
                </Col>   
                <Col sm='4'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px',height:'150px'}}>
                <CardBody>
                <h3>{activity2}</h3>
                </CardBody>
                </Card>          
                </Col> 
                <Col sm='4'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px',height:'150px'}}>
                <CardBody>
                <h3>{activity3}</h3>
                </CardBody>
                </Card>          
                </Col>  
                </Row> 

                <Row>
                <Col sm='4'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px',height:'150px'}}>
                <CardBody>
                <h3>{activity4}</h3>
                </CardBody>
                </Card>          
                </Col>   
                <Col sm='4'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px',height:'150px'}}>
                <CardBody>
                <h3>{activity5}</h3>
                </CardBody>
                </Card>          
                </Col> 
                <Col sm='4'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px',height:'150px'}}>
                <CardBody>
                <h3>{activity6}</h3>
                </CardBody>
                </Card>          
                </Col>  
                </Row> 

                <Row>
                <h4 style={{marginTop:'20px'}}>Terrain</h4>
                <h5>Natural features you'll find at South Woodlot in Ontario.</h5>
                <Col sm='4'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px',height:'150px'}}>
                <CardBody>
                <h3>{terrain1}</h3>
                </CardBody>
                </Card>          
                </Col>   
                <Col sm='4'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px',height:'150px'}}>
                <CardBody>
                <h3>{terrain2}</h3>
                </CardBody>
                </Card>          
                </Col> 
                <Col sm='4'>
                <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'20px',height:'150px'}}>
                <CardBody>
                <h3>{terrain3}</h3>
                </CardBody>
                </Card>          
                </Col>  
                </Row> 

                </CardBody>                
            </Card>
        </Col>
    );
};

export default CampsiteDetail;