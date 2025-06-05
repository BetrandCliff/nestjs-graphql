import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name:"userSettings"})
@ObjectType()
export class UserSettings{

    @PrimaryColumn()
    @Field((type)=>Int)
    userId:number

    @Column({default:false})
    @Field({defaultValue:false})
    receivedNotification:boolean

    @Column({default:false})
    @Field({defaultValue:false})
    receivedEmail:boolean
}