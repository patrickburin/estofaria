import * as C from "./styles";

interface IProps {
  checked: boolean;
  onChange: () => void;
}

const ButtonMenu = ({ checked, onChange }: IProps) => {
  return (
    <C.Container>
      <input
        type="checkbox"
        id="toggleChecker"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="toggleChecker" id="togglerLabel">
        <div className="checkboxtoggler">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </label>
    </C.Container>
  );
};

export default ButtonMenu;
