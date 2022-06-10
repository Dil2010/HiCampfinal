import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';



const HostDetail = ( {host} ) => {
    const { image, name, description } = host;

    return (
        <Col md='5' className='m-1'>
            <Card style={{borderRadius: '20px'}}>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default HostDetail;