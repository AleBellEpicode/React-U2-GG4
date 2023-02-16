import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const FavouritePageLink = () => {
  const navigate = useNavigate();
  return (
    <Button color="primary" onClick={() => navigate("/favourites")}>
      Favourite Page
    </Button>
  );
};

export default FavouritePageLink;
