import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const options: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'email here' },
        password: { label: 'password', type: 'password', placeholder: 'password here' },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials as { email: string; password: string; };

        // Implement your own authorization logic here
        //const user = await findUserByEmailAndPassword(email, password);
        if ( email==='aman@gmail.com') {
          // Return the user object to authenticate
          return { id:123 , name:'Aman'};
        } else {
          // Return null or false to indicate authentication failure
          return null;
        }
      }
    })
  ]
};

export default NextAuth(options);
