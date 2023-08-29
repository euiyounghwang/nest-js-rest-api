import { Controller, Get, Req, HttpCode, HttpStatus, Param, Res, Post, } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional, ApiCreatedResponse, ApiUnprocessableEntityResponse, ApiForbiddenResponse, ApiOkResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { AppService, StudentResponse } from './app.service';

@Controller("default")
export class AppController {
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  property: string;
  @ApiPropertyOptional({
    type: String,
    description: 'This is an optional property',
  })
  optionalProperty: string;
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get()
  @HttpCode(200)
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
  
  @ApiOkResponse({
    description: 'The StudentResponse records',
    type: StudentResponse,
    isArray: true
  })
  @Get(':id')
  @HttpCode(200)
  @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  findOne(@Param('id') id: string) {
    // return {"response" : "This action returns a #${id} cat"};
    return {"LastName" : id, "FirstName" : id};
  }
  
  @Post()
  findAllPost(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return [];
  }
}
