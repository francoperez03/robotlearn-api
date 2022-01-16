import { Application, Request, Response } from "express";
import axisChangePosition from "../modules/robot/application";


export const loadApiEndpoints = (app: Application): void => {
  app.get("/api", (req: Request, res: Response) => {
    return res.status(200).send("Hello world!");
  });
  app.post("/robot", async (req: Request, res: Response) => {
    let result = null
    try{
      result = await axisChangePosition(req.body.axisName, req.body.axisPosition);
    }
    catch(err: any){
      return res.status(500).send({
        message: "Error al ejecutar el servicio",
        error: err.message
      })
    }
    console.log("Ejecutado")
    return res.status(200).send(result);
  });
};
