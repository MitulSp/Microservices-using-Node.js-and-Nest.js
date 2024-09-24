import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('SERVICE_A') private readonly serviceAClient: ClientProxy,
    @Inject('SERVICE_B') private readonly serviceBClient: ClientProxy
  ) { }

  @Get('service-a')
  async callServiceA() {
    console.log("'service-a' called");
    const result = await this.serviceAClient.send('getHello', {}).toPromise();
    return { message: result };
  }

  @Get('service-b')
  async callServiceB() {
    const result = await this.serviceBClient.send('getHello', {}).toPromise();
    return { message: result };
  }
}
