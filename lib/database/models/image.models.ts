import { Document, model, models, Schema } from "mongoose";

import { ObjectId } from 'mongodb';

export interface Image extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureURL: URL;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author:{
        _id: string;
        firstName: string;
        lastName: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}


const ImageSchema= new Schema({
    title: {type: String, required: true},
    transformationType: {type: String, required: true},
    publicId: {type: String, required:true},
    secureURL: {type: URL, required: true},
    width: {type: Number},
    height: {type: Number},
    config: {type: Object},
    transformationUrl: {type: URL},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref: "User"},
    createdAt: {type: Date, default: Date.now},
    UpdatedAt: {type: Date, default: Date.now}
});

const Image= models?.Image || model('Image', ImageSchema);

export default Image;

