const members = [
  { name: "Sam", role: "Lead Pastor" },
  { name: "Lorem Ipsum", role: "Role" },
  { name: "Lorem Ipsum", role: "Role" },
  { name: "Lorem Ipsum", role: "Role" },
];

function LeadershipTeam() {
  return (
    <section className="bg-surface-container-low py-section-padding-mobile md:py-section-padding-desktop px-gutter">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col items-center gap-3 mb-stack-lg">
          <h2 className="font-headline-md text-headline-md text-trust-navy text-center">
            Our Leadership
          </h2>
          <div className="w-20 h-1 bg-action-blue rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-surface rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(30,41,59,0.05)] border border-surface-variant/50"
            >
              <div className="w-full aspect-square mx-auto md:w-full md:h-auto md:aspect-square bg-surface-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-outline text-3xl md:text-6xl">
                  person
                </span>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-headline-sm text-headline-sm text-trust-navy">
                  {member.name}
                </h3>
                <p className="text-secondary font-label-md text-label-md mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipTeam;
