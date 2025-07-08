import { describe, expect, it } from 'vitest'
import { extractIdFromUrl } from '@/utils/general'

describe('extractIdFromUrl', () => {
  it('should extract ID from a valid URL', () => {
    const url = 'https://swapi.dev/api/films/7/'
    const id = extractIdFromUrl(url)

    expect(id).toBe('7')
  })

  it('should throw an error for invalid URL', () => {
    const badUrl = ''

    expect(() => extractIdFromUrl(badUrl)).toThrowError()
  })

  it('should extract ID from URL without trailing slash', () => {
    const url = 'https://swapi.dev/api/films/4'
    const id = extractIdFromUrl(url)

    expect(id).toBe('4')
  })

  it('should handle URLs with extra slashes', () => {
    const url = '/api/films///9///'
    const id = extractIdFromUrl(url)

    expect(id).toBe('9')
  })
})
