# System Architecture

**Proposal:** modular monolith; validate before implementation.

## Stack direction
React + TypeScript web/PWA; Python + FastAPI + Pydantic; SQLAlchemy + Alembic; PostgreSQL; Docker; GitHub Actions; Pytest and frontend/E2E tooling to be selected. pgvector, workers, cache and external analytics are optional and require a demonstrated use case. Start with explainable rules/statistics; use scikit-learn only when justified. LLM provider must be replaceable.

## Logical flow
Student/Tutor web client → HTTPS API → FastAPI application → identity/access, curriculum/content, assessment, diagnosis, intervention, mastery, tutor/analytics modules → PostgreSQL. Optional bounded AI adapter supports reviewed explanations; it is not the authority for scoring or mastery.

## Backend module boundaries
Identity; curriculum; content; assessment; diagnosis; intervention; mastery; tutors/batches; analytics; AI gateway; audit. Modules communicate through explicit application services/contracts. Avoid cross-module database access that bypasses ownership.

## Data flow
1. Start a versioned assessment.
2. Persist responses as raw evidence linked to exact item/content versions.
3. Score using documented rules.
4. Store diagnostic hypotheses separately with evidence and confidence.
5. Select reviewed intervention.
6. Verify with a different/varied task.
7. Update mastery/retention using explicit rules.
8. Expose only authorized, minimized tutor views.

## Boundaries
Thin route handlers; domain rules independent of HTTP, database and model provider; persistence through repositories/adapters; typed contracts; transactionally consistent state changes. Treat retrieved/user/model content as untrusted. Validate LLM output.

## Environments
Local synthetic data; isolated preview/staging; production with restricted credentials, backups, monitoring, access logs and incident process. Keep secrets and data isolated.

## Scaling
One deployable monolith and PostgreSQL first. Split workers/services only after measured operational need and an ADR. Open decisions: hosting/region, auth, consent, vector retrieval, observability and recovery objectives.