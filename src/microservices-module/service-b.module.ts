// service-b.module.ts
import { Module } from '@nestjs/common';
import { ServiceBController } from 'src/microservices-controller/service-b.controller';
import { ServiceBService } from 'src/microservices/service-b.service';

@Module({
    controllers: [ServiceBController],
    providers: [ServiceBService],
})
export class ServiceBModule { }