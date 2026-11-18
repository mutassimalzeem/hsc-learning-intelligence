# Provisional Mechanics misconception taxonomy v1

Prepared 18 Nov 2026; base curriculum research commit `f3b6563`. **Proposed interpretation · Teacher review required.** This is a review and item-design document, not a validated taxonomy, scoring system or finding about a learner population. All response quotations are synthetic examples. No entry is claimed to have been observed among Bangladeshi HSC students; no prevalence estimates or teacher approval are asserted.

## Scope, evidence and identifiers

Use only the eight [proposed curriculum nodes](HSC_PHYSICS_CURRICULUM_RESEARCH.md): P1 units/quantities; P2 directed quantities; P3 motion quantities; P4 motion graphs; T1 object/interactions; T2 resultant/inertia; T3 force/acceleration; T4 interaction pairs. There are **12 candidates**: one per prerequisite and two per target. This is not exhaustive.

**Officially verified** applies to underlying NCTB chapter/outcome placements, not our node decomposition or hypotheses. The [NCTB Physics curriculum PDF](https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-nctb/2024/12/28d03c592c2c4b208f7782d04c78e01d.pdf) was reopened on 18 Nov 2026. Viewer-page anchors: P1, p.30/ch.1 outcome 6; P2, p.31/ch.2 outcomes 1–5; P3/P4, p.31/ch.3 outcomes 2–3; T1–T4, p.32/selected ch.4 outcomes 1–5 and 9. These establish topic alignment, not an official misconception taxonomy. See the curriculum report for legacy-font extraction limits, cohort applicability and textbook gaps.

**Secondary-source supported:** no candidate currently has an empirical educational-research citation or Bangladesh-specific observation. Do not apply this label merely because an idea resembles familiar teaching literature. No empirical research findings are asserted here. Scientific explanations below are authored for qualified review; general physics correctness is not evidence of student prevalence.

**Proposed interpretation** applies to every candidate, suggested origin, contrast, intervention and evidence rule below. **Teacher review required** applies to every entry, including scientific accuracy, idealizations, wording and keys. **Unresolved** covers actual learner validity, reliability, confidence thresholds, delay intervals, approved textbook edition and pilot cohort applicability. Interviews remain optional.

IDs such as `MEC-T2-001` are stable provisional taxonomy identifiers, distinct from node IDs and prototype option strings. Retain rejected/merged entries and revision reasons; never reuse an ID for a different belief. No production ID mapping, database schema or status enum is introduced.

Restrict tasks to straight-line, constant-mass Newtonian cases in an explicitly stated inertial frame. State contacts, selected object, horizontal-only questions, relevant external forces and idealized zero horizontal resistance where used. Do not expand into projectile motion, collisions, rotation, gravitation calculations, work/energy or other excluded domains. Contact-force diagrams are instructional representations requiring review, not additional curriculum nodes.

## Error categories and confidence implications

Categories can coexist. An incorrect option alone does not identify its cause; retain raw observations separately. None of these categories has a numerical confidence weight in this proposal.

| Category | Distinguishing check | Effect on conceptual interpretation |
| --- | --- | --- |
| Conceptual misconception | Specific physical belief persists across meaningful contrasts after relevant prerequisite/wording checks | May support a bounded candidate for review; alternatives and contradictions remain visible |
| Missing prerequisite knowledge | Node check fails and targeted clarification changes downstream reasoning | Leave downstream diagnosis inconclusive; record prerequisite need separately |
| Mathematical/algebraic error | Sound physical relationship but incorrect signed sum, rearrangement or ratio | Weakens the conceptual explanation of that response; does not establish mastery |
| Unit-conversion error | Equivalent-quantity reasoning is sound but conversion factor/calculation fails | Prefer conversion support over P1-001 unless number-only reasoning is independently evidenced |
| Reading/language misunderstanding | Equivalent non-leading paraphrase or term check changes interpretation before teaching | Reduce support for the initial inference; retain wording versions |
| Diagram/representation misunderstanding | Equivalent text reasoning is sound but arrows, axes or graph conventions are misread | Restrict inference to representation competence; do not generalize across formats |
| Careless execution | Neutral recheck produces coherent self-correction with otherwise stable reasoning | Possible explanation only; never infer carelessness from one error or response time |
| Guessing | Learner reports uncertainty or gives inconsistent answers without interpretable reasons | Low evidential value; uncertainty/inconsistency does not prove random guessing |
| Insufficient evidence | Missing reasoning, ambiguity, duplicate-only evidence or unresolved alternatives/conflicts | Return `insufficient_evidence`; request a useful follow-up rather than force a label |

## Conceptual evidence, confidence and abstention policy

This proposal does not change the Python prototype. Its two-question/0.67 defaults and mapped-answer ratio are not validated confidence measures for this taxonomy. The [diagnostic specification](../DIAGNOSTIC_ENGINE.md) and [test plan](../TEST_PLAN.md) still require separate implementation/evaluation.

1. **Keep an evidence ledger for review:** actual answer/reasoning, item/version, context/representation, prerequisite and wording checks, hints/repair exposure, supporting evidence, counterevidence, alternatives and uncertainty. This is a review-record requirement, not a schema.
2. **Seek non-duplicate evidence opportunities.** A different context, representation or controlled-variable contrast should challenge the belief against an alternative explanation. Renumbered values, copied diagrams, retries after feedback and near-identical stems are one item family, not independent confirmations. Even different tasks for one learner are not necessarily statistically independent. Record shared cues and do not count each subquestion as independent support.
3. **Use reasoning as well as correctness.** A correct answer with incompatible reasoning may support a candidate but can also reflect guessing/ambiguity. A wrong numerical answer with sound physics may weaken it. Neither is conclusive without the entry-specific checks.
4. **Preserve contradictions.** A well-explained counterexample can restrict or defeat a hypothesis; do not average it away with duplicate errors. Record context and pre/post instruction. Mixed results can indicate context dependence, wording problems or competing beliefs. Post-repair success is outcome evidence, not proof that the original diagnosis was correct.
5. **Abstain explicitly.** Use `insufficient_evidence` for a lone wrong MCQ, unreasoned correctness, failed prerequisites, invalid/ambiguous items, inaccessible wording, duplicate-only evidence or material unresolved contradictions. Missing responses are missing evidence, not wrong answers. Abstention means no justified claim, not no gap. No supported hypothesis after usable evidence is also possible; it is not global mastery.
6. **Teacher-review eligibility is a proposal.** Present a bounded candidate only when meaningful pre-repair contrasts/reasons favor it and relevant alternatives have been checked; attach counterevidence. More than one non-duplicate observation is a design requirement, not a validated numerical threshold. Conflicted cases can be sent as inconclusive questions, not supported labels. A teacher may reject, narrow, request evidence or mark unresolved; retain the rationale. No percentage or permanent learner trait follows.
7. **Communicate uncertainty.** Teacher note: “These responses may fit this interpretation; prerequisite checks and this counterexample are attached.” Learner note: “Let us compare what changes when the force changes.” Do not say “You have misconception X” or turn an unvalidated ratio into certainty.

### Worked interpretations of synthetic evidence patterns

These illustrate the proposed policy, not actual student observations or an inference algorithm.

| Pattern | Interpretation and next step |
| --- | --- |
| Correct zero-resultant choice, but “there are no individual forces” despite two specified opposing pulls | Could fit T2-002 or informal wording. Ask for the inventory and meaning of “no force”; correctness alone does not settle it |
| Wrong resultant magnitude, but correct source inventory, direction and signed expression | Check arithmetic/units before inferring a physical belief; a calculation error does not independently support T2/T3 candidates |
| Same number-only unit explanation across length and time after successful conversion checks | More informative for P1-001 than repeated length MCQs, but reasoning/wording checks and counterevidence are still needed |
| Force answer becomes coherent after a neutral velocity/acceleration term check | Language/prerequisite explanation gains support; retain the change and do not count the follow-up as independent confirmation of the original hypothesis |
| Diagram answer changes under an equivalent text description before feedback | Investigate representation/reading demands rather than asserting a format-independent misconception |
| Familiar item becomes correct after repair, but an uncued contrasting task gives conflicting reasoning | Record repair exposure and conflict; do not infer mastery or confirm the original diagnosis; remain inconclusive and seek review |

## Candidate entries

Every entry below has status **Proposed interpretation · Teacher review required; validation Unresolved**. Origins are possible instructional explanations, not research findings. Contrasts are designs for review, not approved questions. All six intervention steps are candidate patterns, not a validated content library.

### MEC-P1-001 — Numerical value mistaken for physical quantity

- **Node:** P1.
- **Possible incorrect belief:** Changing units changes the physical quantity because the number changes.
- **Scientific understanding:** Equivalent value–unit representations describe the same quantity.
- **Possible origin:** Comparing bare numbers may obscure the unit's role.
- **Synthetic response:** “100 cm is longer than 1 m because 100 is larger.”
- **Alternative explanations:** Unknown conversion factor, arithmetic slip, misunderstanding “longer,” guessing.
- **Contrast and support:** Supply the equivalence; ask whether relabeling the same strip changes its length, then compare equivalent time labels without feedback. Persistent number-only explanations after a successful conversion check favor this hypothesis. Correction only after supplying the factor favors missing conversion knowledge instead.
- **Disconfirming evidence:** Explains physical equality for a new unit pair despite a calculation slip; distinguishes quantity from its representation without the original cue.
- **Repair focus:** Rebuild quantity-versus-label reasoning before numerical complexity.

**Candidate intervention sequence:**

- **Explanation:** Several equivalent labels can describe one physical quantity.
- **Visual/analogy:** One strip with metre and centimetre scales; the strip stays unchanged.
- **Guided reasoning:** Annotate value and unit separately and name what stays invariant.
- **Practice pattern:** Compare supplied equivalent labels, with conversion relationships available.
- **Independent transfer:** Equivalent duration labels rather than the original length task.
- **Delayed reassessment:** New unit pair at an agreed later interval; record hints and prior exposure.

### MEC-P2-001 — Magnitude addition ignores direction

- **Node:** P2.
- **Possible incorrect belief:** Opposite directed quantities add as positive magnitudes.
- **Scientific understanding:** Collinear vector sums include direction; a chosen axis fixes component signs.
- **Possible origin:** Scalar addition habits may be extended to arrows.
- **Synthetic response:** “3 N right plus 2 N left gives 5 N right.”
- **Alternative explanations:** Signed-arithmetic gap, misread arrow/axis, label reversal, execution slip.
- **Contrast and support:** Compare same-direction and opposite-direction arrows, then reverse the axis with physical arrows unchanged. Check `3 + (-2)` separately. Correct arithmetic with persistent magnitude-only explanations favors the hypothesis; failure confined to signed arithmetic favors mathematics. Axis reversal should change component signs, not physical direction.
- **Disconfirming evidence:** Correct physical resultant with an explanation in a new context; errors confined to one arrow layout favor representation difficulty.
- **Repair focus:** Connect arrows, physical directions and signed components; avoid “always subtract.”

**Candidate intervention sequence:**

- **Explanation:** Magnitude and direction jointly determine the sum.
- **Visual/analogy:** Head-to-tail arrows on a labeled one-dimensional axis.
- **Guided reasoning:** Choose axis, assign components, sum, translate to physical direction.
- **Practice pattern:** Equal/unequal opposite arrows mixed with same-direction cases.
- **Independent transfer:** A straight-line displacement task rather than force arrows.
- **Delayed reassessment:** New labels and a reversed axis; request signed and physical descriptions.

### MEC-P3-001 — Negative acceleration always means slowing

- **Node:** P3.
- **Possible incorrect belief:** Negative acceleration necessarily reduces speed.
- **Scientific understanding:** Its sign gives axis direction; speed decreases when velocity and acceleration oppose and increases when they align.
- **Possible origin:** Everyday “deceleration” may be conflated with a negative component.
- **Synthetic response:** “Moving left with leftward acceleration must mean slowing.”
- **Alternative explanations:** Unstated positive axis, speed/velocity language confusion, signed-number error, guessing.
- **Contrast and support:** State right-positive; compare rightward and leftward initial motion under the same leftward acceleration. Check axis and magnitude vocabulary separately, then use new sign combinations without feedback. Persistent sign-only slowing explanations are consistent with this hypothesis. Supply successive velocities as a further check: conflict between a correct speed comparison and a sign-only claim needs clarification and abstention, not automatic confirmation. Correction after vocabulary clarification favors language/representation explanations.
- **Disconfirming evidence:** Explains speed changes using relative directions in new cases and why an axis change cannot change speeding/slowing.
- **Repair focus:** Reason from velocity change before interpreting signs.

**Candidate intervention sequence:**

- **Explanation:** Speed change depends on relative directions, not acceleration sign alone.
- **Visual/analogy:** Separate velocity and acceleration arrows on an explicit axis.
- **Guided reasoning:** Compare successive velocity magnitudes and the change vector.
- **Practice pattern:** Contrast velocity/acceleration sign combinations with simple supplied values.
- **Independent transfer:** Word/position-sequence task without the original sign cue.
- **Delayed reassessment:** Different axis convention; explanation before calculation.

### MEC-P4-001 — Velocity-graph height mistaken for acceleration

- **Node:** P4.
- **Possible incorrect belief:** A higher velocity-time trace necessarily has greater acceleration.
- **Scientific understanding:** Its ordinate is velocity; its gradient is acceleration.
- **Possible origin:** A visually salient height may substitute for rate-of-change comparison.
- **Synthetic response:** “The upper of two parallel rising velocity-time lines accelerates more.”
- **Alternative explanations:** Misread axes, position-time graph confusion, missing slope skill, picture-as-path interpretation.
- **Contrast and support:** Compare parallel traces at different heights, then equal-height points with different slopes. Ask velocity and acceleration separately; check simple gradient arithmetic. Persistent height-based reasoning despite successful slope arithmetic favors the hypothesis. Failure only in gradient calculation favors mathematics; failure only after changing graph type favors representation confusion.
- **Disconfirming evidence:** Explains equal acceleration for shifted parallel traces and identifies a steeper new trace correctly.
- **Repair focus:** Link the sought quantity, axes, gradient and units.

**Candidate intervention sequence:**

- **Explanation:** Graph height and gradient answer different physical questions.
- **Visual/analogy:** Equal rise/run triangles on parallel velocity traces.
- **Guided reasoning:** Read axes, name the quantity sought, justify the comparison.
- **Practice pattern:** Equal-gradient/different-height and different-gradient/equal-height contrasts.
- **Independent transfer:** Match a new velocity table to graphs, without reusing the original picture.
- **Delayed reassessment:** Alter scales and intercepts; inspect gradient reasoning, not memorized appearance.

### MEC-T1-001 — Stationary contact cannot exert force

- **Node:** T1.
- **Possible incorrect belief:** Only moving or visibly active agents exert contact forces.
- **Scientific understanding:** A stationary contacting object can exert force; inventory follows interactions with the specified body.
- **Possible origin:** Effort/motion associations may hide stationary interactions.
- **Synthetic response:** “Only the hand pushes the block; the stationary wall does nothing.”
- **Alternative explanations:** Only hand force was requested, diagram omission, unfamiliar contact model, assumed gap.
- **Contrast and support:** Specify a block held against a wall by a hand; ask for all horizontal forces on the block with contact explicit. Reverse directions in another stationary-contact context. Persistent denial after interaction and wording checks favors the hypothesis; correction after clarifying “all horizontal forces” favors task interpretation.
- **Disconfirming evidence:** Identifies stationary contact forces with sound reasoning in a fresh context; correct verbal inventory but missing arrow favors representation error.
- **Repair focus:** Build source-to-recipient interaction inventories.

**Candidate intervention sequence:**

- **Explanation:** Contact can transmit force without visible motion.
- **Visual/analogy:** Labeled hand–block–wall diagram, distinguishing interaction and motion arrows.
- **Guided reasoning:** Name who acts on the block before drawing forces.
- **Practice pattern:** Horizontal inventories for specified stationary-contact arrangements.
- **Independent transfer:** Object held between two opposing stationary supports rather than the original hand/wall context.
- **Delayed reassessment:** New contact diagram; inventory and reasons before supplying arrows.

### MEC-T1-002 — Motion arrow invented as an extra force

- **Node:** T1.
- **Possible incorrect belief:** Motion itself supplies a forward force in addition to interactions.
- **Scientific understanding:** Velocity is not another force; a force requires an identified interaction.
- **Possible origin:** Arrow conventions or an intuitive motion-cause story may be applied indiscriminately.
- **Synthetic response:** “Add a forward motion force after the hand loses contact with the cart.”
- **Alternative explanations:** Arrow intended as velocity, hidden motor/resistance assumed, release time misunderstood.
- **Contrast and support:** State zero horizontal interactions after release; label each arrow as velocity or force and name its source. Compare before/after release and a text inventory. A source-free force claimed across formats favors the hypothesis. Relabeling as velocity favors notation confusion. If the reason is sustained motion, also consider T2-001; it is competing interpretation, not independent confirmation.
- **Disconfirming evidence:** Retains velocity but removes the invented force in a new released-object case and explains why.
- **Repair focus:** Separate motion descriptions from interaction inventories.

**Candidate intervention sequence:**

- **Explanation:** Motion describes a state; force names an interaction.
- **Visual/analogy:** Separate velocity and force panels with explicit legends.
- **Guided reasoning:** Remove contact in stages; remove only forces whose interactions ceased.
- **Practice pattern:** Require source and recipient for every proposed force arrow.
- **Independent transfer:** Different released object with explicitly zero horizontal interactions; verbal inventory instead of the original diagram.
- **Delayed reassessment:** Unprompted force diagram plus arrow labels in a fresh idealized context.

### MEC-T2-001 — Steady motion requires a nonzero resultant

- **Node:** T2.
- **Possible incorrect belief:** Steady motion requires a resultant in the direction of travel.
- **Scientific understanding:** In an inertial frame, zero resultant permits constant velocity, including nonzero velocity.
- **Possible origin:** Everyday resisting environments may be generalized to the idealized resultant.
- **Synthetic response:** “There must be a net rightward force because it moves right at constant velocity.”
- **Alternative explanations:** Individual push confused with resultant, “steady” misunderstood, resistance assumed, graph prerequisite gap.
- **Contrast and support:** Compare rest and constant nonzero velocity with changing velocity; provide the interaction inventory and check motion interpretation. Demanding a forward resultant despite successful checks favors the hypothesis. Citing a push balanced by resistance while agreeing net force is zero does not support it.
- **Disconfirming evidence:** Predicts zero resultant for a new steady-motion case and nonzero resultant for changing velocity, with coherent reasons.
- **Repair focus:** Distinguish an individual push from the sum; relate resultant to velocity change.

**Candidate intervention sequence:**

- **Explanation:** Resultant relates to acceleration, not simply the existence of motion.
- **Visual/analogy:** Equal-time velocity arrows beside a zero-resultant force panel.
- **Guided reasoning:** Compare what changes in rest, steady motion and acceleration.
- **Practice pattern:** Classify motion states by resultant with individual forces explicit.
- **Independent transfer:** New constant-velocity straight-line context and interaction inventory, without the original diagram.
- **Delayed reassessment:** Steady motion in the opposite direction versus changing velocity, without repair hints.

### MEC-T2-002 — Zero resultant means no individual forces

- **Node:** T2.
- **Possible incorrect belief:** Forces adding to zero means no forces act.
- **Scientific understanding:** Nonzero individual forces on the same body can have a zero resultant.
- **Possible origin:** A sum may be mistaken for the full interaction inventory.
- **Synthetic response:** “No horizontal forces act because the two equal opposite pulls cancel.”
- **Alternative explanations:** Informal “no force” means “no net force,” task asks only resultant, vector addition difficulty.
- **Contrast and support:** Ask separately for each force/source and resultant for equal opposite pulls, then compare a zero-interaction case. Calling both inventories empty after wording/vector checks favors the hypothesis. Listing both forces despite saying “no force” favors terminology confusion. Check recipients to distinguish T4-002.
- **Disconfirming evidence:** Explains zero resultant with two interactions and distinguishes no horizontal interaction in a new context.
- **Repair focus:** Keep inventory separate from its vector sum.

**Candidate intervention sequence:**

- **Explanation:** A zero sum is different from an empty force inventory.
- **Visual/analogy:** Two labeled arrows and a separate resultant panel marked zero.
- **Guided reasoning:** Name interactions before summing; retain the inventory afterward.
- **Practice pattern:** Equal pulls, unequal pulls and no horizontal interactions.
- **Independent transfer:** Specified opposing contacts instead of the original pulls.
- **Delayed reassessment:** Request inventory and resultant separately with new directions and labels.

### MEC-T3-001 — Resultant fixes velocity rather than acceleration

- **Node:** T3.
- **Possible incorrect belief:** Equal resultants on equal masses imply equal velocities regardless of initial motion.
- **Scientific understanding:** Equal constant masses under the same resultant have equal acceleration; initial velocities can differ.
- **Possible origin:** A force–motion association may bypass the state-versus-change distinction.
- **Synthetic response:** “These carts must have the same speed now because their masses and net forces match.”
- **Alternative explanations:** Initial states assumed equal, velocity/acceleration vocabulary confusion, timing unspecified, P3/P4 gap.
- **Contrast and support:** Supply different initial velocities and the same constant resultant over the same interval; ask starting velocity, change and final velocity separately. Compare opposite initial directions without a collision task. Insistence on equal velocities after successful prerequisite checks favors the hypothesis. Correct equal-change reasoning with wrong arithmetic favors mathematics. Consider T2-001 as an overlapping alternative, not extra confirmation.
- **Disconfirming evidence:** Predicts equal changes but different final velocities in a new initial-condition comparison and explains why.
- **Repair focus:** Separate the initial state from the change over a specified interval.

**Candidate intervention sequence:**

- **Explanation:** Resultant/mass determine acceleration, not the initial velocity.
- **Visual/analogy:** Different starting velocity arrows with equal change arrows.
- **Guided reasoning:** Write starting state and change separately before end-state comparison.
- **Practice pattern:** Equal masses/resultants with different stated initial velocities.
- **Independent transfer:** Compare force from parallel velocity-time traces with different intercepts.
- **Delayed reassessment:** Fresh narrative with new initial directions/interval; require an explanation.

### MEC-T3-002 — More mass gives more acceleration for a fixed resultant

- **Node:** T3.
- **Possible incorrect belief:** A greater-mass body accelerates more under the same resultant.
- **Scientific understanding:** In the constant-mass model, acceleration magnitude is inversely proportional to mass at fixed resultant.
- **Possible origin:** Size/strength intuition or an incorrect rearrangement may dominate comparison.
- **Synthetic response:** “Under the same net force, the 2m cart accelerates twice as much as the m cart.”
- **Alternative explanations:** Algebra error, applied/resultant confusion, larger force assumed, labels reversed.
- **Contrast and support:** Fix resultant for m versus 2m, then double both mass and resultant in a different case. Check reciprocal-ratio skills independently. Persistent more-mass/more-acceleration reasoning despite correct mathematics favors the hypothesis. Correct inverse reasoning with calculation slips favors mathematics; misunderstood force conditions cannot support the conceptual claim.
- **Disconfirming evidence:** Explains both inverse-mass and doubled-force/doubled-mass comparisons correctly in new representations.
- **Repair focus:** Controlled-variable reasoning with explicitly specified resultant.

**Candidate intervention sequence:**

- **Explanation:** More mass at the same resultant means less acceleration within this model.
- **Visual/analogy:** Table holding resultant fixed while changing mass; arrow lengths must not imply speed.
- **Guided reasoning:** Predict qualitative change before checking a simple ratio.
- **Practice pattern:** Fixed-force comparisons mixed with doubled-force/doubled-mass cases.
- **Independent transfer:** Given acceleration/mass ratios, identify compatible resultant ratios.
- **Delayed reassessment:** New symbols or verbal comparisons; check whether inverse reasoning survives.

### MEC-T4-001 — Stronger agent produces the larger paired force

- **Node:** T4.
- **Possible incorrect belief:** The more massive/stronger object exerts a larger interaction force than it receives.
- **Scientific understanding:** The same Newtonian interaction at the same time gives equal-magnitude opposite forces on different bodies; accelerations need not be equal.
- **Possible origin:** Unequal effort, size or visible effect may substitute for force comparison.
- **Synthetic response:** “The heavier cart pushes the lighter one harder than the lighter one pushes back.”
- **Alternative explanations:** Different times compared, resultant mistaken for interaction force, acceleration confused with force, ambiguous wording.
- **Contrast and support:** Specify simultaneous contact between unequal-mass carts, without a collision task. Ask each interaction force separately from resultants; repeat with equal masses/swapped labels. A pattern of unequal paired forces justified by size across contrasts favors the hypothesis. Equal paired forces with unequal acceleration predictions does not.
- **Disconfirming evidence:** Explains equal paired forces despite unequal motion effects and names both recipients in a new interaction.
- **Repair focus:** Separate paired-force equality from total force and acceleration on each body.

**Candidate intervention sequence:**

- **Explanation:** Equal paired forces do not require equal masses or accelerations.
- **Visual/analogy:** Separate body panels with source-to-recipient arrows.
- **Guided reasoning:** Reverse source/recipient for one interaction; inventory other forces separately.
- **Practice pattern:** Compare paired forces while varying mass labels and holding interaction/time explicit.
- **Independent transfer:** Person pushing a stationary wall; ask for its corresponding force on the person without an equal-acceleration claim.
- **Delayed reassessment:** New two-body contact; distinguish interaction pair from resultant without size cues.

### MEC-T4-002 — Interaction pair cancels on one body

- **Node:** T4.
- **Possible incorrect belief:** A body's force on its partner cancels the partner's force on it when finding that one body's resultant.
- **Scientific understanding:** Only forces acting on the selected body enter its resultant; the paired force acts on the other body.
- **Possible origin:** “Equal and opposite” may be detached from recipient bookkeeping.
- **Synthetic response:** “The cart cannot accelerate because its push on the hand cancels the hand's push on the cart.”
- **Alternative explanations:** Combined two-body system intended, same-body balanced forces meant, recipient unclear, zero-acceleration premise assumed.
- **Contrast and support:** Request the cart inventory only, label every recipient, then request the hand inventory. Compare equal opposite forces both acting on the cart. Inclusion of cart-on-hand force in the cart inventory across clear formats favors the hypothesis. A deliberately chosen combined system requires clarification, not diagnosis. Same-body balancing confusion belongs with T2-002.
- **Disconfirming evidence:** Keeps paired forces on different bodies and explains why equal opposite forces on one body are a different comparison.
- **Repair focus:** Identify the selected body and force recipients before summing.

**Candidate intervention sequence:**

- **Explanation:** The partner receives the paired force; it is absent from this body's inventory.
- **Visual/analogy:** Separate boxes for bodies; attach arrows to recipients.
- **Guided reasoning:** Sort source-on-recipient labels by body before adding components.
- **Practice pattern:** Paired forces across bodies versus balancing forces on one body.
- **Independent transfer:** New contact arrangement with supplied arrows on both bodies; select those acting on a chosen body.
- **Delayed reassessment:** Fresh separate-body diagrams with the chosen body changed; require explanations.

## Review protocol and unresolved release gates

**Teacher review required:** check each scientific statement, node anchor, idealization, language, alternative explanation, prerequisite check, contrast validity, key/reasoning rubric and disconfirming pattern. Avoid duplicate labels for the same evidence. Specifically distinguish T1-002 (invented interaction), T2-001 (resultant needed for motion) and T3-001 (force fixes velocity); keep them competing unless evidence differentiates them. Distinguish T2-002 (inventory versus sum) from T4-002 (recipient/system boundary).

Before learner use, prepare reviewed item/repair/transfer versions and an independent teacher-adjudicated synthetic or reviewer-authored evaluation pack. Reviewers judge response evidence without first seeing proposed classifications; retain disagreement. Keep held-out evaluation tasks out of refinement and repair examples. This document authorizes neither recruitment nor student-data collection.

Independent transfer means a new task without the original solution cues/feedback, not statistical independence. Delayed reassessment uses an agreed later interval and unfamiliar surface details while preserving the reasoning target. The interval is **Unresolved** and must be pre-specified. Record exposure, hints and missing follow-up; nonparticipation is not failure. A correct transfer response alone does not establish mastery, and improvement alone does not prove the original hypothesis.

No entry is approved for automatic diagnosis. No numerical confidence or learning-effect threshold is set. P0-5 and the conceptual part of P0-6 advance, while curriculum/textbook applicability, qualified review, diagnostic evaluation and pilot safety gates remain open. No application code, model/provider integration or real learner records are added.
