import axios from "axios";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProdact } from "../redux/action/prodactAction";
const ProdactDetails = () => {
  const prodact = useSelector((state) => state.prodact);
  const { image, title, price, category, description } = prodact;
  const { prodactId } = useParams();
  const dispatch = useDispatch();
  console.log(prodact);

  const fetchProdactDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${prodactId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectProdact(response.data));
  };

  useEffect(() => {
    if (prodactId && prodactId !== "") fetchProdactDetails();
  }, [prodactId]);
  return (
    <div className="prodactDetails">
      {Object.keys(prodact).length === 0 ? (
        <div className="loading">
          <h3>loading ....</h3>
        </div>
      ) : (
        <Container>
          <Row>
            <Col lg={6}>
              <div className="prodactDetailsImg">
                <img src={image} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="prodactRightContant">
                <h2 className="prodactTitle">{title}</h2>
                <h2 className="prodactPriceRight"> $ {price}</h2>
                <h4 className="prodactCategory_right">{category}</h4>
                <p className="prodactDescription">{description}</p>
                <button className="prodactOrderBtn">add to cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ProdactDetails;
