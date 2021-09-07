import { useMutation, UseMutationReturn, useQuery, UseQueryReturn } from "@vue/apollo-composable";
import { CREATE_COURSE, GET_COURSE_SIDEBAR, GET_ALL_COURSES, UPDATE_COURSE, GET_COURSE } from "./gql";
import { ICreateCourse, IGetByIdInput } from "./types";

export const useGetAllCoursesQuery = () => useQuery(GET_ALL_COURSES)

export const useGetCourseQuery = (variables: IGetByIdInput): UseQueryReturn<any, IGetByIdInput> =>
  useQuery(GET_COURSE, variables)

export const useGetCourseSidebarQuery = (variables: IGetByIdInput): UseQueryReturn<any, IGetByIdInput> =>
  useQuery(GET_COURSE_SIDEBAR, variables)

export const useCreateCourseMutation = (): UseMutationReturn<any, ICreateCourse> =>
  useMutation(CREATE_COURSE)

export const useUpdateCourseMutation = (): UseMutationReturn<any, ICreateCourse> =>
  useMutation(UPDATE_COURSE)
