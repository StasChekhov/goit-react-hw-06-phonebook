import { createSlice } from "@reduxjs/toolkit";

export const clickSlice = createSlice({
 name: "myValue",
 initialState: {
  contacts: {
   items: [],
   filter: "",
  },
 },
 reducers: {
  add(state, action) {
   state.contacts.items.push(action.payload);
  },
  remove(state, action) {
   //    state.contacts.items.splice(0, action.payload);
   state.contacts.items = state.contacts.items.filter(
    (element) => element.id !== action.payload.id
   );
  },
  filterContacts(state, action) {
   console.log("action", action);
   state.contacts.filter = action.payload.text;
  },
 },
});
export const { add } = clickSlice.actions;
export const { remove } = clickSlice.actions;
export const { filterContacts } = clickSlice.actions;

//Selectors
export const getContacts = (state) => state.myValue.contacts.items;
export const getFilter = (state) => state.myValue.contacts.filter;
