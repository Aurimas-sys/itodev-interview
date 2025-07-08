import { describe, expect, it } from 'vitest'
import { getImage } from '@/utils/image'

describe('getImage', () => {
  it('returns correct image path for index within range', () => {
    expect(getImage(1)).toBe('/assets/star-wars-1.jpg')
    expect(getImage(6)).toBe('/assets/star-wars-6.jpg')
  })

  it('wraps around if index exceeds available images', () => {
    expect(getImage(12)).toBe('/assets/star-wars-6.jpg')
  })

  it('returns expected image for index === 0', () => {
    expect(getImage(0)).toBe('/assets/star-wars-6.jpg')
  })
})
