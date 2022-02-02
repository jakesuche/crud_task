import React from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Form = ({ setValue, values, onSubmit }) => {
  const handleChange = (name) => (e) => {
    const { value } = e.target;
    setValue({ ...values, error: {}, [name]: value });
  };
  return (
    <form onSubmit={onSubmit} className="form mt-5 container">
      <div className="form-group row ">
        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
          Name
        </label>
        <div className="col-sm-7">
          <Input
            value={values.name}
            onChange={handleChange("name")}
            type="text"
            className={`form-control ${
              values?.error?.name ? styles.error : ""
            }`}
            id="inputPassword"
            placeholder="Name"
          />
          {values?.error?.name && (
            <p className="text-danger">{values?.error?.name}</p>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
          Email
        </label>
        <div className="col-sm-7">
          <Input
            className={`form-control ${
              values?.error?.email ? styles.error : ""
            }`}
            value={values.email}
            id="inputPassword"
            placeholder="Email"
            onChange={handleChange("email")}
            type="email"
          />
          {values?.error?.email && (
            <p className="text-danger">{values?.error?.email}</p>
          )}
        </div>
      </div>
      <div
        className={`row form-group gap-2 justify-content-end ${styles.button_group}`}
      >
        <Link to="/" className="btn btn-outline-danger">
          Cancel
        </Link>
        <Button type="submit" className="btn btn-success">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
