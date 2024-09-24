// service-a.module.ts
import { Module } from '@nestjs/common';
import { ServiceAController } from 'src/microservices-controller/service-a.controller';
import { ServiceAService } from 'src/microservices/service-a.service';

@Module({
    controllers: [ServiceAController],
    providers: [ServiceAService],
})
export class ServiceAModule { }