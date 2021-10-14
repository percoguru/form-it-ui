export interface Store extends Object {
  addComponent: (formId: string, type: ComponentType, componentDetails: TextBoxDetails) => void;
  removeComponent: (formId: string, id: number) => void;
  forms: Form[] | [];
  updateForm: (
    formId: string,
    updateObj: {
      name: string | undefined,
      description: string | undefined,
      subtitle: string | undefined,
    },
  ) => void;
  user: string;
  createForm: (title: string, description: string) => Promise<string>;
  deleteForm: (formId: string) => void;
  saveForm: (formId: string) => void;
  setForms: (forms: Form[]) => void;
}

export interface Component extends Object {
  id: number;
  type: ComponentType;
  additionalInfo: TextBoxDetails;
}

export interface FormData extends Object {
  components: Component[];
}

export interface FormPage extends Object {
  formId: string;
  formData: FormData;
}

export interface Form extends Object {
  id: string;
  owner: string;
  organization: string;
  name: string;
  description: string;
  subtitle: string;
  formPages: FormPage[];
}

export interface FormBody {
  owner: string;
  organization: string;
  name: string;
  description: string;
  subtitle: string;
}

export interface TextBoxDetails {
  helperText: string;
  title: string;
}

export type ComponentType = 'TextBox' | 'CheckBox';
