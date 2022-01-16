import RobotDriver from "../infrastructure/RobotDriver";
import { AxisPosition } from "../models/axisPosition";

const axisChangePosition = (
    robotDriver: RobotDriver,
  ) => async (axisName: string, axisPosition: AxisPosition): Promise<any> => {
     robotDriver.setPosition(axisName, axisPosition);
     console.log("listo")
     return {
       message: 'OK'
     }
  };
  
  export default axisChangePosition;