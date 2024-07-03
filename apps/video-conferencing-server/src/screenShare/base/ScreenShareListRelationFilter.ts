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
import { ScreenShareWhereInput } from "./ScreenShareWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ScreenShareListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ScreenShareWhereInput,
  })
  @ValidateNested()
  @Type(() => ScreenShareWhereInput)
  @IsOptional()
  @Field(() => ScreenShareWhereInput, {
    nullable: true,
  })
  every?: ScreenShareWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScreenShareWhereInput,
  })
  @ValidateNested()
  @Type(() => ScreenShareWhereInput)
  @IsOptional()
  @Field(() => ScreenShareWhereInput, {
    nullable: true,
  })
  some?: ScreenShareWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScreenShareWhereInput,
  })
  @ValidateNested()
  @Type(() => ScreenShareWhereInput)
  @IsOptional()
  @Field(() => ScreenShareWhereInput, {
    nullable: true,
  })
  none?: ScreenShareWhereInput;
}
export { ScreenShareListRelationFilter as ScreenShareListRelationFilter };
