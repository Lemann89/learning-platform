export interface IModule {
    module: {
        id: number,
        name: string,
        description: string,
        courseId?: number,
        order?: number
    }
}
