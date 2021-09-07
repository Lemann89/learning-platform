export interface IGetByIdInput {
    id: number
}

export interface ICreateCourse {
    course: {
        name: string,
        description: string,
        courseCategoryId?: number
    }
}
