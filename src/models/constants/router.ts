export const ROUTES = {
  HOME: '/',
  FILMS: '/films',
  FILM: '/films/:filmId',
  CHARACTERS: '/characters',
  CHARACTER: '/characters/:characterId',
  FILM_BY_ID: (filmId: string | number): string => `/films/${filmId}`,
  CHARACTER_BY_ID: (characterId: string | number): string => `/characters/${characterId}`,
  NOT_FOUND: '*',
}
