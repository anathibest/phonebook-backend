import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhonebookModule } from './phonebook/phonebook.module';

@Module({
	imports: [
		// MongooseModule.forRoot("mongodb+srv://anathibest:1234@Best@phonebook.gu113.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { autoCreate: true, }),
		

		MongooseModule.forRoot("mongodb+srv://anathibest:1234@Best@phonebook.mkuim.mongodb.net/phonebookdatabase?retryWrites=true&w=majority", { autoCreate: true }),
		PhonebookModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}


