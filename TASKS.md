# Project Task Board

Status: [ ] not started · [/] in progress · [x] complete · [?] blocked.

## Phase 0 — Desk research and feasibility

All research gates remain open. See [execution plan](docs/PHASE_0_EXECUTION_PLAN.md) for evidence labels, dependencies and acceptance criteria. Interviews are optional follow-up, not prerequisites.

- [ ] P0-1: Create a dated source register with URLs, publisher, scope, evidence label and limitations; assign a named owner to each workstream.
- [ ] P0-2: Verify board, exam cohort, current syllabus, textbook edition and Mechanics scope against authoritative sources; produce a chapter/objective crosswalk with exclusions and qualified teacher-review questions.
- [ ] P0-3: Produce a sourced competitor/substitute matrix covering assessment, feedback, personalization and tutor workflows; label unverified or inaccessible capabilities unknown.
- [ ] P0-4: Synthesize public student-learning problem evidence; distinguish Physics/HSC-specific findings, transferred research and anecdotes; state what remains unvalidated.
- [ ] P0-5: Draft a source-linked Mechanics concept/prerequisite map and provisional misconception taxonomy with observable patterns, alternative explanations and reviewer status.
- [ ] P0-6: Write a diagnostic feasibility protocol with multi-item evidence, abstention rules, false-positive risks and independent teacher annotations; assess the prototype's limitations without expanding it.
- [ ] P0-7: Draft pilot access, permissions, consent/guardian review, safeguarding, minimization, retention/deletion and withdrawal plans; identify an accountable owner. No recruitment or student data collection is authorized by this task.
- [ ] P0-8: Define baseline/comparison, diagnostic and learning metrics with denominators, missing-data handling, measurement windows and pre-agreed success/stop thresholds.
- [ ] P0-9: Review the evidence pack with a qualified Physics teacher and project contributors; record go/narrow/pause, unresolved risks and permissions for the next bounded task. Do not mark public-source hypotheses directly validated.

## Phase 1 — Content and diagnosis

- [ ] Teacher-review concept map, objectives and prerequisite edges.
- [ ] Define misconception taxonomy and evidence requirements.
- [ ] Specify and review diagnostic items, answer keys and distractors.
- [ ] Prepare a small reviewed set (planning range 50–100 items; validate).
- [ ] Define confidence, scoring, mastery and delayed reassessment semantics.
- [ ] Evaluate hypotheses against independent teacher annotations.

## Phase 2 — Foundations

- [ ] Approve MVP requirements, architecture and data model.
- [ ] Define roles, authorization matrix, consent and retention.
- [ ] Establish frontend/backend foundations, migrations and CI.
- [ ] Prepare synthetic seed data and local development workflow.

## Phase 3 — Student vertical slice

- [ ] Onboarding/consent and diagnostic session.
- [ ] Evidence capture and explainable gap report.
- [ ] Targeted intervention and independent verification.
- [ ] Delayed reassessment and progress history.
- [ ] Accessibility and responsive QA.

## Phase 4 — Tutor vertical slice

- [ ] Tutor/batch membership and access control.
- [ ] Privacy-safe batch aggregation.
- [ ] Remediation assignment and progress review.

## Phase 5 — Pilot

- [ ] Recruit pilot cohort (initial planning assumption: 30–50 students, 3–5 tutors).
- [ ] Complete privacy, consent, safeguarding and security review.
- [ ] Run pilot; assess diagnostic validity, learning outcomes and usability.
- [ ] Validate willingness to pay, retention and operating costs.
- [ ] Decide to expand, narrow, pivot or stop.

## Existing prototype baseline

- [x] Pure-Python mapped-answer diagnosis proof of concept and three unit tests are tracked in main; thresholds and misconception mappings are not teacher-validated.
- [x] Fixture frontend is merged into main; it is not integrated with the Python prototype.
- [ ] Establish working local test runtimes: pytest is missing in the current venv and Node.js is not active; rerun existing suites and record results.

## Fixture interface

- [x] Student screens for the approved exports, including Activity history, Resources, and Help. Local example copy only.
- [ ] Tutor teaching resources, tutor help, and the other destinations that still have no approved export.

## Definition of done

Acceptance criteria met; relevant tests run; security/privacy reviewed; docs updated; changes reviewed and committed. Start with discovery; do not build broad functionality before curriculum review, source-backed problem/feasibility assessment and pilot access/consent readiness gates are reviewed. Secondary research alone does not establish direct user validation.
