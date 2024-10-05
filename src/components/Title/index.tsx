import styles from "@/styles/components/title.module.scss";

type PropsType = {
  text: string;
}

const Title: React.FC<PropsType> = (props) => {
  return (
    <h2 className={styles.title}>{props.text}</h2>
  )
}

export default Title;