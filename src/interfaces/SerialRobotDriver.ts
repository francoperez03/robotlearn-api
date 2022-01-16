import RobotDriver from "../modules/robot/infrastructure/RobotDriver";
import { AxisPosition } from "../modules/robot/models/axisPosition";
const SerialPort = require('serialport')


class SerialRobotDriver implements RobotDriver {
    public setPosition(axisName: string, axisPosition: AxisPosition): void {
        const port = new SerialPort('COM4', {
            baudRate: 9600
          })
          port.write('2', function(err: Error) {
              if (err) {
                  throw new Error("No se escribir el puerto")
              }
              console.log('message written')
              port.close(()=>{})
          })
            
            // Open errors will be emitted as an error event
          port.on('error', function(err: Error) {
            throw new Error("No se pudo abrir el puerto")
          })
    }
}
export default SerialRobotDriver;
