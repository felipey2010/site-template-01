import "./styles.css";

export default function CustomButton({ imageSrc, title, classname }) {
  return (
    <button name="tab" className={classname}>
      <img src={imageSrc} className="icon-card" alt={title} />
      <span>{title}</span>
    </button>
  );
}
