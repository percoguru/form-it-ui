export interface Store extends Object {
    addComponent: any,
    removeComponent: any,
    form: Form
};

export interface Component extends Object {
    id: number,
    type: ComponentType,
    additional_info: Object
}

export interface Form extends Object {
    title: string,
    deadline: Date,
    description: string,
    components: Component[],
}

export type ComponentType = 'TextBox' | 'CheckBox';