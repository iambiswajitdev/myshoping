import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SingelProdact = () => {
  const prodact = useSelector((state) => state.allProdact.prodact);
  const [hart, setHart] = useState(false);
  // const wishHendaler = () => {
  //   if (hart === hart) {
  //     return (setHart = "hartBlock");
  //   }
  // };
  return (
    <>
      <Container>
        <Row>
          <Col lg={7} xs={12}>
            <h1 className="prodactHeading">our Prodact</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              dolorem, ipsa quas quidem necessitatibus totam ad earum corporis
              maiores enim cum, dolor voluptatem. A pariatur eos cumque, quidem
              consequatur laudantium?
            </p>
          </Col>
        </Row>
        <Row>
          {prodact.map((item) => (
            <Col lg={4}>
              <Link to="#">
                <div className="card" key={item.id}>
                  <div className="cardImg">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cardContant">
                    <Row>
                      <Col lg={10}>
                        <h3 className="prodactTitle">{item.category}</h3>
                        <h4 className="prodactCategory">{item.title}</h4>
                      </Col>
                      <Col lg={2}>
                        <Row>
                          <button
                            className="wishList"
                            onClick={() => setHart(!hart)}
                          >
                            {hart ? (
                              <i class="fas fa-heart wishHart"></i>
                            ) : (
                              <i class="far fa-heart wishHart"></i>
                            )}
                          </button>
                        </Row>
                      </Col>
                    </Row>
                    <span className="prodactPrice">Rs. $ {item.price}</span>
                    <Link to={`/prodact/${item.id}`}>
                      <button className="prodactOrderBtn">order now</button>
                    </Link>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default SingelProdact;
