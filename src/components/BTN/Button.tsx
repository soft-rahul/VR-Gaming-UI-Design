interface Props {
  label: string;
  onChange: () => void;
}
const ButtonSkin = (props: Props) => {
  const { label, onChange } = props;

  return <button onClick={() => onChange()} className="global-button">{label}</button>;
};

export default ButtonSkin;
