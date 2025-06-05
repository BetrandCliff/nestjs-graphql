import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class createUSerSettings{

    @Field({nullable:true})
    userId:number

    @Field()
    receivedNotification:boolean

    @Field()
    receivedEmail:boolean

}