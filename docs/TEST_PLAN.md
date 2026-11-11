# Test Plan

## Quality goals
Correct scoring; trustworthy diagnosis; secure student/tutor boundaries; usable accessible journeys; reliable release and operations.

## Test layers
- Unit: scoring, evidence thresholds, mastery transitions, prerequisites, authorization rules.
- Integration: API/service/database, transactions, version references, tutor access, AI schema/failure handling.
- E2E: onboarding → diagnose → report → repair → verify; delayed reassessment; tutor batch → assign → review; denied access and network retry.

## Diagnostic evaluation
Use a versioned teacher-adjudicated evaluation set. Measure precision, false-positive rate, coverage, confidence calibration and reviewer agreement. Include ambiguous items and mixed patterns. Prevent evaluation leakage. Insufficient evidence must remain an allowed result.

## Security/privacy tests
Prevent cross-student access; scope tutors to assigned batches; protect small-group aggregates; test consent withdrawal/deletion; keep sensitive fields out of logs.

## AI evaluation
Schema validity, grounding, hallucinations, prompt injection, safety, latency, provider failure, cost and prompt/model regression.

## UX and release
Test mobile/tablet/desktop, keyboard, screen readers, contrast, loading/empty/error/offline states. Release checklist: tests, lint/type/build, secret scan, authorization, migration, backup restore, accessibility, preview QA, monitoring, rollback and support owner.