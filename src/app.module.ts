import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { FormModule } from './form/form.module';
import { AuthModule } from './auth/auth.module';
import { ResponseFormModule } from './response-form/response-form.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Alfiya:Alfiya%40123@cluster0.gc3lqdx.mongodb.net/?retryWrites=true&w=majority',
      { dbName: 'google-form' },
    ),
    UserModule,
    FormModule,
    AuthModule,
    ResponseFormModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
