import create, { UseStore } from 'zustand';
import { Form, Store, ComponentType, TextBoxDetails, FormBody } from '../types/types';
import axios, { AxiosResponse } from 'axios';

const getFormsFromLocalStorage = (): Form[] => {
  const forms = localStorage.getItem('forms');

  if (forms) {
    return JSON.parse(forms);
  }

  return [];
}

const useStore: UseStore<Store> = create((set, get): Store => ({
  forms: getFormsFromLocalStorage(),
  setForms: (forms: Form[]) => {
    set(() => ({
      forms: forms,
    }));
  },
  createForm: async (name: string, description: string) => {
    let form: Form;
    const newFormId = await axios
      .post<FormBody, AxiosResponse<Form>>('http://localhost:3010/api/form', {
        // eslint-disable-next-line prettier/prettier
        name: name,
        description: description,
        organization: 'Mehra',
        subtitle: 'awesome',
        owner: 'b3533268-b9f9-43ff-8199-3831bca693d7',
      })
      .then(function (response) {
        form = response.data;
        console.log(form);
        set((state: Store) => ({
          forms: [...state.forms, form],
        }));
        return form.id;
      })
      .catch(function (error) {
        console.log(error);
        return '';
      });
      const forms = get().forms;
      localStorage.setItem('forms', JSON.stringify(forms));
    return newFormId;
  },
  addComponent: (formId: string, type: ComponentType, componentDetails: TextBoxDetails) => {
    let forms = get().forms;
    const form = forms.find((form) => form.id === formId);

    if (!form) return;

    if (!form.formPages) {
      form.formPages = [{
        formData: {
          components: [
            {
              id: 1,
              type: type,
              additionalInfo: componentDetails
            }
          ]
        },
        formId: formId,
      }];
    }
    else {
    const { components } = form?.formPages[0].formData;

    const { id: latestId } = components[components.length - 1];

    form?.formPages[0].formData.components.push({
      id: latestId + 1,
      type: type,
      additionalInfo: componentDetails
    });
  }
    const otherForms = get().forms.filter((form) => form.id !== formId);
    set(() => ({
      forms: [...otherForms, form],
    }));
    forms = get().forms;
    localStorage.setItem('forms', JSON.stringify(forms));
  },
  removeComponent: (formId: string, id: number) => {
    const forms = get().forms;
    const form = forms.find((form) => form.id === formId);

    if (!form) return;

    const { components } = form?.formPages[0].formData;

    const newComponents = components.filter((component) => component.id !== id);

    form.formPages[0].formData.components = newComponents;

    const otherForms = get().forms.filter((form) => form.id !== formId);

    set(() => ({
      forms: [...otherForms, form],
    }));
  },
  updateForm: (
    formId: string,
    updateObj: {
      name: string | undefined,
      description: string | undefined,
      subtitle: string | undefined,
    },
  ) => {
    const forms = get().forms;
    const form = forms.find((form) => form.id === formId);

    if (!form) return;

    if (updateObj.name) {
      form.name = updateObj.name;
    }

    if (updateObj.description) {
      form.description = updateObj.description;
    }

    if (updateObj.subtitle) {
      form.subtitle = updateObj.subtitle;
    }

    const otherForms = get().forms.filter((form) => form.id !== formId);
    set(() => ({
      forms: [...otherForms, form],
    }));
  },
  user: 'string',
  deleteForm: (formId: string) => {
    const forms = get().forms;
    const form = forms.find((form) => form.id === formId);

    if (!form) return;

    const otherForms = get().forms.filter((form) => form.id !== formId);

    set(() => ({
      forms: [...otherForms],
    }));
  },
  saveForm: async (formId: string) => {
    const forms = get().forms;
    const form = forms.find((form) => form.id === formId);

    if (!form) return;

    await axios.post(`http://localhost:3010/api/form/${formId}`, {
      form,
    });
  },
}));

export default useStore;
