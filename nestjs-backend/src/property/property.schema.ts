import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({timestamps: true})

export class Property extends Document{

  @Prop({ required: true })
  title: string;

  @Prop({required: true})
  description: string;

  @Prop({required: true})
  price: number;

  @Prop({required: true})
  location: string;

  
  @Prop({type:[String],default: [] })
  images: string[];


  @Prop({enum: ['rent', 'sale'], required: true })
  type: string;

  @Prop({default: false})
  isFeatured: boolean;

  @Prop({default: true })
  isActive: boolean;
}

export const PropertySchema = SchemaFactory.createForClass(Property);