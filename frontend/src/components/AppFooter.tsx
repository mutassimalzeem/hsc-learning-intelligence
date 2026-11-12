export function AppFooter({ note }: { note: string }) {
  return (
    <footer className="site-footer">
      <p>Clearstep · Learn with understanding</p>
      <p>{note}</p>
    </footer>
  )
}
