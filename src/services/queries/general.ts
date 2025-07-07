import type { UseQueryResult } from '@tanstack/react-query'
import type { Film, Person } from '@/models/interfaces/api'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchFilm, fetchFilms, fetchPeople, fetchPerson } from '@/services/api/general'
import { extractIdFromUrl } from '@/utils/general'

export function useFilmsQuery(): UseQueryResult<Film[], unknown> {
  return useQuery({
    queryKey: ['films'],
    queryFn: fetchFilms,
  })
}

export function usePeopleQuery(): UseQueryResult<Person[], unknown> {
  return useQuery({
    queryKey: ['people'],
    queryFn: fetchPeople,
  })
}

export function useFilmQuery(id: string): UseQueryResult<Film, unknown> {
  return useQuery({
    queryKey: ['film', id],
    queryFn: () => fetchFilm(id),
  })
}

export function usePersonQuery(id: string): UseQueryResult<Person, unknown> {
  return useQuery({
    queryKey: ['person', id],
    queryFn: () => fetchPerson(id),
  })
}

export function useFilmsByUrlsQuery(urls: string[] | undefined): UseQueryResult<Film[], unknown> {
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: ['films-by-urls', urls],
    queryFn: async () => {
      if (!urls)
        return []

      const promises = urls.map(async (url) => {
        const id = extractIdFromUrl(url)
        const film = await fetchFilm(id)

        queryClient.setQueryData(['film', id], film)

        return film
      })

      const results = await Promise.all(promises)

      return results
    },
  })
}

export function usePeopleByUrlsQuery(urls: string[] | undefined): UseQueryResult<Person[], unknown> {
  const queryClient = useQueryClient()

  return useQuery({
    queryKey: ['people-by-urls', urls],
    queryFn: async () => {
      if (!urls)
        return []

      const promises = urls.map(async (url) => {
        const id = extractIdFromUrl(url)
        const person = await fetchPerson(id)

        queryClient.setQueryData(['person', id], person)

        return person
      })

      const results = await Promise.all(promises)

      return results
    },
  })
}
