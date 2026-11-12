import type { ReactElement } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { DiagnosticQuestion } from '../routes/DiagnosticQuestion'
import { EvidenceReport } from '../routes/EvidenceReport'
import { TransferCheck } from '../routes/TransferCheck'
import { TutorCohort } from '../routes/TutorCohort'

function renderAt(ui: ReactElement, path = '/') {
  return render(<MemoryRouter initialEntries={[path]}>{ui}</MemoryRouter>)
}

describe('student and tutor copy', () => {
  it('keeps continue inactive until an answer, including I am not sure', async () => {
    const user = userEvent.setup()
    renderAt(<DiagnosticQuestion />)
    const continueButton = screen.getByRole('button', { name: 'Continue' })
    expect(continueButton).toBeDisabled()
    await user.click(screen.getByRole('radio', { name: /I'm not sure/i }))
    expect(screen.getByRole('radio', { name: /I'm not sure/i })).toBeChecked()
    expect(continueButton).toBeEnabled()
  })

  it('keeps the selection when saving fails', async () => {
    const user = userEvent.setup()
    renderAt(<DiagnosticQuestion />, '/learning/forces-and-motion/diagnostic?offline=1')
    await user.click(screen.getByRole('radio', { name: /I'm not sure/i }))
    expect(await screen.findByRole('alert')).toHaveTextContent(/Not connected/)
    expect(screen.getByRole('radio', { name: /I'm not sure/i })).toBeChecked()
    expect(screen.getByRole('button', { name: 'Try again' })).toBeInTheDocument()
  })

  it('separates observation from a confirmed label', () => {
    renderAt(<EvidenceReport />)
    expect(screen.getByText(/not a fixed label/i)).toBeInTheDocument()
    expect(screen.getByText(/not yet confirmed/i)).toBeInTheDocument()
  })

  it('does not treat one new context as mastery', () => {
    renderAt(<TransferCheck />)
    expect(screen.getByText(/not proof of complete mastery/i)).toBeInTheDocument()
  })

  it('shows the published patterns and withholds the small group', () => {
    renderAt(<TutorCohort />)
    expect(screen.getByText(/8 of 20 responses/)).toBeInTheDocument()
    expect(screen.getByText(/6 of 20 responses/)).toBeInTheDocument()
    expect(screen.queryByText('Friction direction reversed')).not.toBeInTheDocument()
    expect(screen.getByText(/fewer than 5 responses/i)).toBeInTheDocument()
  })
})
