import "./Nav.css"
function SignInModal() {
  return (
    <div>
      <div
        class="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content rounded-5 shadow">
            <div className="d-flex justify-content-end"> 
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-header p-5 pb-4 border-bottom-0 d-flex justify-content-center">
              <h4 class=" mb-0 text-center">YOUR ACCOUNT FOR EVERYTHING NIKE</h4>
            
            </div>

            <div class="modal-body p-5 pt-0">
              <form class="d-flex flex-column  justify-content-center">
                <div class="form-floating mb-3 ">
                  <input
                    type="email"
                    class="form-control rounded-4"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3 witdh-reset">
                  <input
                    type="password"
                    class="form-control rounded-4"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="mb-3 my-4 form-check d-flex">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label ps-3" for="exampleCheck1">
                    keep me signed in
                  </label>
                  <span className="text-muted ms-4">Forgot Password?</span>
                </div>
               <small>
               <div className="text-center">
                    <p>By logging in, you agree to Nike's Privacy Policy and Terms of Use.</p>
                </div>
               </small>
                <button
                  class="w-100 mb-2 btn btn-sm rounded-4 btn-dark py-2"
                  type="submit"
                >
                  Sign In
                </button>
                <div className="text-center my-3">
                <small className="text-muted text-center">
                Not a member? <a className="link-dark" href="/" > Join Us. </a>
                </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
