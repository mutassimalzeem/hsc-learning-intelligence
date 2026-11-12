import { useMemo, useState } from 'react'
import { getResources } from '../api/learningClient'
import trainUrl from '../assets/train.png'
import { Button, ButtonLink } from '../components/Button'
import { SearchField, SelectField } from '../components/Fields'
import { StatusBanner } from '../components/StatusBanner'
import { usePageTitle } from '../components/usePageTitle'
import { paths } from './paths'

const needs = [
  { id: 'all', label: 'All resources' },
  { id: 'understand', label: 'Understand' },
  { id: 'apply', label: 'Apply' },
  { id: 'check', label: 'Check' },
] as const

type Need = (typeof needs)[number]['id']

export function Resources() {
  const resources = getResources()
  const [query, setQuery] = useState('')
  const [subject, setSubject] = useState('Science')
  const [topic, setTopic] = useState('Forces & motion')
  const [need, setNeed] = useState<Need>('all')
  const [openedId, setOpenedId] = useState<string | null>(null)
  usePageTitle(resources.title)

  const items = useMemo(
    () =>
      resources.groups.flatMap((group) =>
        group.items.map((item) => ({ ...item, groupId: group.id, groupTitle: group.title, groupSummary: group.summary })),
      ),
    [resources.groups],
  )

  const matched = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return items.filter((item) => {
      if (item.subject !== subject || item.topic !== topic) return false
      if (!needle) return true
      return [item.title, item.detail, item.meta, item.groupTitle].join(' ').toLowerCase().includes(needle)
    })
  }, [items, query, subject, topic])

  const visible = need === 'all' ? matched : matched.filter((item) => item.groupId === need)
  const groups = resources.groups
    .map((group) => ({ ...group, items: visible.filter((item) => item.groupId === group.id) }))
    .filter((group) => group.items.length > 0)

  function clearFilters() {
    setQuery('')
    setSubject('Science')
    setTopic('Forces & motion')
    setNeed('all')
    setOpenedId(null)
  }

  function count(id: Need) {
    return id === 'all' ? matched.length : matched.filter((item) => item.groupId === id).length
  }

  return (
    <div className="page support-page">
      <p className="kicker">{resources.trail}</p>
      <header className="page-intro">
        <div>
          <h1 className="display-xl">{resources.title}</h1>
          <p>{resources.summary}</p>
        </div>
        <img className="intro-art" src={trainUrl} alt="" width={180} height={51} />
      </header>
      <div className="filters">
        <SearchField
          id="resource-search"
          label="Search resources"
          value={query}
          placeholder="Search by title, topic or keyword"
          onChange={setQuery}
        />
        <SelectField
          id="resource-subject"
          label="Subject"
          value={subject}
          onChange={setSubject}
          options={[{ value: 'Science', label: 'Science' }]}
        />
        <SelectField
          id="resource-topic"
          label="Topic"
          value={topic}
          onChange={setTopic}
          options={[{ value: 'Forces & motion', label: 'Forces & motion' }]}
        />
        <SelectField
          id="resource-need"
          label="Learning need"
          value={need}
          onChange={(value) => setNeed(value as Need)}
          options={[
            { value: 'all', label: 'All needs' },
            { value: 'understand', label: 'Understand' },
            { value: 'apply', label: 'Apply' },
            { value: 'check', label: 'Check' },
          ]}
        />
      </div>
      <div className="resource-layout">
        <div className="resource-side">
          <nav className="browse-needs" aria-label="Browse by need">
            <p className="kicker">Browse by need</p>
            {needs.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={need === item.id}
                aria-label={`${item.label}, ${count(item.id)}`}
                onClick={() => setNeed(item.id)}
              >
                <span>{item.label}</span>
                <span aria-hidden="true">{count(item.id)}</span>
              </button>
            ))}
          </nav>
          <aside className="start-card">
            <h2 className="display-sm">{resources.asideTitle}</h2>
            <p>{resources.asideBody}</p>
            <ButtonLink variant="secondary" to={paths.history}>
              View my activity
            </ButtonLink>
          </aside>
        </div>
        <div className="resource-main">
          <div className="section-row">
            <h2 className="display-sm">{resources.heading}</h2>
            <p aria-live="polite">
              {visible.length} {visible.length === 1 ? 'resource' : 'resources'} · {resources.grouped}
            </p>
          </div>
          {groups.length === 0 ? (
            <StatusBanner
              tone="empty"
              heading="h2"
              title={resources.missTitle}
              body={resources.missBody}
              action={{ label: 'Clear filters', onClick: clearFilters }}
            />
          ) : (
            groups.map((group) => (
              <section key={group.id} className="resource-group" aria-labelledby={`${group.id}-heading`}>
                <div>
                  <h3 className="display-sm" id={`${group.id}-heading`}>
                    {group.title}
                  </h3>
                  <p className="hint">{group.summary}</p>
                </div>
                <div className="stack">
                  {group.items.map((item) => (
                    <article key={item.id} className="resource-row">
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.detail}</p>
                        <p className="hint">{item.meta}</p>
                      </div>
                      <Button
                        variant="secondary"
                        aria-expanded={openedId === item.id}
                        aria-label={`Open resource, ${item.title}`}
                        onClick={() => setOpenedId(openedId === item.id ? null : item.id)}
                      >
                        Open resource
                      </Button>
                      {openedId === item.id ? (
                        <p className="inline-note" role="status">
                          {resources.unavailable}
                        </p>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            ))
          )}
        </div>
      </div>
      <p className="hint">{resources.footnote}</p>
    </div>
  )
}
