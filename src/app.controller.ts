import { Controller, Post, Req, Res, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name); // Aquí se utiliza el logger con el contexto del controlador

  constructor(private readonly appService: AppService) {}

  @Post('/webhook')
  ReceibeWebhook(@Req() request: Request, @Res() response: Response): any {
    try {
      this.logger.log(request.body); // Mensaje de log
      // use fetch to send the data to the other server
      console.log(request.body);
      fetch('https//back-prod.gcasaservices.com/api/webhook/eyJhbGci', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request.body),
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      return response.status(200).send();
    } catch (error) {
      console.log(error.message);
      return response.status(500).send();
    }
  }
}
