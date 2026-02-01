import type { User } from "@/assets/types/user.type"

type UserItempProps = {
  user: User
}

export default function UserItem({ user }: UserItempProps) {
  return (
    <div className="w-[260px] border-2 border-gray-200 bg-white p-4 rounded-xl shadow-sm hover:shadow-lg">
      <h2 className="text-lg font-medium">{user.name}</h2>

      <p className="text-sm text-gray-600 mt-1">{user.email}</p>
    </div>
  )
}
