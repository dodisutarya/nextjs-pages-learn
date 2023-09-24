import React from "react";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const LoginViews = () => {
  // const { push } = useRouter();
  const router = useRouter();
  const handleLogin = () => {
    // push("/product")
    console.log(router);
    router.push("/product");
  };

  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold">Login Page</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleLogin()}
      >
        Login
      </button>
      <p style={{ color: "red", border: "1px solid red", borderRadius: "5px" }}>
        Belum punya akun? registrasi <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
