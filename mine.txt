

export const typeDefs = `#graphql
type Link  {
    id: ID!
    title:String
    description:String
    url:String
    category:String
    imageUrl:String
    users:[User]
}

type User {
    id:ID!
    email :String
    image     :String
    role   :String
    bookmarks :[Link]
}
type Query{
    links:[Link]!
    users:[User]!
}
type Mutation{
    addUser(email:String,image:String):User
    addLink(title:String,description:String,url:String,category:String,imageUrl:String):Link
}
`