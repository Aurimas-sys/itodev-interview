import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Error from '@/components/error/Error'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe('error component', () => {
  it('renders the main container and content wrapper', () => {
    render(<Error />)

    expect(screen.getByTestId('error-container')).toBeInTheDocument()
    expect(screen.getByTestId('error-content')).toBeInTheDocument()
  })

  it('renders the main error message', () => {
    render(<Error />)

    expect(screen.getByTestId('error-title')).toHaveTextContent('Whoops! Something went wrong!')
  })

  it('renders the sub-message', () => {
    render(<Error />)

    expect(screen.getByTestId('error-sub-message')).toHaveTextContent('We could not find what you were looking for.')
  })

  it('renders the button with correct label', () => {
    render(<Error />)

    const button = screen.getByTestId('error-button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Main Page')
  })

  it('navigates to home on button click', async () => {
    render(<Error />)

    const button = screen.getByTestId('error-button')
    await userEvent.click(button)

    expect(mockNavigate).toHaveBeenCalledWith('/')
  })
})
