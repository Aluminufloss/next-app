import styles from "./input.module.scss";

type PropsType = {
  type: string;
  placeholder: string;
  value: string | number;
  min?: number;
  max?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input: React.FC<PropsType> = (props) => {
  return (
    <input
      className={styles.input}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      min={props.min}
      max={props.max}
    />
  );
};

export default Input;
