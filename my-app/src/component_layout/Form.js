import React from 'react'
import bearsPicture from '../1654034386834.jpg'


function Form() {
  return (
    <div style={{backgroundImage: 'url('+bearsPicture+')'}}>
      <h1> workshop react</h1>
      <h2> form</h2>
      <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword"/>
    </div>
  </div>
    </div>
  )
}

export default Form

    
   
    