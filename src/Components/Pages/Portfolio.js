import React from "react";
import Wrapper from "../Wrapper";
import TheMealMentor from "../Pages/assets/theMealMentor.jpg";
import WeatherDashboard from "../Pages/assets/weatherDashboard.jpg";
import WorkDayScheduler from "../Pages/assets/workDayScheduler.jpg";
import CodingQuiz from "../Pages/assets/codingQuiz.jpg";
import "../styles/portfolio.css";

function Portfolio() {
  return (
    <>
      <Wrapper>
        <section class="container pb-3" style={StyleSheet.Portfolio}>
          <section className="row m-3 p-3">
            <section className="col-sm-9">
              <h1 className="display-5 text-info">Portfolio</h1>
            </section>
          </section>

          <section className="row row-cols-1 row-cols-md-2 g-4">
            <section className="col">
              <section className="card" style={StyleSheet.card}>
                <img
                  src={TheMealMentor}
                  className="card-img-top"
                  alt="{theMealMentor}"
                />
                <section className="card-body">
                  <h5 className="card-title">The Meal Mentor</h5>
                  <p className="card-text">
                    Application which can help user to calculate nutritional
                    information about food and can assist in meal planning.
                  </p>
                  <a
                    href="https://github.com/Bhavipatel21/the_meal_mentor"
                    className="btn btn-info"
                  >
                    Github
                  </a>
                </section>
              </section>
            </section>

            <section className="col">
              <section className="card" style={StyleSheet.card}>
                <img
                  src={WeatherDashboard}
                  className="card-img-top"
                  alt="{WeatherDashboard}"
                />
                <section className="card-body">
                  <h5 className="card-title">Weather Dashboard</h5>
                  <p className="card-text">
                    Weather outlook for multiple cities.
                  </p>
                  <a
                    href="https://github.com/Bhavipatel21/weatherDashboard"
                    className="btn btn-info"
                  >
                    Weather Dashboard
                  </a>
                </section>
              </section>
            </section>

            <section className="col">
              <section className="card" style={StyleSheet.card}>
                <img
                  src={WorkDayScheduler}
                  className="card-img-top"
                  alt="{WorkDayScheduler}"
                />
                <section className="card-body">
                  <h5 className="card-title">Work Day Scheduler</h5>
                  <p className="card-text">
                    Create a simple calendar application that allows a user to
                    save events for each hour of the day. This app will run in
                    the browser and feature dynamically updated HTML and CSS
                    powered by jQuery.
                  </p>
                  <a
                    href="https://github.com/Bhavipatel21/workDayScheduler"
                    className="btn btn-info"
                  >
                    WorkDay Scheduler Dashboard
                  </a>
                </section>
              </section>
            </section>

            <section className="col">
              <section className="card" style={StyleSheet.card}>
                <img
                  src={CodingQuiz}
                  className="card-img-top"
                  alt="{CodingQuiz}"
                />
                <section className="card-body">
                  <h5 className="card-title">Coding-Quiz</h5>
                  <p className="card-text">
                    A simple coding quiz build using javascript.
                  </p>
                  <a
                    href="https://github.com/Bhavipatel21/Code-Quiz"
                    className="btn btn-info"
                  >
                    Code-Quiz
                  </a>
                </section>
              </section>
            </section>
          </section>
        </section>
      </Wrapper>
    </>
  );
}

export default Portfolio;
