import { chromium } from 'playwright-core'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const base = 'http://127.0.0.1:5173'
const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const shots = new URL('../test-results/', import.meta.url)
const shot = (name) => fileURLToPath(new URL(name, shots))

const routes = [
  ['/learning', 'A clearer picture of what you know.'],
  ['/learning/forces-and-motion/diagnostic', 'What does constant speed tell us?'],
  ['/learning/forces-and-motion/report', 'A strong start. One idea to strengthen.'],
  ['/learning/forces-and-motion/practice', 'Keep moving. Keep forces balanced.'],
  ['/learning/forces-and-motion/check', 'You used the idea in a different situation.'],
  ['/learning/history', 'Your learning, in view.'],
  ['/resources', 'Find a useful next step.'],
  ['/help', 'A little help, when you need it.'],
  ['/tutor', 'Teach the pattern, not the score.'],
  ['/tutor/assignments/balance-while-moving', 'One focused activity.'],
]

const browser = await chromium.launch({ executablePath: edge, headless: true })
const page = await browser.newPage()
const failures = []

function check(name, ok, detail) {
  if (!ok) failures.push(`${name}: ${detail}`)
  else console.log(`ok ${name}`)
}

await mkdir(shots, { recursive: true })

for (const width of [1280, 834, 390]) {
  await page.setViewportSize({ width, height: 900 })
  for (const [path, heading] of routes) {
    await page.goto(base + path, { waitUntil: 'networkidle' })
    const text = await page.locator('h1').first().innerText()
    check(`${width} ${path}`, text.includes(heading), `heading was ${JSON.stringify(text)}`)
  }
  await page.goto(base + '/learning', { waitUntil: 'networkidle' })
  await page.screenshot({ path: shot(`learning-${width}.png`), fullPage: true })
}

await page.setViewportSize({ width: 1280, height: 900 })
await page.goto(base + '/learning/forces-and-motion/diagnostic')
const continueButton = page.getByRole('button', { name: 'Continue' })
check('continue starts disabled', await continueButton.isDisabled(), 'continue was enabled')
await page.getByRole('radio', { name: /I'm not sure/i }).click()
check('unsure selected', await page.getByRole('radio', { name: /I'm not sure/i }).isChecked(), 'not checked')
check('continue enables', await continueButton.isEnabled(), 'still disabled')
await page.screenshot({ path: shot('diagnostic-selected.png'), fullPage: true })

await page.goto(base + '/learning/forces-and-motion/diagnostic?offline=1')
await page.getByRole('radio', { name: /net force is zero/i }).click()
const alert = page.getByRole('alert')
await alert.waitFor()
check('offline banner', (await alert.innerText()).includes('Not connected'), await alert.innerText())
check('selection kept', await page.getByRole('radio', { name: /net force is zero/i }).isChecked(), 'selection cleared')
await page.getByRole('button', { name: 'Try again' }).focus()
check('try again focus', await page.evaluate(() => document.activeElement?.textContent?.includes('Try again')), 'focus missed')

await page.setViewportSize({ width: 390, height: 800 })
await page.goto(base + '/learning')
const menu = page.getByRole('button', { name: 'Menu' })
await menu.focus()
await page.keyboard.press('Enter')
const dialog = page.getByRole('dialog', { name: 'Menu' })
await dialog.waitFor()
check('menu opens from keyboard', await dialog.isVisible(), 'dialog hidden')
await page.keyboard.press('Escape')
check('menu closes on escape', await dialog.isHidden(), 'dialog stayed open')
check('focus returns', await page.evaluate(() => document.activeElement?.textContent?.includes('Menu')), 'focus did not return')

await page.setViewportSize({ width: 834, height: 900 })
await page.goto(base + '/tutor/assignments/balance-while-moving')
check('learner table', await page.getByRole('table').isVisible(), 'table missing')
check('workflow copy', (await page.locator('body').innerText()).includes('not a mastery label'), 'missing workflow sentence')
await page.screenshot({ path: shot('assignment-834.png'), fullPage: true })

await page.setViewportSize({ width: 390, height: 900 })
await page.goto(base + '/learning/forces-and-motion/report')
const body = await page.locator('body').innerText()
const nextAt = body.indexOf("Motion isn't always")
const evidenceAt = body.indexOf('What your responses show')
check('mobile report order', nextAt !== -1 && evidenceAt !== -1 && nextAt < evidenceAt, `next ${nextAt} evidence ${evidenceAt}`)
await page.screenshot({ path: shot('report-390.png'), fullPage: true })

await page.setViewportSize({ width: 1280, height: 900 })
await page.goto(base + '/tutor')
await page.screenshot({ path: shot('tutor-1280.png'), fullPage: true })
await page.goto(base + '/learning/forces-and-motion/practice')
await page.screenshot({ path: shot('practice-1280.png'), fullPage: true })
await page.goto(base + '/learning/forces-and-motion/check')
await page.screenshot({ path: shot('transfer-1280.png'), fullPage: true })
await page.goto(base + '/learning/forces-and-motion/report')
await page.screenshot({ path: shot('report-1280.png'), fullPage: true })

await browser.close()

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}
console.log('browser check passed')
