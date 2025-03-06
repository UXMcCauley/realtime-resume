export function CareerTotality({ employee }) {
  return (
    <section className="dashboard-section">
      <h2 className="section-title">Career Totality</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-3">
          <h3 className="font-medium">Education</h3>
          <div className="text-sm space-y-2">
            <p>MSc Computer Science</p>
            <p>BSc Software Engineering</p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-medium">Certifications</h3>
          <div className="text-sm space-y-2">
            <p>AWS Solutions Architect</p>
            <p>Google Cloud Professional</p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-medium">Industry Impact</h3>
          <div className="text-sm space-y-2">
            <p>3 Conference Talks</p>
            <p>5 Published Articles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
