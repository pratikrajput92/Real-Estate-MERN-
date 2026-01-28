import { Controller, Post, Body, UseGuards, UseInterceptors, UploadedFiles, Get, Param, Delete, Put } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorators';
import { PropertyService } from './property.service';
import { multerConfig } from './multer.config';
import { put } from 'axios';
import { CreatePropertyDto } from './dto/create-property.dto';

 


@Controller('property')

export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}


  

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Post()
  @UseInterceptors(FilesInterceptor('images', 5, {storage: multerConfig.Storage,}))
  create(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() body: any,
  ) {
    const imagePaths = files.map(
      file => `/uploads/properties/${file.filename}`,
    );

    return this.propertyService.create({
      ...body,
      images: imagePaths,
    });
    
  }
  
  @Get()
  getAll(){
    return  this.propertyService.findAll();
  }
   
  @Get(':id')
  getOne(@Param('id') id: string){
    return this.propertyService.findOne(id);
  }  

  @Put(':id')
  update(
   @Param('id') id: string,
   @Body() dto: CreatePropertyDto,
  ) {
    return this.propertyService.update(id, dto);
  }
  
   
  @Delete(':id')
  delete(@Param('id') id:string){
    return this.propertyService.delete(id);
  }
}

// @Controller('property')
// export class PropertyController {
//   constructor(private readonly propertyService: PropertyService) {}

//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin')
//   @Post()
//   @UseInterceptors(FilesInterceptor('images', 5, { storage))
//   async create(
//     @UploadedFiles() files: Express.Multer.File[],
//     @Body() dto: CreatePropertyDto,
//   ) {
//     // Cloudinary returns array of objects, we only need URLs
//     const images = files.map(file => file.path); // Cloudinary URL
//     return this.propertyService.create({ ...dto, images });
//   }
// }
