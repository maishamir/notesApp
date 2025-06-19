import NotePreview from '../NotePreview/NotePreview'
import "./NoteList.scss"
import notes from "../../data/notes.tsx";
import {Note} from "../../types/Note.tsx"

type Props = {}

function NoteList({}: Props) {
  return (
    <div className='notelist'>
      {notes.map((note: Note) => (
        <NotePreview key={note.id} {...note} />
      ))}

    </div>
  )
}

export default NoteList