# Decision Register

Record accepted decisions and rationale here; use docs/templates/ADR_TEMPLATE.md for substantial architecture decisions.

- **DEC-001 Diagnosis-first product — working decision.** Differentiate through evidence-linked concept diagnosis and targeted repair, not a generic chatbot/question bank. Revisit if discovery disproves the pain.
- **DEC-002 Bangladesh HSC Science — working decision.** Narrow first audience for curriculum and pilot focus.
- **DEC-003 Physics 1st Paper Mechanics — provisional.** Candidate initial scope only; teacher and current syllabus validation required.
- **DEC-004 Hybrid B2C + B2B — hypothesis.** Student subscription plus tutor/coaching-centre plans; validate willingness to pay.
- **DEC-005 Modular monolith — proposed baseline.** Lower operational burden for a small team; revisit only with measured need.
- **DEC-006 LLMs do not determine mastery — safety rule.** Mastery and diagnostic state require evaluated evidence and documented rules.
- **DEC-007 Working UI tokens — working decision (12 Nov 2026).** Context: the approved screen exports specify a visual system, while this document previously left brand tokens undecided. Options: leave the interface untokened until a brand decision, or implement the exported palette as working UI tokens. Choice: the frontend uses the exported palette and type. Trade-off: the screens can be built consistently, without treating `clearstep.` or the Year 9 label as a final brand or a change to the HSC scope. Revisit when the brand name and syllabus level are confirmed.

New decisions must include context, options, choice, trade-offs, owner/date and revisit conditions.