import "./Register.css";

const Register = () => {
  return (
    <div className="modal side_modal" id="register_Modal">
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
            Register
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
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-black btn-md">
                    Register
                  </button>
                </div>
                <div className="form-group login_here">
                  <p>
                    Already Registered?
                    <a href="#" data-toggle="modal" data-target="#login_Modal">
                      Login Here
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

export default Register;
