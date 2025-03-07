/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerProductPriceWhereUniqueInput } from "./CustomerProductPriceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CustomerProductPriceUpdateInput } from "./CustomerProductPriceUpdateInput";

@ArgsType()
class UpdateCustomerProductPriceArgs {
  @ApiProperty({
    required: true,
    type: () => CustomerProductPriceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerProductPriceWhereUniqueInput)
  @Field(() => CustomerProductPriceWhereUniqueInput, { nullable: false })
  where!: CustomerProductPriceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CustomerProductPriceUpdateInput,
  })
  @ValidateNested()
  @Type(() => CustomerProductPriceUpdateInput)
  @Field(() => CustomerProductPriceUpdateInput, { nullable: false })
  data!: CustomerProductPriceUpdateInput;
}

export { UpdateCustomerProductPriceArgs as UpdateCustomerProductPriceArgs };
