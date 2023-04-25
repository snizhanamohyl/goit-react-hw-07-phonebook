import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from './contactsApi';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/createContact',
  async (_, { rejectWithValue }) => {
    try {
      await contactsAPI.createContact();
      return console.log('contact is created');
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (_, { rejectWithValue }) => {
    try {
      await contactsAPI.deleteContact();
      return console.log('contact is deleted');
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
