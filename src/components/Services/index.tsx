import ServiceCard from "./ServiceCard";
import "../../styles/services.css";

const SERVICES = [
  "Strategic Positioning and planning",
  "Training",
  "Finance management",
  "Human Resource advisory level",
  "Event management",
  "Pre opening",
  "Sustainable practices and circular economy",
  "Promoting equity and diversity within the hospitality industry",
  "Crafting and growing unique brands for our clients through strategic positioning",
];
function Services() {
  return (
    <section id="services">
      <div className="services-grid">
        {SERVICES.map((service) => (
          <ServiceCard key={service} title={service} />
        ))}
      </div>
      <div>
        <p>Start your creative journey with us</p>
      </div>
    </section>
  );
}

export default Services;
