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

## MVP
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
- [Decisions](docs/DECISIONS.md) · [Memory](docs/MEMORY.md) · [Tasks](../TASKS.md)
- [AI coding rules](../RULES.md) and [.cursor/rules](../.cursor/rules/general.mdc)

## Repository status
A fixture-backed React frontend is in `frontend/`. It shows the approved screens with synthetic example copy. It does not authenticate, persist, score, or diagnose. No credentials or deployment configuration. Read README, RULES, PRD, ARCHITECTURE and TASKS before using an AI coding agent.

## Confidentiality
Keep this repository private. Never commit secrets or identifiable student records. Use synthetic/de-identified development data. Repository privacy is not a substitute for secure data handling or a guarantee about third-party services.

No license has been selected; all rights are reserved by default.