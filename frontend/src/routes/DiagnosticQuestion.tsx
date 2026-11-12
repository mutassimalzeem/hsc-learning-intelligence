import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getDiagnostic, saveResponse } from '../api/learningClient'
import { AnswerOptions } from '../components/AnswerOption'
import { Breadcrumb } from '../components/Breadcrumb'
import { Button, ButtonLink } from '../components/Button'
import { Pathway } from '../components/Pathway'
import { StatusBanner } from '../components/StatusBanner'
import { usePageTitle } from '../components/usePageTitle'
import { paths } from './paths'

type SaveState = 'idle' | 'saving' | 'saved' | 'offline'

export function DiagnosticQuestion() {
  const item = getDiagnostic()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const offline = params.get('offline') === '1'
  const [choiceId, setChoiceId] = useState<string | null>(null)
  const [saveState, setSaveState] = useState<SaveState>('idle')
  usePageTitle(item.prompt)

  async function persist(nextId: string) {
    setSaveState('saving')
    try {
      await saveResponse(nextId, { offline })
      setSaveState('saved')
    } catch {
      setSaveState('offline')
    }
  }

  async function onSelect(id: string) {
    setChoiceId(id)
    await persist(id)
  }

  async function onSaveAndLeave() {
    if (choiceId) {
      setSaveState('saving')
      try {
        await saveResponse(choiceId, { offline })
      } catch {
        setSaveState('offline')
        return
      }
    }
    navigate(paths.learning)
  }

  return (
    <div className="page">
      <div className="crumbs-row">
        <Breadcrumb
          items={[
            { label: 'My learning', to: paths.learning },
            { label: 'Forces & motion' },
            { label: 'Diagnostic' },
          ]}
        />
        <p className="save-status" role="status">
          {saveState === 'saved' ? 'Answer saved' : ''}
        </p>
      </div>
      {saveState === 'saving' ? <StatusBanner tone="saving" /> : null}
      {saveState === 'offline' ? (
        <StatusBanner tone="offline" action={{ label: 'Try again', onClick: () => { if (choiceId) void persist(choiceId) } }} />
      ) : null}
      <div className="question-layout">
        <aside aria-label="Diagnostic progress">
          <p className="display-sm">{item.section}</p>
          <p>
            Question {item.questionNumber} of {item.questionCount}
          </p>
          <ol className="segments" aria-hidden="true">
            {Array.from({ length: item.questionCount }, (_, index) => {
              const number = index + 1
              const state = number < item.questionNumber ? 'is-complete' : number === item.questionNumber ? 'is-current' : ''
              return <li key={number} className={state} />
            })}
          </ol>
          <Pathway steps={item.steps} variant="rail" />
          <div className="rail-card">
            <h2 className="display-sm">{item.reassuranceTitle}</h2>
            <p>{item.reassuranceBody}</p>
          </div>
          <div className="question-actions">
            <Button variant="secondary" onClick={() => void onSaveAndLeave()}>
              Save and leave
            </Button>
          </div>
        </aside>
        <article className="question-card">
          <p className="kicker">{item.code}</p>
          <h1 className="display-lg">{item.prompt}</h1>
          <p>{item.stem}</p>
          <div className="concept-note">
            <h2 className="display-sm">{item.conceptTitle}</h2>
            <p>{item.conceptBody}</p>
          </div>
          <AnswerOptions legend={item.legend} options={item.options} value={choiceId} onChange={(id) => void onSelect(id)} />
          <p className="hint">{item.hint}</p>
          <div className="question-actions">
            <ButtonLink variant="secondary" to={paths.learning}>
              Previous
            </ButtonLink>
            <Button disabled={choiceId === null} onClick={() => navigate(paths.report)}>
              Continue
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}
