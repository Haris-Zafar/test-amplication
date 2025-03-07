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
import { TagsOnProductWhereUniqueInput } from "./TagsOnProductWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TagsOnProductUpdateInput } from "./TagsOnProductUpdateInput";

@ArgsType()
class UpdateTagsOnProductArgs {
  @ApiProperty({
    required: true,
    type: () => TagsOnProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TagsOnProductWhereUniqueInput)
  @Field(() => TagsOnProductWhereUniqueInput, { nullable: false })
  where!: TagsOnProductWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TagsOnProductUpdateInput,
  })
  @ValidateNested()
  @Type(() => TagsOnProductUpdateInput)
  @Field(() => TagsOnProductUpdateInput, { nullable: false })
  data!: TagsOnProductUpdateInput;
}

export { UpdateTagsOnProductArgs as UpdateTagsOnProductArgs };
