import Header from "./Header";
import React from "react";
import { useLocation} from "react-router-dom";
function Register() {

    return (
        <>
          <Header />
          <h3>Register</h3>
         <div className="row">
         <div className="col-xs-12 col-md-6">
            <form
              className="form-horizontal"
              id="yorumEkle"
              onSubmit={(evt) => onSubmit(evt)}
            >
                <div className="form-group">
                <label className="col-sm-2 control-label">Ad-Soyad:</label>
                <div className="col-sm-10">
                  <input type="text" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">e-posta:</label>
                <div className="col-sm-10">
                  <input type="text" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">şifre:</label>
                <div className="col-sm-10">
                  <input type="text" />
                </div>
              </div>
              {/* <Link to="/login" >giriş yap</Link> */}
              <a href="login">giriş yap</a>
              <button className="btn btn-default pull-right">Kayıt ol </button>
            </form>
          </div>
         </div>
        </>
      );
  }
  export default Register;
