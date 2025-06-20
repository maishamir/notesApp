import NewNoteButton from "../NewNoteButton/NewNoteButton";
import NoteList from "../NoteList/NoteList";
import "./SideBar.scss";

type Props = {};

function SideBar({}: Props) {
  return (
    <div className="sidebar">
      <NoteList />
    </div>
  );
}

export default SideBar;
