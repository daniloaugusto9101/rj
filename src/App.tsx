import type { User } from "@/assets/types/user.type"
import UserItem from "@/components/UserItem"
import React from "react"

export default function App() {
  const [users, setUsers] = React.useState<User[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string | null>(null)

  async function fetchUsers() {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      if (!response.ok) throw new Error("Erro ao consultar")
      const data: User[] = await response.json()
      console.log(data)
      setUsers(data)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    fetchUsers()
  }, [])

  if (error) {
    return <p>Erro na cosulta</p>
  }
  if (loading) {
    return <p>Carregando usuário</p>
  }

  return (
    <div>
      <h1 className="text-lg m-4 font-bold">Lista de usuário</h1>
      <div className="flex flex-wrap gap-4">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}
