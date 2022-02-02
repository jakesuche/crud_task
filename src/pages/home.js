import React from "react";
import PropTypes from "prop-types";

import Table from "../components/ui/table";
import Layout from "../components/ui/layout";

import { useHistory } from "react-router-dom";
import Button from "../components/atoms/Button";
import { fetchPosts, DeletePost } from "../redux/actions/postAction";
import { connect } from "react-redux";

const LayoutHeader = () => {
  const history = useHistory();
  function goToCreate() {
    history.push("/create-user");
  }
  return (
    <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
      <div>User List</div>
      <div>
        <Button onClick={goToCreate} className="btn btn-primary px-5">
          Add New{" "}
        </Button>
      </div>
    </div>
  );
};

const Home = (props) => {
  React.useEffect(() => {
    if (props?.users?.length > 0) {
      return false;
    } else {
      props.fetchPosts();
    }
  }, []);
  return (
    <div>
      <Layout LayoutHeader={LayoutHeader}>
        <Table
          DeletePost={props?.DeletePost}
          loading={props?.loading}
          users={props?.users}
        />
      </Layout>
    </div>
  );
};

Home.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  DeletePost: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  users: state?.post?.users,
  loading: state?.post?.isLoaded,
});

export default connect(mapStateToProps, { fetchPosts, DeletePost })(Home);
