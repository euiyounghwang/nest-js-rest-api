import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

export class StudentResponse {
  @ApiProperty({example: "euiyoung"})
  FirstName : string;
  @ApiProperty({example: "hwang"})
  LastName : string;
}
