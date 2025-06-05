import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/graphql/model/user";
import { CreateUserDate } from "src/util/createUser";
import { Repository } from "typeorm";


@Injectable()
export class UserService{
    constructor(@InjectRepository(User) private userRepository:Repository<User>){}

    getUsers(){
        return this.userRepository.find()
    }

    getUser(id:number){
        return this.userRepository.findOneBy({id})
    }
    createNewUser(createNewUser:CreateUserDate){
        const newUser = this.userRepository.create(createNewUser)

        return this.userRepository.save(newUser)
    }
}