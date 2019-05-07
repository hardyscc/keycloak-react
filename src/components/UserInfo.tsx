import React, { Component } from "react";

type Props = {
  keycloak: Keycloak.KeycloakInstance;
};

type State = {
  name: string;
  email: string;
  id: string;
};

class UserInfo extends Component<Props, State> {
  state = {
    name: "",
    email: "",
    id: ""
  };

  constructor(props: Props) {
    super(props);
    this.props.keycloak.loadUserInfo().success((userInfo: any) => {
      this.setState({
        name: userInfo.name,
        email: userInfo.email,
        id: userInfo.sub
      });
    });
  }

  render() {
    return (
      <div className="UserInfo">
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p>ID: {this.state.id}</p>
      </div>
    );
  }
}
export default UserInfo;
