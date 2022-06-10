import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Loading from "../components/Loading";

import {Card,  CardImg} from 'reactstrap';
// import {Card, CardBody, CardHeader, CardImg, CardText, CardTitle } from 'reactstrap';


import tentImg from './abouttent.jpg';
import animalmg from './aboutanimal.jpg';
import lakeImg from './aboutlake.jpg';

const CampsiteDetailPage = () => {
  const { campsiteId } = useParams();
  const campsite = useSelector(selectCampsiteById(campsiteId));
  console.log("campsite", campsite);



  const isLoading = useSelector((state) => state.campsites.isLoading);
  const errMsg = useSelector((state) => state.campsites.errMsg);
  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (errMsg) {
    content = <Error errMsg={errMsg} />;
  } else {
    content = (
      <>
        <Row>
          <CampsiteDetail campsite={campsite} />
          <CommentsList campsiteId={campsiteId} />
        </Row>
        {/* <Row>
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
        </Row>  */}
      </>
    );
  }

  return (
    <Container>
      {campsite && <SubHeader current={campsite.name} detail={true} />}
      <Row>
        {/* <h5>Nearby: {campsite.nearby}</h5> */}

      </Row>
      <Row>{content}</Row>
    </Container>
  );
};

export default CampsiteDetailPage;
