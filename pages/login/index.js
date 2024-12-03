import { useEffect } from "react";
import { useRouter } from "next/router";
import LoginForm from "../../components/LoginForm";
import styles from "../../styles/Forms.module.css";

export default function Login({ isLoggedIn, loginUserFunction }) {
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) router.push("/");
  }, [isLoggedIn]);
  return (
    <div className={styles.container}>
      <LoginForm loginUserFunction={loginUserFunction} />
    </div>
  );
}
