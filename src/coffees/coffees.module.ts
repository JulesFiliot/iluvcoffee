import { Injectable, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constant';
@Module({
	imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
	controllers: [CoffeesController],
	providers: [
		CoffeesService,
		{ provide: COFFEE_BRANDS, useFactory: () => ['funky coffee', 'looks like a nice brand'], },
	],
	exports: [CoffeesService]
})
export class CoffeesModule {}
