import { CheckIcon } from './CheckIcon'

export type PathwayStep = {
  id: string
  index: string
  kicker: string
  title: string
  detail: string
  state: 'current' | 'upcoming' | 'complete'
}

export function Pathway({
  steps,
  variant,
}: {
  steps: PathwayStep[]
  variant: 'cards' | 'status' | 'rail'
}) {
  if (variant === 'cards') {
    return (
      <ol className="pathway-cards">
        {steps.map((step) => (
          <li key={step.id} className={`is-${step.state}`}>
            <StepMark step={step} />
            <p className="step-kicker">{step.kicker}</p>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </li>
        ))}
      </ol>
    )
  }

  const className = variant === 'status' ? 'pathway-status' : 'pathway-rail'
  return (
    <ol className={className} aria-label="Learning path">
      {steps.map((step) => (
        <li key={step.id} className={`is-${step.state}`}>
          <StepMark step={step} />
          <span>
            <span className="step-name">{step.title}</span>
            <span className="step-detail">{step.detail}</span>
          </span>
        </li>
      ))}
    </ol>
  )
}

function StepMark({ step }: { step: PathwayStep }) {
  if (step.state === 'complete') {
    return (
      <span className="step-check">
        <CheckIcon />
        <span className="visually-hidden">Complete</span>
      </span>
    )
  }
  return <span className="step-index">{step.index}</span>
}
