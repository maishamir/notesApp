import SearchInput from "../SearchInput/SearchInput";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

type Props = {};

function Header({}: Props) {
  return (
    <div>
      Header
      <SearchInput />
      <ThemeToggle />
    </div>
  );
}

export default Header;
