import create, { UseStore } from 'zustand';
import { ComponentType, Form, Store } from '../types/types';

const getPersistedForm = (): Form => {
  const valueFromLocalStorage: string | null = localStorage.getItem('form');

  if (valueFromLocalStorage) {
    return JSON.parse(valueFromLocalStorage);
  }
  return {
    description: 'This is a demo form',
    title: 'Demo Form',
    deadline: new Date(),
    components: [],
  };
};

const useStore: UseStore<Store> = create((set, get): Store => ({
  addComponent: (component: ComponentType) => {
    set((state: Store) => ({
      form: {
        ...state.form,
        components: [
          ...state.form.components,
          { id: state.form.components.length, type: component, additional_info: {} },
        ],
      },
    }));
    localStorage.setItem('form', JSON.stringify(get().form));
  },
  removeComponent: (id: number) => {
    if (get().form.components.length === 0) return;
    const { components } = get().form;
    components.splice(id, 1);
    set((state: Store) => ({
      form: { ...state.form, components: components },
    }));
    localStorage.setItem('form', JSON.stringify(get().form));
  },
  setTitle: (title: string) => {
    set((state: Store) => ({
      form: { ...state.form, title: title },
    }));
    localStorage.setItem('form', JSON.stringify(get().form));
  },
  form: getPersistedForm(),
}));

export default useStore;
