// service-b.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ServiceBService } from 'src/microservices/service-b.service';

@Controller()
export class ServiceBController {
    constructor(private readonly serviceBService: ServiceBService) { }

    @Get()
    getHello(): string {
        return this.serviceBService.getHello();
    }
}