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
import { Type } from "class-transformer";

@ArgsType()
class TransacationCountArgs {
  @ApiProperty({
    required: false,
    type: () => TransacationWhereInput,
  })
  @Field(() => TransacationWhereInput, { nullable: true })
  @Type(() => TransacationWhereInput)
  where?: TransacationWhereInput;
}

export { TransacationCountArgs as TransacationCountArgs };
