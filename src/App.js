import { Auth, useAuth } from "@arcana/auth-react";
import { CreateFlow } from "./CreateFlow";

const onLogin = () => {
  return(
      <CreateFlow />
  )
}
function App() {
  const auth = useAuth();
  return (
    <div>
      {auth.loading ? (
        "Loading"
      ) : auth.isLoggedIn ? (
        <CreateFlow />
      ) : (
        <div>
          <Auth externalWallet={true} theme={"light"} onLogin={onLogin}/>
        </div>
      )}
    </div>
  );
}

export default App;
