import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { setTasks, createNewTask } from "../../actions/taskActions";
import Task from "./Task";
import Modal from "../Modal";
import { CircleSpinner } from "react-spinners-kit";
import {Background, DashboardBackground} from '../../Themes/Theme'
import {Consumer} from '../../Themes/ThemeProvider'
import Navbar from '../Navbar.js'
import Home from '../Home'
import Tasks from '../Tasks'
import { Route, Switch} from 'react-router-dom'
import './Dashboard.css'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      name: "",
      description: "",
      id: "",
    };
  }
  componentDidMount() {
    const info = {
      userId: this.props.auth.user.id,
    }
    this.props.setTasks(info);
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  createNewTask = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  onInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit =  (e) => {
    e.preventDefault()
    const task = {
      name: this.state.name,
      description: this.state.description,
      id: this.state.id,
      owner: this.props.auth.user.id
    }
    this.props.createNewTask(task)
  }

static contextType = Consumer
  render() {
    const { user } = this.props.auth;
    const { tasks } = this.props.tasks;
    return (
        <Background>
          <div className="dashboard-container">
            <div className="nav-mobile-div">
            <Navbar/>
            </div>
             <DashboardBackground>
             <Switch>
             <Route path="/dashboard/home" component={Home} />
              <Route path="/dashboard/tasks" component={Tasks} />
             </Switch>
             </DashboardBackground>       
          </div>
       
        </Background>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  tasks: state.tasks,
});

export default connect(mapStateToProps, { logoutUser, setTasks, createNewTask})(Dashboard);
