/* eslint-disable prettier/prettier */
import create, { UseStore } from 'zustand';
import { Form, Store, ComponentType,  } from '../types/types';
import axios from 'axios';

const useStore: UseStore<Store> = create((set, get): Store => ({
  forms: [],
  createForm: async (name: string) => {
    let form: Form;
    const newFormId = await axios
      .post('/api/form', {
        name: name,
        description: 'Flintstone',
        organization: 'Mehra',
        subtitle: 'awesome',
        formPages: [],
        id: '',
        owner: '',
        numberOfPages: 1,
      })
      .then(function (response) {
        form.id = response.data.id;
        set((state: Store) => ({
          forms: [...state.forms, form],
        }));
        return form.id;
      })
      .catch(function (error) {
        console.log(error);
        return '';
      });
      return newFormId;
  },
  addComponent: (formId: string, type: ComponentType) => {
    const forms = get().forms;
    const form = forms.find((form) => form.id === formId);

    if (!form) return;

    const { components } = form?.formPages[0].formData;
    
    const { id: latestId} = components[components.length - 1];

    form?.formPages[0].formData.components.push({
      id: latestId + 1,
      type: type
    })
    const otherForms = get().forms.filter((form) => form.id !== formId);
    set(() => ({
      forms: [...otherForms, form]
    }))
  },
  removeComponent: (formId: string, id: number) => {
    const forms = get().forms;
    const form = forms.find((form) => form.id === formId);

    if (!form) return;

    const {components} = form?.formPages[0].formData;
    
    const newComponents = components.filter((component) => component.id !== id)

    form.formPages[0].formData.components = newComponents;

    const otherForms = get().forms.filter((form) => form.id !== formId);
    
    set(() => ({
      forms: [...otherForms, form],
    }))
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
      form.name = updateObj.name
    }

    if (updateObj.description) {
      form.description = updateObj.description
    }

    if(updateObj.subtitle) {
      form.subtitle = updateObj.subtitle;
    }

    const otherForms = get().forms.filter((form) => form.id !== formId);
    set(() => ({
      forms: [...otherForms, form]
    }))
  },
  user: 'string',
  deleteForm: (formId: string) => {
    const forms = get().forms;
    const form = forms.find((form) => form.id === formId);

    if (!form) return;

    const otherForms = get().forms.filter((form) => form.id !== formId);
    
    set(() => ({
      forms: [...otherForms],
    }))
  },
  saveForm: async (formId: string) => {
    const forms = get().forms;
    const form = forms.find((form) => form.id === formId);

    if (!form) return;

    await axios.post(`http://localhost:3010/api/form/${formId}`, {
      form
    });
  },
}));

export default useStore;
