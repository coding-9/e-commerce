import React from 'react';
import UseForm from './UseForm';
function Form() {
  // Define your state schema
  const stateSchema = {
    fname: { value: '', error: '' },
    lname: { value: '', error: '' },
  };
  // Define your validationStateSchema
  // Note: validationStateSchema and stateSchema property
  // should be the same in-order validation works!
  const validationStateSchema = {
    fname: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
        error: 'Invalid e-mail format.',
      },
    },
    lname: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z0-9._%+-]+$/,
        error: 'Invalid password format.',
      },
    },
  };
  // //Define the redirection when Onclick the sumbit button
  // let history = useHistory();
  // let location = useLocation();

  // let { from } = location.state || { from: { pathname: "/public" } };
  // let login = () => {
  //   fakeAuth.authenticate(() => {
  //     history.replace(from);
  //   });
  // };
  
  function onSubmitForm(state) {
    alert(JSON.stringify(state, null, 2));
  }
  const { state, handleOnChange, handleOnSubmit, disable } = UseForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  );
  const errorStyle = {
    color: 'red',
    fontSize: '13px',
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="fname">
            E-mail
            <input
              type="text"
              name="fname"
              value={state.fname.value}
              onChange={handleOnChange}
            />
          </label>
          {state.fname.error && <p style={errorStyle}>{state.fname.error}</p>}
        </div><div>
          <label htmlFor="lname">
            Password
            <input
              type="text"
              name="lname"
              value={state.lname.value}
              onChange={handleOnChange}
            />
          </label>
          {state.lname.error && <p style={errorStyle}>{state.lname.error}</p>}
        </div>
        <input type="submit" name="submit" disabled={disable} />
      </form>
    </div>
  );
}
export default Form;