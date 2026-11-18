# HSC Learning Intelligence

> Working title. Branding is not final.  
> **Don't just practise. Understand.**

A diagnosis-first learning platform for Bangladesh HSC Science students, beginning with a validated, teacher-reviewed subject scope.

## Product loop

**Diagnose → Explain → Repair → Verify → Reassess**

The product helps students understand why they make mistakes. It gathers evidence before suggesting a misconception, recommends targeted repair, verifies learning with a different task, and checks retention later.

## Working direction

- Initial market: Bangladesh HSC Science.
- First subject candidate: Physics 1st Paper — Mechanics (pending syllabus and teacher validation).
- Differentiator hypothesis: explainable concept/misconception diagnosis, not a generic question bank or chatbot.
- Business model hypothesis: hybrid B2C student subscriptions + B2B tutor/coaching-centre plans.
- MVP surface: responsive web/PWA.
- Stack direction: React + TypeScript, Python + FastAPI, PostgreSQL, modular monolith.
- LLMs may assist explanations; they must not independently determine mastery.

## Planned MVP

Student diagnostic, evidence-linked concept-gap report, targeted intervention, independent mastery verification, delayed reassessment; tutor batch-level gap summaries and remediation assignment.

Out of scope initially: full video library, huge question bank, general chatbot, live classes, social feed, leaderboards, multiple subjects, native mobile apps.

## Documentation

- [Product requirements](docs/PRD.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Design](docs/DESIGN.md)
- [Diagnostic engine](docs/DIAGNOSTIC_ENGINE.md)
- [Curriculum and content](docs/CURRICULUM_AND_CONTENT.md)
- [Data model](docs/DATA_MODEL.md)
- [API contracts](docs/API_CONTRACTS.md)
- [AI/LLM policy](docs/AI_AND_LLM_POLICY.md)
- [Market validation](docs/MARKET_AND_VALIDATION.md)
- [Privacy and student safety](docs/PRIVACY_AND_STUDENT_SAFETY.md)
- [Security](docs/SECURITY.md)
- [Test plan](docs/TEST_PLAN.md)
- [Roadmap](docs/ROADMAP.md)
- [Development workflow](docs/DEVELOPMENT_WORKFLOW.md)
- [Decisions](docs/DECISIONS.md) · [Memory](docs/MEMORY.md) · [Tasks](TASKS.md)
- [AI coding rules](RULES.md) and [.cursor/rules](.cursor/rules/general.mdc)

## Repository status

**Verified repository fact (18 Nov 2026):** this is a fixture-backed interface and a separate Python diagnostic proof of concept, not a functioning learning product.

- **Implemented:** React + TypeScript student intro, one diagnostic question, example report/practice/transfer result, activity history, resources and help; tutor cohort and assignment-progress screens. Shared navigation, filtering and local interaction states exist.
- **Partially implemented:** `frontend/src/api/learningClient.ts` reads synthetic fixtures. Answer saving is a no-op with an offline error simulation. Practice, transfer and assignment outcomes are examples. Several secondary student and tutor routes render `Unavailable`. Small-group filtering is client-side demonstration code, not authorization.
- **Implemented prototype:** `backend/app/domain/diagnosis.py` groups mapped answer patterns by concept and hypothesis, deduplicates supporting question IDs and returns review statuses. Its three unit tests cover two supporting questions, insufficient evidence and unmapped answers. It is not teacher-validated or connected to the frontend.
- **Planned:** FastAPI/API integration, database/schema/migrations, persistence, authentication, server-side authorization, consent, real assessment sessions, evaluated diagnosis, mastery and reassessment. No functioning backend service or CI workflow is present.
- **Unresolved:** board/syllabus, Mechanics scope, language, brand/year-level mismatch, evidence thresholds and pilot access. Phase 0 discovery remains open; see the [execution plan](docs/PHASE_0_EXECUTION_PLAN.md) and [handoff](HANDOFF.md).

## Local development and checks

Use a supported installed Node.js runtime and Python 3.10+ (the prototype uses modern type annotations). Dependency installation is local setup, not evidence that tests passed.

Frontend, from `frontend/`:

```powershell
npm ci
npm run dev
npm test
npm run build
```

Vite uses port 5173. Scripts are dev, build, preview and test. Build includes TypeScript checking. `scripts/browser-check.mjs` is a separate browser-check script, not an npm script; inspect its browser/server prerequisites before running it.

Backend prototype, from the repository root:

```powershell
python -m pip install -r requirements.txt
Set-Location backend
python -m pytest tests -q
```

Run pytest from `backend/` so `app.domain` imports resolve. The root requirements file includes `backend/requirements.txt` (pytest only). There is no backend server to start. `sample_data.py` uses a bare `from diagnosis` import; it is not an integrated package entry point. Current validation attempts and environment limitations are recorded in [HANDOFF.md](HANDOFF.md).

## Confidentiality

The repository is intentionally public for now; keep confidential material out of it. Never commit secrets or identifiable student records. Use synthetic/de-identified development data. Repository privacy is not a substitute for secure data handling or a guarantee about third-party services.

No license has been selected; all rights are reserved by default.
