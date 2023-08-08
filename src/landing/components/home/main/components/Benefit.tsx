import { InfoMain } from "../../../../interfaces/home-info-main.interface";
import "./Benefit.css";

interface Props {
  benefit: InfoMain;
}

export const Benefit = ({ benefit }: Props) => {
  const { image, title, description } = benefit;

  return (
    <>
      <div className="container-benefit-grid">
        <img src={image} alt="image-benefit" />

        <div>
					<h3>{title}</h3>
					<p>{description}</p>
        </div>
      </div>
    </>
  );
};
