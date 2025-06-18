import "./NotePreview.scss";
import {Note} from "../../types/Note"

function NotePreview({ title, content, timestamp, }: Note) {
  return (
    <div className="notePreview">
      <h3 className="notePreview__title">{title}</h3>
      <small className="notePreview__timestamp">{timestamp}</small>
      <p className="notePreview__content">{content}</p>
    </div>
  );
}

export default NotePreview;
