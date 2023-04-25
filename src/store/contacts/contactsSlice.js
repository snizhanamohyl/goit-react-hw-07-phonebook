// import { createSlice } from '@reduxjs/toolkit';
// import { contactsInitialState } from './initialState';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addNewContact: (state, action) => ({
//       ...state,
//       items: [...state.items, action.payload],
//     }),
//     deleteContactById: (state, action) => ({
//       ...state,
//       items: [...state.items.filter(contact => contact.id !== action.payload)],
//     }),
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
// export const { addNewContact, deleteContactById } = contactsSlice.actions;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6447a0ba50c25337442a0ee2.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
export const contactsReducer = contactsApi.reducer;
