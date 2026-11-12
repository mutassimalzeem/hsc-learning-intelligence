import { getAssignment } from '../api/learningClient'
import trainUrl from '../assets/train.png'
import { CheckIcon } from '../components/CheckIcon'
import { Breadcrumb } from '../components/Breadcrumb'
import { ButtonLink } from '../components/Button'
import { ProgressMeter } from '../components/ProgressMeter'
import { StatusBanner } from '../components/StatusBanner'
import { usePageTitle } from '../components/usePageTitle'
import { paths } from './paths'

export function AssignmentProgress() {
  const assignment = getAssignment()
  usePageTitle(`${assignment.titleLead} ${assignment.titleRest}`)

  return (
    <div className="page">
      <Breadcrumb items={[{ label: 'Tutor space' }, { label: 'Year 9A' }]} />
      <div className="assignment-head">
        <h1 className="display-lg">
          {assignment.titleLead}
          <span className="display-break">{assignment.titleRest}</span>
        </h1>
        <img src={trainUrl} alt="" width={363} height={103} />
      </div>
      <StatusBanner tone="success" title={assignment.assigned} body={assignment.assignedDetail} />
      <section className="completion-card">
        <div className="completion-top">
          <p>
            {assignment.complete} of {assignment.total} practice activities complete
          </p>
          <p>{assignment.notStarted} not started</p>
        </div>
        <ProgressMeter
          value={assignment.complete}
          max={assignment.total}
          label={`${assignment.complete} of ${assignment.total} practice activities complete`}
          hideText
        />
        <p className="workflow-note">{assignment.workflow}</p>
      </section>
      <div className="section-row">
        <h2 className="display-sm">Assigned learners</h2>
        <p className="section-note">Authorized tutor view</p>
      </div>
      <div className="table-scroll" tabIndex={0} aria-label="Assigned learners, scroll horizontally if the table is wider than the screen">
        <table className="learner-table">
          <caption className="visually-hidden">Practice status for the example cohort</caption>
          <thead>
            <tr>
              <th scope="col">Student</th>
              <th scope="col">Practice</th>
              <th scope="col">Follow-up</th>
            </tr>
          </thead>
          <tbody>
            {assignment.learners.map((learner) => (
              <tr key={learner.name}>
                <th scope="row">{learner.name}</th>
                <td>
                  {learner.practice === 'Complete' ? (
                    <span className="chip chip-complete">
                      <CheckIcon />
                      Complete
                    </span>
                  ) : (
                    <span className="chip chip-pending">Not started</span>
                  )}
                </td>
                <td>
                  {learner.followUp === 'View evidence' ? (
                    <ButtonLink variant="secondary" to={paths.evidence}>
                      View evidence
                      <span className="visually-hidden"> for {learner.name}</span>
                    </ButtonLink>
                  ) : (
                    learner.followUp
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="assignment-actions">
        <ButtonLink to={paths.completions}>Review {assignment.complete} completions</ButtonLink>
        <ButtonLink variant="secondary" to={paths.reminder}>
          Send reminder
        </ButtonLink>
      </div>
      <p className="evidence-detail">{assignment.privacy}</p>
    </div>
  )
}
