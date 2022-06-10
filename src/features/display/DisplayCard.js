import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({ item }) => {
    const { image, name,dilan,name1, description } = item;
    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardImg src={dilan} alt={name1} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCard;