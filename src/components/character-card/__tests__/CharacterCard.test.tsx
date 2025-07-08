import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { CharacterCard } from '@/components/character-card/CharacterCard'

const mockNavigate = vi.fn()
const name = 'Luke Skywalker'
const url = 'https://swapi.dev/api/people/1/'

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe('characterCard', () => {
  it('renders a focusable element', () => {
    render(
      <CharacterCard
        name={name}
        url={url}
      />,
    )

    const card = screen.getByTestId('character-card-1')

    expect(card).toHaveAttribute('tabIndex', '0')
  })

  it('renders character name', () => {
    render(
      <CharacterCard
        name={name}
        url={url}
      />,
    )
    expect(screen.getByText(name)).toBeInTheDocument()
  })

  it('applies background image', () => {
    render(
      <CharacterCard
        name={name}
        url={url}
      />,
    )

    const card = screen.getByTestId('character-card-1')

    expect(card?.style.backgroundImage).toBe('url("/assets/star-wars-1.jpg")')
  })

  it('navigates on click', async () => {
    render(
      <CharacterCard
        name={name}
        url={url}
      />,
    )

    const card = screen.getByTestId('character-card-1')
    await userEvent.click(card!)

    expect(mockNavigate).toHaveBeenCalledWith('/characters/1')
  })

  it('navigates on Enter key press', async () => {
    render(
      <CharacterCard
        name={name}
        url={url}
      />,
    )

    const card = screen.getByTestId('character-card-1')
    card.focus()
    await userEvent.keyboard('{Enter}')

    expect(mockNavigate).toHaveBeenCalledWith('/characters/1')
  })
})
