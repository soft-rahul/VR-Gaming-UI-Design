import { Howl } from "howler";
import ButtonClickSound from "../../assets/clickSound.wav";

interface Props {
  label: string;
  onChange: () => void;
}
const ButtonSkin = (props: Props) => {
  const { label, onChange } = props;
  const clickSound = new Howl({
    src: [ButtonClickSound],
  });
  return (
    <button
      onClick={() => {
        clickSound.play();
        onChange();
      }}
      className="global-button"
    >
      {label}
    </button>
  );
};

export default ButtonSkin;
