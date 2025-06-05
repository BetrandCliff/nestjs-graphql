import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserSettings } from "../model/userSetting";
import { createUSerSettings } from "src/util/createusersettings";
import { mockUserSettings } from "src/__mocks__/mockUserSettings";
import { retry } from "rxjs";

@Resolver()
export class UserSettingsResolver{


    @Mutation((returns)=>UserSettings)
    createUserSettings(@Args("userSettings") usersettingsData:createUSerSettings){
       
            mockUserSettings.push(usersettingsData)
            return usersettingsData;
    }

    @Query((retruns)=>[UserSettings])
    getUserSettings(){
        return mockUserSettings
    }

}