import React from "react";
import { connect } from "react-redux";
import {
  updateTask,
  deleteTask,
  startTask,
  completeTask,
  setTasks,
  getTask,
} from "../../actions/taskActions";
import { withRouter } from "react-router-dom";
import {
  Text,
  DescriptionBox,
  StartTaskIcon,
  DeleteIcon,
  CompleteTaskIcon,
  CustomEditIcon,
  CustomClearIcon,
  Input,
  LoginButton,
  ButtonText,
} from "../../Themes/Theme";
import Modal from "../Modal";
const isEmpty = require("is-empty");

class Task extends React.Component {
  state = {
    isOpen: false,
    name: "",
    description: "",
    id: "",
    taskId: "",
    taskStatus: "",
  };
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
    alert("deleted");
  };
  onStart = () => {
    this.setState({
      taskStatus: "in progress",
    });
    this.props.startTask(this.props.match.params.id);
    alert("task status changed to in progress");
  };

  onComplete = () => {
    this.setState({
      taskStatus: "done",
    });
    this.props.completeTask(this.props.match.params.id);
    alert("task status changed to done");
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
      id: this.state.taskId
    };
    this.props.updateTask(task);
  };
  render() {
    const { currentTask } = this.props.currentTask;
    return (
      <div className="height-100 border-radius-30 flex column">
        <div className="flex1 flex center-align center-justify">
          <Text className="capital">
            {" "}
            {this.state.name === "" ? currentTask.name : this.state.name}
          </Text>
        </div>
        <div className="flex2 flex center-align center-justify ">
          <DescriptionBox className="flex center-align padding-4">
            <Text className="capital">
              {this.state.description === ""
                ? currentTask.description
                : this.state.description}
            </Text>
          </DescriptionBox>
        </div>
        <div className="flex1 center-align center-justify flex">
          <Text>Status:</Text>
          <Text>
            {" "}
            { currentTask && this.state.taskStatus === ""
              ? currentTask.status
              : this.state.taskStatus}
          </Text>
        </div>
        <div className=" padding-7 flex1 flex center-align space-evenly">
          {currentTask && currentTask.status === "to-do" ? (
            <button className="invisible-btn" onClick={this.onStart}>
              <StartTaskIcon />
            </button>
          ) : currentTask && currentTask.status === "in progress" ? (
            <button className="invisible-btn">
              <CompleteTaskIcon onClick={this.onComplete} />
            </button>
          ) : (
            <></>
          )}
          <button className="invisible-btn" onClick={this.onDelete}>
            <DeleteIcon />
          </button>
          <button className="invisible-btn" onClick={this.onUpdateTask}>
            <CustomEditIcon />
          </button>
        </div>
        {this.state.isOpen && (
          <Modal>
            <button
              className="invisible-btn"
              onClick={() => {
                this.setState({ ...this.state, isOpen: false });
              }}
            >
              <CustomClearIcon />
            </button>
            <form>
              <div className="flex column center-align height-60-vh space-evenly ">
                <Input
                  placeholder="Task Name"
                  onChange={this.onInput}
                  value={this.state.name}
                  id="name"
                  className="width-80"
                />
                <Input
                  placeholder="Description"
                  onChange={this.onInput}
                  value={this.state.description}
                  id="description"
                  className="width-80"
                />
                <LoginButton
                  type="submit"
                  onClick={this.handleSubmit}
                  className="width-80 left-10"
                >
                  <ButtonText>Submit</ButtonText>
                </LoginButton>
              </div>
            </form>
          </Modal>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
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
