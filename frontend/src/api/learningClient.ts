import { exampleLearning } from '../fixtures/exampleLearning'
import { patternsForDisplay } from '../fixtures/privacy'

const displayed = patternsForDisplay(exampleLearning.patterns)

export function getIntro() {
  return exampleLearning.intro
}

export function getDiagnostic() {
  return exampleLearning.diagnostic
}

export function getReport() {
  return exampleLearning.report
}

export function getPractice() {
  return exampleLearning.practice
}

export function getTransfer() {
  return exampleLearning.transfer
}

export function getCohort() {
  return {
    ...exampleLearning.cohort,
    patterns: displayed.visible,
    withheldCount: displayed.withheldCount,
  }
}

export function getAssignment() {
  return exampleLearning.assignment
}

export function getHistory() {
  return exampleLearning.history
}

export function getResources() {
  return exampleLearning.resources
}

export function getHelp() {
  return exampleLearning.help
}

export async function saveResponse(choiceId: string, options?: { offline?: boolean }) {
  void choiceId
  const browserOffline = typeof navigator !== 'undefined' && navigator.onLine === false
  if (options?.offline || browserOffline) {
    throw new Error('offline')
  }
}
