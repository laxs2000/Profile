import Layout from '../components/Layout';

export default function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A Next.js-based portfolio website showcasing my work and skills.',
      technologies: ['Next.js', 'TypeScript', 'CSS'],
      link: '#'
    },
    {
      title: 'API Service',
      description: 'Robust REST API with auth, rate-limiting and observability.',
      technologies: ['Node.js', 'Express', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Realtime Dashboard',
      description: 'Data visualization dashboard showing live metrics and alerts.',
      technologies: ['React', 'WebSockets', 'D3'],
      link: '#'
    }
  ];

  return (
    <Layout>
      <h1 style={{ margin: '6px 0 18px 0' }}>My Projects</h1>

      <section className="projects-grid">
        {projects.map((project, idx) => (
          <article key={idx} className="project-card">
            <h3>{project.title}</h3>
            <p className="muted">{project.description}</p>
            <div style={{ marginTop: 12 }}>
              {project.technologies.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>
            <div style={{ marginTop: 12 }}>
              <a href={project.link} className="nav-link" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}