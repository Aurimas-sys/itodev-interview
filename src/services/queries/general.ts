import type { UseQueryResult } from '@tanstack/react-query'
import type { Film, Person } from '@/models/interfaces/api'
import { useQuery } from '@tanstack/react-query'

import { fetchFilm, fetchFilms, fetchPeople, fetchPerson } from '@/services/api/general'

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
