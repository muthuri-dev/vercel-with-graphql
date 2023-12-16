"use client"
import {useQuery} from "@apollo/client";
import React from "react";
import {GET_USERS} from "@/graphql/queries";
import {User} from ".prisma/client";

export default function Users(){
    const {data} = useQuery(GET_USERS)
    return(
        <div>
            <h1 className="underline text-center">List of users and roles</h1>
            {data?.users.map((user:User)=>(
                <div key={user.id}>
                    <h3>Email :{user.email}</h3>
                    <h3>Role: {user.role}</h3>
                </div>
            ))}
        </div>
    )
}