import NotePreview from '../NotePreview/NotePreview'
import "./NoteList.scss"

type Props = {}

function NoteList({}: Props) {
  return (
    <div>NoteList
      <NotePreview />
    </div>
  )
}

export default NoteList