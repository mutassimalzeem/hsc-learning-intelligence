import { useId } from 'react'

export type AnswerChoice = {
  id: string
  marker: string
  label: string
}

export function AnswerOptions({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string
  options: AnswerChoice[]
  value: string | null
  onChange: (id: string) => void
}) {
  const legendId = useId()
  const tabIndexFor = (id: string, index: number) => {
    if (value) return value === id ? 0 : -1
    return index === 0 ? 0 : -1
  }

  function move(index: number, delta: number) {
    const next = options[(index + delta + options.length) % options.length]
    onChange(next.id)
    requestAnimationFrame(() => {
      document.getElementById(`answer-${next.id}`)?.focus()
    })
  }

  return (
    <div>
      <p id={legendId} className="hint">
        {legend}
      </p>
      <div role="radiogroup" aria-labelledby={legendId} className="answers">
      {options.map((option, index) => {
        const selected = value === option.id
        return (
          <button
            key={option.id}
            id={`answer-${option.id}`}
            type="button"
            role="radio"
            aria-checked={selected}
            tabIndex={tabIndexFor(option.id, index)}
            className="answer"
            onClick={() => onChange(option.id)}
            onKeyDown={(event) => {
              if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                event.preventDefault()
                move(index, 1)
              } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                event.preventDefault()
                move(index, -1)
              } else if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault()
                onChange(option.id)
              }
            }}
          >
            <span className="answer-marker" aria-hidden="true" />
            <span>
              {option.marker} {option.label}
            </span>
          </button>
        )
      })}
      </div>
    </div>
  )
}
