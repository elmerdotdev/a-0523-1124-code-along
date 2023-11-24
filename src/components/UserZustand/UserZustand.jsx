import { useEffect } from "react"
import { useUserStore } from "./userStore"

const UserZustand = () => {
  const { firstname, lastname, age, incrementAge, decrementAge, incrementAgeByAmt, updateFirstname, fetchUsers, users } = useUserStore()

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <div>
      <div>Firstname: {firstname}</div>
      <div>Lastname: {lastname}</div>
      <div>Age: {age}</div>
      <div>
        <button onClick={() => incrementAge()}>+</button>
        <button onClick={() => decrementAge()}>-</button>
        <button onClick={() => incrementAgeByAmt(10)}>Add 10</button>
      </div>
      <div>
        <input type="text" value={firstname} onChange={(e) => updateFirstname(e.target.value)} />
      </div>
      <div>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.firstName} {user.lastName}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UserZustand