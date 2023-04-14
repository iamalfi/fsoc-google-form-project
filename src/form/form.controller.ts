import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
  UseGuards,
  Res,
} from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Form } from 'src/Schemas/form.schema';
import { AuthGuard } from 'src/auth/auth.guard';
import { response } from 'express';
@ApiTags('Form')
@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}
  @UseGuards(AuthGuard)
  @Post('create')
  @ApiCreatedResponse({ description: 'form created succesfully!', type: Form })
  @ApiBadRequestResponse({ description: 'you cannot create.Try again!' })
  @ApiBody({ type: CreateFormDto })
  @ApiBearerAuth()
  async create(@Body() createFormDto: CreateFormDto, @Res() response) {
    const form = await this.formService.create(createFormDto);
    if (!form) {
      throw new HttpException(
        'Failed to create form. Try again!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return response
      .status(HttpStatus.CREATED)
      .json({ message: 'form created successfully', status: true, form });
  }
  @UseGuards(AuthGuard)
  @Get()
  @ApiNotFoundResponse({ description: 'No forms found' })
  @ApiOkResponse({ description: 'form list' })
  @ApiBearerAuth()
  async findAll() {
    const forms = await this.formService.findAll();
    if (!forms || forms.length === 0) {
      throw new HttpException('No forms found', HttpStatus.NOT_FOUND);
    }
    return forms;
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  @ApiNotFoundResponse({ description: 'No forms found' })
  @ApiOkResponse({ description: 'form details get successfully!' })
  @ApiBearerAuth()
  async findOne(@Param('id') id: string) {
    const form = await this.formService.findOne(id);
    if (!form) {
      throw new HttpException('form not found', HttpStatus.NOT_FOUND);
    }
    return form;
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiNotFoundResponse({ description: 'No form found' })
  @ApiOkResponse({ description: 'form details updated successfully!' })
  @ApiBody({ type: UpdateFormDto })
  @ApiBearerAuth()
  async update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
    const form = await this.formService.update(id, updateFormDto);
    if (!form) {
      throw new HttpException('form not found', HttpStatus.NOT_FOUND);
    }
    return form;
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiNotFoundResponse({ description: 'No form found' })
  @ApiOkResponse({ description: 'forms deleted successfully!' })
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    const form = await this.formService.remove(id);
    if (!form) {
      throw new HttpException('form not found', HttpStatus.NOT_FOUND);
    }
    return form;
  }
}
