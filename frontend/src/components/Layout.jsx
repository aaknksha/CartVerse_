import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        {children}
      </main>
    </>
  );
}

export default Layout;