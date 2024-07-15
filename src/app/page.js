import Image from "next/image";
import Logo from "./Images/logo.png";
import LogoApp from "./Images/logoapp.png";
export default function Home() {
  return (
    <>
      <div className="box"></div>
      <div className="actionbar">
        <Image
          src={Logo}
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
        <div className="actionbartitle">
          <h6>H.2B.I SOLUTIONS</h6>
        </div>
      </div>
      <form>
        <div className="container">
          <Image src={LogoApp} alt="App Logo"/>
          <h2>Gest Finance</h2>
          <div className="containerform">
            <input required type="text" placeholder="User Name" />
            <input required type="password" placeholder="Password" />
          </div>
          <button type="submit">Get Started</button>
        </div>
        <div className="footer">
          <h1>
            78, Bd la résistance Res El Marzouki - Casablanca
          </h1>
          <div className="footerbottom">
            <h1>contact.h2bisolutions@gmail.com</h1>
            <h1>Tél : +212 664099003</h1>
          </div>
        </div>
      </form>
    </>
  );
}
