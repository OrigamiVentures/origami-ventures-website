interface ServiceCardProps {
  title: string;
}
function ServiceCard(props: ServiceCardProps) {
  const { title } = props;
  return (
    <div className="service-item">
      <p className="service-title">{title}</p>
    </div>
  );
}

export default ServiceCard;
