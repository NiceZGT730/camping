import { Darkmode } from "./Darkmode";
import DropdownListMenu from "./DropdownListMenu";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex flex-col sm:flex-row items-center justify-between py-8 sm:items-center gap-4">
        <Logo />
        <Search />
        <div className="flex gap-4">
          <Darkmode />
          <DropdownListMenu />
        </div>
        {/* {Darkmode & Profile} */}
      </div>
    </nav>
  );
};
export default Navbar;
