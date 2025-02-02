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
import { TransacationWhereInput } from "./TransacationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TransacationOrderByInput } from "./TransacationOrderByInput";

@ArgsType()
class TransacationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TransacationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TransacationWhereInput, { nullable: true })
  @Type(() => TransacationWhereInput)
  where?: TransacationWhereInput;

  @ApiProperty({
    required: false,
    type: [TransacationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TransacationOrderByInput], { nullable: true })
  @Type(() => TransacationOrderByInput)
  orderBy?: Array<TransacationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TransacationFindManyArgs as TransacationFindManyArgs };
