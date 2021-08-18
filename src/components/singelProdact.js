import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SingelProdact = () => {
  const prodact = useSelector((state) => state.allProdact.prodact);
  return (
    <>
      {Object.keys(prodact).length === 0 ? (
        <div className="loading">
          <h3>loading2 ....</h3>
        </div>
      ) : (
        <Container>
          <Row>
            {prodact.map((item) => (
              <Col lg={3}>
                <Link to={`/prodact/${item.id}`}>
                  <div className="card" key={item.id}>
                    <div className="cardImg">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="cardContant">
                      <h3 className="prodactTitle">{item.title}</h3>
                      <p className="prodactPrice">$ {item.price}</p>
                      <h4 className="prodactCategory">{item.category}</h4>
                    </div>
                    <button className="prodactOrderBtn">order now</button>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default SingelProdact;
