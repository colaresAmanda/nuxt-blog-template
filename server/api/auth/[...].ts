import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserSchema } from "~/server/models/user.schema";
import bcrypt from "bcrypt";


// Define a type for the credentials
interface Credentials {
  username: string;
  password: string;
}
export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,

  pages: {
    signIn: "/login",
  },

  providers: [
     // @ts-expect-error Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
     CredentialsProvider.default({
      name: 'credentials',

      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: Credentials) {
        if (!credentials || !credentials.username || !credentials.password) {
          throw createError({
            statusCode: 400,
            statusMessage: "Missing credentials",
          });
        }
  
        const user = await UserSchema.findOne({ username: credentials.username });
  
        if (!user) {
          throw createError({
            statusCode: 401,
            statusMessage: "Unauthorized",
          });
        }
  
        const isValid = await bcrypt.compare(credentials.password, user.password);
  
        if (!isValid) {
          throw createError({
            statusCode: 401,
            statusMessage: "Unauthorized",
          });
        }
  
        return {
          ...user.toObject(),
          password: undefined, // Exclude password from the returned user object
        };
      },
    }),
  ],
  
  

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token = {
          ...token,
          ...user,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...token,
        ...session.user,
      };

      return session;
    },
  },
});
