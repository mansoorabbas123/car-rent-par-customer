import AuthLayout from "@/components/Layout/AuthLayout/AuthLayout";
import Layout from "@/components/Layout/Layout";
import React from "react";

const Signup = () => {
  return (
    <Layout>
      <AuthLayout isLogin>signup</AuthLayout>
    </Layout>
  );
};

export default Signup;
