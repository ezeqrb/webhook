import { Controller, Post, Req, Res, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name); // Aquí se utiliza el logger con el contexto del controlador

  constructor(private readonly appService: AppService) {}

  @Post('/webhook')
  ReceibeWebhook(@Req() request: Request, @Res() response: Response): any {
    this.logger.log(request.body); // Mensaje de log
    return response.status(200).send();
  }
}
