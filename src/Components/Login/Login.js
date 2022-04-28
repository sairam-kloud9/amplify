import "./Login.css";

const Login = () => {
  return (
    <div className="modal side_modal" id="login_Modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close modal_close_btn"
              data-dismiss="modal"
            >
              <i class="fa-solid fa-arrow-left-long"></i>
            </button>
            Login
          </div>

          <div className="modal-body">
            <div className="login_div">
              <form className="login_form">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email ID"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-black btn-md">
                    Login
                  </button>
                </div>
                <div className="form-group login_here">
                  <p>
                    Don't have an account?
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#register_Modal"
                    >
                      Register Here
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
