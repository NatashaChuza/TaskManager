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
} from "../../Themes/Theme";
import { ReactComponent as UndrawIllustration } from "../../Illustration.svg";
import { PieChart, Pie, Sector, Cell } from "recharts";



class Home extends React.Component {
  static contextType = Consumer;

   TOTAL_TASKS = parseInt(this.props.tasks.tasks.length)
   DONE_TASKS = parseInt(this.props.tasks.tasks.filter( task => task.status === "done").length)
   TODO_TASKS = parseInt(this.props.tasks.tasks.filter( task => task.status === "to-do").length)
   IN_PROGRESS_TASKS = parseInt(this.props.tasks.tasks.filter( task => task.status === "in progress").length)
   COLOR1 = this.props.theme.mode === "light" ? '#595959' : "#FF2511"
   COLOR2 = this.props.theme.mode === "light" ? '#FBB047' : "#0C0C1E"
  
    doneData = [
    { name: "Group A", value: this.TOTAL_TASKS },
    { name: "Group B", value: this.DONE_TASKS },
  ];
  todoData = [
    { name: "Group A", value: this.TOTAL_TASKS },
    { name: "Group B", value: this.TODO_TASKS },
  ];
  inProgressData = [
    { name: "Group A", value: this.TOTAL_TASKS },
    { name: "Group B", value: this.IN_PROGRESS_TASKS},
  ];
   COLORS = [this.COLOR1, this.COLOR2];

   calculatePercentage = ( amount, total) => {
     return Math.round((amount/total) * 100)
   }
  render() {
    const { user } = this.props.auth;
    const { tasks } = this.props.tasks;
   
    return (
      <ComponentBackground>
        <div className="home-container">
          <div className="flex">
            <div className="flex6 flex align-end ">
            <Text className="margin-4">Dashboard</Text>
            </div>
            <div className="flex flex1">
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
          <div className="flex center-align padding-3">
           
          </div>
          <div className="flex">
            <WidgetContainer className="height-80 width-60 margin-3">
              <HomeWelcome className="margin-3 margin-top-5">
                Welcome, {user.userName.split(" ")[0]}!
              </HomeWelcome>
              <div className="paragraph margin-top-5">
                <Tasktext>Organize your tasks,</Tasktext>
                <Tasktext>and have a productive day!</Tasktext>
              </div>

              <UndrawIllustration className="illustration" />
            </WidgetContainer>
            <WidgetContainer className="height-120 width-30 margin-5-left">
              <HomeWelcome className="margin-7 margin-top-5">
                Your Current Tasks..
              </HomeWelcome>
              { tasks && tasks.length > 0 ? (
                <ul>
                  {tasks.length > 0 &&
                    tasks.filter( task => task.status == "in progress").map((task) => (
                        <li >
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
          <div>
            <div className="margin-3">
              <div className="absolute left-25 bottom-30 square-20 flex column center-align space-evenly">
              <p className="margin-padding-0">Done</p> 
              <p className="margin-padding-0">{this.calculatePercentage(this.DONE_TASKS, this.TOTAL_TASKS)}%</p>
              </div>
              <div className="absolute left-41 bottom-30 square-20 flex column center-align space-evenly">
              <p className="margin-padding-0">To Do</p>
              <p className="margin-padding-0">{this.calculatePercentage(this.TODO_TASKS, this.TOTAL_TASKS)}%</p>
              </div>
              <div className="absolute left-54 bottom-30 square-20 flex column center-align space-evenly">
              <p className="margin-padding-0">In Progress</p>
              <p className="margin-padding-0">{this.calculatePercentage(this.IN_PROGRESS_TASKS, this.TOTAL_TASKS)}%</p>
              </div>
              
              <PieChart width={800} height={170} onMouseEnter={this.onPieEnter}>
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
                  {this.doneData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={this.COLORS[index % this.COLORS.length]}
                    />
                  ))}
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
                 {this.doneData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={this.COLORS[index % this.COLORS.length]}
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
                 {this.doneData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={this.COLORS[index % this.COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>
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

export default connect(mapStateToProps)(withTheme(Home));
