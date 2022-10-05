import { useQuery } from '@tanstack/react-query'

export const useUserData = (userId) => {
  const usersData = useQuery(['users', userId], () =>
    fetch(`/api/users/${userId}`).then((res) => res.json())
  )

  return usersData
}
