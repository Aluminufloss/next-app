import Header from "@/components/Header";

import styles from "@/styles/generatorLayout.module.scss"

const GeneratorLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};

export default GeneratorLayout;