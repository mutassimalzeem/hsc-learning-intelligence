export function ProgressMeter({
  value,
  max,
  label,
  hideText = false,
}: {
  value: number
  max: number
  label: string
  hideText?: boolean
}) {
  const width = max === 0 ? 0 : Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div className="meter">
      {hideText ? null : <span className="meter-label">{label}</span>}
      <div
        className="meter-track"
        role="meter"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={label}
      >
        <span className="meter-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}
