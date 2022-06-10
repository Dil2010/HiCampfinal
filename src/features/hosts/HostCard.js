import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

const HostCard =({host})=>{
    const {id,image,name}=host;
    return (
        <Link to={`${id}`}>
            <Card>
            <CardImg 
                    width='100%'
                    src={image}
                    alt={name}
                    style={{borderRadius: '20px'}}
                /> 
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>                    
                </CardImgOverlay>
            </Card>
        </Link>
    ); 
}

export default HostCard;