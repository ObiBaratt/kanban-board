import { auth } from "../../utils/firebaseConfig";

import DemoBoard from "../DemoBoard/DemoBoard";
import Navbar from "../Navbar/Navbar";
import { logout } from "../Login/loginHandler";

export default function Home() {

  if (auth.currentUser) {
    logout();
  }
    return (
        <>
          <Navbar />
          <DemoBoard />
        </>
    )
}
