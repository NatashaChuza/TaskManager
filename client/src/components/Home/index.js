import React from "react";
import { connect } from "react-redux";
import { withTheme } from "styled-components";
import { Consumer } from "../../Themes/ThemeProvider";
import { ImpulseSpinner } from "react-spinners-kit";

import {
  ComponentBackground,
  CustomHelpIcon,
  CustomSunIcon,
  CustomMoonIcon,
  Text,
  Tasktext,
  WidgetContainer,
  HomeWelcome,
  Charttext,
  MobileTop,
  MobileMiddle,
  ChartContainer,
  YourProgressDiv
} from "../../Themes/Theme";
import { ReactComponent as UndrawIllustration } from "../../Illustration.svg";
import { PieChart, Pie, Sector, Cell } from "recharts";

class Home extends React.Component {

  state={
    key1: 1,
    cell1: "cell-1",
    cell2:"cell-2",
    done: '',
    todo: '',
    inProgress: '',
    total: 0,
    todoNum: 0,
    inProgressNum: 0,
    doneNum: 0
    
  }

  static contextType = Consumer;

  TOTAL_TASKS = parseInt(this.props.tasks.tasks.length);
  DONE_TASKS = parseInt(
    this.props.tasks.tasks.filter((task) => task.status === "done").length
  );
  TODO_TASKS = parseInt(
    this.props.tasks.tasks.filter((task) => task.status === "to-do").length
  );
  IN_PROGRESS_TASKS = parseInt(
    this.props.tasks.tasks.filter((task) => task.status === "in progress")
      .length
  );
  doneData = [
    { name: "Group A", value: 0 },
    { name: "Group B", value: 0 },
  ];
  todoData = [
    { name: "Group A", value: 0 },
    { name: "Group B", value: 0},
  ];
  inProgressData = [
    { name: "Group A", value: 0 },
    { name: "Group B", value: 0 },
  ];
  
  componentDidMount(){
      const TOTAL_TASKS = parseInt(this.props.tasks.tasks.length);
     const  DONE_TASKS = parseInt(
        this.props.tasks.tasks.filter((task) => task.status === "done").length
      );
     const TODO_TASKS = parseInt(
        this.props.tasks.tasks.filter((task) => task.status === "to-do").length
      );
     const IN_PROGRESS_TASKS = parseInt(
        this.props.tasks.tasks.filter((task) => task.status === "in progress")
          .length
      );
      const doneData = [
        { name: "Group A", value: TOTAL_TASKS },
        { name: "Group B", value: DONE_TASKS },
      ];
     const todoData = [
        { name: "Group A", value: TOTAL_TASKS },
        { name: "Group B", value: TODO_TASKS},
      ];
     const inProgressData = [
        { name: "Group A", value: TOTAL_TASKS },
        { name: "Group B", value: IN_PROGRESS_TASKS },
      ];
      this.setState({
        done: doneData,
        todo: todoData,
        inProgress: inProgressData,
        total: TOTAL_TASKS,
        todoNum: TODO_TASKS,
        inProgressNum: IN_PROGRESS_TASKS,
        doneNum: DONE_TASKS
      })
  }

  calculatePercentage = (amount, total) => {

    if( amount == 0 || total == 0){
      return 0
    }else{
      return Math.round((amount / total) * 100);
    }
    
  };
  render() {
    const { user } = this.props.auth;
    const { tasks } = this.props.tasks;
    console.log(tasks.length)
    return (
      <ComponentBackground>
        <div className="home-container">
        <MobileTop className="no-desktop">
          <div className="flex">
            <div className="flex2 flex column space-evenly height-12">
              <Text className="margin-4 chartText">Dashboard</Text>
              <HomeWelcome className="margin-3 welcome-text-mobile">
                Welcome, {user.userName.split(" ")[0]}!
              </HomeWelcome>
            </div>
            <div className="flex flex1 height-5">
              <CustomHelpIcon className="flex flex1 center-align-self cursor" />
              {this.props.theme.mode === "light" ? (
                <CustomMoonIcon
                  className="flex flex1 center-align-self cursor"
                  onClick={() => {
                    this.context.toggle();
                  }}
                />
              ) : (
                <CustomSunIcon
                  className="flex flex1 center-align-self cursor"
                  onClick={() => {
                    this.context.toggle();
                  }}
                />
              )}
            </div>
          </div>
          </MobileTop>
         
          <div className="flex no-mobile">
            <div className="flex flex5 "></div>
            <div className="flex flex1">
              <CustomHelpIcon className="flex flex1 center-align-self cursor" />
              {this.props.theme.mode === "light" ? (
                <CustomMoonIcon
                  className="flex flex1 center-align-self cursor"
                  onClick={() => {
                    this.context.toggle();
                    this.setState({
                      key1:2,
                      cell1:'cell-3',
                      cell2:'cell-4'
                    })
                  }}
                />
              ) : (
                <CustomSunIcon
                  className="flex flex1 center-align-self cursor"
                  onClick={() => {
                    this.context.toggle();
                    this.setState({
                      key1:3,
                      cell1:'cell-5',
                      cell2:'cell-6'
                    })
                  }}
                />
              )}
            </div>
            </div>
             <div className="flex align-start padding-3 no-mobile">
             <Text className="margin-4 chartText">Dashboard</Text>
             </div>
              <div className="flex no-mobile">
            <WidgetContainer className="height-80 width-60 margin-3 no-mobile">
              <HomeWelcome className="margin-3 margin-top-5">
                Welcome, {user.userName.split(" ")[0]}!
              </HomeWelcome>
              <div className="paragraph margin-top-5">
                <Tasktext>Organize your tasks,</Tasktext>
                <Tasktext>and have a productive day!</Tasktext>
              </div>

              <UndrawIllustration className="illustration no-mobile" />
            </WidgetContainer>
            <WidgetContainer className="height-120 width-30 margin-5-left no-mobile">
              <HomeWelcome className="margin-7 margin-top-5">
                Your Current Tasks..
              </HomeWelcome>
              {tasks && tasks.length > 0 ? (
                <ul>
                  {tasks.length > 0 &&
                    tasks
                      .filter((task) => task.status == "in progress")
                      .map((task) => (
                        <li>
                          <Tasktext className="list-item">{task.name}</Tasktext>
                        </li>
                      ))}
                </ul>
              ) : (
                <div >
                </div>
              )}
            </WidgetContainer>
          </div>
          <div className="no-mobile">
            <div className="margin-3">
              <div className="absolute left-25 bottom-10 square-20 flex column center-align space-evenly">
              <Charttext className="chartText">Done</Charttext> 
              <Charttext  className="chartText">{this.calculatePercentage(this.state.doneNum, this.state.total)}%</Charttext>
              </div>
              <div className="absolute left-41  bottom-10 square-20 flex column center-align space-evenly">
              <Charttext  className="chartText">To Do</Charttext>
              <Charttext  className="chartText">{this.calculatePercentage(this.state.todoNum, this.state.total)}%</Charttext>
              </div>
              <div className="absolute left-54 bottom-10 square-20 flex column center-align space-evenly">
              <Charttext className="font-15 chartText">In Progress</Charttext>
              <Charttext className="chartText">{this.calculatePercentage(this.state.inProgressNum, this.state.total)}%</Charttext>
              </div>
             
              <PieChart width={800} height={170} onMouseEnter={this.onPieEnter} key={this.state.key1} className="no-mobile" >
                <Pie
                  data={this.state.done}
                  cx={120}
                  cy={80}
                  innerRadius={60}
                  outerRadius={75}
                  paddingAngle={4}
                  dataKey="value"
                  stroke={0}
                >

                   <Cell
                      key={this.state.cell1}
                      fill={this.props.theme.mode === "light"? "#595959" : "#FF2511"}
                    />
                     <Cell
                      key={this.state.cell2}
                      fill={this.props.theme.mode === "light"? "#FBB047" : "#0C0C1E"}
                    />
                </Pie>

                <Pie
                  data={this.state.todo}
                  cx={320}
                  cy={80}
                  innerRadius={60}
                  outerRadius={75}
                  fill="#8884d8"
                  paddingAngle={4}
                  stroke={0}
                  dataKey="value"
                >
                  <Cell
                      key={"key-1"}
                      fill={this.props.theme.mode === "light"? "#595959" : "#FF2511"}
                    />
                     <Cell
                      key={"key-2"}
                      fill={this.props.theme.mode === "light"? "#FBB047" : "#0C0C1E"}
                    />
                 
                 
                </Pie>
                <Pie
                 data={this.state.inProgress}
                  cx={520}
                  cy={80}
                  innerRadius={60}
                  outerRadius={75}
                  fill="#8884d8"
                  paddingAngle={4}
                  stroke={0}
                  dataKey="value"
                >
                 <Cell
                      key={"key-1"}
                      fill={this.props.theme.mode === "light"? "#595959" : "#FF2511"}
                    />
                     <Cell
                      key={"key-2"}
                      fill={this.props.theme.mode === "light"? "#FBB047" : "#0C0C1E"}
                    />
                </Pie>
              </PieChart>
            </div>
          </div>
            
         <MobileMiddle className="no-desktop">
          <div className="flex mobile-component-div">
            <WidgetContainer className="height-80 width-60 margin-3 no-mobile">
              <HomeWelcome className="margin-3 margin-top-5">
                Welcome, {user.userName.split(" ")[0]}!
              </HomeWelcome>
              <div className="paragraph margin-top-5">
                <Tasktext>Organize your tasks,</Tasktext>
                <Tasktext>and have a productive day!</Tasktext>
              </div>

              <UndrawIllustration className="illustration no-mobile" />
            </WidgetContainer>
            <WidgetContainer className="height-120 width-30 margin-5-left no-mobile">
              <HomeWelcome className="margin-7 margin-top-5">
                Your Current Tasks..
              </HomeWelcome>
              {tasks && tasks.length > 0 ? (
                <ul>
                  {tasks.length > 0 &&
                    tasks
                      .filter((task) => task.status == "in progress")
                      .map((task) => (
                        <li>
                          <Tasktext className="list-item">{task.name}</Tasktext>
                        </li>
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
          </div>     
          <div className="">
            <div className="margin-3">
              <div className="absolute left-25 bottom-70 square-20 flex column center-align space-evenly">
              <Charttext className="chartText">Done</Charttext> 
              <Charttext  className="chartText">{this.calculatePercentage(this.state.doneNum, this.state.total)}%</Charttext>
              </div>
              <div className="absolute left-41  bottom-50 square-20 flex column center-align space-evenly">
              <Charttext  className="chartText">To Do</Charttext>
              <Charttext  className="chartText">{this.calculatePercentage(this.state.todoNum, this.state.total)}%</Charttext>
              </div>
              <div className="absolute left-54 bottom-20 square-20 flex column center-align space-evenly">
              <Charttext className="font-15 chartText">In Progress</Charttext>
              <Charttext  className="chartText">{this.calculatePercentage(this.state.inProgressNum, this.state.total)}%</Charttext>
              </div>

             

               <ChartContainer className="chart-container no-desktop">
              <PieChart width={200} height={170} onMouseEnter={this.onPieEnter} className=" bottom-10 top-10">
              <Pie
                  data={this.state.done}
                  cx={120}
                  cy={80}
                  innerRadius={60}
                  outerRadius={75}
                  paddingAngle={4}
                  dataKey="value"
                  stroke={0}
                >
                   <Cell
                      key={'cell-1'}
                      fill={this.props.theme.mode === "light"? "#595959" : "#FF2511"}
                    />
                     <Cell
                      key={'cell-2'}
                      fill={this.props.theme.mode === "light"? "#FBB047" : "#595959"}
                    />

                </Pie>

              </PieChart>
              </ChartContainer>
               
              <ChartContainer className="chart-container no-desktop">
              <PieChart width={200} height={170} onMouseEnter={this.onPieEnter} className=" bottom-10">
              <Pie
                  data={this.state.todo}
                  cx={120}
                  cy={80}
                  innerRadius={60}
                  outerRadius={75}
                  paddingAngle={4}
                  dataKey="value"
                  stroke={0}
                >
                   <Cell
                      key={'cell-1'}
                      fill={this.props.theme.mode === "light"? "#595959" : "#FF2511"}
                    />
                     <Cell
                      key={'cell-2'}
                      fill={this.props.theme.mode === "light"? "#FBB047" : "#595959"}
                    />

                </Pie>

              </PieChart>
              </ChartContainer>

              <ChartContainer className="chart-container no-desktop">
              <PieChart width={200} height={170} onMouseEnter={this.onPieEnter} className=" bottom-10">
              <Pie
                  data={this.state.inProgress}
                  cx={120}
                  cy={80}
                  innerRadius={60}
                  outerRadius={75}
                  paddingAngle={4}
                  dataKey="value"
                  stroke={0}
                >
                   <Cell
                      key={'cell-1'}
                      fill={this.props.theme.mode === "light"? "#595959" : "#FF2511"}
                    />
                     <Cell
                      key={'cell-2'}
                      fill={this.props.theme.mode === "light"? "#FBB047" : "#595959"}
                    />

                </Pie>

              </PieChart>
              </ChartContainer>
              <PieChart width={800} height={170} onMouseEnter={this.onPieEnter} className="no-mobile">
                <Pie
                  data={this.doneData}
                  cx={120}
                  cy={80}
                  innerRadius={60}
                  outerRadius={75}
                  paddingAngle={4}
                  dataKey="value"
                  stroke={0}
                >

                   <Cell
                      key={this.state.key1}
                      fill={this.props.theme.mode === "light"? "#595959" : "#FF2511"}
                    />
                     <Cell
                      key={this.state.key2}
                      fill={this.props.theme.mode === "light"? "#FBB047" : "#0C0C1E"}
                    />
                </Pie>
                <Pie
                  data={this.todoData}
                  cx={320}
                  cy={80}
                  innerRadius={60}
                  outerRadius={75}
                  fill="#8884d8"
                  paddingAngle={4}
                  stroke={0}
                  dataKey="value"
                >
                  <Cell
                      key={'cell-1'}
                      fill={this.props.theme.mode === "light"? "#595959" : "#FF2511"}
                    />
                     <Cell
                      key={'cell-2'}
                      fill={this.props.theme.mode === "light"? "#FBB047" : "#0C0C1E"}
                    />
                 
                  ))}
                </Pie>
                <Pie
                 data={this.inProgressData}
                  cx={520}
                  cy={80}
                  innerRadius={60}
                  outerRadius={75}
                  fill="#8884d8"
                  paddingAngle={4}
                  stroke={0}
                  dataKey="value"
                >
                 <Cell
                      key={'cell-1'}
                      fill={this.props.theme.mode === "light"? "#595959" : "#FF2511"}
                    />
                     <Cell
                      key={'cell-2'}
                      fill={this.props.theme.mode === "light"? "#FBB047" : "#0C0C1E"}
                    />
                </Pie>
              </PieChart>
            </div>
          </div>
          </MobileMiddle>
        </div>
      </ComponentBackground>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  tasks: state.tasks,
});

export default connect(mapStateToProps)(withTheme(Home));
