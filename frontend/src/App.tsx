import { createBrowserRouter, Navigate, RouterProvider, type RouteObject } from 'react-router-dom'
import { Shell } from './components/Shell'
import { AssignmentProgress } from './routes/AssignmentProgress'
import { DiagnosticQuestion } from './routes/DiagnosticQuestion'
import { EvidenceReport } from './routes/EvidenceReport'
import { FocusedPractice } from './routes/FocusedPractice'
import { HelpSupport } from './routes/HelpSupport'
import { LearningIntro } from './routes/LearningIntro'
import { ActivityHistory } from './routes/ActivityHistory'
import { Resources } from './routes/Resources'
import { paths } from './routes/paths'
import { TransferCheck } from './routes/TransferCheck'
import { TutorCohort } from './routes/TutorCohort'
import { Unavailable } from './routes/Unavailable'

export const appRoutes: RouteObject[] = [
  { path: '/', element: <Navigate to={paths.learning} replace /> },
  {
    element: <Shell space="student" />,
    children: [
      { path: paths.learning, element: <LearningIntro /> },
      { path: paths.diagnostic, element: <DiagnosticQuestion /> },
      { path: paths.report, element: <EvidenceReport /> },
      { path: paths.practice, element: <FocusedPractice /> },
      { path: paths.check, element: <TransferCheck /> },
      { path: paths.history, element: <ActivityHistory /> },
      { path: paths.resources, element: <Resources /> },
      { path: paths.help, element: <HelpSupport /> },
      { path: paths.responses, element: <Unavailable space="student" /> },
      { path: paths.revisit, element: <Unavailable space="student" /> },
      { path: paths.reviewActivity, element: <Unavailable space="student" /> },
    ],
  },
  {
    element: <Shell space="tutor" />,
    children: [
      { path: paths.tutor, element: <TutorCohort /> },
      {
        path: paths.assignment,
        element: <AssignmentProgress />,
        handle: { footerNote: 'Example cohort · Assignment progress' },
      },
      { path: paths.teachingResources, element: <Unavailable space="tutor" /> },
      { path: paths.tutorHelp, element: <Unavailable space="tutor" /> },
      { path: paths.recipients, element: <Unavailable space="tutor" /> },
      { path: paths.preview, element: <Unavailable space="tutor" /> },
      { path: paths.completions, element: <Unavailable space="tutor" /> },
      { path: paths.reminder, element: <Unavailable space="tutor" /> },
      { path: paths.evidence, element: <Unavailable space="tutor" /> },
    ],
  },
  { path: '*', element: <Navigate to={paths.learning} replace /> },
]

const router = createBrowserRouter(appRoutes)

export function App() {
  return <RouterProvider router={router} />
}
