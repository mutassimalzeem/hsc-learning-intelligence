# Repository handoff

Snapshot: 18 Nov 2026. Evidence labels follow the [Phase 0 plan](docs/PHASE_0_EXECUTION_PLAN.md).

## Git baseline

**Verified repository fact:** local branch `docs/reconcile-project-state`, based on `0c62587` (`Merge pull request #3 from nubay3t/Tahsin/Cursor_work`). After `git fetch origin`, `git rev-list --left-right --count main...origin/main` returned `0 0`. This is a base-commit snapshot; documentation edits are uncommitted. The pre-existing `.gitignore` addition `*.gdoc` belongs to the user and is excluded from this task.

Git history records diagnostic work through merges #1 (`2c676b7`) and #2 (`7d424e9`), and frontend work through #3 (`0c62587`). Frontend and backend files are tracked in main; earlier claims that they were absent or untracked were stale. No commit, push or PR is authorized for this documentation task.

Repository visibility was independently checked through GitHub metadata on 18 Nov 2026: `private: false`, `visibility: public`. The user explicitly intends to keep it public for now. Do not publish sensitive information or infer visibility from package.json's `private` field.

## Implemented frontend

**Verified repository fact:** Vite, React, TypeScript and React Router client in `frontend/`; Vitest, Testing Library, jsdom and playwright-core are declared development dependencies. `package.json` defines dev, build, preview and test scripts. Build runs TypeScript checking and Vite. Shared components include shell/header/footer, buttons, fields, status banners, evidence lists, progress and pathway displays.

| Routes | Current behavior |
| --- | --- |
| `/learning` | Fixture introduction |
| `/learning/forces-and-motion/diagnostic` | One question, selection gating and simulated save/offline retry; not a multi-question assessment |
| `/learning/forces-and-motion/report`, `/practice`, `/check` under the same learning topic | Fixture report, worked practice and transfer result; no inference or mastery calculation |
| `/learning/history` | Local fixture search/filter and expandable evidence |
| `/resources`, `/help` | Fixture resource search and FAQ; resource text, tutor messaging and support delivery are not connected |
| `/tutor`, `/tutor/assignments/balance-while-moving` | Example cohort patterns and static assignment progress |

Exact route definitions are in `frontend/src/routes/paths.ts` and `App.tsx`. Secondary student responses/revisit/review-activity and tutor resources/help/recipients/preview/completions/reminders/evidence routes render `Unavailable`. Root and unknown paths redirect to learning. Open `/tutor` directly for the tutor shell.

`learningClient.ts` reads `exampleLearning.ts`; `saveResponse` does not persist. `privacy.ts` hides fixture patterns below five responses, but raw fixtures are shipped to the client. This is not a security boundary. Diagnostic Continue can navigate to the fixture report after a save error. Help comfort settings use sessionStorage; there is no account or session authorization.

## Backend prototype and limits

**Verified repository fact:** three Python source/test files: `backend/app/domain/diagnosis.py`, `sample_data.py`, and `backend/tests/test_diagnosis.py`. Dataclasses describe items, attempts and results. `diagnose` groups mapped answers, counts distinct question IDs, and emits `insufficient_evidence`, `mixed_evidence` or `pattern_supported_for_review`. Defaults of two questions and ratio 0.67 are prototype parameters, not validated diagnostic thresholds.

The ratio denominator is distinct questions with mapped misconception evidence for the concept, not all attempted questions. Unknown items and unmapped answers are ignored. No result is not proof of mastery or absence of a gap. Repeated conflicting answers and threshold validity need later evaluation. `sample_data.py` uses a bare `from diagnosis` import; it is not wired into an application entry point.

No FastAPI app, API endpoints, database integration, migrations, authentication, server-side authorization, consent service, frontend/backend integration or LLM integration exists. Architecture and data-model documents are proposals. No Docker setup or GitHub Actions workflow is tracked.

## Test inventory and this task's results

**Verified repository fact:** three backend test functions cover same-hypothesis support, one-question insufficiency and unmapped answers. They do not establish diagnostic validity, mixed-evidence correctness, calibration or security.

Frontend has five test files with 21 declared cases: button/banner states, contrast, fixture privacy threshold, student/tutor copy and interactions, supporting-page navigation/filtering/help behavior. Browser checking is a separate script. These tests do not exercise a backend or prove learning outcomes.

Commands actually attempted on 18 Nov 2026:

- From root: `.\venv\Scripts\python.exe -m pytest backend/tests -q` — exit 1, `No module named pytest`.
- From `frontend/`: `npm test` — exit 1, no active Node.js version configured.

No tests passed in this task; neither suite reached test execution. No dependency installation, build or browser check was performed. Historical test claims in the previous handoff are not current validation evidence. See README for normal setup commands.

## Unresolved decisions and next tasks

**Open question:** current Bangladesh HSC board/exam cohort/syllabus and textbook edition; Mechanics sub-scope; Bangla/English/bilingual content; qualified Physics reviewer and pilot access; evidence/abstention thresholds; baseline and success thresholds; consent/retention/access policies. Existing `clearstep.`/Year 9 fixture copy does not resolve HSC branding or curriculum scope.

**Working hypothesis:** diagnosis-first feedback may improve clarity and repair. No representative student evidence, teacher approval, pilot findings or commercial validation is recorded here.

Follow the [task board](TASKS.md) and [Phase 0 execution plan](docs/PHASE_0_EXECUTION_PLAN.md): assemble a dated source register, verify syllabus, compare competitors/substitutes, collect problem evidence, draft a provisional concept map/taxonomy, evaluate diagnostic feasibility, and prepare consent/pilot metrics. Interviews are optional follow-up, not prerequisites for desk research. Qualified curriculum/content review remains a gate. Restore local test runtimes before engineering validation; do not begin broad backend implementation before the discovery gates.
