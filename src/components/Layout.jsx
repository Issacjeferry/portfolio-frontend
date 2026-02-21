const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;
