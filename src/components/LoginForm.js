import React, {useState} from 'react'


function LoginForm({loginFunc, error}) {
  const [details, setDetails] = useState({email: "", password:""});
  const submitHandler = e => {
    e.preventDefault();
    loginFunc(details);
  }

  
  
  return (
<div className="container my-4">
<form  className= "text-center border border-success p-5 col-md-4 offset-md-4 shadow-sm p-3 mb-5 rounded" onSubmit={submitHandler}>
<div>
  <h2 className="h4 mb-4">Sign in</h2>
  {(error !="")? (<div className="error">{error}</div>): ""}
  <div>
    {/* <label> Email: </label> */}
    <input type="email" name="email" id="email"  className="form-control mb-4" placeholder="E-mail"  onChange= {e => setDetails({...details, email: e.target.value})} value={details.email}/>
  </div>
  <div>
    {/* <label> password: </label> */}
    <input type="password" name="password" id="password"  className="form-control mb-4" placeholder="Password" onChange= {e => setDetails({...details, password: e.target.value})} value={details.password}/>
  </div>
  <input className="btn btn-success btn-block btn-rounded my-4" type="submit" value="LOGIN"/>
</div>

</form> 
</div>
)
}

export default LoginForm;