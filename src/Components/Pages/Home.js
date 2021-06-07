import React from "react";
import Wrapper from "../Wrapper";
import image from "./profile-pic.jpg";
import "../styles/home.css";
import Skills from "../Skills/index";



function Home() {
  return (
    <>
      <Wrapper>
        <section
          className="container border border-white"
          style={StyleSheet.Portfolio}
        >
          <section className="row m-3 p-3">
            <section className="col-sm-9">
              <h1 className="display-5 text-info">About Me</h1>
            </section>
          </section>

          <section className="row">
            <section className="clearfix">
              <figure className="col-md-3">
                <img
                  src={image}
                  className="img-fluid float-md-start m-2 "
                  alt="profile picture"
                />
              </figure>

              <p>
                Hello! My name is Bhavika Patel. I was born and raised in India.
                I moved to the United States when I was nineteen. I worked at
                various retail stores and fast food restaurants before moving
                into the IT world. I have been a QA Analyst for seven years. My
                QA career started at a payment processing company where I was
                trained in the Quality Control area, to gain more knowledge
                about testing. I took an online class to learn more about
                testing. Soon after that I found an opportunity in the financial
                sector. I currently work as a QA Analyst at the Police and Fire
                Federal Credit Union.

                <p> In the seven years of testing career, I
                have learned how to break applications in many ways but still am
                eager to learn how I can break the application more efficiently.
                I have tried learning to code using different resources but
                never dedicated enough time to complete the task. During the
                pandemic, I realized that I have so much time where I can
                dedicate this time to learn how to code. Understanding how to
                code can be very helpful for a tester. A good knowledge of
                javascript and SQL commands can be beneficial in preventing
                security threats. Manual testing is for the tester to check all
                the essential features of the given application or software, but
                automation testing can be very helpful for regression testing,
                performance testing and highly repeatable functional test cases.</p>

                <p>My primary objective is to learn how the web applications are
                built so I can become a more well rounded tester.</p>
              </p>
              <Skills/>
            </section>
          </section>

        </section>
      </Wrapper>
    </>
  );
}

export default Home;
