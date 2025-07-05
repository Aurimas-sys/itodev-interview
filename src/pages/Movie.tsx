import { useParams } from 'react-router-dom'

export default function Movie() {
  const { movieId } = useParams()

  return (
    <main>
      <h1>Movie</h1>
      <p>
        {`Single movie with ${movieId} id`}
      </p>
    </main>
  )
}
