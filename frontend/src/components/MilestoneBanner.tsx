import badgeUrl from '../assets/badge.png'

export function MilestoneBanner({
  kicker,
  title,
  detail,
}: {
  kicker: string
  title: string
  detail: string
}) {
  return (
    <section className="milestone">
      <img src={badgeUrl} alt="" width={149} height={193} />
      <div>
        <p className="kicker">{kicker}</p>
        <h1 className="display-lg">{title}</h1>
        <p>{detail}</p>
      </div>
    </section>
  )
}
