
from dataclasses import dataclass


@dataclass
class QuestionItem:
    question_id: str
    concept_id: str

    # Maps an incorrect answer option to a possible
    # misconception. These mappings need expert review.
    misconception_by_option: dict[str, str]


@dataclass
class StudentAttempt:
    question_id: str
    selected_option: str


@dataclass
class DiagnosisResult:
    concept_id: str
    status: str
    possible_misconception: str | None
    supporting_questions: int
    evidence_ratio: float


def diagnose(
    attempts: list[StudentAttempt],
    question_bank: dict[str, QuestionItem],
    minimum_questions: int = 2,
    minimum_evidence_ratio: float = 0.67,
) -> list[DiagnosisResult]:

    # Store distinct questions supporting each hypothesis.
    evidence: dict[tuple[str, str], set[str]] = {}

    # Store all questions containing mapped misconception
    # evidence for each concept.
    concept_evidence: dict[str, set[str]] = {}

    for attempt in attempts:

        item = question_bank.get(attempt.question_id)

        if item is None:
            continue

        hypothesis = item.misconception_by_option.get(
            attempt.selected_option
        )

        # No mapped misconception evidence for this answer.
        if hypothesis is None:
            continue

        key = (item.concept_id, hypothesis)

        evidence.setdefault(key, set()).add(
            attempt.question_id
        )

        concept_evidence.setdefault(
            item.concept_id, set()
        ).add(attempt.question_id)

    results = []

    for (concept_id, hypothesis), question_ids in evidence.items():

        total_evidence = len(
            concept_evidence[concept_id]
        )

        supporting_questions = len(question_ids)

        evidence_ratio = (
            supporting_questions / total_evidence
        )

        if supporting_questions < minimum_questions:
            status = "insufficient_evidence"

        elif evidence_ratio < minimum_evidence_ratio:
            status = "mixed_evidence"

        else:
            status = "pattern_supported_for_review"

        results.append(
            DiagnosisResult(
                concept_id=concept_id,
                status=status,
                possible_misconception=hypothesis,
                supporting_questions=supporting_questions,
                evidence_ratio=round(evidence_ratio, 2),
            )
        )

    return results
