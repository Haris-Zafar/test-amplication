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
import { DemandListItemWhereUniqueInput } from "../../demandListItem/base/DemandListItemWhereUniqueInput";
import { ValidateNested, IsNumber, Max, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { PurchaseWhereUniqueInput } from "../../purchase/base/PurchaseWhereUniqueInput";
import { SupplierProductWhereUniqueInput } from "../../supplierProduct/base/SupplierProductWhereUniqueInput";

@InputType()
class PurchaseItemCreateInput {
  @ApiProperty({
    required: true,
    type: () => DemandListItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DemandListItemWhereUniqueInput)
  @Field(() => DemandListItemWhereUniqueInput)
  demandListItem!: DemandListItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @Field(() => ProductWhereUniqueInput)
  product!: ProductWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PurchaseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PurchaseWhereUniqueInput)
  @Field(() => PurchaseWhereUniqueInput)
  purchase!: PurchaseWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @Field(() => Number)
  purchasePrice!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  quantity!: number;

  @ApiProperty({
    required: true,
    type: () => SupplierProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupplierProductWhereUniqueInput)
  @Field(() => SupplierProductWhereUniqueInput)
  supplierProduct!: SupplierProductWhereUniqueInput;
}

export { PurchaseItemCreateInput as PurchaseItemCreateInput };
