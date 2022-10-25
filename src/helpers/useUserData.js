import { useQuery } from '@tanstack/react-query'

export const useUserData = (userId) => {
  const usersData = useQuery(
    ['users', userId],
    () => fetch(`/api/users/${userId}`).then((res) => res.json()),
    {
      staleTime: 1000 * 60 * 5,
    }
  )

  return usersData
}
