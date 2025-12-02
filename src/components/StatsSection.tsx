const stats = [
  { value: "3-6 weeks", label: "from discovery to deployed automation" },
  { value: "100%", label: "process adoption rate post-launch" },
  { value: "<4 months", label: "average ROI payback" },
  { value: "85%", label: "of clients expand to new automation projects" },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Measured by impact, not promises
          </h2>
          <p className="text-muted-foreground text-lg">
            Because good automation doesn't just work — it pays off
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
