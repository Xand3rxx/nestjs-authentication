import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserRequestDTO } from './dto/UserRequestDTO.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  /**
   * Endpoint to handle a GET request
   * @returns string
   */
  @Get()
  index() {
    return this.userService.getUsers();
  }

  /**
   * Endpoint to handle a POST request
   * @param body
   * @returns req
   */
  @Post()
  store(@Body() body: UserRequestDTO) {
    return this.userService.create(body);
  }

  /**
   * Endpoint to get a specified resource with an ID
   * @param id
   * @returns mixed
   */
  @Get('/:id')
  show(@Param('id', ParseIntPipe) id: number) {
    return this.userService.show(id);
  }

  /**
   * Endpoint to handle a PATCH request
   * @param body
   * @returns req
   */
  @Patch('/:id')
  update(@Body() body: UserRequestDTO, @Param('id', ParseIntPipe) id: number) {
    return this.userService.update(body, id);
  }

  /**
   * Endpoint to handle a PATCH request
   * @param id
   * @returns req
   */
  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
