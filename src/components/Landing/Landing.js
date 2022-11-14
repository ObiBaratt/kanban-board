import { auth } from "../../utils/firebaseConfig";

import DemoBoard from "../DemoBoard/DemoBoard";
import Navbar from "../Navbar/Navbar";
import { logout } from "../Login/loginHandler";

import "./Landing.css";

export default function Landing() {
  if (auth.currentUser) {
    logout();
  }
  return (
    <>
      <Navbar />
      <header>Welcome to the Kanbaneer Demo Page!</header>
      <section id="description">
        <h3>Interested in a personal board? Click the button in the top right!</h3>
        <h3>Otherwise, check out the demo below.</h3>
      </section>
      <section id="demoBoard">
        <DemoBoard />
      </section>
    </>
  );
}
