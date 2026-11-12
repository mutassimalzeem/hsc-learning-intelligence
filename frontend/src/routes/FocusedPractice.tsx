import { getPractice } from '../api/learningClient'
import trainUrl from '../assets/train.png'
import { ButtonLink } from '../components/Button'
import { usePageTitle } from '../components/usePageTitle'
import { paths } from './paths'

export function FocusedPractice() {
  const practice = getPractice()
  usePageTitle(practice.title)

  return (
    <div className="page">
      <div className="crumbs-row">
        <p className="kicker">{practice.trail}</p>
        <p className="hint">{practice.meta}</p>
      </div>
      <h1 className="display-lg section-heading">{practice.title}</h1>
      <div className="practice-layout panel">
        <section className="observe" aria-label="Observation">
          <p className="kicker">{practice.observeKicker}</p>
          <img src={trainUrl} alt="" width={363} height={103} />
          <p>{practice.observe}</p>
          <table className="data-table">
            <caption className="visually-hidden">
              The train's speed stays at 20 metres per second while the time changes.
            </caption>
            <tbody>
              <tr>
                <th scope="row">Time (s)</th>
                {practice.times.map((time) => (
                  <td key={time}>{time}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Speed (m/s)</th>
                {practice.speeds.map((speed, index) => (
                  <td key={`${speed}-${index}`}>{speed}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <p className="kicker">{practice.reasonKicker}</p>
          <h2 className="display-sm">{practice.question}</h2>
          <ul className="practice-options" aria-label="Comparison of the forces">
            {practice.options.map((option) => {
              const shown = option.id === practice.shownId
              return (
                <li key={option.id} className={shown ? 'answer answer-static is-shown' : 'answer answer-static'}>
                  <span className="answer-marker" aria-hidden="true" />
                  <span>
                    {option.label}
                    {shown ? <span className="visually-hidden"> Shown as the key distinction.</span> : null}
                  </span>
                </li>
              )
            })}
          </ul>
          <div className="feedback">
            <strong>{practice.feedbackTitle}</strong>
            <p>{practice.feedback}</p>
          </div>
        </section>
      </div>
      <section className="formula-band" aria-label="The relationship in symbols">
        <div>
          <p className="formula">
            <span aria-hidden="true">ΣF = ma</span>
            <span className="visually-hidden">Sigma F equals m a.</span>
          </p>
          <p>{practice.formulaCaption}</p>
        </div>
        <div>
          <h2 className="display-sm">{practice.formulaNoteTitle}</h2>
          <p>{practice.formulaNote}</p>
        </div>
      </section>
      <div className="practice-actions">
        <ButtonLink to={paths.check}>Try a new situation</ButtonLink>
        <ButtonLink variant="secondary" to={paths.revisit}>
          Revisit the idea
        </ButtonLink>
        <p className="hint">{practice.nextHint}</p>
      </div>
    </div>
  )
}
