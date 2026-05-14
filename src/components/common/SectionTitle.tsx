import { motion } from 'framer-motion'

type SectionTitleProps = {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
}

function SectionTitle({ eyebrow, title, align = 'left' }: SectionTitleProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-px w-8 bg-cyan-500/50" />
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-6 text-3xl font-bold text-white sm:text-5xl lg:leading-[1.2]">
        {title}
      </h2>
    </motion.div>
  )
}

export default SectionTitle
