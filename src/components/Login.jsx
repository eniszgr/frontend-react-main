import Header from "./Header";
import React from "react";
import { useLocation} from "react-router-dom";
function Login() {

    return (
        <>
          <Header />

          <h3>Login</h3>
         <div className="row">
         <div className="col-xs-12 col-md-6">
            <form
              className="form-horizontal"
              id="yorumEkle"
              onSubmit={(evt) => onSubmit(evt)}
            >
              <div className="form-group">
                <label className="col-sm-2 control-label">e-posta:</label>
                <div className="col-sm-10">
                <input type="text" className="form-control input-lg" />
              </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">şifre:</label>
                <div className="col-sm-10">
                <input type="text" className="form-control input-lg" />
              </div>
              </div>
              {/* <Link to="/register">Kayıt ol</Link> */}
              <a href="register">kayıt ol</a>
              <button className="btn btn-default pull-right">Girişyap </button>
            </form>
          </div>
         </div>
        </>
      );
  }
  export default Login;
