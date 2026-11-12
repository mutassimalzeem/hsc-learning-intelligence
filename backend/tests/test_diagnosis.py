
from app.domain.diagnosis import (
    diagnose,
    QuestionItem,
    StudentAttempt,
)


def test_two_questions_support_same_hypothesis():

    bank = {
        "Q1": QuestionItem(
            "Q1",
            "newtons_first_law",
            {"A": "motion_requires_continuous_force"},
        ),
        "Q2": QuestionItem(
            "Q2",
            "newtons_first_law",
            {"B": "motion_requires_continuous_force"},
        ),
    }

    attempts = [
        StudentAttempt("Q1", "A"),
        StudentAttempt("Q2", "B"),
    ]

    results = diagnose(attempts, bank)

    assert len(results) == 1

    assert results[0].status == (
        "pattern_supported_for_review"
    )

    assert results[0].supporting_questions == 2


def test_one_question_is_not_enough():

    bank = {
        "Q1": QuestionItem(
            "Q1",
            "newtons_first_law",
            {"A": "motion_requires_continuous_force"},
        ),
    }

    attempts = [
        StudentAttempt("Q1", "A"),
    ]

    results = diagnose(attempts, bank)

    assert results[0].status == "insufficient_evidence"


def test_unmapped_answer_produces_no_diagnosis():

    bank = {
        "Q1": QuestionItem(
            "Q1",
            "newtons_first_law",
            {"A": "motion_requires_continuous_force"},
        ),
    }

    attempts = [
        StudentAttempt("Q1", "C"),
    ]

    results = diagnose(attempts, bank)

    assert results == []
