export function getImage(index: number): string {
  const availableImages = 6

  if (index <= 0) {
    return `/assets/star-wars-${availableImages}.jpg`
  }

  const fallbackIndex = ((index - 1) % availableImages) + 1
  return `/assets/star-wars-${fallbackIndex}.jpg`
}
