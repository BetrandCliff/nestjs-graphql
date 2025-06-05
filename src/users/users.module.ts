import { Module } from "@nestjs/common";
import { UserResolver } from "./user-resolver";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/graphql/model/user";
import { UserSettingService } from "./userSettings.service";
import { UserSettings } from "src/graphql/model/userSetting";


@Module({
    imports:[
        TypeOrmModule.forFeature([User,UserSettings])
    ],
    providers:[UserResolver, UserService,UserSettingService],
    controllers:[]
})

export class UserModule{}