<!DOCTYPE html>
<html>
<head>
    <title>JSSample</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
</head>
<body>

<script type="text/javascript">
    $(function() {
        var params = {
            // Request parameters
        };
      
        $.ajax({
            url: "https://apidata.guidestar.org/essentials/v1?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Subscription-Key","ad450715b04e462f9a893808c8ab28ff");
            },
            type: "POST",
            // Request body
            data: "{body}",
        })
        .done(function(data) {
            alert("success");
        })
        .fail(function() {
            alert("error");
        });
    });
</script>
</body>
</html>



{/* <div className="login-box"> */}
            {/* <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.username} type="text" name="username" />
                    <input onChange={this.handleChange} value={this.state.password} type="password" name="password" />
                    <br />
                    <input className="login-button" type="submit" value="Log in"/>
                </form>
            </div>
            <div className="signup">
            <form onSubmit={this.handleSubmit} >
            <input onChange={this.handleChange} value={this.state.username} type="text" name="username" />
                    <input onChange={this.handleChange} value={this.state.password} type="password" name="password" />
                    <br />
                    <input type="submit" value="Sign up"/>
                </form>     */}
                </div>
            

                {/* <div className="ui placeholder segment">
                  <div className="ui two column very relaxed stackable grid">
                    <div className="column">
                      <div className="ui form">
                        <div className="field">
                          <label>Username</label>
                          <div className="ui left icon input">
                            <input onChange={this.handleChange} type="text" placeholder="Username" name="username"/>
                            <i className="user icon"/>
                          </div>
                        </div>
                      <div className="field">
                        <label>Password</label>
                        <div className="ui left icon input">
                          <input onChange={this.handleChange} type="password" name="password"/>
                          <i className="lock icon"/>
                        </div>
                      </div>
                    <div onClick={this.handleClick} className="ui blue submit button">Login</div>
                  </div>
                </div>
                <div className="middle aligned column">
                  <div className="ui big button">
                    <i className="signup icon"></i>
                    Sign Up
                </div>
              </div>
            </div>
            <div className="ui vertical divider">
              Or
            </div>
          </div> */}
          {/* </div> */}
          // </div>