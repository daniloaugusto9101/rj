import React from "react"

type User = {
  id: number
  name: string
  email: string
}

export default function App() {
  const [users, setUsers] = React.useState<User[]>([])
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setUsers((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        email,
      },
    ])
    setName("")
    setEmail("")
  }

  function handleDelete(id: number) {
    console.log(id)
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div>
      <h1>CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-2"
          placeholder="Nome"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="border-2"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-gray-200">Adicionar</button>
      </form>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.id} | {user.name} | {user.email}
          </p>
          <button onClick={() => handleDelete(user.id)}>delete</button>
        </div>
      ))}
    </div>
  )
}
