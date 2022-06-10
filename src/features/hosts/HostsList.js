import { Col, Row } from "reactstrap";
import HostCard from "./HostCard";
import { selectAllHosts } from "./HostsSlice";
import { useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { selectHostByCampsiteId } from './hostsSlice';


const HostList = ({ campsiteId }) => {
  const hosts = useSelector(selectHostByCampsiteId);
  const isLoading = useSelector((state) => state.hosts.isLoading);
  const errMsg = useSelector((state) => state.hosts.errMsg);
  console.log("hosts:", hosts);

  if (isLoading) {
    return (
      <Row>
        <Loading />
      </Row>
    );
  }

  if (errMsg) {
    return (
      <Row>
        <Error errMsg={errMsg} />
      </Row>
    );
  }

  return (
    <Row className="ms-auto">
      {hosts.map((host) => {
        return (
          <Col md="5" className="m-4" key={campsite.id}>
            <HostCard host={host} />
          </Col>
        );
      })}
    </Row>
  );
};

export default HostList;
