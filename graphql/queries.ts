import {gql} from "@apollo/client";

export const GET_LINKS = gql`
    query Link{
        links {
            id
            title
            url
            description
            imageUrl
            category
        }
    }
`

export const GET_USERS = gql`
query User{
    users {
        id
        email
        image
        role
    }
}
`