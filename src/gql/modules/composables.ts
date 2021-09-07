import { CREATE_MODULE, GET_MODULE, UPDATE_MODULE } from "./gql";
import { useMutation, UseMutationReturn, useQuery, UseQueryReturn } from "@vue/apollo-composable";
import { IModule } from "./types";
import { IGetByIdInput } from "../courses/types";

export const useCreateModuleMutation = (): UseMutationReturn<any, IModule> =>
  useMutation(CREATE_MODULE)

export const useGetModuleQuery = (variables: IGetByIdInput): UseQueryReturn<IModule, IGetByIdInput> =>
  useQuery(GET_MODULE, variables)

export const useUpdateModuleMutation = (): UseMutationReturn<any, IModule> =>
  useMutation(UPDATE_MODULE)
