import create, { UseStore } from 'zustand';
import { Form, Store } from '../types/types';
import axios from 'axios';

const useStore: UseStore<Store> = create((set, get): Store => ({
  forms: [],
  createForm: async (title: string) => {
    let form: Form;
    await axios
      .post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone',
      })
      .then(function (response) {
        form = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    set((state: Store) => ({
      forms: [...state.forms, form],
    }));
  },
}));

export default useStore;
