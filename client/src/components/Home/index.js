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

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];
const COLORS = ["#595959", "#FBB047", "##FBB047", "#FF8042"];

class Home extends React.Component {
  static contextType = Consumer;
  render() {
    const { user } = this.props.auth;
    const { tasks } = this.props.tasks;
    return (
      <ComponentBackground>
        <div className="home-container">
          <div className="flex">
            <div className="flex6"></div>
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
            <Text>Dashboard</Text>
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
              <PieChart width={800} height={170} onMouseEnter={this.onPieEnter}>
                <Pie
                  data={data}
                  cx={120}
                  cy={80}
                  innerRadius={60}
                  outerRadius={75}
                  fill="#8884d8"
                  paddingAngle={4}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Pie
                  data={data}
                  cx={320}
                  cy={80}
                  innerRadius={60}
                  outerRadius={75}
                  fill="#8884d8"
                  paddingAngle={4}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Pie
                  data={data}
                  cx={520}
                  cy={80}
                  innerRadius={60}
                  outerRadius={75}
                  fill="#8884d8"
                  paddingAngle={4}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
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
