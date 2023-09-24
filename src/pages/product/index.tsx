import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState();
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  return <div>ProductPage</div>;
};

export default ProductPage;
