import styles from "./title.module.scss";

type PropsType = {
  text: string;
  description?: string;
};

const Title: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{props.text}</h2>
      {props.description && (
        <p className={styles.description}>{props.description}</p>
      )}
    </div>
  );
};

export default Title;
