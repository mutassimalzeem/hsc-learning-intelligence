# Conceptual Data Model

Logical entities only; schema/migrations need a separate design review.

## Identity/access
User, role/permission, student profile, tutor profile, consent/guardian record as required, batch, membership.

## Curriculum/content
Board/curriculum version, subject/paper, chapter/topic, concept, prerequisite edge, objective, question/item version, answer key/rationale, misconception, intervention resource, review record.

## Learning activity
Assessment definition/version, session, response evidence, score, diagnostic hypothesis, hypothesis-evidence link, intervention assignment, verification attempt, mastery history, reassessment schedule.

## Governance
Consent event, audit event, content review status, model/prompt/configuration version.

## Integrity principles
Attempts reference exact item versions. Hypotheses link to evidence. Mastery updates record evidence and rule version. Tutor access is scoped through explicit membership. Content changes do not rewrite history. Consent/retention rules apply to derived data and exports.

Minimize collection. Define purpose, access, retention, deletion and sensitivity for every category. Review ownership, constraints, indexes, migrations, rollback and auditability before schema implementation.