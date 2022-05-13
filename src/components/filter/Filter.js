import styles from "./Filter.module.scss"
import React, {useState} from "react"

const Filter = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [phone, setPhone] = useState("")
  //   const [username, setValues] = useState("")

  const clearFields = () => {
    setPhone("")
    setUsername("")
    setDate("")
    setEmail("")
  }
  return (
    <div className={styles.container}>
      <div>
        <label>
          {" "}
          Organization
          <br />
          <select>
            <option value={""}>Lendsqr</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Username <br />
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          {" "}
          Email <br />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          {" "}
          Date
          <br />
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number <br />
          <input
            type="text"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Status <br />
          <select>
            <option value={""}>Active</option>
          </select>
        </label>
      </div>
      <div className={styles.action_area}>
        <div>
          <button className={styles.outlined} onClick={clearFields}>
            Reset
          </button>
        </div>
        <div>
          <button className={styles.contained}>Filter</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
