import Header from "../header/Header";
import { NoteContainer } from "./NoteContainer";

const NoteBlock = (props) => {
  return (
    <div>
      <Header tableType='notes'/>
      <NoteContainer/>
    </div>
  )
}

export default NoteBlock
