const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-semibold text-lg">
          Issac Jeferry
        </h1>

        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#achievements" className="hover:text-blue-400">Achievements</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
