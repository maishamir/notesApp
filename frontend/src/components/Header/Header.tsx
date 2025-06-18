import SearchInput from "../SearchInput/SearchInput";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.scss";

type Props = {};

function Header({}: Props) {
  return (
    <div>
      <h1>Eira</h1>
      <SearchInput />
      <ThemeToggle />
    </div>
  );
}

export default Header;
