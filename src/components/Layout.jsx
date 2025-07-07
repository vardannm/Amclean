import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background Animation Layer */}
      <div
        className="absolute inset-0 -z-10 animate-gradient-x bg-gradient-to-r from-slate-50 via-gray-50 to-white bg-size-200"
      />

      {/* Content Layer */}
      <div className="min-h-screen flex flex-col bg-transparent">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
