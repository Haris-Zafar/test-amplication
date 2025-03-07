/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  ValidateNested,
  IsOptional,
  IsNumber,
  Max,
} from "class-validator";
import { CustomerProductPriceCreateNestedManyWithoutCustomersInput } from "./CustomerProductPriceCreateNestedManyWithoutCustomersInput";
import { Type } from "class-transformer";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { CustomerPaymentCreateNestedManyWithoutCustomersInput } from "./CustomerPaymentCreateNestedManyWithoutCustomersInput";

@InputType()
class CustomerCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  address!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  contactPerson!: string;

  @ApiProperty({
    required: false,
    type: () => CustomerProductPriceCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => CustomerProductPriceCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => CustomerProductPriceCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  customPrices?: CustomerProductPriceCreateNestedManyWithoutCustomersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutCustomersInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @Field(() => Number)
  outstandingBalance!: number;

  @ApiProperty({
    required: false,
    type: () => CustomerPaymentCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => CustomerPaymentCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => CustomerPaymentCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  payments?: CustomerPaymentCreateNestedManyWithoutCustomersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  phone!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @Field(() => Number)
  totalPurchases!: number;
}

export { CustomerCreateInput as CustomerCreateInput };
