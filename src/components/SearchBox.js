import "./Search.css";
function SearchBox() {
  return (
    <div>
      <div
        className=" offcanvas offcanvas-top d-flex fullscreen-search"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header mt-0 pt-0 ">
          <a className="nike-logo" href="/">
            <svg
              class="pre-logo-svg"
              height="60px"
              width="60px"
              fill="#111"
              viewBox="0 0 69 32"
            >
              <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
            </svg>
          </a>
          <div className="d-flex flex-column width-70 my-2">
            <form className="d-flex  ">
              <div className="d-flex width-140">
                <button className="btn btn-search" type="button">
                  <svg
                    class="pre-search-input-icon"
                    fill="#111"
                    height="30px"
                    width="30px"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                  </svg>
                </button>
                <input
                  className="form-control "
                  type="search"
                  aria-label="Search"
                  placeholder="Search"
                />
              </div>
            </form>
            <div>
              <ul className="navbar-nav ms-4 my-4 text-dark link-dark "> 
                <li class="nav-item active">
                 <span className="text-muted">Popular Search Terms</span>
                </li>
                <li class="nav-item link-dark "> 
                  <a class="nav-link font-weight-bold" href="/">
                    Air Force 1
                  </a>
                </li>
                <li class="nav-item link-dark "> 
                  <a class="nav-link font-weight-bold" href="/">
                    Jordan
                  </a>
                </li>
                <li class="nav-item link-dark  "> 
                  <a class="nav-link font-weight-bold" href="/">
                    Air Max
                  </a>
                </li>
                <li class="nav-item link-dark "> 
                  <a class="nav-link font-weight-bold" href="/">
                    Blazer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body"></div>
      </div>
    </div>
  );
}
export default SearchBox;
