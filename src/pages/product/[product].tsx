import React from "react";
import { useRouter } from "next/router";
import { fetcher } from "@/lib/swr/fetcher";
import useSWR from "swr";
import DetailProduct from "@/views/DetailProduct";
import { ProductType } from "@/types/product.type";

const DetailProductPage = ({ product }: { product: ProductType }) => {
  const { query } = useRouter();

  // client side rendering
  // const { data, error, isLoading } = useSWR(
  //   `/api/product/${query.product}`,
  //   fetcher
  // );

  // console.log(data);

  return (
    <>
      {/* client side rendering */}
      {/* <DetailProduct product={isLoading ? [] : data.data} /> */}

      {/* Server Side Rendering Code */}
      <DetailProduct product={product} />
    </>
  );
};

export default DetailProductPage;

// server side rendering - dipanggil setiap melakukan request
// export async function getServerSideProps({
//   params,
// }: {
//   params: { product: string };
// }) {
//   console.log(params.product);
//   //fetch data
//   const res = await fetch(
//     `http://localhost:3000/api/product/${params.product}`
//   );
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

// Static Site Generation
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  const paths = response.data.map((product: ProductType) => ({
    params: {
      product: product.id,
    },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({
  params,
}: {
  params: { product: string };
}) {
  //fetch data
  const res = await fetch(
    `http://localhost:3000/api/product/${params.product}`
  );
  const response = await res.json();
  console.log(response);
  return {
    props: {
      product: response.data,
    },
  };
}
