# Security Requirements

- Authenticate access to private student/tutor resources; enforce authorization server-side on every request.
- Use least privilege and explicit tutor-to-batch scope. Hidden UI controls are not security.
- Validate inputs, encode outputs, limit payload sizes/timeouts and rate-limit auth, assessment and expensive AI operations.
- Use safe parameterized persistence; separate credentials by environment; encrypt traffic and use supported at-rest encryption.
- Never commit API keys, tokens, passwords, private keys or production connection strings. Rotate exposed credentials.
- Treat user text, uploaded/retrieved content and model output as untrusted. Defend against prompt injection and data exfiltration.
- Never allow model output to execute SQL, code or privileged actions.
- Avoid logging passwords, tokens, full student answers or unnecessary personal data. Restrict audit logs.
- Review dependencies, run security checks, review sensitive migrations and require code review for security-sensitive changes.
- Before a real student pilot, review authentication, authorization, consent, retention, deletion, backups, incident response and third-party data processing.