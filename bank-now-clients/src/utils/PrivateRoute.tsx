import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";


interface props {
  //   load: () => void;
  Auth: boolean;
  //   protectedPath: any;
  component: any;
}

const PrivateRoute = ({
  Auth,
  component: Component,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={props =>
        !Auth ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = (state: any) => ({
  Auth: state.Auth.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);

// "proxy": "https://bank-now.herokuapp.com/"