import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import {
  updateTask,
  deleteTask,
  startTask,
  completeTask,
  setTasks,
  getTask,
} from "../../actions/taskActions";
import Modal from "../Modal";
import { connect } from "react-redux";
import { CircleSpinner } from "react-spinners-kit";
const isEmpty = require("is-empty");

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      name: "",
      description: "",
      id: "",
      taskId: "",
      taskStatus: "",
    };
  }

  componentDidMount() {
    this.props.getTask(this.props.match.params.id);

    const { match } = this.props;
    const id = match.params.id;
    this.setState({
      taskId: id,
    });
  }

  onUpdateTask = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  onInput = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  };

  onDelete = () => {
    this.props.deleteTask(this.props.match.params.id, this.props.history);
  };

  onStart = () => {
    this.setState({
      taskStatus: "in progress",
    });
    this.props.startTask(this.props.match.params.id);
  };

  onComplete = () => {
    this.setState({
      taskStatus: "done",
    });
    this.props.completeTask(this.props.match.params.id);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      name: !isEmpty(this.state.name)
        ? this.state.name
        : this.props.currentTask.name,
      description: !isEmpty(this.state.description)
        ? this.state.description
        : this.props.currentTask.description,
      id: this.state.taskId,
      status: this.props.currentTask.status,
    };
    this.props.updateTask(task);
  };

  render() {
    const { currentTask } = this.props.currentTask;
    return (
      <div>
        {currentTask === "" ? (
          <CircleSpinner size={30} color="#686769" loading={true} />
        ) : (
          <div>
            <h1>Task name:</h1>
            <h1>
              {this.state.name === "" ? currentTask.name : this.state.name}
            </h1>
            <h1>task details:</h1>
            <h1>
              {this.state.description === ""
                ? currentTask.description
                : this.state.description}
            </h1>
            <h1>task status:</h1>
            <h1>
              {this.state.taskStatus === ""
                ? currentTask.status
                : this.state.taskStatus}
            </h1>
            {currentTask.status === "to-do" ? (
              <button onClick={this.onStart}>Start Task</button>
            ) : currentTask.status === "in progress" ? (
              <button onClick={this.onComplete}>complete task</button>
            ) : (
              <></>
            )}
            <button onClick={this.onUpdateTask}>edit task</button>
            {this.state.isOpen && (
              <Modal>
                <form>
                  <div className="modalRow">
                    <label>Task Name:</label>
                    <input
                      id="name"
                      value={this.state.name}
                      onChange={this.onInput}
                    ></input>
                  </div>
                  <div className="modalRow">
                    <label>description:</label>
                    <input
                      id="description"
                      value={this.state.description}
                      onChange={this.onInput}
                    ></input>
                  </div>
                  <button type="submit" onClick={this.handleSubmit}>
                    submit
                  </button>
                </form>
              </Modal>
            )}
            <button onClick={this.onDelete}>delete task</button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  tasks: state.tasks,
  currentTask: state.tasks,
});
export default connect(mapStateToProps, {
  updateTask,
  deleteTask,
  startTask,
  completeTask,
  setTasks,
  getTask,
})(withRouter(Task));
