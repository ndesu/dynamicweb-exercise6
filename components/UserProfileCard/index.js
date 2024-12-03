import styles from "../../styles/Forms.module.css";

export default function UserProfileCard({ userInformation }) {
  return (
    <div className={styles.container}>
      <div className={styles.profilePage}>
        <h2>User Profile</h2>
        <p>
          Email: <em>{userInformation?.email}</em>
        </p>
      </div>
    </div>
  );
}
