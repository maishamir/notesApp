import "./SearchInput.scss";
import NewNoteButton from "../NewNoteButton/NewNoteButton";
type Props = {};


function SearchInput({}: Props) {
  return (
    <div className="searchInput">
      <input type="text" name="" id="" className="searchInput__input" placeholder="Search notes" />
      <NewNoteButton />
    </div>
  );
}

export default SearchInput;
