import { gql } from "apollo-boost";

export const coursesQuery = gql`
    query courses {
        courses {
            name
            description
            courseCategory {
                name
            }
            modules {
                name
                description
                order
                lessons {
                    name
                    content
                }
            }
        }
    }
`
