import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { palette, textPairs } from '../styles/palette'

function luminance(hex: string) {
  const channels = [1, 3, 5].map((index) => {
    const value = parseInt(hex.slice(index, index + 2), 16) / 255
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
}

function contrast(foreground: string, background: string) {
  const [lighter, darker] = [luminance(foreground), luminance(background)].sort((a, b) => b - a)
  return (lighter + 0.05) / (darker + 0.05)
}

const css = ['tokens.css', 'global.css', 'components.css', 'screens.css']
  .map((file) => readFileSync(resolve('src/styles', file), 'utf8'))
  .join('\n')

describe('text contrast', () => {
  it('keeps text pairs at WCAG AA', () => {
    for (const [foreground, background] of textPairs) {
      expect(contrast(foreground, background), `${foreground} on ${background}`).toBeGreaterThanOrEqual(4.5)
    }
  })

  it('does not use the muted swatch as text', () => {
    expect(css).not.toMatch(/color:\s*var\(--muted\)/)
    const foregrounds: string[] = textPairs.map(([foreground]) => foreground)
    expect(foregrounds).not.toContain(palette.muted)
  })

  it('fills progress with teal rather than low-contrast gold', () => {
    expect(css).toMatch(/\.meter-fill\s*\{[^}]*background:\s*var\(--teal\)/)
  })
})
