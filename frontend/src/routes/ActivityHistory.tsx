import { useMemo, useState } from 'react'
import { getHistory } from '../api/learningClient'
import badgeUrl from '../assets/badge.png'
import { Button } from '../components/Button'
import { SearchField, SelectField } from '../components/Fields'
import { StatusBanner } from '../components/StatusBanner'
import { usePageTitle } from '../components/usePageTitle'
import { exampleLearning } from '../fixtures/exampleLearning'
import { paths } from './paths'

type Activity = (typeof exampleLearning.history.activities)[number]

const typeOptions = [
  { value: 'all', label: 'All activities' },
  { value: 'diagnostic', label: 'Diagnostic' },
  { value: 'practice', label: 'Focused practice' },
  { value: 'check', label: 'New-context check' },
  { value: 'milestone', label: 'Personal milestone' },
]

const subjectOptions = [
  { value: 'all', label: 'All subjects' },
  { value: 'Science', label: 'Science' },
]

const rangeOptions = [
  { value: '30', label: 'Last 30 days' },
  { value: '7', label: 'Last 7 days' },
  { value: 'today', label: 'Today' },
]

function matches(activity: Activity, query: string, kind: string, subject: string) {
  if (kind !== 'all' && activity.kind !== kind) return false
  if (subject !== 'all' && activity.subject !== subject) return false
  const haystack = [activity.title, activity.detail, activity.meta, activity.kindLabel].join(' ').toLowerCase()
  return haystack.includes(query.trim().toLowerCase())
}

export function ActivityHistory({ activities }: { activities?: Activity[] }) {
  const history = getHistory()
  const source = activities ?? history.activities
  const [query, setQuery] = useState('')
  const [kind, setKind] = useState('all')
  const [subject, setSubject] = useState('all')
  const [range, setRange] = useState('30')
  const [openId, setOpenId] = useState<string | null>('check-lift')
  usePageTitle(history.title)

  const filtered = useMemo(() => {
    const inRange = range === '30' || range === '7' || range === 'today'
    if (!inRange) return []
    return source.filter((activity) => matches(activity, query, kind, subject))
  }, [source, query, kind, subject, range])

  function clearFilters() {
    setQuery('')
    setKind('all')
    setSubject('all')
    setRange('30')
  }

  const entryLabel = `${filtered.length} ${filtered.length === 1 ? 'entry' : 'entries'} · Newest first`

  return (
    <div className="page support-page">
      <p className="kicker">{history.trail}</p>
      <header className="page-intro">
        <div>
          <h1 className="display-xl">{history.title}</h1>
          <p>{history.summary}</p>
        </div>
      </header>
      <div className="filters">
        <SearchField id="history-search" label="Search activity" value={query} placeholder="Search by title or topic" onChange={setQuery} />
        <SelectField id="history-type" label="Activity type" value={kind} onChange={setKind} options={typeOptions} />
        <SelectField id="history-subject" label="Subject" value={subject} onChange={setSubject} options={subjectOptions} />
        <SelectField id="history-range" label="Date range" value={range} onChange={setRange} options={rangeOptions} />
      </div>
      {source.length === 0 ? (
        <StatusBanner
          tone="empty"
          heading="h2"
          title={history.emptyTitle}
          body={history.emptyBody}
          action={{ to: paths.diagnostic, label: 'Start diagnostic' }}
        />
      ) : (
        <>
          <section className="stat-bar" aria-label="History summary">
            <p className="stat-figure">{history.completedLabel}</p>
            <p className="stat-figure">{history.milestoneLabel}</p>
            <p className="hint">{history.summaryNote}</p>
          </section>
          <div className="day-row">
            <h2 className="display-sm">{history.day}</h2>
            <p aria-live="polite">{entryLabel}</p>
          </div>
          {filtered.length === 0 ? (
            <StatusBanner
              tone="empty"
              heading="h2"
              title={history.missTitle}
              body={history.missBody}
              action={{ label: 'Clear filters', onClick: clearFilters }}
            />
          ) : (
            <div className="record-card">
              {filtered.map((activity) => {
                const open = openId === activity.id
                const panelId = `${activity.id}-detail`
                return (
                  <article key={activity.id} className="record">
                    <div className="record-row">
                      <time dateTime={`2026-11-12T${activity.time}`}>{activity.time}</time>
                      <div>
                        <p className="kicker">{activity.kindLabel}</p>
                        <h3 className="display-sm" id={`${activity.id}-title`}>
                          {activity.title}
                        </h3>
                        <p>{activity.detail}</p>
                        <p className="hint">{activity.meta}</p>
                      </div>
                      <div className="record-actions">
                        {activity.kind === 'milestone' ? (
                          <img className="record-badge" src={badgeUrl} alt="" width={48} height={62} />
                        ) : null}
                        <Button
                          variant="secondary"
                          aria-expanded={open}
                          aria-controls={panelId}
                          aria-label={`${open ? 'Hide details' : 'View details'} for ${activity.title}`}
                          onClick={() => setOpenId(open ? null : activity.id)}
                        >
                          {open ? 'Hide details' : 'View details'}
                        </Button>
                      </div>
                    </div>
                    {open ? <DetailPanel id={panelId} activity={activity} /> : null}
                  </article>
                )
              })}
            </div>
          )}
          {filtered.length > 0 ? (
            <p className="hint">
              {filtered.length === source.length ? 'Showing all ' : 'Showing '}
              {filtered.length} {filtered.length === 1 ? 'entry' : 'entries'} in this date range.
            </p>
          ) : null}
        </>
      )}
      <aside className="privacy-note">
        <p>
          <strong>{history.privacyTitle}</strong>
        </p>
        <p>{history.privacyBody}</p>
      </aside>
    </div>
  )
}

function DetailPanel({ id, activity }: { id: string; activity: Activity }) {
  const block = activity.detailBlock
  const kicker = 'kicker' in block ? block.kicker : undefined
  const title = 'title' in block ? block.title : undefined
  return (
    <div id={id} className="evidence-panel">
      {kicker ? <p className="kicker">{kicker}</p> : null}
      {title ? (
        <p>
          <strong>{title}</strong>
        </p>
      ) : null}
      {block.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  )
}
