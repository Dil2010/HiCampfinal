import { Col, Row, Container, Card, CardBody, CardHeader, CardImg, CardText, CardTitle } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import PartnersList from '../features/partners/PartnersList';
import tentImg from './abouttent.jpg';
import animalmg from './aboutanimal.jpg';
import lakeImg from './aboutlake.jpg';


const AboutPage=()=>{
    return(
        <Container>
            <SubHeader style={{color:'black'}} current='About Us' />
            <Row className='row-content'>
                <Col sm='12'>
                    <h1 style={{textAlign: "center",fontSize:'100px'}}>Find yourself outside</h1>
                    <h4 style={{textAlign: "center"}}>Discover and book tent camping, RV parks, cabins, treehouses, and glamping in Australia, Canada, France, the United Kingdom, and the US.</h4>

                </Col>
            </Row>
        <Row>
        <Col sm='4'>
        <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'50px'}}>
            <CardImg src={tentImg} style={{borderRadius:'20px'}} />
        </Card>          
        </Col>   
        <Col sm='4'>
        <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'50px'}}>
            <CardImg src={animalmg} style={{borderRadius:'20px'}} />
        </Card>          
        </Col>  
        <Col sm='4'>
        <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px',marginTop:'50px'}}>
            <CardImg src={lakeImg} style={{borderRadius:'20px'}} />
        </Card>          
        </Col> 
        </Row> 
        <Row className='row-content'>
                <Col sm='12'>
                    <h1 style={{textAlign: "center"}}>From public parks to private land, we're the most comprehensive guide to getting outside.</h1>
                    <p style={{textAlign: "center"}}>
                    Discover camping in Alberta, British Columbia, Manitoba, New Brunswick, Newfoundland and Labrador, Northwest Territories, Nova Scotia, Nunavut, Ontario, Prince Edward Island, Quebec, Saskatchewan, and Yukon.
                    </p>
                </Col>
        </Row>
        <Row>
                <Col sm='12'>
                    <Card style={{backgroundColor:'#f3f2ef',borderRadius:'20px'}}>
                        <CardHeader style={{backgroundColor:'#f3f2ef'}} className=' text-black'>
                            <h3>Facts at a Glance</h3>
                                <CardBody style={{backgroundColor:'#f3f2ef',borderRadius:'20px'}} >
                                    <dl  className='row'>
                                        <dt className='col-6'>Founded</dt>
                                        <dd className='col-6'>February 3, 2001</dd>
                                        <dt className='col-6'>No. of Countries in 2022</dt>
                                        <dd className='col-6'>13</dd>
                                        <dt className='col-6'>No. of Parks in 2022</dt>
                                        <dd className='col-6'>2519</dd>
                                        <dt className='col-6'>No. of Campgrounds in 2022</dt>
                                        <dd className='col-6'>1656</dd>
                                        <dt className='col-6'>No. of Campsites in 2022</dt>
                                        <dd className='col-6'>5463</dd>
                                    </dl>
                                </CardBody>
                        </CardHeader>
                    </Card>
                </Col>
            </Row>
        <Row className='row-content'>
                <Col sm='12'>
                    <h4 style={{textAlign: "center"}}>OUR MISSION</h4>
                    <h1 style={{textAlign: "center"}}>Get more people outside</h1>
                    <p style={{textAlign: "center"}}>
                    Hicamp is a growing community of good-natured people and the most comprehensive resource for unique outdoor stays. By connecting people with the land and each other, Hipcamp works to support those who care for the land and get more people out under the stars. We do this because we believe humans in nature bring out the best of human nature.
                    </p>
                </Col>
            </Row>

            <Row className='row-content'>
                <Col sm='12'>
                    <h4 style={{textAlign: "center"}}>OUR VALUES</h4>
                    <h1 style={{textAlign: "center"}}>Embrace the adventure</h1>
                    <p style={{textAlign: "center"}}>
                    We are resilient and adaptable to ever-changing terrain. We bring positivity and gratitude, especially when things are hard. We know when to ask our friends for help. We are creative and resourceful.
                    </p>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col sm='12'>
                    <h1 style={{textAlign: "center"}}>Move with purposeful urgency</h1>
                    <p style={{textAlign: "center"}}>
                    We take action with the urgency that our mission deserves. We focus on learning faster so that we can invest in the most important things. We achieve more with less by creating systems at the right scale (sometimes with duct tape.) We are intentional about when we move fast and when we are more considered.
                    </p>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col sm='12'>
                    <h1 style={{textAlign: "center"}}>Build resilient communities</h1>
                    <p style={{textAlign: "center"}}>
                    We optimize for the good of our community and our many interconnected ecosystems. We intentionally create an environment of trust and respect. We elevate and protect diversity as a strength.
                    </p>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col sm='12'>
                    <h1 style={{textAlign: "center"}}>Leave it better</h1>
                    <p style={{textAlign: "center"}}>
                    We are passionate about our mission to get more people outside because we believe in biophilia and the power of love to inspire action. We believe that humanity at scale can have a positive impact on the earth. We know feedback drives growth and we constantly seek, give and receive it.
                    </p>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col sm='12'>
                    <h4 style={{textAlign: "center"}}>LAND SHARING</h4>
                    <h1 style={{textAlign: "center"}}>The sharing economy goes wild</h1>
                    <p style={{textAlign: "center"}}>
                    “The next wave of conservation has to be about engaging private landowners.” Rand Wentworth, President, Land Trust Alliance
                    </p>
                    <p style={{textAlign: "center"}}>
                    Over 60% of the United States is privately owned. It is essential to the future of our planet that much of this land remains undeveloped to maintain wilderness habitats and corridors that allow plants and animals to thrive and migrate naturally.
                    </p>
                    <p style={{textAlign: "center"}}>
                    By connecting landowners who want to keep their land undeveloped with our community of responsible, nature-loving Hipcampers, recreation can help fund the conservation of this land.
                    </p>
                    <p style={{textAlign: "center"}}>
                    And land sharing isn't just important for the environment—it also creates an entirely new way to get outside. Campers can escape the crowds, reconnect with nature and experience new land and cultures outside of the city—from organic farming, wild foraging, outdoor classrooms, group campouts and indigenous land stewardship.
                    </p>
                    <p style={{textAlign: "center"}}>
                    Join the land sharing movement! Find out more about listing your land or refer a host .
                    </p>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col sm='12'>
                    <h4 style={{textAlign: "center"}}>OUR STORY</h4>
                    <h1 style={{textAlign: "center"}}>It started with a wave</h1>
                    <p style={{textAlign: "center"}}>
                    The Hipcamp story began with waves—gorgeous, glassy, barrelling waves. They were crashing on California’s Central Coast at Andrew Molera State Park as Hipcamp founder and CEO Alyssa Ravasio watched in frustration.
                    </p>
                    <p style={{textAlign: "center"}}>
                    She had spent several hours searching dozens of websites for a spot that fit what she thought was a simple request: a beach to set up camp and watch the first sunrise of 2013.
                    </p>
                    <p style={{textAlign: "center"}}>
                    Although she found the state park as a result of her work, she didn’t discover one essential detail until she got there: it was an amazing place to catch a wave. “When I arrived,” she said, “I found out that even though I’d read so much about this place, I hadn’t learned that it was home to a great surf break. I’m a surfer and hadn’t brought my board!”
                    </p>
                    <p style={{textAlign: "center"}}>
                    At the time, over 30% of the California State Park system was threatened by closure due to lack of revenue. With this fact plus her disappointing research session, Alyssa set out to build technology to help people get outside, connect with nature, and find the right spots for them.
                    </p>
                    <p style={{textAlign: "center"}}>
                    And so the idea for Hipcamp was born. Alyssa attended Dev Bootcamp, an intensive 10-week coding training, and built a basic version of Hipcamp in 2013 before co-founder Eric Bach joined later that year. Hipcamp has since grown into the most comprehensive resource for discovering and booking unique outdoor stays including tent camping, RV parks, cabins, treehouses, and glamping.
                    </p>
                </Col>
            </Row>

            {/* <Row className='row-content'> */}
            <Row className='row-content'> 
                <Col xs='12'>                    
                    <h4 style={{textAlign: "center"}}>IN THE PRESS</h4>
                    <h1 style={{textAlign: "center"}}>Spotlight on Hipcamp</h1>
                    <Col sm='12'>
                    <PartnersList />
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutPage;














