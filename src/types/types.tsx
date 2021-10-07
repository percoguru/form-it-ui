import uuid from 'uuid';

export interface Store extends Object {
  addComponent: (formId: string, type: ComponentType) => void;
  removeComponent: (formId: string, id: number) => void;
  forms: Form[] | [];
  updateForm: (
    formId: string,
    updateObj: {
      title: string | undefined,
      description: string | undefined,
      subtitle: string | undefined,
    },
  ) => void;
  user: string;
  createForm: () => Promise<string>;
  deleteForm: (formId: string) => void;
  saveForm: (formId: string) => void;
}

export interface Component extends Object {
  id: number;
  type: ComponentType;
}

export interface FormData extends Object {
  components: Component[];
}

export interface FormPage extends Object {
  formId: string;
  formData: FormData;
}

export interface Form extends Object {
  owner: string;
  organization: string;
  name: string;
  description: string;
  subtitle: string;
  numberOfPages: number;
  formPages: FormPage[];
}

export type ComponentType = 'TextBox' | 'CheckBox';
