import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserSettings } from "src/graphql/model/userSetting";
import { createUSerSettings } from "src/util/createusersettings";
import { Repository } from "typeorm";

@Injectable()
export class UserSettingService{
    constructor(@InjectRepository(UserSettings) private userSettingRepository:Repository<UserSettings>){}


    getUserSettings(userId:number){
        return this.userSettingRepository.findOneBy({userId})
    }
    createUserSettings(createUserSettingData:createUSerSettings){
        const newSettings=  this.userSettingRepository.create(createUserSettingData)

        return this.userSettingRepository.save(newSettings)
    }
}