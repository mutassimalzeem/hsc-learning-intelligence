# Project Rules for Humans and AI Agents

1. Read README, PRD, ARCHITECTURE, DESIGN, TASKS, MEMORY and relevant specialist docs before editing.
2. Inspect the repository first. State assumptions; do not invent requirements.
3. For multi-file, architectural, security, privacy or product-scope changes, propose a plan and wait for approval.
4. Implement one bounded task or vertical slice at a time. Avoid unrelated refactors and speculative abstractions.
5. Follow the modular-monolith direction. Do not add microservices, queues, graph databases or infrastructure without an approved ADR and measured need.
6. Keep UI, transport, application services, domain rules and persistence responsibilities separate.
7. Treat wrong answers as evidence, not diagnoses. Separate observations, hypotheses, confidence and mastery.
8. Never let an LLM independently set answer keys, misconception certainty or mastery. Validate and ground model output.
9. Never commit secrets, credentials, production exports or identifiable student data. Use synthetic fixtures.
10. Enforce authorization server-side for every protected resource. Minimize student data and logs.
11. Add/update tests for changed behavior. Report only tests actually run and their exact outcomes.
12. Do not weaken tests to make a build pass. Review accessibility, mobile behavior, errors and empty states.
13. Use descriptive branches and small commits. Do not force-push, merge or deploy without authorization.
14. Update TASKS, MEMORY, DECISIONS and specialist docs when state or decisions change.

## AI task prompt contract
Every coding prompt must include context, one bounded task, files to inspect, constraints, acceptance criteria and tests. Ask the agent to inspect and plan before editing. Afterward require a summary of changed files, behavior, exact test results, risks and follow-ups.

## Stop and ask
Stop if requirements conflict, diagnostic semantics change, student-data processing changes, a new paid/external service is needed, access controls change, or the task cannot be validated safely.