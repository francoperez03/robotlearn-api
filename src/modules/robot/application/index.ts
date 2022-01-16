import SerialRobotDriver from "../../../interfaces/SerialRobotDriver";
import axisChangePosition from "./AxisChangePosition";

const robotDriver = new  SerialRobotDriver();
export default axisChangePosition(robotDriver);
