import { getIntro } from '../api/learningClient'
import { ButtonLink } from '../components/Button'
import { Breadcrumb } from '../components/Breadcrumb'
import { Pathway } from '../components/Pathway'
import { usePageTitle } from '../components/usePageTitle'
import studentUrl from '../assets/student.png'
import { paths } from './paths'

export function LearningIntro() {
  const intro = getIntro()
  usePageTitle(intro.title)

  return (
    <div className="page">
      <Breadcrumb
        items={[
          { label: 'My learning', to: paths.learning },
          { label: 'Science' },
          { label: 'Year 9' },
        ]}
      />
      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">{intro.eyebrow}</p>
          <h1 className="display-xl">{intro.title}</h1>
          <p>{intro.summary}</p>
          <ul className="fact-list">
            {intro.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <ButtonLink to={paths.diagnostic}>Start diagnostic</ButtonLink>
            <p>Pause and return anytime</p>
          </div>
        </div>
        <img src={studentUrl} alt="" width={281} height={259} />
        <p className="hero-topic">{intro.topic}</p>
      </section>
      <h2 className="display-sm section-heading">Your learning path</h2>
      <Pathway steps={intro.steps} variant="cards" />
      <div className="reassurance">
        {intro.notes.map((note) => (
          <section key={note.title}>
            <h2 className="display-sm">{note.title}</h2>
            <p>{note.body}</p>
          </section>
        ))}
      </div>
    </div>
  )
}
