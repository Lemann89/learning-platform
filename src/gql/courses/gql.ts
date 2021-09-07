import { gql } from "apollo-boost";

export const GET_ALL_COURSES = gql`
    query getCourses {
        courses {
            id
            name
            description
        }
    }
`

export const GET_COURSE = gql`
    query getCourseById($id: Int!) {
        course(id: $id) {
            id
            name
            description
        }
    }
`

export const GET_COURSE_SIDEBAR = gql`
    query getCourseById($id: Int!) {
        course(id: $id) {
            id
            name
            modules {
                id
                name
                lessons {
                    id
                    name
                }
            }
        }
    }
`

export const CREATE_COURSE = gql`
    mutation createCourse($course: CreateCourseInput!) {
        createCourse(course: $course) {
            id
        }
    }
`

export const UPDATE_COURSE = gql`
    mutation updateCourse($course: UpdateCourseInput!) {
        updateCourse(course: $course) {
            id
            name
            description
        }
    }
`
