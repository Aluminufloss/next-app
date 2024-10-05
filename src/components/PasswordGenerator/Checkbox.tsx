import { ChangeEvent } from "react";

import styles from "@/styles/components/checkBox.module.scss";

type PropsType = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  flag: boolean;
  text: string;
};

const Checkbox: React.FC<PropsType> = (props) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type="checkbox"
        checked={props.flag}
        onChange={props.onChange}
      />
      <span className={styles.customCheckbox}></span>
      {props.text}
    </label>
  );
};

export default Checkbox;
