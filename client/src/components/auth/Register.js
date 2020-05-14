import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import {
  LoginText,
  Input,
  LoginButton,
  ButtonText,
  Text,
} from "../../Themes/Theme";

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {},
  };

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      userName: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <LoginText>Sign Up</LoginText>
        <form onSubmit={this.onSubmit}>
          <div
            style={{
              position: "absolute",
              left: "5%",
              height: "42vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              top: "10%",
            }}
          >
             <span className="red-text">{errors.name}</span>
            <Input
              placeholder="Name"
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              id="name"
              type="text"
            />
               <span className="red-text">{errors.email}</span>
            <Input
              placeholder="Email Adress"
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
            />
            <span className="red-text">{errors.password}</span>
            <Input
              placeholder="Create A Password"
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
            />
              <span className="red-text">{errors.password2}</span>
            <Input
              placeholder="Confirm Password"
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              id="password2"
              type="password"
            />
          </div>
          <LoginButton type="submit">
            <ButtonText>Sign Up</ButtonText>
          </LoginButton>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
