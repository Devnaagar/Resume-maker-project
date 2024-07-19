import React, { useState } from 'react';
import '../App.css'
import Education from './sub_comp/education';
function Form(){
    const [forms, setForms] = useState([{ edu_id: 1 }]);

    const addForm = () => {
        setForms([...forms, { edu_id: forms.length + 1 }]);
    };
    return (
        <>
            <h2 class="text-center">Fill this form to get your Resume</h2>
            <section class="my-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card card-primary mt-3">
                                <div class="card-header">
                                    <div class="row">
                                        <div class="col-lg-12 d-flex">
                                            <div class="col-lg-4 ">
                                            </div>
                                            <div class="col-lg-8"><h2 class="text-primary">Fill the Details Carefully</h2></div>
                                        </div>
                                    </div>
                                </div>
                                <form method="post" action="">
                                    <div className="card-body">
                                        <div className="card">
                                            <div className="card-header">
                                                <div class="row mt-3 ms-2">
                                                    <div class="col-lg-12 d-flex">
                                                        <div class="col-lg-8"><h2 class="m-0">Personal Information </h2></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div class="col-lg-12 d-flex flex-wrap my-2">
                                                    <div class="form-group col-lg-6 px-2">
                                                        <label for="username" class="mb-1 form-label fw-bold">Full Name</label><br/>
                                                        <input placeholder="e.g - Dev Naagar" name="username" class="form-control col-lg-12"  id="username"/> 
                                                    </div>
                                                    <div class=" form-group col-lg-6 px-2">
                                                        <label for="mail" class="mb-1 form-label fw-bold">Email</label><br/>
                                                        <input placeholder="e.g - YOUR_NAME@gmail.com" name="Email" class="form-control col-lg-12" id="mail"/>
                                                    </div>
                                                    
                                                </div>
                                                <div class="col-lg-12 d-flex flex-wrap my-2">
                                                    <div class="form-group col-lg-6 px-2">
                                                        <label for="phoneno" class="mb-1 form-label fw-bold">Mobile NO.</label><br/>
                                                        <input placeholder="Mobile No." name="number"  class="form-control col-lg-12" id="phoneno"/> 
                                                    </div>
                                                    <div class="form-group col-lg-6 px-2">
                                                        <label for="address" class="mb-1 form-label fw-bold">Address</label><br/>
                                                        <input placeholder="enter your address" name="address" class="form-control col-lg-12" id="address"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mt-3">
                                            <div className="card-header">
                                                <div class="row mt-3 ms-2">
                                                    <div class="col-lg-12 d-flex">
                                                        <div class="col-lg-8"><h2 class="m-0">Contact Details</h2></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div class="col-lg-12 d-flex flex-wrap my-2">
                                                    <div class="form-group col-lg-6 px-2">
                                                        <label for="GitHub" class="mb-1 form-label fw-bold">GitHub profile</label><br/>
                                                        <input placeholder="enter your GitHub profile" name="GitHub" class="form-control col-lg-12" id="GitHub"/>
                                                    </div>
                                                    <div class="form-group col-lg-6 px-2">
                                                        <label for="LinkedIn" class="mb-1 form-label fw-bold">LinkedIn profile</label><br/>
                                                        <input placeholder="enter your link" name="LinkedIn" class="form-control col-lg-12" id="LinkedIn"/>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
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
                                    </div>
                                        
                                    <div class="card-body">
                                        
                                        
                                        <div class="col-lg-12 d-flex flex-wrap my-2">
                                            
                                            <div class="form-group col-lg-6 px-2">
                                                <label for="Education" class="mb-1 form-label fw-bold">Education: </label><br/>
                                                <textarea placeholder="enter your text" name="educations" class="form-control col-lg-12"id="Education"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 d-flex flex-wrap my-2">
                                            <div class="form-group col-lg-6 px-2">
                                                <label for="Experience" class="mb-1 form-label fw-bold">Experience</label><br/>
                                                <textarea placeholder="enter your text" name="Experience" class="form-control col-lg-12"id="Experience"></textarea>
                                            </div>
                                            <div class="form-group col-lg-6 px-2">
                                                <label for="Projects" class="mb-1 form-label fw-bold">Acedemic Projects:</label><br/>
                                                <textarea placeholder="enter your text" name="Projects" class="form-control col-lg-12" id="Projects"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 d-flex flex-wrap my-2">
                                            <div class="form-group col-lg-6 px-2">
                                                <label for="Achivements" class="mb-1 form-label fw-bold">Achivements</label><br/>
                                                <textarea placeholder="enter your text" name="Achivements" class="form-control col-lg-12" id="Achivements"></textarea>
                                            </div> 
                                        </div>
                                    </div>    
                                    <div class="card-footer">
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
