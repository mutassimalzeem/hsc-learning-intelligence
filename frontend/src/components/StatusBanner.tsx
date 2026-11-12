import { Button, ButtonLink } from './Button'

type Tone = 'saving' | 'offline' | 'empty' | 'success' | 'error'

const presets: Record<Tone, { title: string; body: string }> = {
  saving: {
    title: 'Saving your answer...',
    body: 'Keep this page open. Your selection stays visible.',
  },
  offline: {
    title: 'Not connected',
    body: 'Your answer is kept here. Reconnect, then try saving again.',
  },
  empty: {
    title: 'No evidence yet',
    body: 'Assign a short diagnostic to reveal a useful starting point.',
  },
  success: {
    title: 'Practice assigned',
    body: '8 students have a focused activity ready to begin.',
  },
  error: {
    title: 'Something needs attention',
    body: 'Review the message and try again.',
  },
}

export function StatusBanner({
  tone,
  title,
  body,
  action,
  heading = 'p',
}: {
  tone: Tone
  title?: string
  body?: string
  action?: { label: string; to?: string; onClick?: () => void }
  heading?: 'h1' | 'h2' | 'h3' | 'p'
}) {
  const copy = presets[tone]
  const Title = heading
  const live = tone === 'offline' || tone === 'error' ? 'alert' : 'status'
  return (
    <section className={`banner banner-${tone}`} role={live}>
      <Title className={heading === 'p' ? 'banner-title' : 'banner-title display-sm'}>{title ?? copy.title}</Title>
      <p>{body ?? copy.body}</p>
      {action ? <BannerAction action={action} /> : null}
    </section>
  )
}

function BannerAction({ action }: { action: { label: string; to?: string; onClick?: () => void } }) {
  if (action.to) {
    return <ButtonLink to={action.to}>{action.label}</ButtonLink>
  }
  return <Button onClick={action.onClick}>{action.label}</Button>
}
