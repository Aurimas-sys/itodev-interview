export function extractIdFromUrl(url: string): string {
  const id = url.split('/').filter(Boolean).pop()
  if (!id)
    throw new Error(`Invalid film URL: ${url}`)

  return id
}
