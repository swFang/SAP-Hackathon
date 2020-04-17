import React from 'react';

function Login() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <div class="card" id="login-card">
            <div class="card-body">
              <h5 class="card-title login-card-title">Co-Ready</h5>
              <label class="login-label">
                Email
              </label>
              <br/>
              <input class="login-input"></input>
              <br/>
              <br/>
              <label class="login-label">
                Password
              </label>
              <br/>
              <input class="login-input"></input>
              <div class="container">
                <div>
                  <div class="col-2">
                  </div>
                  <div class="col-3">
                   <button>login</button>
                  </div>
                  <div class="col-2">
                  </div>
                  <div class="col-3">
                   <button>sign up</button>
                  </div>
                  <div class="col-2">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
