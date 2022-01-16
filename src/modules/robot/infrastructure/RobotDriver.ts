import { AxisPosition } from "../models/axisPosition";


export default interface RobotDriver{
  setPosition(axisName: string, axisPosition: AxisPosition): void;
}
