import { Col, ListGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Favourites = () => {
  const favouritesContent = useSelector((state) => state.favouriteList.content);
  const dispatch = useDispatch();
  return (
    <ListGroup>
      {favouritesContent.map((company, i) => (
        <ListGroup.Item className="list-style-none">
          <Col key={company._id} className="my-4">
            <Button
              variant="danger"
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: i });
              }}
            >
              Remove from favourites
            </Button>
          </Col>
          <Col xs={3}>
            <Link to={`/${company.company_name}`}>{company.company_name}</Link>
          </Col>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Favourites;
