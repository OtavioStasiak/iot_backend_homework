import { Request, Response } from "express";
import { SendEmergencySignalUseCase } from "./SendEmergencySignalUseCase";

export class SendEmergencySinalController {
    async handle(request: Request, response: Response) {
        const sendEmergencySignalUseCase = new SendEmergencySignalUseCase();
      

        const result = await sendEmergencySignalUseCase.execute({
        
        });

        return response.json(result);
    };
};