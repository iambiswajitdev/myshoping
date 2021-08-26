import { useSelector, useDispatch } from "react-redux";
import SingelProdact from "./singelProdact";
import { setProdact } from "../redux/action/prodactAction";
import axios from "axios";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
const ProdactListing = () => {
  const prodact = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProdact = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProdact(response.data));
  };
  useEffect(() => {
    fetchProdact();
  });
  console.log("prodact", prodact);
  return (
    <div className="prodact_main">
      <div className="banner">
        <Container fluid>
          <Row>
            <Col lg={6}>
              <div className="shopingContant">
                <h2>online shopping</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  dolorem, ipsa quas quidem necessitatibus totam ad earum
                  corporis maiores enim cum, dolor voluptatem. A pariatur eos
                  cumque, quidem consequatur laudantium?
                </p>
                <button className="orderBtn">read more...</button>
              </div>
            </Col>
            <Col lg={6}>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/family-doing-shopping-2681393-2239882.png"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="ourProdact">
        <SingelProdact />
      </div>
    </div>
  );
};

export default ProdactListing;
