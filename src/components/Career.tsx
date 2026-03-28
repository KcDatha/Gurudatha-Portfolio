import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.S. Computer Science</h4>
                <h5>Clemson University</h5>
              </div>
              <h3>2023–2025</h3>
            </div>
            <p>
              Relevant coursework in software engineering, distributed systems,
              databases, operating systems, algorithms, and networking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>PayPal — San Jose, CA</h5>
              </div>
              <h3>2022–2023</h3>
            </div>
            <p>
              Built high-throughput payment microservices using Java 11, Spring
              Boot, and Apache Kafka handling 2M+ daily transactions. Improved
              API response times 30% through query optimization and achieved 92%
              code coverage across 15+ repositories. Deployed on AWS with
              Terraform IaC and Docker/Kubernetes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>MyUI.ai (Quick Connect) — Dallas, TX</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architected 8 Azure Functions microservices behind APIM gateway.
              Built cross-platform kiosk UI with .NET MAUI and SignalR for
              real-time communication across 20+ concurrent devices. Reduced p95
              API latency 35% with Cosmos DB partition optimization and Redis
              caching.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
