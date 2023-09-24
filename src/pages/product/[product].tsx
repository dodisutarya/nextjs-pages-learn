import React from "react";
import { useRouter } from "next/router";

const DetailProductPage = () => {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <>
      <h1>Product Pagr</h1>
      <p>Produk Detail : {router.query.product}</p>
    </>
  );
};

export default DetailProductPage;
