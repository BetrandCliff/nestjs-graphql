import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UserSettings } from "./userSetting";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"users"})
@ObjectType()
export class User{
        @PrimaryGeneratedColumn()
        @Field((type)=>Int)
        id:number

        @Column()
        @Field()
        userName:string

        @Column({nullable:true})
        @Field({nullable:true})
        displayName?:string

        @OneToOne(()=>UserSettings)
        @JoinColumn()
        @Field({nullable:true})
        settings?:UserSettings
}