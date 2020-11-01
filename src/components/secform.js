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
    const MOCK_SERVICE = "http://8e013f28e5dd.ngrok.io/api/userlogin/";
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
    history.push({ pathname: `/CALCULATOR`, state: { patientId: id } });
  };
  render() {
    const { Ptid } = this.state;

    return (
      <div
        className="container-fluid "
        style={{ backgroundColor: "#242F3E", color: "rgb(0, 0, 0)" }}
      >
        <div className="ja">
          <h1
            className="text-center w-100 mt-4"
            color="red"
            style={{
              fontFamily: '"Permanent Marker", cursive',
              fontSize: "3.6rem",
              color: "white",
            }}
            color="white"
          >
            LOGIN
          </h1>
          <div className="fulol">
            <form className="frm">
              <div className="ful">
                <h2>LOGIN DETAILS</h2>

                <div className="top">
                  <label>HOSPITAL ID</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ID"
                    name="Ptid"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="username">PASSWORD</label>
                  <input
                    className="input"
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                  />
                </div>

                <button
                  className="bon"
                  type="submit"
                  onClick={(e) => this.fetchExistingPatient(e, Ptid)}
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
          <div className="dis">
            <h3>THOSE WHO DONT WANT TO SAVE THEIR DETAILS CAN SKIP</h3>
            <button
              type="submit"
              className="yoyod"
              onClick={(e) => this.newPatient(e, Ptid)}
            >
              SKIP
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default secform;
