import React from 'react';
import '../App.css'
import Education from './sub_comp/education';
import Experience from './sub_comp/experience';
import Project from './sub_comp/projects';
import Certificate from './sub_comp/cerificates';
import Personal from './sub_comp/personal';
import Contact from './sub_comp/contact';
function Form(){
    
    return (
        <>
            <section class="my-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class=" mt-3">
                                <div class="card-header">
                                    <div class="row">
                                        <div class="col-lg-12 d-flex">
                                            <div class="col-lg-4 "></div>
                                            <div class="col-lg-8"><h2 class="text-primary">Fill the Details Carefully</h2></div>
                                        </div>
                                    </div>
                                </div>
                                {/* action="http://localhost:8080/form_submit" */}
                                <form method="post" action="http://localhost:8080/form_submit">
                                    <div className="card-body">
                                        <Personal/>
                                        <Contact/>
                                        <div className="card mt-3">
                                            <div className="card-body">
                                                <div class="col-lg-12 d-flex flex-wrap my-2">
                                                    <div class="form-group col-lg-12 px-2">
                                                        <label for="skills" class="mb-1 form-label fw-bold">SKILLS : </label><br/>
                                                        <textarea placeholder="enter your skills" name="skills" class="form-control col-lg-12" id="Skills"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Education/>
                                        <Experience/>
                                        <Project/>
                                        <Certificate/>
                                    </div>   
                                    <div class="card-footer mt-4">
                                        <div class="col-lg-12 d-flex justify-content-center">
                                            <button class="btn btn-outline-primary">SUBMIT</button>
                                        </div>
                                    </div>    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Form;
