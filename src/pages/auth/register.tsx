import React from "react";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <h1>RegisterPage</h1>
      <p>
        sudah punya akun? login <Link href={"/auth/login"}>disini</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
