import styles from "../../styles/Forms.module.css";

export default function LoginForm({ loginUserFunction }) {
  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <h2>Login Form</h2>
        <form className={styles.form} onSubmit={(e) => loginUserFunction(e)}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" />

          <button type="submit">Login User</button>
        </form>
      </div>
    </div>
  );
}
