import { gql } from "apollo-boost";

export const CREATE_MODULE = gql`
    mutation createModule($module: CreateModuleInput!) {
        createModule(module: $module) {
            id
            course {
                id
            }
        }
    }
`

export const GET_MODULE = gql`
    query getModuleById($id: Int!) {
        module(id: $id) {
            id
            name
            description
        }
    }
`

export const UPDATE_MODULE = gql`
    mutation updateModule($module: UpdateModuleInput!) {
        updateModule(module: $module) {
            id
            name
            description
        }
    }
`
