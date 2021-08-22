import React from "react";
import { Inertia } from "@inertiajs/inertia";
import FormDevise from "../Shared/FormDevise";
import Layout from "../../../Components/Layout";

const Edit = (props) => {
  return (
    <>
      <FormDevise title="Edit User Profile" />
    </>
  );
};

Edit.layout = Layout;
export default Edit;
