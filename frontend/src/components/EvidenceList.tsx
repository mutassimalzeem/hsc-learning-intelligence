import { ProgressMeter } from './ProgressMeter'

export type EvidenceItem = {
  id: string
  title: string
  detail: string
  correct: number
  total: number
}

export function EvidenceList({ items, kicker }: { items: EvidenceItem[]; kicker: string }) {
  return (
    <div className="evidence-card">
      <p className="kicker">{kicker}</p>
      <ul className="evidence-list">
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
            <ProgressMeter
              value={item.correct}
              max={item.total}
              label={`${item.correct} of ${item.total} correct`}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
