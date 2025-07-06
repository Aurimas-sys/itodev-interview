import type { UseQueryResult } from '@tanstack/react-query'
import type { Film, Person } from '../../models/interfaces/api'
import { useQuery } from '@tanstack/react-query'
import { fetchFilm, fetchFilms, fetchPeople, fetchPerson } from '../api/general'

export function useFilmsQuery(): UseQueryResult<Film[], any> {
  return useQuery({
    queryKey: ['films'],
    queryFn: fetchFilms,
  })
}

export function usePeopleQuery(): UseQueryResult<Person[], any> {
  return useQuery({
    queryKey: ['people'],
    queryFn: fetchPeople,
  })
}

export function useFilmQuery(id: string): UseQueryResult<Film, any> {
  return useQuery({
    queryKey: ['film'],
    queryFn: () => fetchFilm(id),
  })
}

export function usePersonQuery(id: string): UseQueryResult<Person, any> {
  return useQuery({
    queryKey: ['person', id],
    queryFn: () => fetchPerson(id),
  })
}
