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
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { TagWhereUniqueInput } from "../../tag/base/TagWhereUniqueInput";

@InputType()
class TagsOnProductUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => TagWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TagWhereUniqueInput)
  @IsOptional()
  @Field(() => TagWhereUniqueInput, {
    nullable: true,
  })
  tag?: TagWhereUniqueInput;
}

export { TagsOnProductUpdateInput as TagsOnProductUpdateInput };
