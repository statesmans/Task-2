import Header from "../header/Header";
import NoteContainer from "./NoteContainer";

const NoteBlock = (props) => {
  return (
    <div>
      <Header tableType='noteList'/>
      <NoteContainer/>
    </div>
  )
}

export default NoteBlock
