import { StatusBanner } from '../components/StatusBanner'
import { usePageTitle } from '../components/usePageTitle'
import { paths } from './paths'

export function Unavailable({ space }: { space: 'student' | 'tutor' }) {
  usePageTitle('Screen not in the approved design')
  const back = space === 'student' ? paths.learning : paths.tutor
  const label = space === 'student' ? 'Back to my learning' : 'Back to cohort overview'

  return (
    <div className="page">
      <StatusBanner
        tone="empty"
        heading="h1"
        title="This screen is not in the approved design."
        body="This destination is in the navigation. No approved screen was exported for it."
        action={{ to: back, label }}
      />
    </div>
  )
}
