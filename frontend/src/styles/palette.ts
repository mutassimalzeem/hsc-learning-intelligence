/** Working UI colors sampled from the approved foundations board. */
export const palette = {
  canvas: '#EFF4F8',
  sage: '#C5D0CF',
  muted: '#A1A19C',
  warm: '#706255',
  teal: '#273E41',
  tealEdge: '#142226',
  ink: '#020101',
  white: '#FFFFFF',
  sand: '#EAE5DE',
  errorSurface: '#FBEEEA',
  successSurface: '#DDEAE2',
  successText: '#35634F',
  gold: '#F0D49D',
} as const

/** Foreground/background pairs used for text. Muted is intentionally absent. */
export const textPairs = [
  [palette.ink, palette.canvas],
  [palette.teal, palette.canvas],
  [palette.white, palette.teal],
  [palette.warm, palette.canvas],
  [palette.gold, palette.teal],
  [palette.successText, palette.successSurface],
  [palette.successText, palette.canvas],
  [palette.ink, palette.white],
  [palette.teal, palette.white],
  [palette.teal, palette.sage],
  [palette.ink, palette.sand],
  [palette.teal, palette.sand],
  [palette.warm, palette.sand],
  [palette.ink, palette.sage],
  [palette.white, palette.ink],
  [palette.ink, palette.successSurface],
  [palette.teal, palette.successSurface],
  [palette.ink, palette.errorSurface],
] as const
