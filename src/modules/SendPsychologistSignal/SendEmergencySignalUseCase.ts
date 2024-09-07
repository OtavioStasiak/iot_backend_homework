import { Twilio } from "twilio";


const client = new Twilio('', '');

interface ISendEmergencySignalUseCase {
}

export class SendEmergencySignalUseCase {
  async execute({
  }: ISendEmergencySignalUseCase) {
    
  /* await client.calls.create({
    from: "+15109240309",
    to: `+`,
    twiml: `<Response> <Say language="pt-BR" voice="Polly.Ricardo">Gás vazando na cozinha, fechar as bocas do fogão urgentemente!!!</Say></Response>`,
  }); 
 */
  await client.calls.create({
    from: "+15109240309",
    to: `+`,
    twiml: `<Response> <Say language="pt-BR" voice="Polly.Ricardo">Gás vazando na cozinha, fechar as bocas do fogão urgentemente!!!</Say></Response>`,
  }); 

  }
}
