import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SingelProdact = () => {
  const prodact = useSelector((state) => state.allProdact.prodact);
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
              <Link to={`/prodact/${item.id}`}>
                <div className="card" key={item.id}>
                  <div className="cardImg">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cardContant">
                    <h3 className="prodactTitle">{item.title}</h3>
                    <span className="prodactPrice">$ {item.price}</span>
                    <h4 className="prodactCategory">{item.category}</h4>
                  </div>
                  <button className="prodactOrderBtn">order now</button>
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
