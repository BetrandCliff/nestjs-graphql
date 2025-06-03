import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserSettings{

    @Field((type)=>Int)
    userId:number

    @Field({defaultValue:false})
    receivedNotification:boolean

    @Field({defaultValue:false})
    receivedEmail:boolean
}