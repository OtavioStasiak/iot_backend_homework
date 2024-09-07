import { Router } from "express";

import { SendEmergencySinalController } from "./SendPsychologistSignal/SendEmergencySinalController";


const routes = Router();

const sendEmergencySignalController = new SendEmergencySinalController();
routes.get("/sendEmergencySignal", sendEmergencySignalController.handle);


export { routes };