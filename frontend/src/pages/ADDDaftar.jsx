import React, { useEffect } from "react";
import Layout from "./layout";
import FormAddDaftar from "../components/FormAddDaftar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AddDaftar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError,user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role !== "user") {
      navigate("/dashboard");
    }
  }, [isError,user, navigate]);
  return (
    <Layout>
      <FormAddDaftar />
    </Layout>
  );
};

export default AddDaftar;
