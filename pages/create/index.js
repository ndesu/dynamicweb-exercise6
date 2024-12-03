import { useEffect } from "react";
import { useRouter } from "next/router";
import CreateUserForm from "../../components/CreateUserForm";

export default function createUser({ createUserFunction, isLoggedIn }) {
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) router.push("/");
  }, [isLoggedIn]);

  return (
    <div>
      <CreateUserForm createUserFunction={createUserFunction} />
    </div>
  );
}
