
import NumberCaption from "./NumberCaption";

export default function setCompt() {
  return (
    <div className="flex uppercase my-container">
      <div>
        <NumberCaption desc="Parking Space" num="01" />
      </div>
      <div>
        <NumberCaption desc="Landing Features" num="02" />
      </div>
      <div>
        <NumberCaption desc="Delivery services" num="03" />
      </div>
    </div>
  );
}
