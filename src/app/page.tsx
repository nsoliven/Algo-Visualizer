import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faCode } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <FontAwesomeIcon icon={faCode}/>
      <Header/>
    </div>
  );
}
