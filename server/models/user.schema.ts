// import { Schema, model } from "mongoose";
import { defineMongooseModel } from '#nuxt/mongoose'

export interface UserDocument extends Document {
  email: string;
  username: string;
  password: string;
}


export const UserSchema = defineMongooseModel({
  name: 'User',
  schema: {
    email: {
      type: 'string',
      required: true,
    },
    username: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
   
  },
})


// const UserSchema = defineMongooseModel({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     lowercase: true,
//   },

//   username: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     lowercase: true,
//   },

//   password: {
//     type: String,
//     required: true,
//     length: [8, "Password must be at least 8 characters long"],
//   },
// });

// export const User = model<UserDocument>("User", UserSchema);
