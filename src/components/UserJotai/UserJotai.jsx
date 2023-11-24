import { useAtom } from "jotai"
import { firstnameAtom, lastnameAtom, ageAtom, sumAtom, doubleAgeAtom, fetchUsersAtom } from "./store-user"
import Age from "./Age"

const UserJotai = () => {
  const [firstname, setFirstname] = useAtom(firstnameAtom)
  const [lastname, setLastname] = useAtom(lastnameAtom)
  const [age, setAge] = useAtom(ageAtom)
  const [sum] = useAtom(sumAtom)
  const [doubleAge] = useAtom(doubleAgeAtom)
  const [fetchUsers] = useAtom(fetchUsersAtom)

  return (
    <div>
      <div>Firstname: {firstname}</div>
      <div>
        <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      </div>
      <div>Lastname: {lastname}</div>
      <div>
        <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
      </div>
      <div>SUM: {sum}</div>
      <div>Age: {age}</div>
      <div>Double Age: {doubleAge}</div>
      <div>
        <button onClick={() => setAge(age => age + 1)}>+</button>
        <button onClick={() => setAge(age => age - 1)}>-</button>
        <button onClick={() => setAge(age => age + 10)}>Add 10</button>
      </div>
      <Age />
      <div>
        <ul>
          {fetchUsers.users.map(user => (
            <li key={user.id}>{user.firstName} {user.lastName}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UserJotai