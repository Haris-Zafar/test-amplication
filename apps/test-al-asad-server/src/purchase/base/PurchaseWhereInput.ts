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
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DemandListWhereUniqueInput } from "../../demandList/base/DemandListWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PurchaseItemListRelationFilter } from "../../purchaseItem/base/PurchaseItemListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { SupplierPaymentListRelationFilter } from "../../supplierPayment/base/SupplierPaymentListRelationFilter";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";

@InputType()
class PurchaseWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => DemandListWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DemandListWhereUniqueInput)
  @IsOptional()
  @Field(() => DemandListWhereUniqueInput, {
    nullable: true,
  })
  demandList?: DemandListWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PurchaseItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PurchaseItemListRelationFilter)
  @IsOptional()
  @Field(() => PurchaseItemListRelationFilter, {
    nullable: true,
  })
  items?: PurchaseItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  paidAmount?: FloatFilter;

  @ApiProperty({
    required: false,
    type: () => SupplierPaymentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SupplierPaymentListRelationFilter)
  @IsOptional()
  @Field(() => SupplierPaymentListRelationFilter, {
    nullable: true,
  })
  payments?: SupplierPaymentListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  purchaseDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  purchaseNumber?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => SupplierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupplierWhereUniqueInput)
  @IsOptional()
  @Field(() => SupplierWhereUniqueInput, {
    nullable: true,
  })
  supplier?: SupplierWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  totalAmount?: FloatFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;
}

export { PurchaseWhereInput as PurchaseWhereInput };
