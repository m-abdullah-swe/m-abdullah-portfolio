
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface NavbarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

const Navbar = ({ activeSection, onNavClick }: NavbarProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">M.Abdullah.SE</span>
          <div className="flex items-center gap-8">
            {["home", "about", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => onNavClick(item)}
                className={`nav-link ${
                  activeSection === item ? "text-foreground after:scale-x-100" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-accent/10 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
