export function setupModal() {
  const modalContainer = document.getElementById('modal-container');
  modalContainer.innerHTML = `
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="loginModalLabel">Login/Sign Up</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ul class="nav nav-tabs" id="authTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">Login</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup" type="button" role="tab" aria-controls="signup" aria-selected="false">Sign Up</button>
              </li>
            </ul>
            <div class="tab-content" id="authTabContent">
              <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                <div class="form-container">
                  <label for="login-username">Username/Email ID/Number</label>
                  <input type="text" id="login-username" placeholder="Enter your username/email">
                  <label for="login-password">Password</label>
                  <input type="password" id="login-password" placeholder="Enter your password">
                  <div class="auth-buttons">
                    <button>Login with Google</button>
                    <button>Login with Facebook</button>
                  </div>
                  <button>Submit</button>
                </div>
              </div>
              <div class="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
                <div class="form-container">
                  <label for="signup-username">Username/Email ID/Number</label>
                  <input type="text" id="signup-username" placeholder="Enter your username/email">
                  <label for="signup-password">Password</label>
                  <input type="password" id="signup-password" placeholder="Enter your password">
                  <label for="signup-confirm-password">Confirm Password</label>
                  <input type="password" id="signup-confirm-password" placeholder="Confirm your password">
                  <div class="auth-buttons">
                    <button>Signup with Google</button>
                    <button>Signup with Facebook</button>
                  </div>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
