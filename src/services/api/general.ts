import type { Film, Person } from '../../models/interfaces/api'
import axios from 'axios'
import { BASE_API_URL } from '../../models/constants/api'

export async function fetchFilms(): Promise<Film[]> {
  const URL = `${BASE_API_URL}/films`

  const { data } = await axios.get<Film[]>(URL)

  return data
}

export async function fetchPeople(): Promise<Person[]> {
  const URL = `${BASE_API_URL}/people`

  const { data } = await axios.get<Person[]>(URL)

  return data
}

export async function fetchPerson(id: string): Promise<Person> {
  const URL = `${BASE_API_URL}/people/${id}`

  const { data } = await axios.get<Person>(URL)

  return data
}

export async function fetchFilm(id: string): Promise<Film> {
  const URL = `${BASE_API_URL}/films/${id}`

  const { data } = await axios.get<Film>(URL)

  return data
}
