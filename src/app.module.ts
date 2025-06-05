import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserSettingsResolver } from './graphql/resolver/usersetting';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './graphql/model/user';
import { UserSettings } from './graphql/model/userSetting';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:"src/schema.gql"
    }),

    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:"testuser",
      password:'testuser',
      database:"graphql_db",
      entities:[User,UserSettings],
      synchronize:true
    }),

    UserModule
  ],
  controllers: [],
  providers: [UserSettingsResolver],
})
export class AppModule {}
