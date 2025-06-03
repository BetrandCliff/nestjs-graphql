import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AirSpace{
@Field()
id:1
@Field()
colors:string
@Field()
pilot:string

@Field()
name:string


}