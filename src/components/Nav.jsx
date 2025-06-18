function Nav() {
  return (
    <header className="sticky top-0 hidden md:block  z-50">
      <nav 
        className="text-white px-12 py-4 flex items-center justify-between mx-auto"
        aria-label="navigace"
      >
        <a href="/">
          <div className="text-lg font-semibold">
            František Bašta
          </div>
        </a>
      </nav>
    </header>
  )
}

export default Nav
