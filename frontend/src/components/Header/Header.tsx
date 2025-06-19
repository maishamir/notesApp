import SearchInput from "../SearchInput/SearchInput";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.scss";
import NewNoteButton from "../NewNoteButton/NewNoteButton";

type Props = {};

function Header({}: Props) {
  return (
    <div className="header">
      <h1>Eira</h1>
      <SearchInput />
      
      <ThemeToggle />
    </div>
  );
}

export default Header;
