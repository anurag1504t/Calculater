import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import "../css/login.css";

import { Redirect } from "react-router-dom";
/* isme i need to make 2 apis 

localhost8000/api/userdata/id for existing button

localhost8000/api/userdata for new patient button

then when i submit calculator.js i to post that forms data on respective api

Even i need to send the patient id to calculator.js file and udhar se on post request

*/
class secform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Ptid: null,
    };
  }

  fetchExistingPatient = (id) => {
    const MOCK_SERVICE = "http://4360cf31a54f.ngrok.io/api/userlogin/";
    fetch(`${MOCK_SERVICE}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data.text);
        }
      })
      .catch((e) => {
        this.setState({ errors: e.error, isAuthenticated: false });
      });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  newPatient = (e, id) => {
    const {
      props: { history },
    } = this;
    e.preventDefault();
    history.push({ pathname: `/calculator`, state: { patientId: id } });
  };
  render() {
    const { Ptid } = this.state;

    return (
      <div className="jabey">
      <div className="fulol">
        <form className="frm">
        <div className="ful">
        <h2>LOGIN DETAILS</h2>

          <div className="top">
            <label>HOSPITAL ID</label>
            <input placeholder="ID" name="Ptid" onChange={this.handleChange} />
            
          </div>
          
          <div className="form-group">
              <label htmlFor="username">PASSWORD</label>
              <input type="text" name="username"  onChange={this.handleChange}/>
            </div>
          <div className="bon">
            <button
              type="submit"
              onClick={(e) => this.fetchExistingPatient(e, Ptid)}
            >
              LOGIN
            </button>

          </div>
          </div>
        </form>
        <button type="submit" className="yoyo" onClick={(e) => this.newPatient(e, Ptid)}>
              SKIP
            </button>
      </div>
      </div>
    );
  }
}
export default secform;
