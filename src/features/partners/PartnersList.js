import { Row, Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

// const partners = useSelector(selectAllPartners);


const PartnersList = () => {
    const isLoading = useSelector((state) => state.partners.isLoading);
    const errMsg = useSelector((state) => state.partners.errMsg);
    const partners = useSelector(selectAllPartners);
    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Col className='mt-4'>
            <Row>
                {partners.map((partner) => {
                    return (
                        <div className='d-flex mb-3' key={partner.id}>
                            <Partner partner={partner} />
                        </div>
                    );
                })}
            </Row>
        </Col>
    );
}

export default PartnersList;