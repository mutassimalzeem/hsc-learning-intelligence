import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { getHelp } from '../api/learningClient'
import { Button } from '../components/Button'
import { SearchField, SelectField } from '../components/Fields'
import { StatusBanner } from '../components/StatusBanner'
import { usePageTitle } from '../components/usePageTitle'

const TEXT_KEY = 'clearstep-text-size'
const MOTION_KEY = 'clearstep-motion'

function readPreference(key: string, fallback: string) {
  try {
    return sessionStorage.getItem(key) ?? fallback
  } catch {
    return fallback
  }
}

export function HelpDeliveryNote({
  outcome,
  onRetry,
}: {
  outcome: 'failed' | 'sent'
  onRetry?: () => void
}) {
  const help = getHelp()
  if (outcome === 'sent') {
    return <StatusBanner tone="success" title={help.sentTitle} body={help.sentBody} action={{ label: 'Return to help' }} />
  }
  return (
    <StatusBanner
      tone="error"
      title={help.failureTitle}
      body={help.failureBody}
      action={onRetry ? { label: 'Try again', onClick: onRetry } : { label: 'Try again' }}
    />
  )
}

export function HelpSupport() {
  const help = getHelp()
  const formId = useId()
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState<(typeof help.topics)[number]['id']>('all')
  const [openId, setOpenId] = useState<string | null>(help.faqs[0]?.id ?? null)
  const [textSize, setTextSize] = useState(() => readPreference(TEXT_KEY, 'standard'))
  const [motion, setMotion] = useState(() => readPreference(MOTION_KEY, 'system'))
  const [language] = useState('English')
  const [tutorNote, setTutorNote] = useState(false)
  const [supportTopic, setSupportTopic] = useState('Platform help')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [touched, setTouched] = useState({ subject: false, message: false })
  const [failed, setFailed] = useState(false)
  const [attempt, setAttempt] = useState(0)
  usePageTitle(help.title)

  useEffect(() => {
    document.documentElement.dataset.textSize = textSize
    document.documentElement.dataset.motion = motion
    try {
      sessionStorage.setItem(TEXT_KEY, textSize)
      sessionStorage.setItem(MOTION_KEY, motion)
    } catch {
      /* Preference stays on the page when storage is blocked. */
    }
  }, [textSize, motion])

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return help.faqs.filter((faq) => {
      if (topic !== 'all' && faq.topic !== topic) return false
      if (!needle) return true
      return `${faq.question} ${faq.answer}`.toLowerCase().includes(needle)
    })
  }, [help.faqs, query, topic])

  const subjectError = touched.subject && subject.trim() === '' ? help.subjectError : ''
  const messageError = touched.message && message.trim() === '' ? help.messageError : ''
  const canSend = subject.trim() !== '' && message.trim() !== ''

  function failSend() {
    setFailed(true)
    setAttempt((value) => value + 1)
  }

  function focusMessage() {
    messageRef.current?.focus()
  }

  return (
    <div className="page support-page">
      <p className="kicker">{help.trail}</p>
      <header className="page-intro">
        <div>
          <h1 className="display-xl">{help.title}</h1>
          <p>{help.summary}</p>
        </div>
      </header>
      <form
        className="help-search"
        role="search"
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <SearchField id="help-search" label={help.searchLabel} value={query} placeholder={help.searchPlaceholder} onChange={setQuery} />
        <Button type="submit">Search help</Button>
      </form>
      <div className="choice-row" role="group" aria-label="Help topics">
        {help.topics.map((item) => (
          <button key={item.id} type="button" className="choice" aria-pressed={topic === item.id} onClick={() => setTopic(item.id)}>
            {item.label}
          </button>
        ))}
      </div>
      <p className="visually-hidden" aria-live="polite">
        {visible.length} {visible.length === 1 ? 'answer' : 'answers'}
      </p>
      <div className="help-top">
        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="display-sm section-label">
            {help.faqHeading}
          </h2>
          {visible.length === 0 ? (
            <StatusBanner
              tone="empty"
              heading="h3"
              title={help.missTitle}
              body={help.missBody}
              action={{ label: 'Contact support', onClick: focusMessage }}
            />
          ) : (
            <div className="stack">
              {visible.map((faq) => {
                const open = openId === faq.id
                const panelId = `${faq.id}-answer`
                return (
                  <article key={faq.id} className="faq-item">
                    <h3>
                      <button
                        type="button"
                        className="faq-toggle"
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpenId(open ? null : faq.id)}
                      >
                        <span>{faq.question}</span>
                        <span aria-hidden="true">{open ? '−' : '+'}</span>
                      </button>
                    </h3>
                    {open ? (
                      <p id={panelId} className="faq-answer">
                        {faq.answer}
                      </p>
                    ) : null}
                  </article>
                )
              })}
            </div>
          )}
        </section>
        <div className="help-rail">
          <section className="comfort" aria-labelledby="comfort-heading">
            <h2 id="comfort-heading" className="display-sm">
              {help.comfortTitle}
            </h2>
            <p>{help.comfortBody}</p>
            <SelectField
              id="text-size"
              label="Text size"
              value={textSize}
              onChange={setTextSize}
              options={[
                { value: 'standard', label: 'Standard' },
                { value: 'large', label: 'Large' },
                { value: 'larger', label: 'Larger' },
              ]}
            />
            <SelectField
              id="motion"
              label="Reduce motion"
              value={motion}
              onChange={setMotion}
              options={[
                { value: 'system', label: 'Use device setting' },
                { value: 'reduce', label: 'Reduce motion' },
              ]}
            />
            <SelectField
              id="language"
              label="Reading language"
              value={language}
              onChange={() => undefined}
              options={[{ value: 'English', label: 'English' }]}
            />
            <p className="hint">{help.languageNote}</p>
          </section>
          <section className="ask-card">
            <h2 className="display-sm">{help.tutorTitle}</h2>
            <p>{help.tutorBody}</p>
            <Button variant="secondary" onClick={() => setTutorNote(true)}>
              Ask my tutor
            </Button>
            {tutorNote ? (
              <p role="status" className="inline-note">
                {help.tutorUnavailable}
              </p>
            ) : null}
          </section>
        </div>
      </div>
      <section className="support-card" aria-labelledby="support-heading">
        <div className="support-intro">
          <div>
            <h2 id="support-heading" className="display-sm">
              {help.supportTitle}
            </h2>
            <p>{help.supportBody}</p>
            <p>
              <strong>{help.safetyTitle}</strong>
            </p>
            <p className="hint">{help.safetyBody}</p>
          </div>
          <form
            className="support-fields"
            noValidate
            onSubmit={(event) => {
              event.preventDefault()
              if (!canSend) return
              failSend()
            }}
          >
            <SelectField
              id={`${formId}-topic`}
              label="Topic"
              value={supportTopic}
              onChange={setSupportTopic}
              options={[
                { value: 'Platform help', label: 'Platform help' },
                { value: 'Access', label: 'Access' },
                { value: 'Navigation', label: 'Navigation' },
                { value: 'Accessibility', label: 'Accessibility' },
              ]}
            />
            <div className={subjectError ? 'field is-invalid' : 'field'}>
              <label htmlFor={`${formId}-subject`}>Subject</label>
              <input
                id={`${formId}-subject`}
                value={subject}
                placeholder="Briefly describe the issue"
                aria-invalid={subjectError ? true : undefined}
                aria-describedby={subjectError ? `${formId}-subject-error` : undefined}
                onBlur={() => setTouched((current) => ({ ...current, subject: true }))}
                onChange={(event) => setSubject(event.target.value)}
              />
              {subjectError ? (
                <p id={`${formId}-subject-error`} className="field-error">
                  {subjectError}
                </p>
              ) : null}
            </div>
            <div className={messageError ? 'field is-invalid message-field' : 'field message-field'}>
              <label htmlFor={`${formId}-message`}>Message</label>
              <textarea
                id={`${formId}-message`}
                ref={messageRef}
                value={message}
                placeholder="Tell us what happened and what you expected."
                aria-invalid={messageError ? true : undefined}
                aria-describedby={messageError ? `${formId}-message-error` : `${formId}-safety`}
                onBlur={() => setTouched((current) => ({ ...current, message: true }))}
                onChange={(event) => setMessage(event.target.value)}
              />
              {messageError ? (
                <p id={`${formId}-message-error`} className="field-error">
                  {messageError}
                </p>
              ) : null}
            </div>
            {failed ? <HelpDeliveryNote key={attempt} outcome="failed" onRetry={failSend} /> : null}
            <div className="support-actions">
              <Button type="submit" disabled={!canSend}>
                Send message
              </Button>
              <p className="hint" id={`${formId}-safety`}>
                {help.sendHint}
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
