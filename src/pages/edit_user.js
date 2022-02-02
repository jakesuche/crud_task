import React, { useState, useEffect } from "react";
import Layout from "../components/ui/layout";
import Form from "../components/ui/form";
import { connect } from "react-redux";
import { EditPost } from "../redux/actions/postAction";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const Create = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const [values, setValue] = useState({
    id: "",
    name: "",
    email: "",
    error: {
      name: "",
      email: "",
    },
  });
  const LayoutHeader = () => {
    return (
      <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
        <div>Form</div>
      </div>
    );
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    const id = props?.match?.params?.id;
    //converts to two id's to strings
    const user = props?.users?.find((user) => user?.id.toString() === id.toString());
    var obj = {
      ["name"]: user?.name,
      ["email"]: user?.email,
      ["id"]: user?.id,
      ["username"]:user?.username
    };
    setValue({ ...values, ...obj });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!values.name) {
      setValue({ ...values, error: { name: "Name is require" } });
    } else if (!values.email) {
      setValue({ ...values, error: { email: "Email is require" } });
    } else {
      const payload = {
        id: values.id,
        name: values.name,
        email: values.email,
        username: values.username,
      };

      props.EditPost(payload);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        props.history.push("/");
      }, 2000);
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
  EditPost: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  users: state?.post?.users,
});

export default withRouter(connect(mapStateToProps, { EditPost })(Create));
