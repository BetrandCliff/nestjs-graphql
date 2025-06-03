import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CreateUserDate{

    @Field()
    userName:string

    @Field({nullable:true})

    displayName:string
}