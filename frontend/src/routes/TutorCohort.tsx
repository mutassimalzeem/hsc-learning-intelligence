import { useState } from 'react'
import { getCohort } from '../api/learningClient'
import trainUrl from '../assets/train.png'
import { Breadcrumb } from '../components/Breadcrumb'
import { ButtonLink } from '../components/Button'
import { PrivacyNote } from '../components/PrivacyNote'
import { ProgressMeter } from '../components/ProgressMeter'
import { usePageTitle } from '../components/usePageTitle'
import { paths } from './paths'

export function TutorCohort() {
  const cohort = getCohort()
  const [cohortNote, setCohortNote] = useState(false)
  usePageTitle(cohort.title)

  return (
    <div className="page">
      <Breadcrumb items={[{ label: 'Tutor space' }, { label: 'Year 9 science' }]} />
      <div className="tutor-top">
        <h1 className="display-lg">{cohort.title}</h1>
        <div>
          <button type="button" className="cohort-button" aria-expanded={false} onClick={() => setCohortNote(true)}>
            Year 9A · {cohort.cohortSize} students
          </button>
          {cohortNote ? (
            <p role="status" className="hint">
              Only the Year 9A example cohort is in this view.
            </p>
          ) : null}
        </div>
      </div>
      <section className="summary-bar" aria-label="Cohort response summary">
        <p className="summary-stat">
          <strong>
            {cohort.responded} of {cohort.cohortSize}
          </strong>
          <span>Diagnostic responses</span>
        </p>
        <div className="summary-mid">
          <ProgressMeter
            value={cohort.responded}
            max={cohort.cohortSize}
            label={`${cohort.responded} of ${cohort.cohortSize} diagnostic responses`}
            hideText
          />
          <p className="section-note">{cohort.awaiting} students are awaiting a diagnostic response.</p>
        </div>
        <p className="summary-stat">
          <strong>{cohort.matched} students</strong>
          <span>Match the selected activity</span>
        </p>
      </section>
      <div className="section-row">
        <h2 className="display-sm">Patterns worth a closer look</h2>
        <p className="section-note">Observed responses · Patterns may overlap</p>
      </div>
      <div className="pattern-grid">
        {cohort.patterns.map((pattern) => (
          <article key={pattern.id} className={pattern.tone === 'selected' ? 'pattern-card is-selected' : 'pattern-card'}>
            <p className="kicker">{pattern.kicker}</p>
            <h3 className="display-sm">{pattern.title}</h3>
            <p>{pattern.detail}</p>
            <div className="pattern-meter">
              <p>
                {pattern.responses} of {pattern.total} responses
              </p>
              <p className="pattern-percent">{pattern.percentLabel}</p>
              <ProgressMeter
                value={pattern.responses}
                max={pattern.total}
                label={`${pattern.responses} of ${pattern.total} responses`}
                hideText
              />
            </div>
          </article>
        ))}
      </div>
      <div className="section-row">
        <p className="section-note">Other response patterns · Withheld</p>
        <p className="section-note">Groups with fewer than 5 responses are not displayed.</p>
      </div>
      <section className="tutor-action">
        <img className="action-art" src={trainUrl} alt="" width={363} height={103} />
        <div>
          <p className="kicker">Selected teaching action</p>
          <h3 className="display-md">{cohort.actionTitle}</h3>
          <p>{cohort.actionBody}</p>
          <p className="action-note">{cohort.actionLimit}</p>
          <p className="hint">{cohort.actionMeta}</p>
        </div>
        <div className="action-buttons">
          <p>
            <strong>Recipients · {cohort.matched} matched students</strong>
          </p>
          <p className="hint">{cohort.due}</p>
          <ButtonLink variant="secondary" to={paths.recipients}>
            Review recipients
          </ButtonLink>
          <ButtonLink to={paths.assignment}>Assign to {cohort.matched} students</ButtonLink>
          <ButtonLink variant="secondary" to={paths.preview}>
            Preview activity
          </ButtonLink>
          <p className="hint">{cohort.unsent}</p>
        </div>
      </section>
      <div className="section-heading">
        <PrivacyNote kicker="Privacy threshold · 5 responses">
          Smaller groups are withheld. Individual evidence is available only for students assigned to you.
        </PrivacyNote>
      </div>
    </div>
  )
}
