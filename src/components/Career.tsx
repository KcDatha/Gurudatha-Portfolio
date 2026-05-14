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
                <h5>Adroit Global Solutions · Bengaluru, India · Hybrid</h5>
              </div>
              <h3>2022–2023</h3>
            </div>
            <p>
              Developed high-throughput payment processing microservices using
              Java 11, Spring Boot, and Spring Cloud handling millions of daily
              transactions. Improved API response times by 30% through query
              optimization and connection pooling. Designed event-driven
              architectures with Apache Kafka for exactly-once delivery across
              distributed systems. Deployed on AWS (EC2, ECS, Lambda) with
              Terraform and Docker/Kubernetes, and drove CI/CD pipelines
              achieving 90%+ code coverage via Jenkins and GitHub Actions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>MyUI.AI · Clemson, SC · Remote</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing responsive, production-ready UIs for resident services
              including Meals, Transportation, Service Requests, Activities, and
              Community Communication. Built kiosk-first interfaces optimized
              for touch interactions and accessibility. Integrated frontend
              applications with secure backend APIs for authentication, real-time
              updates, and transactional workflows. Collaborated with backend and
              infrastructure teams to align UI behavior with real-time systems
              and multi-tenant platform requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
