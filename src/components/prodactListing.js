import { useSelector, useDispatch } from "react-redux";
import SingelProdact from "./singelProdact";
import { setProdact } from "../redux/action/prodactAction";
import axios from "axios";
import { useEffect } from "react";
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
      <SingelProdact />
    </div>
  );
};

export default ProdactListing;
