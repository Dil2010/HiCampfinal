import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CommentsList = ({ campsiteId }) => {    
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
    const isLoading = useSelector((state) => state.comments.isLoading);
    const errMsg = useSelector((state) => state.comments.errMsg);

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Reviews</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <CommentForm campsiteId={campsiteId}/>
            </Col>
        );
    }
    return isLoading ? (
        <Loading />
        ) : errMsg ? (
            <Error errMsg={errMsg} />
        ) : (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet.
        </Col>
    );
    // return isLoading ? (
    //             <Loading />
    //         ) : errMsg ? (
    //             <Error errMsg={errMsg} />
    //         ) : (
    //             <Col className='mt-4'>
    //                 <Row>
    //                     {partners.map((partner) => {
    //                         return (
    //                             <div className='d-flex mb-5' key={partner.id}>
    //                                 <Partner partner={partner} />
    //                             </div>
    //                         );
    //                     })}
    //                 </Row>
    //             </Col>
    //         );
};

// const CommentsList = ({ campsiteId }) => {    
//     const isLoading = useSelector((state) => state.partners.isLoading);
//     const errMsg = useSelector((state) => state.partners.errMsg);
//     const partners = useSelector(selectAllPartners);
//     return isLoading ? (
//         <Loading />
//     ) : errMsg ? (
//         <Error errMsg={errMsg} />
//     ) : (
//         <Col className='mt-4'>
//             <Row>
//                 {partners.map((partner) => {
//                     return (
//                         <div className='d-flex mb-5' key={partner.id}>
//                             <Partner partner={partner} />
//                         </div>
//                     );
//                 })}
//             </Row>
//         </Col>
//     );
// };
export default CommentsList;