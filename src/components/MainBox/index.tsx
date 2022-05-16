import { DarkModeButton } from "./DarkModeButton";
import { Footer } from "./Footer";
import styles from "./styles.module.scss";

interface MainBoxProps {
  children: JSX.Element;
}

export function MainBox({ children }: MainBoxProps) {
  return (
    <div className={styles.container}>
      <DarkModeButton />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}
