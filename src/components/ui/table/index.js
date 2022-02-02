import React, { useState } from "react";
import styles from "./styles.module.css";
import Modal from "../modal/index";
import { Link } from "react-router-dom";
import Spinner from "../../atoms/Spinner";

const Table = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState();

  const deleteUser = () => {
    props?.DeletePost(user?.id);
    setShowModal(false);
  };
  const confirmDelete = (user) => {
    setShowModal(true);
    setUser(user);
  };
  return (
    <div className="table-responsive mt-5">
      {props?.loading && <Spinner />}
      {props?.users?.length && !props?.loading ? (
        <table className="table table-hover" style={{border: '1px solid #0000004d'}}>
          <thead>
            <tr className={`${styles.tr}`}>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>

          <tbody>
            {props?.users?.sort((a,b)=>a.name.localeCompare(b.name),'es', {sensitivity: 'base'}).map((user, id) => {
              return (
                <tr lassName={`${styles.tr}`} key={user?.id} >
                  <th scope="row">{id + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.username}</td>
                  <td>{user?.email}</td>
                  <td>
                    <Link
                      to={`/edit-user/${user.id}`}
                      className="btn btn-warning px-4 text-light"
                    >
                      edit
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => confirmDelete(user)}
                      className="btn btn-danger px-4"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <React.Fragment>
          {!props?.loading && (
            <div className="d-flex justify-content-center mb-5">
              <h2>NO DATA FOUND</h2>
            </div>
          )}
        </React.Fragment>
      )}

      <Modal
        deleteUser={() => deleteUser()}
        onClose={() => setShowModal(false)}
        show={showModal}
      >
        <div className="modal-body">
          <div className="d-flex">
            <p>
              Are you sure you want to delete <b>{user?.name}?</b>.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Table;
