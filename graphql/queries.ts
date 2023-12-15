import {gql} from "@apollo/client";

export const GET_LINKS = gql`
    query Links{
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