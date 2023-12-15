import prisma from "@/prisma/db";
import {PrismaClient} from "@prisma/client";
export type Context = {
    prisma:PrismaClient
}
export const resolvers = {
    Query:{
        links:async (_parent:any,args:any,context:Context)=> {
            return await context.prisma.link.findMany()
        },
        users:async (_parent:any, args:any, context:Context)=> {
            return await context.prisma.user.findMany()
        },
    },
    Mutation:{
        addUser: async (_parent:any, args:any, context:Context)=>{
             return await context.prisma.user.create({
                data: {
                    email: args.email,
                    image: args.image
                }
            });
        },
        addLink: async (_parent:any, args:any,context:Context)=>{
             return await context.prisma.link.create({
                data:{
                    title:args.title,
                    description:args.description,
                    url:args.url,
                    category:args.category,
                    imageUrl:args.imageUrl,
                }
            })
        }
    }
}