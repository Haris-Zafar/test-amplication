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
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";

import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
  IsNumber,
  Max,
  IsInt,
  IsEnum,
} from "class-validator";

import { Type } from "class-transformer";
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import { CustomerProductPriceUpdateManyWithoutProductsInput } from "./CustomerProductPriceUpdateManyWithoutProductsInput";
import { DemandListItemUpdateManyWithoutProductsInput } from "./DemandListItemUpdateManyWithoutProductsInput";
import { OrderItemUpdateManyWithoutProductsInput } from "./OrderItemUpdateManyWithoutProductsInput";
import { PurchaseItemUpdateManyWithoutProductsInput } from "./PurchaseItemUpdateManyWithoutProductsInput";
import { SupplierProductUpdateManyWithoutProductsInput } from "./SupplierProductUpdateManyWithoutProductsInput";
import { TagsOnProductUpdateManyWithoutProductsInput } from "./TagsOnProductUpdateManyWithoutProductsInput";
import { EnumProductWeightUnit } from "./EnumProductWeightUnit";

@InputType()
class ProductUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  category?: CategoryWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CompanyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyWhereUniqueInput)
  @IsOptional()
  @Field(() => CompanyWhereUniqueInput, {
    nullable: true,
  })
  company?: CompanyWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CustomerProductPriceUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => CustomerProductPriceUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => CustomerProductPriceUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  customerPrices?: CustomerProductPriceUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: () => DemandListItemUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => DemandListItemUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => DemandListItemUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  demandListItem?: DemandListItemUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  expiryDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => OrderItemUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => OrderItemUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => OrderItemUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  orderItems?: OrderItemUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: () => PurchaseItemUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => PurchaseItemUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => PurchaseItemUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  purchaseItem?: PurchaseItemUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  purchasePrice?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  reorderLevel?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  retailPrice?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  sellPrice?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  size?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sku?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  stockQuantity?: number;

  @ApiProperty({
    required: false,
    type: () => SupplierProductUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => SupplierProductUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => SupplierProductUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  supplierProducts?: SupplierProductUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: () => TagsOnProductUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => TagsOnProductUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => TagsOnProductUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  tags?: TagsOnProductUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  weight?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumProductWeightUnit,
  })
  @IsEnum(EnumProductWeightUnit)
  @IsOptional()
  @Field(() => EnumProductWeightUnit, {
    nullable: true,
  })
  weightUnit?: "G" | "ML" | "KG" | "L" | null;
}

export { ProductUpdateInput as ProductUpdateInput };
