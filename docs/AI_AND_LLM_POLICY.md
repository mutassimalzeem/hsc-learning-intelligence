# AI and LLM Policy

## Permitted candidate uses
Drafting/adapting explanations from approved sources; alternative examples for teacher review; candidate distractors/follow-up questions; summaries of approved non-identifiable aggregate patterns; retrieval over approved learning resources.

## Restricted
LLM output cannot independently set mastery, definitive misconception labels, answer keys or curriculum facts. Do not send identifiable student records to providers without documented privacy/vendor approval. Model output must never execute privileged actions, SQL or code.

## Grounding and validation
Use approved content; track prompt/model/content versions; validate strict schemas; reject unsupported claims; provide deterministic fallback; treat retrieved and learner text as untrusted.

## Safety
Supportive age-appropriate language; no shaming or claims about intelligence/future success; communicate uncertainty; offer teacher review.

## Evaluation/operations
Task-specific evaluation set for correctness, grounding, safety, latency and cost. Test prompt injection/data leakage. Add rate limits, budget alerts, fallback and rollback. Re-evaluate after model/prompt changes.