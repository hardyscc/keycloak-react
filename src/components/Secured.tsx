import React, { Component } from "react";
import Keycloak from "keycloak-js";
import UserInfo from "./UserInfo";
import Logout from "./Logout";

type Props = {};

type State = {
  keycloak: Keycloak.KeycloakInstance | null;
  authenticated: boolean;
};

class Secured extends Component<Props, State> {
  state = {
    keycloak: null,
    authenticated: false
  };

  componentDidMount() {
    const keycloak = Keycloak("/keycloak.json");
    keycloak
      .init({
        onLoad: "login-required"
      })
      .success(authenticated => {
        this.setState({ keycloak: keycloak, authenticated: authenticated });
      });
  }

  render() {
    const keycloak = this.state.keycloak;
    const authenticated = this.state.authenticated;
    if (keycloak && authenticated) {
      if (authenticated)
        return (
          <div>
            <p>
              This is a Keycloak-secured component of your application. You
              shouldn't be able to see this unless you've authenticated with
              Keycloak.
            </p>
            <UserInfo keycloak={keycloak} />
            <Logout keycloak={keycloak} />
          </div>
        );
      else return <div>Unable to authenticate!</div>;
    }
    return <div>Initializing Keycloak...</div>;
  }
}
export default Secured;
