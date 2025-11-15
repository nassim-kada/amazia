interface PageHeaderProps {
  title: string
  subtitle: string
  bgColor?: 'primary' | 'accent' | 'secondary'
}

export function PageHeader({ title, subtitle, bgColor = 'primary' }: PageHeaderProps) {
  const bgClasses = {
    primary: 'bg-primary text-primary-foreground',
    accent: 'bg-accent text-accent-foreground',
    secondary: 'bg-gradient-to-r from-accent to-primary text-accent-foreground',
  }

  return (
    <section className={`${bgClasses[bgColor]} py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-balance">{title}</h1>
        <p className="text-lg opacity-90">{subtitle}</p>
      </div>
    </section>
  )
}
