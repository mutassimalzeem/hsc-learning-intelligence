import { getReport } from '../api/learningClient'
import trainUrl from '../assets/train.png'
import { Breadcrumb } from '../components/Breadcrumb'
import { ButtonLink } from '../components/Button'
import { EvidenceList } from '../components/EvidenceList'
import { MilestoneBanner } from '../components/MilestoneBanner'
import { Pathway } from '../components/Pathway'
import { useMediaQuery } from '../components/useMediaQuery'
import { usePageTitle } from '../components/usePageTitle'
import { paths } from './paths'

export function EvidenceReport() {
  const report = getReport()
  const narrow = useMediaQuery('(max-width: 960px)')
  usePageTitle(report.title)

  const next = (
    <section className="next-card">
      <p className="kicker">{report.nextKicker}</p>
      <img src={trainUrl} alt="" width={363} height={103} />
      <h2 className="display-md">{report.nextTitle}</h2>
      <p>{report.nextMeta}</p>
      <h3 className="display-sm">{report.nextWhyTitle}</h3>
      <p>{report.nextWhy}</p>
      <ButtonLink className="btn-block" to={paths.practice}>
        Start focused practice
      </ButtonLink>
      <ButtonLink className="btn-block" variant="secondary" to={paths.responses}>
        Review my responses
      </ButtonLink>
      <p className="hint">{report.nextAfter}</p>
    </section>
  )

  const evidence = (
    <div className="stack">
      {narrow ? (
        <>
          <h2 className="display-sm">{report.observedHeading}</h2>
          <p>{report.mobileIntro}</p>
        </>
      ) : null}
      <EvidenceList items={report.evidence} kicker={report.observedKicker} />
      <aside className="hypothesis">
        <p className="kicker">{report.hypothesisKicker}</p>
        <p>{report.hypothesis}</p>
      </aside>
      <p className="evidence-detail">{report.evidenceDetail}</p>
      {narrow ? <p className="hint">{report.privacy}</p> : null}
    </div>
  )

  return (
    <div className="page">
      <Breadcrumb
        items={[
          { label: 'My learning', to: paths.learning },
          { label: 'Forces & motion' },
          { label: 'Your starting point' },
        ]}
      />
      <MilestoneBanner kicker={report.kicker} title={report.title} detail={report.detail} />
      <Pathway steps={report.steps} variant="status" />
      {narrow ? (
        <div className="stack">
          {next}
          {evidence}
        </div>
      ) : (
        <div className="report-grid">
          {evidence}
          {next}
        </div>
      )}
    </div>
  )
}
