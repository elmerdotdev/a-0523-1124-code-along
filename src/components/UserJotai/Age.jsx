import { useAtom } from "jotai"
import { ageAtom } from "./store-user"

const Age = () => {
  const [age, setAge] = useAtom(ageAtom)

  return (
    <div>
      <h2>Age: {age}</h2>
      <button onClick={() => setAge(age => age + 1)}>+</button>
    </div>
  )
}

export default Age