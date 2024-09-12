import { UserSchema } from "~/server/models/user.schema";

import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.email || !body.username || !body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Missing required fields",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hasedPassword = await bcrypt.hash(body.password, salt);

  // const user = await UserSchema({ ...body, password: hasedPassword }).save();
  const user = new UserSchema({ ...body, password: hasedPassword });
  await user.save();
  
  return { ...user.toObject(), password: undefined };
});
