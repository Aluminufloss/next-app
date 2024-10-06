import Header from "@/components/Header";

import styles from "@/styles/layouts/calculatorLayout.module.scss";

const CalculatorLayout = ({
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

export default CalculatorLayout;