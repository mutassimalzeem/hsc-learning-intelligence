# Diagnostic Engine Specification

Conceptual specification only; implementation requires separate approval.

## Purpose
Infer likely concept gaps from response evidence and select a suitable next learning action. “Insufficient evidence” is a valid result.

## Keep separate
Observation (actual response); scoring; diagnostic hypothesis; confidence; mastery state; intervention; outcome. Preserve raw evidence and link every hypothesis to supporting evidence and item/content versions.

## Evidence
One wrong MCQ is generally insufficient for a specific misconception. Combine patterns across related items, reasoning prompts, targeted follow-ups, validated item properties and repeated observations. Establish thresholds through teacher adjudication.

## Possible outcomes
Supported hypothesis; tentative hypothesis; multiple plausible explanations; insufficient evidence; no detected gap in tested concept. Explain assessed concept, evidence, uncertainty and next step.

## Intervention and verification
Prefer reviewed resources linked to concept/objective/hypothesis. LLM explanations require grounding, validation and fallback. Verify with different or varied items; repetition alone is not proof. Separate short-term correctness from retention.

## Evaluation
Measure hypothesis precision, false-positive rate, coverage, calibration by confidence band, reviewer agreement, intervention effect and delayed retention. Optimize trustworthiness, not diagnosis coverage. Preserve teacher overrides and audit history.