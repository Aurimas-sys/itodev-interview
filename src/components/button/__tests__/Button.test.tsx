import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '@/components/button/Button'

describe('button component', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByTestId('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click me')
  })

  it('applies correct variant class', () => {
    render(<Button variant="danger">Click me</Button>)

    const button = screen.getByTestId('button')

    expect(button.className).toContain('button--danger')
  })

  it('appends custom className', () => {
    render(<Button className="custom-class">Click me</Button>)

    const button = screen.getByTestId('button')

    expect(button.className).toContain('custom-class')
  })

  it('renders prependIcon when provided', () => {
    const icon = <svg data-testid="icon" />
    render(<Button prependIcon={icon}>Click me</Button>)

    const iconRendered = screen.getByTestId('icon')

    expect(iconRendered).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click me</Button>)

    const button = screen.getByTestId('button')
    await userEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
