import { useState,useEffect } from 'react';
import { useSpring,animated } from 'react-spring';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const AnimatedDisplayCard = ({ item }) => {
    const { image, name,dilan,name1, description,description1 } = item;
    const [toggle, setToggle] = useState(true);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <animated.div style={animatedStyle}>
            <Card>
                <CardImg src={image} alt={name} />
                <CardImg src={dilan} alt={name1} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                    <CardText>{description1}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    );
};

export default AnimatedDisplayCard;