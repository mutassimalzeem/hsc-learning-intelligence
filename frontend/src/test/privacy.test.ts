import { describe, expect, it } from 'vitest'
import { exampleLearning } from '../fixtures/exampleLearning'
import { patternsForDisplay, PRIVACY_THRESHOLD } from '../fixtures/privacy'

describe('privacy threshold', () => {
  it('hides groups under 5 responses and keeps the designed counts', () => {
    const { visible, withheldCount } = patternsForDisplay(exampleLearning.patterns)
    expect(visible.map((pattern) => pattern.responses)).toEqual([8, 6])
    expect(withheldCount).toBe(1)
    expect(visible.some((pattern) => pattern.responses < PRIVACY_THRESHOLD)).toBe(false)
    expect(exampleLearning.patterns.some((pattern) => pattern.title === 'Friction direction reversed')).toBe(true)
  })
})
