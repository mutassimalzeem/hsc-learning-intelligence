# API Contract Planning

Endpoint families only; not a finalized OpenAPI specification.

## Principles
Typed/versioned schemas; boundary validation; consistent safe errors; authentication/authorization on protected endpoints; pagination and bounded payloads; auditable state changes; safe retry/idempotency where needed.

## Candidate families
- Identity: registration, login/session, logout, profile, consent.
- Curriculum: subjects, topics, concepts.
- Assessment: start/retrieve session, fetch item, submit response, complete.
- Diagnosis: report, evidence summary, review request.
- Intervention: recommended activity, start/complete.
- Mastery: verify concept, progress, reassessment.
- Tutor: batches, aggregate gaps, remediation assignment, progress review.
- Content operations: author/reviewer workflow.
- Privacy: access/export, consent update, deletion request.

## Errors
Validation, unauthenticated, forbidden, not found, conflict/invalid transition, rate limit, dependency failure, safe internal error with trace identifier.

For every endpoint document role, data exposure, validation, rate limit, idempotency, error cases and tests.