import { cleanup, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach } from 'vitest'
import { createMemoryRouter, MemoryRouter, RouterProvider } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { appRoutes } from '../App'
import { ActivityHistory } from '../routes/ActivityHistory'
import { HelpDeliveryNote, HelpSupport } from '../routes/HelpSupport'
import { Resources } from '../routes/Resources'
import { paths } from '../routes/paths'

beforeEach(() => {
  cleanup()
  sessionStorage.clear()
  document.documentElement.removeAttribute('data-text-size')
  document.documentElement.removeAttribute('data-motion')
})

function renderRoute(path: string) {
  const router = createMemoryRouter(appRoutes, { initialEntries: [path] })
  return render(<RouterProvider router={router} />)
}

describe('supporting student pages', () => {
  it('opens each new page from the student navigation', async () => {
    const user = userEvent.setup()
    renderRoute(paths.learning)
    await user.click(screen.getByRole('link', { name: 'Activity history' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Your learning, in view.' })).toBeInTheDocument()
    await user.click(screen.getByRole('link', { name: 'Resources' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Find a useful next step.' })).toBeInTheDocument()
    await user.click(screen.getByRole('link', { name: 'Help' }))
    expect(screen.getByRole('heading', { level: 1, name: 'A little help, when you need it.' })).toBeInTheDocument()
  })

  it('keeps tutor help on the placeholder', () => {
    renderRoute(paths.tutorHelp)
    expect(screen.getByRole('heading', { level: 1, name: /not in the approved design/i })).toBeInTheDocument()
  })

  it('expands and hides activity evidence', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <ActivityHistory />
      </MemoryRouter>,
    )
    const lift = screen.getByRole('heading', { name: 'Balanced forces in a lift' }).closest('article')
    if (!lift) throw new Error('Missing activity')
    expect(within(lift).getByText(/A lift moves upward at a constant speed/)).toBeInTheDocument()
    await user.click(within(lift).getByRole('button', { name: /Hide details/ }))
    expect(within(lift).queryByText(/A lift moves upward at a constant speed/)).not.toBeInTheDocument()
    await user.click(within(lift).getByRole('button', { name: /View details/ }))
    expect(within(lift).getByText(/not a mastery certificate/)).toBeInTheDocument()
  })

  it('clears a history search that matches nothing', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <ActivityHistory />
      </MemoryRouter>,
    )
    await user.type(screen.getByLabelText('Search activity'), 'no-such-activity')
    expect(screen.getByRole('heading', { name: 'No activities match' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Clear filters' }))
    expect(screen.getByRole('heading', { name: 'New context explored' })).toBeInTheDocument()
  })

  it('shows the designed empty history when there are no records', () => {
    render(
      <MemoryRouter>
        <ActivityHistory activities={[]} />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: 'No activity yet' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start diagnostic' })).toHaveAttribute('href', paths.diagnostic)
  })

  it('explains that a resource text is not in this example', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <Resources />
      </MemoryRouter>,
    )
    expect(screen.getByRole('link', { name: 'View my activity' })).toHaveAttribute('href', paths.history)
    await user.click(screen.getByRole('button', { name: 'Open resource, Balanced forces, explained' }))
    expect(screen.getByText(/full text of this guide is not in this example/i)).toBeInTheDocument()
    await user.type(screen.getByLabelText('Search resources'), 'zzzz')
    expect(screen.getByRole('heading', { name: 'No matching resources' })).toBeInTheDocument()
  })

  it('toggles a help answer from the keyboard and reports a search miss', async () => {
    const user = userEvent.setup()
    render(<HelpSupport />)
    const pause = screen.getByRole('button', { name: /Can I pause and return later/i })
    pause.focus()
    await user.keyboard('{Enter}')
    expect(pause).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Nothing is stored on a server/)).toBeInTheDocument()
    await user.keyboard('{Enter}')
    expect(pause).toHaveAttribute('aria-expanded', 'false')

    await user.type(screen.getByLabelText('Search help'), 'zzzz-no-topic')
    await user.click(screen.getByRole('button', { name: 'Search help' }))
    expect(screen.getByRole('heading', { name: 'No answers found' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Contact support' }))
    expect(screen.getByLabelText('Message')).toHaveFocus()
  })

  it('keeps a support draft when the message cannot be delivered', async () => {
    const user = userEvent.setup()
    render(<HelpSupport />)
    const subject = screen.getByLabelText('Subject')
    await user.click(subject)
    await user.tab()
    expect(subject).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText('Subject is required.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send message' })).toBeDisabled()

    await user.type(subject, 'Access')
    await user.type(screen.getByLabelText('Message'), 'The menu did not close.')
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/wasn't sent/i)
    expect(screen.getByRole('alert')).toHaveTextContent(/No support service is connected/i)
    expect(subject).toHaveValue('Access')
    expect(screen.queryByText('Message sent')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Try again' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/wasn't sent/i)
  })

  it('can render the designed sent note without using it for delivery', () => {
    render(<HelpDeliveryNote outcome="sent" />)
    expect(screen.getByText('Message sent')).toBeInTheDocument()
    expect(screen.getByText(/We'll reply when you wait for a reply/)).toBeInTheDocument()
  })

  it('applies local comfort settings', async () => {
    const user = userEvent.setup()
    render(<HelpSupport />)
    await user.selectOptions(screen.getByLabelText('Text size'), 'large')
    await user.selectOptions(screen.getByLabelText('Reduce motion'), 'reduce')
    expect(document.documentElement.dataset.textSize).toBe('large')
    expect(document.documentElement.dataset.motion).toBe('reduce')
    expect(screen.getByLabelText('Reading language')).toHaveValue('English')
    await user.click(screen.getByRole('button', { name: 'Ask my tutor' }))
    expect(screen.getByText(/Tutor messaging is not connected/)).toBeInTheDocument()
  })
})
