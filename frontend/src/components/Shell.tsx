import { Outlet, useMatches } from 'react-router-dom'
import { AppFooter } from './AppFooter'
import { AppHeader } from './AppHeader'

type Handle = { footerNote?: string }

export function Shell({ space }: { space: 'student' | 'tutor' }) {
  const matches = useMatches()
  const fallback = space === 'student' ? 'English · Language options in pilot' : 'Authorized tutor view · Example cohort'
  const note = matches.reduce((current, match) => {
    const handle = match.handle as Handle | undefined
    return handle?.footerNote ?? current
  }, fallback)

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <AppHeader space={space} />
      <main id="content">
        <Outlet />
      </main>
      <AppFooter note={note} />
    </>
  )
}
