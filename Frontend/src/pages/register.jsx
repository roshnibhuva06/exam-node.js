import React from "react";

export default function Register() {
    return (

        <div>
            <div>
                <h2>Register</h2>
                <div className="register-form">
                    <div className="form-group">
                        <input name="username"/><br/>
                            <input name="password" type="password"/><br/>

                                <select name="role">
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select><br/>

                                    <button>Register</button>
                                    <div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </div>
          );
    
}
   