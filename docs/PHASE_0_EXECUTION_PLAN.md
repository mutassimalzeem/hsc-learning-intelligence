# Phase 0 execution plan

Prepared 18 Nov 2026. Status: planned; no discovery workstream is complete. This document specifies research to perform, not findings from completed market or curriculum research.

## Objective and expected outcomes

Establish whether a bounded Bangladesh HSC Science diagnosis-first learning slice is worth validating further. Physics 1st Paper — Mechanics remains the candidate, pending authoritative syllabus verification and qualified teacher review. Produce a reviewable evidence pack, scope crosswalk, provisional concept map/taxonomy, diagnostic evaluation protocol and pilot-readiness plan before broad backend implementation. Interviews are optional follow-up; desk research can begin without them.

## Evidence labels and source register

Use these exact labels on every finding, taxonomy entry and decision input:

- **Verified repository fact** — directly checked against source, configuration or Git history; cite file/commit and check date.
- **Public-source evidence** — cite an accessible source URL, title, publisher/author, publication/version date, access date, relevant page/section and the specific claim supported. Record population/context, methodology and limitations. Preserve unknown dates as unknown.
- **Working hypothesis** — plausible inference or proposal; state supporting evidence, alternatives and what would disconfirm it. It is not direct user validation.
- **Open question** — missing evidence, unresolved conflict or decision; name the owner and next verification step.

Maintain a source register and evidence notes during execution. Do not put identifying student information, private messages or confidential strategy into this public repository. No public sources were substantively researched for this reconciliation; no market statistics, competitor capability findings or confirmed syllabus chapters are asserted here. Candidate publishers/platforms below are research targets, not endorsements or evidence.

## Repository baseline

**Verified repository fact:** base main `0c62587` includes the React fixture interface and Python mapped-answer prototype. The client has no backend connection. The prototype's two-question/0.67 defaults are not validated thresholds; its ratio denominator includes only mapped misconception evidence, not all answers. No API, database, auth, consent or mastery system exists. See [HANDOFF](../HANDOFF.md) for inventory and attempted checks. Unit/UI tests do not establish diagnostic or educational validity.

## Workstreams and deliverables

Assign a named contributor owner and a target review date at kickoff. With two contributors, curriculum/problem-evidence work and competitor research can proceed independently; dependent reviews follow the sequence below. Neither role nor access to a teacher is assumed.

| ID | Workstream | Deliverable and acceptance criteria | Dependencies |
| --- | --- | --- | --- |
| P0-1 | Evidence setup | Source-register template, claim labels, owners and review dates; every evidence entry has provenance and limitations | None |
| P0-2 | Curriculum | Board/exam-cohort/version crosswalk, candidate scope/exclusions and unresolved conflicts; qualified reviewer status recorded | P0-1 |
| P0-3 | Competitors/substitutes | Dated source-backed comparison; unknown/inaccessible claims remain unknown | P0-1 |
| P0-4 | Learning problem | Evidence synthesis separating local/transfer evidence and anecdotes, with disconfirming evidence and gaps | P0-1 |
| P0-5 | Concepts/taxonomy | Versioned draft map and misconception entries linked to curriculum/evidence; all unreviewed entries provisional | P0-2, P0-4 |
| P0-6 | Diagnostic feasibility | Review protocol, abstention/evidence rules, evaluation set design and prototype gap assessment | P0-5 |
| P0-7 | Pilot readiness | Access options, permissions/consent/safety/data plan, accountable owners and blockers; no actual data collection | P0-1; refine after P0-2/P0-6 |
| P0-8 | Metrics | Baseline/comparator, denominators, windows, missing-data rules and proposed acceptance/stop thresholds | P0-6, P0-7 |
| P0-9 | Exit review | Contributor and qualified reviewer decisions with evidence references, unresolved risks and authorized next scope | P0-2 through P0-8 |

### A. Bangladesh HSC curriculum verification

Start by locating authoritative National Curriculum and Textbook Board materials and the relevant education board/examination notices. These are candidate source authorities; confirm official provenance and applicability before labeling any claim Public-source evidence. Record board, exam year/cohort, subject/paper, curriculum version, syllabus publication/amendments, textbook edition and content-use rights. Do not assume a textbook contents page equals the applicable exam syllabus.

Compare current and amended notices; archive document identifiers/page references and record conflicts rather than selecting silently. Build a crosswalk: source chapter/topic → stated learning outcome → proposed concept → inclusion/exclusion rationale → review question. Do not invent chapter numbering or learning outcomes. Have a qualified Physics teacher review the candidate Mechanics boundary and prerequisites. Record name/qualification only with appropriate permission; record actual review date and status. No review is claimed here.

### B. Competitor and substitute analysis

Select relevant Bangladeshi and international candidates after checking their public offerings; include direct diagnostic/repair alternatives and substitutes such as question banks, courses, tutors/coaching and general study tools. Classification is provisional until evidence supports it.

For each, record audience/curriculum/language, assessment format, feedback specificity, adaptive/personalization claims, repair/transfer support, tutor reporting, public pricing/access conditions where relevant, source/date and limitations. Use official product/help pages and available demonstrations for capabilities; distinguish marketing claims from observed behavior. Do not create accounts, pay, contact others or transmit project content under this task. Unavailable features are unknown, not absent. Compare a common synthetic wrong-answer scenario when public demonstrations permit it; do not infer the market lacks diagnosis from incomplete access.

### C. Student-learning problem evidence

Search credible public education research, reports and subject-learning studies using a logged query/date/inclusion process. Extract population, country, age/level, Physics topic, methods/sample coverage, observed difficulty and limits on transfer to Bangladesh HSC. Separate peer-reviewed research, official reports, commentary and online anecdotes. Public discussion can suggest a question but cannot establish prevalence or represent students generally. Include counterexamples and evidence against the product hypothesis. Output a claim/evidence/gap table and prioritized questions for optional later interviews or observation.

### D. Concept-map validation and provisional taxonomy

Draft only within the curriculum crosswalk. For each concept, record source objective, prerequisite edge/rationale, assessment opportunity and reviewer disposition. Review scientific correctness, terminology/language and scope separately. Version drafts and retain rejected/uncertain edges with reasons.

**Working hypothesis:** the repository's example patterns `motion_requires_continuous_force` and `force_and_velocity_are_identical`, attached to `newtons_first_law`, are seed candidates only. Their existence is a repository fact; scientific diagnostic validity and HSC relevance remain unvalidated. Do not promote them to accepted taxonomy entries merely because they exist in code.

Each entry must have: provisional ID, concept/curriculum reference, proposed belief, source, observable response/reasoning pattern, alternative explanations (guessing, language, calculation, ambiguity), supporting and disconfirming item types, minimum evidence proposal, abstention conditions and qualified teacher review status/date. An option mapping alone is not evidence of the learner's belief. Review answer keys, distractors and content-use rights before using any item with students.

### E. Diagnostic feasibility and evaluation

Design the protocol before changing the algorithm. Separate raw response, score, hypothesis, confidence and mastery. Require multiple distinct, reviewed items and, where needed, reasoning/follow-up evidence before a specific claim; determine thresholds through evaluation rather than accepting prototype defaults. Abstain for insufficient evidence, competing explanations, ambiguous/invalid items, unseen concepts or conflicting observations. A correct or unmapped answer and an empty result do not demonstrate mastery.

Specify a small synthetic/reviewer-authored feasibility set first. Independent qualified reviewers annotate cases without seeing prototype outputs; retain disagreement and adjudication. Keep evaluation items distinct from development items and interventions. Cover single/duplicate/conflicting answers, unmapped/unknown items, mixed concepts, guessing and language ambiguity. Audit the prototype denominator and unsupported-confidence interpretation. No algorithm changes or student data collection occur in this task.

Evaluate false-positive and false-negative risks, abstention/coverage trade-offs, item leakage, repeated attempts and reviewer disagreement. If the evidence cannot distinguish a misconception from alternatives, propose a follow-up question or narrower output rather than forcing a label. Without independent labels, report feasibility as unresolved, not validated.

### F. Pilot readiness, consent and student safety

**Working hypothesis:** a small, bounded, teacher-supervised feasibility pilot could follow review; cohort size, recruitment route and access are open questions. Specify one reviewed concept scope and learning loop, reviewed intervention, independent transfer task and later retention window. Determine sample needs from the evaluation question and available access; do not treat historical planning ranges as approved recruitment targets.

Before any recruitment or student data collection, obtain appropriate institutional/guardian/student permissions and qualified privacy/legal review. Draft age-appropriate information, voluntary participation/withdrawal, learning-support alternatives, complaint/escalation and harmful-content response. Confirm tutor/cohort access boundaries, accountable safeguarding/support owner and approvals. Secondary research does not replace consent or content review.

Define the minimum fields, purpose, access, retention/deletion, withdrawal handling and pseudonymization for consent, responses and derived results. Keep real records out of this public repository and external research tools. Review hosting/provider processing and data flows before selecting them. The fixture threshold of five is not an approved privacy policy or server-side protection. Consult [privacy/student safety](PRIVACY_AND_STUDENT_SAFETY.md) and [security](SECURITY.md); this plan makes no legal compliance determination.

## Baselines, measurable outcomes and success criteria

P0-8 must propose numeric targets and obtain reviewer/contributor agreement before evaluation; none are established by this document. Preserve numerator, denominator, sample coverage, uncertainty and missing/not-yet-observed values. Do not invent a baseline from fixtures.

| Measure | Definition to pre-register |
| --- | --- |
| Reviewer agreement | Agreement among independently annotated cases; report counts, disagreements and adjudication separately |
| Diagnostic precision | Correct supported misconception claims / all evaluated supported claims, against adjudicated review |
| False-positive rate | Incorrect positive claims / adjudicated negative opportunities, with the opportunity unit fixed in advance |
| Coverage and abstention | Claimed and abstained eligible cases / all eligible cases; separately record invalid/excluded cases |
| Confidence calibration | Only if meaningful confidence bands are defined: observed correctness per band with counts; prototype ratio is not calibrated confidence |
| Remediation completion | Completed reviewed interventions / assigned eligible interventions within the agreed window |
| Transfer performance | Correct independent transfer responses / scored eligible transfer responses, with pre-intervention comparison and missing follow-up counts |
| Delayed retention | Correct delayed independent responses / eligible observed follow-ups at a pre-agreed interval; report loss to follow-up |
| Usability/clarity | Predefined task completion and clarity question with response denominators; no learning-effect inference from satisfaction alone |

Choose a feasible baseline/comparison (for example reviewed current-feedback versus proposed feedback), assignment method and timing before collecting outcomes. Separate baseline differences, practice effects and selection bias from intervention effects; a small uncontrolled pilot cannot establish causality. Pre-register pause criteria for harmful/misleading feedback, consent/access failures and excessive false positives, as well as proposed success thresholds. Threshold approval is a Phase 0 output, not a claim that the product meets them.

## Risks, assumptions and unresolved decisions

- **Working hypothesis:** public evidence may reveal a viable narrow problem; it may also disconfirm the proposed wedge. Record both outcomes.
- **Open question:** authoritative syllabus applicability, qualified reviewer availability and content rights. Unresolved scope blocks accepted concept-map/content work.
- **Open question:** HSC/Year 9 fixture mismatch and `clearstep.`/working-title mismatch. Do not resolve branding or curriculum through this documentation task.
- **Working hypothesis:** secondary studies may transfer poorly across curricula/languages; label limitations and seek direct validation later where necessary.
- **Open question:** consent/guardian requirements, pilot institution/access, language, ownership, outcome thresholds and safe data handling. Block live pilot activity until resolved.
- **Verified repository fact:** tests are currently blocked by missing pytest and inactive Node.js locally. Restore runtimes and rerun before making engineering readiness claims; no dependencies are added here.

## Recommended sequence and checkpoints

1. Assign two contributor owners, dates and the evidence register (P0-1).
2. Run curriculum verification (P0-2), competitor research (P0-3) and problem-evidence synthesis (P0-4). Checkpoint: provenance complete, claims labeled, conflicts/unknowns visible.
3. Draft and obtain qualified review of concepts/taxonomy (P0-5); then define independent diagnostic feasibility evaluation (P0-6). Checkpoint: alternatives and abstention are explicit; lack of reviewer access remains a blocker, not implicit approval.
4. Refine pilot permissions/safety (P0-7) and pre-register baseline/metric/threshold proposals (P0-8). No recruitment occurs at this stage.
5. Review exit evidence (P0-9); record go, narrow, pause or stop with reasons. Only then authorize the next bounded content/evaluation or engineering task. Broader implementation remains gated on curriculum/content and diagnostic feasibility review.

## Explicit Phase 0 exit criteria

All remain unchecked until linked evidence and review records exist:

- [ ] Dated source register and balanced competitor/problem synthesis are reviewable; every substantive claim has an evidence label and limits.
- [ ] Applicable curriculum version and bounded candidate scope are source-linked and qualified-teacher-reviewed; unresolved conflicts are resolved or explicitly excluded.
- [ ] Concept map and provisional taxonomy have observable patterns, alternative explanations and recorded reviewer dispositions; no manufactured approval.
- [ ] Diagnostic feasibility protocol defines evidence, abstention, independent annotation, false-positive handling and limits of the existing prototype.
- [ ] Pilot-access route and responsible owner are identified; permissions/consent/safeguarding/data requirements and remaining launch blockers are documented. Phase 0 exit itself does not authorize a live pilot.
- [ ] Baseline, denominators, timing, missing-data handling and success/pause thresholds are agreed before outcome collection.
- [ ] Contributors and qualified reviewers record a source-backed go/narrow/pause/stop decision and explicitly bounded next task. Unknown validity cannot be reported as validated; if feasibility is unresolved, authorize only further validation, not broad backend work.
