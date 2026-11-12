import { getTransfer } from '../api/learningClient'
import { Breadcrumb } from '../components/Breadcrumb'
import { ButtonLink } from '../components/Button'
import { MilestoneBanner } from '../components/MilestoneBanner'
import { Pathway } from '../components/Pathway'
import { usePageTitle } from '../components/usePageTitle'
import { paths } from './paths'

export function TransferCheck() {
  const transfer = getTransfer()
  usePageTitle(transfer.title)

  return (
    <div className="page">
      <Breadcrumb
        items={[
          { label: 'My learning', to: paths.learning },
          { label: 'Forces & motion' },
          { label: 'New-context check' },
        ]}
      />
      <MilestoneBanner kicker={transfer.kicker} title={transfer.title} detail={transfer.detail} />
      <Pathway steps={transfer.steps} variant="status" />
      <div className="transfer-layout">
        <article className="situation">
          <p className="kicker">{transfer.situationKicker}</p>
          <h2 className="display-sm">{transfer.situationTitle}</h2>
          <div className="situation-grid">
            <figure className="lift">
              <p>
                <span aria-hidden="true">↑ </span>Cable force
              </p>
              <div className="lift-body">Lift</div>
              <p>
                <span aria-hidden="true">↓ </span>Weight
              </p>
              <figcaption>Equal in size. Opposite directions.</figcaption>
            </figure>
            <div>
              <p>{transfer.question}</p>
              <p>{transfer.reasoning}</p>
            </div>
          </div>
          <p className="observed-choice">
            <span className="answer-marker" aria-hidden="true" />
            {transfer.choice}
          </p>
          <p className="kicker">{transfer.observed}</p>
          <p className="evidence-detail">{transfer.limit}</p>
        </article>
        <section className="next-panel">
          <p className="kicker">{transfer.nextKicker}</p>
          <h2 className="display-md">{transfer.nextTitle}</h2>
          <p>{transfer.nextBody}</p>
          <ol className="next-list">
            {transfer.timeline.map((item) => (
              <li key={item.index}>
                <span className="timeline-index">{item.index}</span>
                <span>
                  <strong>{item.when}</strong>
                  <span className="step-detail display-break">{item.detail}</span>
                </span>
              </li>
            ))}
          </ol>
          <ButtonLink className="btn-block" to={paths.learning}>
            Back to my learning
          </ButtonLink>
          <ButtonLink className="btn-block" variant="secondary" to={paths.reviewActivity}>
            Review this activity
          </ButtonLink>
        </section>
      </div>
    </div>
  )
}
