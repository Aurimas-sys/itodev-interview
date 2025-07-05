import { useParams } from 'react-router-dom'

export default function Character() {
  const { characterId } = useParams()
  return (
    <main>
      <h1>Character</h1>
      <p>
        {`Single character with ${characterId} id`}
      </p>
    </main>
  )
}
