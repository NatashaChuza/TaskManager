import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Router} from 'react-router-dom'
import {
  setTasks,
  createNewTask
} from "../../actions/taskActions";
import Modal from "../Modal";
import Task from "./Task"
import { ImpulseSpinner } from "react-spinners-kit";

import {
  ComponentBackground,
  WidgetContainer,
  TaskTitle,
  Tasktext,
  ButtonGeneral,
  ButtonText,
  Tasktitle,
  Input,
  MobileTopTasks,
  MobileTasks
} from "../../Themes/Theme";

class Tasks extends React.Component {
  state = {
    isFormOpen: false,
    isTaskOpen: false,
    taskId: '',
    name: "",
    description: "",
  };
  componentDidMount() {
    const info = {
      userId: this.props.auth.user.id,
    };
    // this.props.setTasks(info);
  }
  createNewTask = () => {
    this.setState({
      isFormOpen: !this.state.isFormOpen,
    });
    
  };
  onInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  closeInputModal = () => {
    this.setState({
      ...this.state,
      isFormOpen: false
    })
  }
  closeModal = () => {
    this.props.history.push(`/dashboard/tasks`)
    this.setState({
      ...this.state,
      isTaskOpen: false
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      name: this.state.name,
      description: this.state.description,
      owner: this.props.auth.user.id,
    };
    this.props.createNewTask(task);
    setTimeout(() => {
      this.setState({
        isFormOpen: false,
        name: "",
        description: "",
      });
    }, 1000);
  };

  render() {
    const { tasks } = this.props.tasks;
    return (
      <ComponentBackground className="component-background-mobile">
        <div className="tasks-container">
          <MobileTopTasks className="no-desktop">
          <div className="flex center-justify flex-end mobile-top">
            <Tasktitle className="chartText">Your Tasks</Tasktitle>
          </div>
          </MobileTopTasks> 
          <div className="flex center-justify flex-end mobile-top no-mobile">
            <Tasktitle className="chartText">Your Tasks</Tasktitle>
          </div>
          <MobileTasks className="mobile-top-borders no-desktop">
          <div className="flex space-evenly center-align tasks-container-mobile ">
            <WidgetContainer className="height-70 width-30 task-size-mobile top-10">
              <TaskTitle className="margin-top-5 margin-left-30">
                To do..
              </TaskTitle>
              { tasks && tasks.length > 0 ? (
                <ul>
                  {tasks.length > 0 &&
                    tasks.filter( task => task.status == "to-do").map((task) => (
                      <div
                        className="list-div flex center-align space-between cursor"
                        onClick={()=> {
                          this.setState({
                            ...this.state,
                            isTaskOpen: !this.state.isTaskOpen,
                            taskId: task._id
                          }, ()=>{ this.props.history.push(`/dashboard/tasks/${task._id}`)})
                        }}
                        key={task._id}
                      >
                        <Tasktext>{task.name}</Tasktext>
                        
                      </div>
                    ))}
                </ul>
              ) : (
                <div className="width-60 margin-left-40 margin-top-5">
                  <ImpulseSpinner
                    size={40}
                    frontColor="#fff"
                    backColor="#595959"
                    loading={true}
                  />
                </div>
              )}
            </WidgetContainer>
            <WidgetContainer className="height-70 width-30 task-size-mobile">
              <TaskTitle className="margin-top-5 margin-left-30">
                In Progress..
              </TaskTitle>
              {tasks && tasks.length > 0 ? (
                <ul>
                  {tasks.length > 0 &&
                    tasks.filter( task => task.status == "in progress").map((task) => (
                      <div
                        className="list-div flex center-align space-between cursor"
                        onClick={()=> {
                          this.setState({
                            ...this.state,
                            isTaskOpen: !this.state.isTaskOpen,
                            taskId: task._id
                          }, ()=>{ this.props.history.push(`/dashboard/tasks/${task._id}`)})
                        }}
                        key={task._id}
                      >
                        <Tasktext>{task.name}</Tasktext>
                        
                      </div>
                    ))}
                </ul>
              ) : (
                <div className="width-60 margin-left-40 margin-top-5">
                  <ImpulseSpinner
                    size={40}
                    frontColor="#fff"
                    backColor="#595959"
                    loading={true}
                  />
                </div>
              )}
            </WidgetContainer>
            <WidgetContainer className="height-70 width-30 task-size-mobile">
              <TaskTitle className="margin-top-5 margin-left-40">
                Done.
              </TaskTitle>
              { tasks && tasks.length > 0 ? (
                <ul>
                  {tasks.length > 0 &&
                    tasks.filter( task => task.status == "done").map((task) => (
                      <div
                        className="list-div flex center-align space-between cursor"
                        onClick={()=> {
                          this.setState({
                            ...this.state,
                            isTaskOpen: !this.state.isTaskOpen,
                            taskId: task._id
                          }, ()=>{ this.props.history.push(`/dashboard/tasks/${task._id}`)})
                        }}
                        key={task._id}
                      >
                        <Tasktext>{task.name}</Tasktext>
                        
                      </div>
                    ))}
                </ul>
              ) : (
                <div className="width-60 margin-left-40 margin-top-5">
                  <ImpulseSpinner
                    size={40}
                    frontColor="#fff"
                    backColor="#595959"
                    loading={true}
                  />
                </div>
              )}
            </WidgetContainer>
            {this.state.isTaskOpen && (
              <Modal closeModal={this.closeModal}>
                <Switch>
                <Route path="/dashboard/tasks/:id" component={Task}/>
                </Switch>
              </Modal>
             )} 
          </div>
          </MobileTasks>

          <div className="flex space-evenly center-align tasks-container-mobile no-mobile">
            <WidgetContainer className="height-70 width-30 task-size-mobile top-10">
              <TaskTitle className="margin-top-5 margin-left-30">
                To do..
              </TaskTitle>
              {/* { tasks && tasks.length > 0 ? ( */}
                <ul>
                  {tasks.length > 0 &&
                    tasks.filter( task => task.status == "to-do").map((task) => (
                      <div
                        className="list-div flex center-align space-between cursor"
                        onClick={()=> {
                          this.setState({
                            ...this.state,
                            isTaskOpen: !this.state.isTaskOpen,
                            taskId: task._id
                          }, ()=>{ this.props.history.push(`/dashboard/tasks/${task._id}`)})
                        }}
                        key={task._id}
                      >
                        <Tasktext>{task.name}</Tasktext>
                        
                      </div>
                    ))}
                </ul>
              {/* ) : (
                <div className="width-60 margin-left-40 margin-top-5">
                  <ImpulseSpinner
                    size={40}
                    frontColor="#fff"
                    backColor="#595959"
                    loading={true}
                  />
                </div>
              )} */}
            </WidgetContainer>
            <WidgetContainer className="height-70 width-30 task-size-mobile">
              <TaskTitle className="margin-top-5 margin-left-30">
                In Progress..
              </TaskTitle>
              {/* {tasks && tasks.length > 0 ? ( */}
                <ul>
                  {tasks.length > 0 &&
                    tasks.filter( task => task.status == "in progress").map((task) => (
                      <div
                        className="list-div flex center-align space-between cursor"
                        onClick={()=> {
                          this.setState({
                            ...this.state,
                            isTaskOpen: !this.state.isTaskOpen,
                            taskId: task._id
                          }, ()=>{ this.props.history.push(`/dashboard/tasks/${task._id}`)})
                        }}
                        key={task._id}
                      >
                        <Tasktext>{task.name}</Tasktext>
                        
                      </div>
                    ))}
                </ul>
              {/* ) : (
                <div className="width-60 margin-left-40 margin-top-5">
                  <ImpulseSpinner
                    size={40}
                    frontColor="#fff"
                    backColor="#595959"
                    loading={true}
                  />
                </div>
              )} */}
            </WidgetContainer>
            <WidgetContainer className="height-70 width-30 task-size-mobile">
              <TaskTitle className="margin-top-5 margin-left-40">
                Done.
              </TaskTitle>
              {/* { tasks && tasks.length > 0 ? ( */}
                <ul>
                  {tasks.length > 0 &&
                    tasks.filter( task => task.status == "done").map((task) => (
                      <div
                        className="list-div flex center-align space-between cursor"
                        onClick={()=> {
                          this.setState({
                            ...this.state,
                            isTaskOpen: !this.state.isTaskOpen,
                            taskId: task._id
                          }, ()=>{ this.props.history.push(`/dashboard/tasks/${task._id}`)})
                        }}
                        key={task._id}
                      >
                        <Tasktext>{task.name}</Tasktext>
                        
                      </div>
                    ))}
                </ul>
              {/* ) : (
                <div className="width-60 margin-left-40 margin-top-5">
                  <ImpulseSpinner
                    size={40}
                    frontColor="#fff"
                    backColor="#595959"
                    loading={true}
                  />
                </div>
              )} */}
            </WidgetContainer>
            {this.state.isTaskOpen && (
              <Modal closeModal={this.closeModal}>
                <Switch>
                <Route path="/dashboard/tasks/:id" component={Task}/>
                </Switch>
              </Modal>
             )} 
          </div>
          <div className="flex flex center-justify">
              {this.state.isFormOpen && (
              <Modal closeModal={this.closeInputModal}>
                <form className="flex flex-column height-100 space-evenly center-align">
                  <Input
                    className="width-80"
                    placeholder="Task Name"
                    onChange={this.onInput}
                    value={this.state.password}
                    id="name"
                  />
                  <Input
                    className="width-80"
                    placeholder="Task Description"
                    onChange={this.onInput}
                    value={this.state.description}
                    id="description"
                  />
                  <ButtonGeneral
                    type="submit"
                    onClick={this.handleSubmit}
                    className="width-80 height-15 border-radius-30 btn-desktop"
                  >
                    <ButtonText>Create Task</ButtonText>
                  </ButtonGeneral>
                </form>
              </Modal>)}    
            <ButtonGeneral
              className="width-15 height-15 border-radius-30 btn-mobile"
              onClick={this.createNewTask}
            >
              <ButtonText>Create New task!</ButtonText>
            </ButtonGeneral>
          </div>
        </div>
      </ComponentBackground>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  tasks: state.tasks,
});

export default connect(mapStateToProps, {
  setTasks,
  createNewTask
})(Tasks);
