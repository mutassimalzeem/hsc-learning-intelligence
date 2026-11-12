import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from '../components/Button'
import { StatusBanner } from '../components/StatusBanner'

describe('button and banner states', () => {
  it('exposes disabled and saving to assistive tech', () => {
    render(
      <>
        <Button disabled>Continue</Button>
        <Button saving>Save</Button>
      </>,
    )
    expect(screen.getByRole('button', { name: 'Continue' })).toBeDisabled()
    const saving = screen.getByRole('button', { name: 'Saving...' })
    expect(saving).toHaveAttribute('aria-busy', 'true')
    expect(saving).toHaveAttribute('aria-disabled', 'true')
  })

  it('renders the four specified banners', () => {
    render(
      <>
        <StatusBanner tone="saving" />
        <StatusBanner tone="offline" action={{ label: 'Try again' }} />
        <StatusBanner tone="empty" action={{ label: 'Assign diagnostic', onClick: () => undefined }} />
        <StatusBanner tone="success" action={{ label: 'View assignment', onClick: () => undefined }} />
      </>,
    )
    expect(screen.getByText('Saving your answer...')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toHaveTextContent(/Not connected/)
    expect(screen.getByRole('button', { name: 'Try again' })).toBeInTheDocument()
    expect(screen.getByText('No evidence yet')).toBeInTheDocument()
    expect(screen.getByText(/Practice assigned/)).toBeInTheDocument()
  })
})
