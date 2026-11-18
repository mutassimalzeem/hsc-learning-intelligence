# Diagnostic Engine Specification

Conceptual specification only; implementation requires separate approval.

## Purpose
Infer likely concept gaps from response evidence and select a suitable next learning action. “Insufficient evidence” is a valid result.

## Keep separate
Observation (actual response); scoring; diagnostic hypothesis; confidence; mastery state; intervention; outcome. Preserve raw evidence and link every hypothesis to supporting evidence and item/content versions.

## Evidence
One wrong MCQ is generally insufficient for a specific misconception. Combine patterns across related items, reasoning prompts, targeted follow-ups, validated item properties and repeated observations. Establish thresholds through teacher adjudication.

### Provisional motion-and-force taxonomy

The [Mechanics taxonomy v1](research/MECHANICS_MISCONCEPTION_TAXONOMY_V1.md) proposes 12 candidates across the eight provisional P1–P4/T1–T4 nodes. Every entry requires qualified Physics teacher review; none establishes a Bangladesh-specific finding or an approved diagnostic rule. It records competing explanations, distinguishing contrasts, counterevidence and candidate repair/transfer patterns.

For this proposed review framework, separate conceptual hypotheses from prerequisite, mathematical, unit-conversion, language, representation, execution and guessing explanations. Keep supporting and contradictory observations visible with item/version, context and hint/repair exposure. Reworded duplicates or post-feedback retries are not independent confirmations. A correct option with incompatible reasoning can remain inconclusive; a wrong calculation with sound physics need not support a misconception.

Use `insufficient_evidence` when contrasts or reasons cannot distinguish alternatives, prerequisites fail, items are ambiguous or material contradictions remain. Teacher-review candidates need meaningful non-duplicate evidence and disclosed counterevidence; no automatic numerical threshold is approved. The existing prototype's mapped-answer ratio and defaults are not calibrated confidence for this taxonomy. This is a conceptual proposal only: no production statuses, scoring or algorithm behavior change. Uncertain hypotheses must never be communicated as facts about a learner.

## Possible outcomes
Supported hypothesis; tentative hypothesis; multiple plausible explanations; insufficient evidence; no detected gap in tested concept. Explain assessed concept, evidence, uncertainty and next step.

## Intervention and verification
Prefer reviewed resources linked to concept/objective/hypothesis. LLM explanations require grounding, validation and fallback. Verify with different or varied items; repetition alone is not proof. Separate short-term correctness from retention.

## Evaluation
Measure hypothesis precision, false-positive rate, coverage, calibration by confidence band, reviewer agreement, intervention effect and delayed retention. Optimize trustworthiness, not diagnosis coverage. Preserve teacher overrides and audit history.
