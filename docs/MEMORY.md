# Project Memory

## Current state — 18 Nov 2026

**Verified repository fact:** main baseline `0c62587` contains the merged fixture-backed React frontend and separate pure-Python diagnosis prototype. The local documentation branch is `docs/reconcile-project-state`. See [handoff](../HANDOFF.md) for source details and attempted checks.

Implemented: student/tutor fixture screens, local filtering and interaction states; Python mapped-answer hypothesis grouping and three unit tests. Partially implemented: diagnostic UI is one question, save is a no-op, report/practice/transfer and tutor assignment data are examples; secondary routes are placeholders. Frontend tests cover UI behavior and synthetic privacy filtering, not a working learning product.

Planned: API/FastAPI application, persistence/database/migrations, authentication, server-side authorization, consent, validated diagnosis, mastery, reassessment and live student/tutor workflows. No frontend/backend connection exists.

## Current phase and evidence

Phase 0 discovery remains open. Desk research and publicly available secondary information are the primary starting method; student/tutor interviews are not a prerequisite. Teacher review of curriculum/content and diagnostic feasibility remains necessary before broader implementation. See [execution plan](PHASE_0_EXECUTION_PLAN.md).

**Verified repository fact:** documentation baseline and prototype/frontend merges exist in Git history. No research, teacher validation, pilot access, consent process or learning-outcome validation is marked complete by this reconciliation.

Repository visibility is public, independently checked via GitHub metadata on 18 Nov 2026, consistent with the user's current direction. Package metadata and this document cannot establish ongoing visibility. Keep this task local; do not commit secrets, student information or sensitive strategy.

## Product direction and unknowns

**Working hypothesis:** Bangladesh HSC Science; Physics 1st Paper Mechanics as candidate scope; Diagnose → Explain → Repair → Verify → Reassess; diagnosis-first value proposition. Responsive web/PWA and modular monolith remain intended directions. LLMs must not determine mastery.

**Open question:** board/exam year/syllabus, language, concept map, content rights, misconception evidence thresholds, pilot cohort/access and consent, evaluation thresholds, hosting/auth/provider choices. The UI's `clearstep.` and Year 9 labels remain unresolved, not accepted product/curriculum changes. Keep existing decision context in [DECISIONS.md](DECISIONS.md).

## Validation and next action

The local Python test attempt failed because pytest is missing; the frontend attempt failed because no Node.js version is active. No suite executed successfully in this task. Do not reuse historical pass counts as current results.

Next: complete the source-backed Phase 0 workstreams and record source dates, limitations and unresolved questions. Approve scope/content/evaluation gates before implementing a bounded vertical slice. Update this file when evidence changes; distinguish observations, hypotheses and decisions.
