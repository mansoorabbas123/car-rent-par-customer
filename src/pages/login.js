import AuthLayout from "@/components/Layout/AuthLayout/AuthLayout";
import Layout from "@/components/Layout/Layout";
import React from "react";

const Login = () => {
  return (
    <Layout>
      <AuthLayout isLogin>login</AuthLayout>
    </Layout>
  );
};

export default Login;
