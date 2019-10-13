import React, { Component } from "react";
//import { BrowerRoute as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import fire from "./config/Fire";
var Link = require("react-router-dom").Link;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTeacher: false
    };
  }

  logout() {
    fire.auth().signOut();
  }
  learner() {
    return (
      <div>
        <h2>Courses</h2>
        <p>
          These are some lessons that we thought you might find interesting.
        </p>
        <p>Use the search bar below to find the lesson you are looking for.</p>
        <input
          type="text"
          id="Input"
          onkeyup="filter()"
          placeholder="Search for lessons..(does not work)"
        ></input>
        <div>
          <ul id="lessons">
            <li>
              <a>
                Algebra I: Course made by Mark White: 4.5/5 rating: Watch here
                -> http://localhost:3000/algebraI
              </a>
            </li>
            <li>
              <a>
                Algebra II: Course made by John Smith: 5/5 rating: Watch here ->
                localhost:3000/algebraII
              </a>
            </li>
            <li>
              <a>
                React: Course made by Jeremy Dun: 2/5 rating: Watch here->
                localhost:3000/react
              </a>
            </li>
            <li>
              <a>
                Calculus: Course made by Kevin Zhang: 4/5 rating: Watch here ->
                localhost:3000/calculus
              </a>
            </li>
            <li>
              <a>
                Python: Course made by Hardit Singh: 5/5 rating: Watch here ->
                localhost:3000/python
              </a>
            </li>
            <li>
              <a>
                Haiku: Course made by Johny Johny: 1/5 rating: Watch here ->
                localhost:3000/haiku
              </a>
            </li>
            <li>
              <a>
                Music: Course made by Kelvin Smith: 4.75/5 rating: Watch here ->
                localhost:3000/music
              </a>
            </li>
          </ul>
          <h2>Student Dashboard</h2>
          <p>
            In the student dashboard you will find all your assigned tasks,
            courses, and a live chat with your teacher{" "}
          </p>
          <h4>Enrolled Courses</h4>
          <ul id="courses">
            <li>
              <a href="">
                You currently are not enrolled in any courses. Enroll in one by
                searching for one in the list above
              </a>
            </li>
            <li></li>
          </ul>
          <h4>Assigned Tasks</h4>
          <ul id="tasks">
            <li>
              <a href="">You currently don't have any assigned tasks. </a>
            </li>
            <li></li>
          </ul>
          <h4>Live Chat</h4>
          <input
            type="chat"
            id="Input"
            placeholder="send a message to a teacher..(does not work)"
          ></input>
        </div>
      </div>
    );

    {
      function filter() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("Input");
        filter = input.value.toUpperCase();
        ul = document.getElementById("lessons");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }
    }
  }
  teacher() {
    return (
      <div>
        <h2>Lesson Builder</h2>
        <input
          type="text"
          id="lessonname"
          placeholder="Your Name"
          //value=""
        ></input>
        <input
          type="text"
          id="lessonname"
          placeholder="Name of lesson.."
          //value=""
        ></input>
        <input
          type="lessonabstract"
          id="Input"
          placeholder="150 word abstract on your lesson..."
          //value=""
        ></input>
        <label>Upload lesson's files: </label>
        <label> </label>
        <input type="file" name="file" onChange={this.onChangeHandler} />
        <input type="file" name="file" onChange={this.onChangeHandler} />
        <input type="file" name="file" onChange={this.onChangeHandler} />
        <button type="submit" onClick={this.submit}>
          Submit
        </button>
        <h2>Teacher Portal</h2>
        <p>
          In the teacher portal you can find information on how many views you
          are getting, a one on one chat with the student, and demographics
          about the students that take your lessons.
        </p>
        <h4>Total Views and Ad Revenue</h4>
        <h6>Views: 96</h6>
        <h6>Total Revenue: $19.20</h6>
        <h4>Live Chat</h4>
        <p>
          [Student]John: Can you help me with question b on the practice
          quizzes?
        </p>
        <p>
          [Teacher]Kevin: Sure! No Problem! What type of help do you need on
          question b?
        </p>
        <p>[Student]John: I am not sure how to simplify the equations.</p>
        <input
          type="chat"
          id="Input"
          placeholder="reply to John..(does not work)"
        ></input>
        <h4>Student Demographics</h4>
        <div>
          <ul id="lessons">
            <li>
              <a href="#">80 students from Canada</a>
            </li>
            <li>
              <a href="#">14 students from the United States of America</a>
            </li>
            <li></li>
            <li>
              <a href="#">2 students from Mexico</a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }

  showTeacher = () => {
    this.setState({ showTeacher: true });
  };

  showLearner = () => {
    this.setState({ showTeacher: false });
  };

  render() {
    const showTeacher = this.state.showTeacher;
    return (
      <div>
        <button onClick={this.showLearner}>Student</button>
        <button onClick={this.showTeacher}>Teacher</button>
        <button onClick={this.logout}>Logout</button>
        {showTeacher ? this.teacher() : this.learner()}
      </div>
    );
  }
}

export default Home;
