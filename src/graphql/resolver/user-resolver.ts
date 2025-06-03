import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "../model/user";
import { mockUser } from "src/__mocks__/mockUsers";
import { AirSpace } from "../model/airspace";
import { mockAirSpace } from "src/__mocks__/mockAirspace";
import { of } from "rxjs";
import { UserSettings } from "../model/userSetting";
import { mockUserSettings } from "src/__mocks__/mockUserSettings";
import { CreateUserDate } from "src/util/createUser";

@Resolver((of)=>User)
export class UserResolver{


        @Query(()=>User,{name:"getUserById",nullable:true})
        async getUserById(@Args('id',{type:()=>Int}) id:number){
                return mockUser.find((user)=>user.id===id)
            }

        @Query(()=>[User],{name:"Users"})
        getUsers(){
            return mockUser
        }

        @ResolveField((returns)=>UserSettings,{name:"settings",nullable:true})
        getUserSettings(@Parent() user:User){
            return mockUserSettings.find(settings=>settings.userId===user.id)
        }
        

        @Query(()=>AirSpace)
        async getAirSpace(@Args('id',{type:()=>Int})id:number){
                return mockAirSpace.find((space)=>space.id===id)
        }


        @Mutation((returns) =>User)
        createUser(@Args('userData') userData:CreateUserDate){
            const newUser={
                id:mockUser.length+1,
                userName:userData.userName,
                displayName:userData.displayName
            }

            mockUser.push(newUser)

            return newUser 
        }


}