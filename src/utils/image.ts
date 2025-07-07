export function getImage(index: number) {
  const availableImages = 6

  const fallbackIndex = ((index - 1) % availableImages) + 1
  return `/assets/star-wars-${fallbackIndex}.jpg`
}
