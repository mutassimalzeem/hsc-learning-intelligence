
from diagnosis import QuestionItem, StudentAttempt


question_bank = {
    "PHY-001": QuestionItem(
        question_id="PHY-001",
        concept_id="newtons_first_law",
        misconception_by_option={
            "A": "motion_requires_continuous_force"
        },
    ),

    "PHY-002": QuestionItem(
        question_id="PHY-002",
        concept_id="newtons_first_law",
        misconception_by_option={
            "B": "motion_requires_continuous_force"
        },
    ),

    "PHY-003": QuestionItem(
        question_id="PHY-003",
        concept_id="newtons_first_law",
        misconception_by_option={
            "D": "force_and_velocity_are_identical"
        },
    ),
}


student_attempts = [
    StudentAttempt(
        question_id="PHY-001",
        selected_option="A",
    ),

    StudentAttempt(
        question_id="PHY-002",
        selected_option="B",
    ),
]
