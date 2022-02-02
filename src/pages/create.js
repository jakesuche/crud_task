import React, { useState } from "react";
import Layout from "../components/ui/layout";
import Form from "../components/ui/form";
import { connect } from "react-redux";
import { CreatePosts } from "../redux/actions/postAction";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const Create = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const LayoutHeader = () => {
    return (
      <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
        <div>Form</div>
      </div>
    );
  };

  const [values, setValue] = useState({
    name: "",
    email: "",
    error: {
      name: "",
      email: "",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!values.name) {
      setValue({ ...values, error: { name: "Name is required" } });
    } else if (!values.email) {
      setValue({ ...values, error: { email: "Email is required" } });
    } else {
      const username = `${values.name.split(" ")[0]}_${Math.random()
        .toString(36)
        .slice(2)}`;
      const payload = {
        id: Math.random().toString(36).slice(2),
        name: values.name,
        email: values.email,
        username: username,
      };

      props.CreatePosts(payload).then((ss) => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          props.history.push("/");
        }, 1000);
      });
    }
  };

  return (
    <div className="container">
      <Layout LayoutHeader={LayoutHeader}>
        {showAlert && (
          <div className="alert alert-success">User Created Success</div>
        )}

        <Form
          onSubmit={(e) => handleSubmit(e)}
          values={values}
          setValue={setValue}
        />
      </Layout>
    </div>
  );
};

Create.propTypes = {
  CreatePosts: PropTypes.func.isRequired,
};


export default withRouter(connect(null, { CreatePosts })(Create));
