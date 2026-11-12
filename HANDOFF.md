# Handoff

Verified 12 Nov 2026 on local branch `Tahsin/Cursor_work`. This file describes the working tree, not only what is committed.

## 1. Project overview and architecture

**HSC Learning Intelligence** (working title) is a diagnosis-first learning product for Bangladesh HSC Science. The candidate first scope is Physics 1st Paper, Mechanics. The intended loop is Diagnose → Explain → Repair → Verify → Reassess. Branding is not final. The implemented screens use the wordmark `clearstep.` and a Year 9 science example.

**Accepted direction, not yet built as a system:** a responsive web/PWA on a modular monolith. `docs/ARCHITECTURE.md` proposes React + TypeScript, Python + FastAPI, PostgreSQL, and module boundaries for identity, curriculum, content, assessment, diagnosis, intervention, mastery, tutors, analytics, and an optional AI adapter. LLMs must not set mastery or diagnostic certainty (`DEC-006`).

**What exists in source:** a fixture-backed React client in `frontend/`. There is no backend, database, auth, API server, Docker setup, or GitHub Actions workflow. `frontend/src/api/learningClient.ts` reads `frontend/src/fixtures/exampleLearning.ts`. `saveResponse` does not persist; it resolves, or throws when `?offline=1` or `navigator.onLine === false`. Small-group tutor patterns are filtered in the client by `patternsForDisplay` (`PRIVACY_THRESHOLD = 5`) before display. The fixture comment states the copy is synthetic and is not a score, a diagnosis, or a student record.

Phase 0 discovery in `TASKS.md` is still open. `docs/MEMORY.md` in the working tree says the same. Do not treat the screens as a completed diagnostic product.

## 2. Work implemented in source

Committed `HEAD` (`a7a0f12`, same commit as `main` and `origin/main`) is documentation and AI coding rules only. Application code is untracked.

The client is `clearstep-frontend` (Vite, React 19, React Router 7, TypeScript, Vitest, Testing Library). Dev server port is 5173 (`frontend/vite.config.ts`). Entry: `frontend/src/main.tsx`. Routes: `frontend/src/App.tsx` and `frontend/src/routes/paths.ts`.

Implemented UI:

- Shared shell: skip link, header, primary nav, footer (`Shell`, `AppHeader`, `AppFooter`).
- Student learning intro, one diagnostic question, evidence report, focused practice, transfer-check result, activity history, resources, and help.
- Tutor cohort overview and one assignment-progress screen.
- Working palette and type in `frontend/src/styles/` and `frontend/src/styles/palette.ts`: canvas `#EFF4F8`, sage `#C5D0CF`, warm `#706255`, teal `#273E41`, ink `#020101`, gold `#F0D49D` for labels on teal. Muted `#A1A19C` is not used as text. Display face is Outfit 600; interface face is Inter. This matches uncommitted `DEC-007` and `docs/DESIGN.md`.
- Illustrations in use: `student.png`, `train.png`, `badge.png`.
- Client-side states that are real in the diagnostic screen: Continue stays disabled until a choice, including “I'm not sure yet”; a failed save keeps the selection and shows a retry banner. Practice and transfer screens are static worked examples. Pathway steps do not change from user progress; each route renders its own fixture.

`npm test` covers contrast pairs, the privacy threshold, button/banner states, the learning and tutor journey rules, and the three supporting pages (navigation, history details, filter empty states, resource and tutor notes, FAQ keyboard, and the support form). It does not score answers or call a server.

## 3. Pages and routes

`/` redirects to `/learning`. Any unknown path redirects to `/learning`. There is no in-app control that switches between the student shell and the tutor shell; open `/tutor` directly.

**Screens with fixture content**

| Path | Component | Behavior |
| --- | --- | --- |
| `/learning` | `LearningIntro` | Intro, path, link to the diagnostic |
| `/learning/forces-and-motion/diagnostic` | `DiagnosticQuestion` | Question 3 of 6 only. Selecting an option calls `saveResponse`. Continue goes to the report. Previous returns to `/learning` |
| `/learning/forces-and-motion/report` | `EvidenceReport` | Static evidence and hypothesis copy. “Start focused practice” is a real link. “Review my responses” is a placeholder link |
| `/learning/forces-and-motion/practice` | `FocusedPractice` | Static worked example. “Try a new situation” is a real link. “Revisit the idea” is a placeholder link |
| `/learning/forces-and-motion/check` | `TransferCheck` | Static result. “Back to my learning” is a real link. “Review this activity” is a placeholder link |
| `/learning/history` | `ActivityHistory` | Four example entries. Search, type, subject, and date range filter them. One row expands at a time. “View my activity” on Resources lands here |
| `/resources` | `Resources` | Six example resources in three groups. “Open resource” says the full text is not in this example. “View my activity” goes to history |
| `/help` | `HelpSupport` | Five questions, topic chips, and search. Text size and reduce motion are stored in `sessionStorage`. Sending a message keeps the draft and says no support service is connected |
| `/tutor` | `TutorCohort` | Two visible patterns; the 3-response pattern is withheld. “Assign to 8 students” goes to the assignment screen. Recipient review and preview are placeholder links |
| `/tutor/assignments/balance-while-moving` | `AssignmentProgress` | Static assignment table. “View evidence”, “Review completions”, and “Send reminder” are placeholder links |

**Placeholder routes**

These render `Unavailable`: heading “This screen is not in the approved design.”

- Student: `/learning/responses`, `/learning/revisit`, `/learning/review-activity`
- Tutor: `/tutor/resources`, `/tutor/help`, `/tutor/recipients`, `/tutor/preview`, `/tutor/completions`, `/tutor/reminders`, `/tutor/evidence`

Header behavior: at `max-width: 720px` every link is in the Menu dialog; at `max-width: 1024px` only primary links stay inline. Escape closes the menu and returns focus to Menu.

## 4. Remaining work and observed defects

`TASKS.md` is still the discovery board. Every Phase 0–5 item is unchecked. Nothing in the repo implements teacher validation, interviews, consent, scoring, diagnosis, mastery, persistence, authorization, or a pilot. `docs/TEST_PLAN.md` describes those future layers. They are not present.

UI work still open, verified against routes and `design-reference/assets`:

- Tutor teaching resources, tutor help, recipients, preview, completions, reminders, and individual evidence have no matching named export and no screen.
- Activity history, Resources, and Help are fixture pages. “Open resource” does not load a guide. “Ask my tutor” is not connected. A completed support form shows the failure state and keeps the draft. The “Message sent” panel exists only as a presentational component and is not what Send message shows.
- History dates are the frozen example day, 12 Nov 2026. Today, Last 7 days, and Last 30 days all include the four entries. Reading language offers English only.
- The diagnostic is one question. Continue does not walk questions 4–6, and it navigates to the report even when the save banner is showing.
- Practice does not collect an answer. The transfer screen does not collect a response.
- There is no session, account, or role check.

Observed in the current source:

- `Unavailable` still says “No approved screen was exported for it.” That remains accurate for the tutor destinations and the secondary student links that have no export.
- The Year 9A cohort button in `TutorCohort` always sets `aria-expanded={false}`. Clicking it only reveals the sentence “Only the Year 9A example cohort is in this view.”
- `frontend/scripts/browser-check.mjs` now expects the Activity history, Resources, and Help headings. It is not an npm script.
- Committed README and MEMORY on `main` still say planning only. The working-tree edits describe the fixture frontend, and they are unstaged.

## 5. Design references and unresolved decisions

There is no Figma URL in the repo. The working reference is the PNG set in `design-reference/assets` (untracked):

- `01`–`08`: diagnostic intro, question, evidence, focused practice, transfer check, tutor view, mobile evidence, tablet assignment progress. These match the implemented screens.
- `09`: foundations and interface states.
- `10`–`16`: Activity history, Resources, Help & support, and their empty, error, and success states. The student routes now follow these exports. Limits are listed in section 4.

`Tahsin/` holds local design prompts (`Figma_prompt.md`, `prompt_2.md`, `prompt_3.md`) and `Personal.md`. They are not product decisions. `docs/DESIGN.md` and `DEC-007` are the working visual rules: use the exported palette and type; keep the product title and year level unresolved.

Unresolved, and still called out in DESIGN, DECISIONS, and MEMORY:

- Wordmark `clearstep.` and the document title “Clearstep” versus the working title HSC Learning Intelligence.
- Screen copy says Year 9. The PRD says Bangladesh HSC Science. `DEC-003` still marks Physics Mechanics as provisional.
- Bangla, English, or bilingual UI is not chosen. The interface is English.
- `DEC-007` is a working-tree decision dated 12 Nov 2026. It is not on `main`. Revisit when the brand name and syllabus level are confirmed.
- Phase 0 items in `TASKS.md` remain the product gate before scoring, diagnosis, or a backend.

## 6. Changes on this branch

`Tahsin/Cursor_work` has no commits of its own. `git merge-base` with `main` is `a7a0f12` (`docs: add task templates and AI coding rules`). The branch does not show an upstream.

**Unstaged tracked edits**

- `README.md`: repository status now describes the fixture frontend.
- `docs/MEMORY.md`: current state matches that frontend and says Phase 0 is not complete.
- `docs/DESIGN.md`: visual direction now records the sampled tokens, type, wordmark, and the Year 9 / HSC conflict.
- `docs/DECISIONS.md`: adds `DEC-007`.

**Untracked**

- `frontend/` — the client, tests, and `scripts/browser-check.mjs`. `node_modules/`, `dist/`, and `test-results/` are gitignored.
- `design-reference/assets/` — the 16 PNG exports.
- `Tahsin/` — local prompts.
- `HANDOFF.md` — this file.

No commit, push, or merge was made for this handoff.

## 7. Test results

**Run in this session** from `frontend/` on 12 Nov 2026, after the three pages were in place:

- `npm test` (`vitest run` v5.1.0): 5 files, 21 tests, all passed, duration 3.65s. The added file is `src/test/supportingPages.test.tsx`. The earlier 11-test run from the same day is superseded by this one.
- `npx tsc --noEmit`: exit 0 on the final tree.
- `npm run build`: exit 0 (`tsc --noEmit` and Vite build, 65 modules).
- `node scripts/browser-check.mjs` against `http://127.0.0.1:5173`: passed. It checked the existing journeys and the three new headings at 1280, 834, and 390, plus diagnostic save, the phone menu, and the assignment table.

**Not run.** No backend, API, access-control, or diagnostic-evaluation suite exists. An earlier handoff note that build and the browser script had not been run is out of date.

## 8. Recommended next session

1. Read `README.md`, `RULES.md`, `TASKS.md`, `docs/PRD.md`, `docs/ARCHITECTURE.md`, `docs/DESIGN.md`, and this file. Inspect before editing. Keep the task to one slice.
2. Phase 0 is still open. Do not add auth, persistence, scoring, or a diagnostic engine until that gate is decided. The three student pages are fixture screens, not evidence that diagnosis works.
3. The remaining interface gap is the routes that still render `Unavailable`. They have no approved export. Leave them until a design exists.
4. Commit only when asked. The frontend, design-reference set, and this file are still untracked. A first commit needs an explicit request and a careful file list.
