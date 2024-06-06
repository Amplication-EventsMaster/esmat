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
import { TransacationCreateInput } from "./TransacationCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateTransacationArgs {
  @ApiProperty({
    required: true,
    type: () => TransacationCreateInput,
  })
  @ValidateNested()
  @Type(() => TransacationCreateInput)
  @Field(() => TransacationCreateInput, { nullable: false })
  data!: TransacationCreateInput;
}

export { CreateTransacationArgs as CreateTransacationArgs };
