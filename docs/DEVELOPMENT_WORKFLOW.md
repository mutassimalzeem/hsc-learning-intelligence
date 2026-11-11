# AI-Assisted Development Workflow

## Before coding
Read project docs; inspect current files/tests; define one bounded outcome; list assumptions/dependencies/risks; write acceptance criteria and test plan. Seek approval for high-risk or multi-file changes.

## Prompt template
**Context:** relevant PRD/architecture and current behavior.  
**Task:** one bounded outcome.  
**Files:** inspect/change list.  
**Constraints:** architecture, privacy, scope, compatibility.  
**Acceptance:** observable criteria.  
**Tests:** exact checks and expected outcomes.  
Ask the agent to inspect and propose a plan before edits.

## Loop
Understand → Plan → Implement → Test → Review → Fix → Commit → Update docs.

Build vertical slices across UI/API/domain/data for one journey. For debugging, first request root-cause analysis without edits; then make the smallest fix and test it.

Review against PRD, architecture, accessibility, security/privacy, cost, errors and observability. “It compiles” is not proof of correctness.

Use feature branches, small commits and pull requests. Inspect status/diff before commit. Never commit secrets or unrelated files. Do not merge/deploy without authorization.

Update TASKS, MEMORY, DECISIONS and specialist docs when project state changes.