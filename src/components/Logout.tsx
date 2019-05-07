import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

type Props = {
  keycloak: Keycloak.KeycloakInstance;
} & RouteComponentProps;

class Logout extends Component<Props> {
  logout() {
    this.props.history.push("/");
    this.props.keycloak.logout();
  }

  render() {
    return <button onClick={() => this.logout()}>Logout</button>;
  }
}
export default withRouter(Logout);
