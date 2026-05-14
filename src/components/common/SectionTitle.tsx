type SectionTitleProps = {
  eyebrow: string
  title: string
}

function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    </div>
  )
}

export default SectionTitle
