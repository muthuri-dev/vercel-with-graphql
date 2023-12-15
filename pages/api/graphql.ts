import {ApolloServer} from "@apollo/server";
import {typeDefs} from "@/graphql/schema";
import {resolvers} from "@/graphql/resolvers";
import prisma from "@/prisma/db";
import {startServerAndCreateNextHandler} from "@as-integrations/next";
import {NextApiRequest, NextApiResponse} from "next";

export type Context = {
    prisma: import('.prisma/client').PrismaClient;
}
const apolloServer = new ApolloServer<Context>({typeDefs, resolvers});
export default startServerAndCreateNextHandler(apolloServer, {
    context: async (req: NextApiRequest, res: NextApiResponse) => ({
        req,
        res,
        prisma
    })
});
