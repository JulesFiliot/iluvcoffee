import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
export class CreateCoffeeDto {
	@ApiProperty({ description: 'Coffee name' })
	@IsString()
	readonly name: string;

	@ApiProperty({ description: 'Coffee brand' })
	@IsString()
	readonly brand: string;

	@ApiProperty({ description: 'Coffee description' })
	@IsString()
	readonly description: string;

	@ApiProperty({ description: 'Array of coffee flavors' })
	@IsString({ each: true })
	readonly flavors: string[];
}
