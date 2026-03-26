import { Schema, model } from "mongoose";

const ingredientSchema = new Schema(
    {
        name:{
            type: String,
        },
        type:{
            type: String,
        },
        description:{
            type: String,
        },
        price:{
            type: Number,
        },
    },
    {versionKey: false, timestamps: true},
);

export default model('Ingredient', ingredientSchema);
