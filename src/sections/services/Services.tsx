import { GridItem } from "../../components/gridItem/GridItem";
import { featureData } from "../../utils";
import "./Services.scss";

export const Services = () => {
  return (
    <section id="services" className="features-container">
      <div className="feature-line"></div>
      <h1 className="feature-header">We’re different</h1>
      <div className="features-wrapper">
        {featureData.map((item, key) => (
          <GridItem
            key={key}
            img={item.img}
            description={item.description}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};
