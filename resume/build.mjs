// Renders resume/cv.html to public/resume.pdf with a locally installed
// Chrome or Edge in headless mode. Set CHROME_PATH to use a different browser.
// Usage: npm run cv

import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, statSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'

const source = fileURLToPath(new URL('./cv.html', import.meta.url))
const output = fileURLToPath(new URL('../public/resume.pdf', import.meta.url))

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean)

const browser = candidates.find((path) => existsSync(path))
if (!browser) {
  console.error('No Chrome or Edge found. Set CHROME_PATH to a Chromium based browser.')
  process.exit(1)
}

const headless = ['--headless=new', '--disable-gpu', '--virtual-time-budget=3000']
const url = pathToFileURL(source).href

execFileSync(browser, [...headless, '--no-pdf-header-footer', `--print-to-pdf=${output}`, url], {
  stdio: 'pipe',
})

// The page box clips anything past one A4 sheet, so ask the page itself
// how far its content runs over (cv.html writes it to data-overflow).
const dom = execFileSync(browser, [...headless, '--window-size=794,1123', '--dump-dom', url], {
  stdio: 'pipe',
}).toString()
const overflow = Number(dom.match(/data-overflow="(-?\d+)"/)?.[1] ?? NaN)

const pages = (readFileSync(output, 'latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length
console.log(`Wrote public/resume.pdf (${Math.round(statSync(output).size / 1024)} KB, ${pages} page${pages === 1 ? '' : 's'})`)
if (pages !== 1) console.warn('Warning: the CV should fit on one page.')
if (Number.isNaN(overflow)) console.warn('Warning: could not measure whether the content fits the page.')
else if (overflow > 0) console.warn(`Warning: content runs ${overflow}px past the page and is cut off. Trim the copy in resume/cv.html.`)

const todos = (readFileSync(source, 'utf8').match(/<mark class="todo">/g) ?? []).length
if (todos) console.warn(`Warning: ${todos} placeholder(s) still marked in resume/cv.html.`)
