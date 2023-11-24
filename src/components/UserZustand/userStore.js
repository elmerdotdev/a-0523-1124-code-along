import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import axios from "axios";

export const useUserStore = create(
  persist(
    (set, get) => ({
      firstname: 'John',
      lastname: 'Smith',
      age: 10,
      users: [],
      incrementAge: () => set({ age: get().age + 1 }),
      decrementAge: () => set({ age: get().age - 1 }),
      incrementAgeByAmt: (payload) => set({ age: get().age + payload }),
      updateFirstname: (payload) => set({ firstname: payload }),
      fetchUsers: async () => {
        const response = await axios.get('https://dummyjson.com/users?limit=5')
        set({ users: response.data.users })
      }
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage)
    }
  ))