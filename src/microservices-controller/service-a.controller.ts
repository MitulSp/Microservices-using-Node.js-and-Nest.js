// service-a.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ServiceAService } from 'src/microservices/service-a.service';

@Controller()
export class ServiceAController {
  constructor(private readonly serviceAService: ServiceAService) { }

  // This will handle messages received with the pattern 'getHello' over TCP
  @MessagePattern('getHello')
  getHello(): string {
    return this.serviceAService.getHello();
  }
}
