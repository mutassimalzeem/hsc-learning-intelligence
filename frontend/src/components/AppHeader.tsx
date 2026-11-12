import { useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { paths } from '../routes/paths'
import { useMediaQuery } from './useMediaQuery'

type NavItem = {
  to: string
  label: string
  primary?: boolean
  current: (pathname: string) => boolean
}

const studentLinks: NavItem[] = [
  {
    to: paths.learning,
    label: 'My learning',
    primary: true,
    current: (pathname) => pathname === paths.learning || pathname.startsWith('/learning/forces-and-motion'),
  },
  { to: paths.history, label: 'Activity history', current: (pathname) => pathname === paths.history },
  { to: paths.resources, label: 'Resources', current: (pathname) => pathname === paths.resources },
  { to: paths.help, label: 'Help', current: (pathname) => pathname === paths.help },
]

const tutorLinks: NavItem[] = [
  { to: paths.tutor, label: 'Cohort overview', primary: true, current: (pathname) => pathname === paths.tutor },
  {
    to: paths.assignment,
    label: 'Assignments',
    primary: true,
    current: (pathname) => pathname.startsWith('/tutor/assignments'),
  },
  {
    to: paths.teachingResources,
    label: 'Teaching resources',
    current: (pathname) => pathname === paths.teachingResources,
  },
  { to: paths.tutorHelp, label: 'Help', current: (pathname) => pathname === paths.tutorHelp },
]

export function AppHeader({ space }: { space: 'student' | 'tutor' }) {
  const { pathname } = useLocation()
  const tablet = useMediaQuery('(max-width: 1024px)')
  const phone = useMediaQuery('(max-width: 720px)')
  const links = space === 'student' ? studentLinks : tutorLinks
  const visible = phone ? [] : tablet ? links.filter((link) => link.primary) : links
  const overflow = phone ? links : links.filter((link) => !link.primary)
  const home = space === 'student' ? paths.learning : paths.tutor
  const spaceLabel = space === 'student' ? 'Student space' : 'Tutor space'

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" to={home}>
          clearstep.
        </Link>
        <nav className="primary-nav" aria-label="Primary">
          {visible.map((link) => (
            <Link key={link.to} className="nav-link" to={link.to} aria-current={link.current(pathname) ? 'page' : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        {tablet ? <MenuDisclosure links={overflow} pathname={pathname} spaceLabel={phone ? spaceLabel : undefined} /> : null}
        {tablet ? null : <p className="space-label">{spaceLabel}</p>}
      </div>
    </header>
  )
}

function MenuDisclosure({
  links,
  pathname,
  spaceLabel,
}: {
  links: NavItem[]
  pathname: string
  spaceLabel?: string
}) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const regionRef = useRef<HTMLDivElement>(null)
  const titleId = useId()

  useEffect(() => {
    if (!open) return
    const region = regionRef.current
    if (!region) return
    const focusable = () =>
      [...region.querySelectorAll<HTMLElement>('a, button')].filter((node) => !node.hasAttribute('disabled'))
    focusable()[1]?.focus()

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        buttonRef.current?.focus()
        return
      }
      if (event.key !== 'Tab') return
      const items = focusable()
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="menu-wrap" ref={regionRef}>
      <button
        ref={buttonRef}
        type="button"
        className="menu-button"
        aria-expanded={open}
        aria-controls={titleId}
        onClick={() => setOpen((value) => !value)}
      >
        Menu
      </button>
      {open ? (
        <div className="menu-panel" id={titleId} role="dialog" aria-modal="true" aria-label="Menu">
          {spaceLabel ? <p className="menu-space">{spaceLabel}</p> : null}
          {links.map((link) => (
            <Link key={link.to} to={link.to} aria-current={link.current(pathname) ? 'page' : undefined} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <button type="button" className="menu-close" onClick={() => { setOpen(false); buttonRef.current?.focus() }}>
            Close menu
          </button>
        </div>
      ) : null}
    </div>
  )
}
