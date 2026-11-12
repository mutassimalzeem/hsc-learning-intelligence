export const PRIVACY_THRESHOLD = 5

export function patternsForDisplay<T extends { responses: number }>(patterns: T[]) {
  const visible = patterns.filter((pattern) => pattern.responses >= PRIVACY_THRESHOLD)
  return {
    visible,
    withheldCount: patterns.length - visible.length,
  }
}
