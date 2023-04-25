import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addNewContact: (state, action) => {
      console.log({ ...state, items: [...state.items, action.payload] });
      return { ...state, items: [...state.items, action.payload] };
    },
    deleteContactById: (state, action) => ({
      ...state,
      items: [...state.items.filter(contact => contact.id !== action.payload)],
    }),
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addNewContact, deleteContactById } = contactsSlice.actions;
