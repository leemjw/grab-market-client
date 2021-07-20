import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://26dd2b36-ab82-4b36-8182-fe4cadafb973.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        // console.log("통신 결과:", result);
        setProduct(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (product == null) {
    return <h1>상품 정보를 받고 있습니다..</h1>;
  }

  console.log(product);

  return (
    <div>
      <div id="image-box">
        <img src={product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2020년 12월 7일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
