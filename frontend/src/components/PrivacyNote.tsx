export function PrivacyNote({ kicker, children }: { kicker: string; children: string }) {
  return (
    <aside className="privacy-note">
      <p className="kicker">{kicker}</p>
      <p>{children}</p>
    </aside>
  )
}
