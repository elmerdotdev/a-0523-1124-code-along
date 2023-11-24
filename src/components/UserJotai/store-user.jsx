import { atom } from "jotai";
import axios from "axios";

export const firstnameAtom = atom('John')
export const lastnameAtom = atom('Smith')
export const ageAtom = atom(10)
export const doubleAgeAtom = atom((get) => get(ageAtom) * 2)

const firstAtom = atom(1)
const secondAtom = atom(2)
const thirdAtom = atom(3)
export const sumAtom = atom((get) => get(firstAtom) + get(secondAtom) + get(thirdAtom))

export const fetchUsersAtom = atom(async () => {
  const response = await axios.get('https://dummyjson.com/users?limit=5')
  return response.data
})