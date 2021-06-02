import React from 'react';
import Wrapper from '../Wrapper';
import image1 from "../Pages/assets/theMealMentor.jpg";


function Portfolio() {
    return (
        <>
        <Wrapper>
        <section className="row row-cols-1 row-cols-lg-3 g-4 m-4">
        <section class="container pb-3">
        
            <section class="row m-3 p-3">
                <section class="col-sm-9">
                    <h1 class="display-5 text-info">Portfolio</h1>
                </section>
            </section>
            <section class="row row-cols-1 row-cols-md-2 g-4">
            <section class="col">
                    <div class="card">
                        <img src={image1} class="card-img-top" alt="{theMealMentor}"
                        />
                        <div class="card-body">
                            <h5 class="card-title">The Meal Mentor</h5>
                            <p class="card-text">Application which can help user to calculate
                                nutritional information about food and can assist in meal planning.</p>
                            <a href="https://github.com/Bhavipatel21/the_meal_mentor" class="btn btn-info">Github</a>
                        </div>
                    </div>
                </section>

            </section>

        </section>
        </section>
        </Wrapper>
        </>
    )
}

export default Portfolio