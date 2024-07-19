import React, { useState } from 'react';
import '../../App.css'
function Education(){
    const [forms, setForms] = useState([{ edu_id: 1 }]);

    const addForm = () => {
        setForms([...forms, { edu_id: forms.length + 1 }]);
    };
    return(
        <>
            <div className="card mt-3">
                <div className="mt-3 ms-2">
                    <div class="row mx-2">
                        <div class="col-lg-12 d-flex">
                            <div class="col-lg-8"><h2 class="m-0">Education Details</h2></div>
                            <div className="col-lg-4 text-end">
                                <button onClick={addForm} className="btn btn-primary mt-3" type='reset'>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div>
                        {forms.map((form, index) => (
                            <div>
                                <div className="card">
                                    <div className="card-header m-0 p-2">
                                        <div class="row ">
                                            <div class="col-lg-12 d-flex">
                                                <div class="col-lg-8"><h2 class="m-0">Education Details {form.edu_id}</h2></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2" key={form.id}>
                                    <div className="form-group col-lg-6 px-2">
                                        <label for={`class_degree-${form.edu_id}`} className="mb-1 form-label fw-bold">Degree / Class</label>
                                        <input 
                                        placeholder="enter your GitHub profile" 
                                        name={`class_degree-${form.edu_id}`} 
                                        className="form-control col-lg-12" 
                                        id={`class_degree-${form.edu_id}`} 
                                        />
                                    </div>
                                    <div className="form-group col-lg-6 px-2">
                                        <label for={`school-${form.edu_id}`} className="mb-1 form-label fw-bold">School/University</label>
                                        <input 
                                        placeholder="enter your link" 
                                        name={`school-${form.edu_id}`} 
                                        className="form-control col-lg-12" 
                                        id={`school-${form.edu_id}`} 
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2" key={form.id}>
                                    <div className="form-group col-lg-6 px-2">
                                        <label for={`percent_cgpa-${form.edu_id}`} className="mb-1 form-label fw-bold">Percentage/CGPA</label>
                                        <input 
                                        placeholder="enter your GitHub profile" 
                                        name={`percent_cgpa-${form.edu_id}`} 
                                        className="form-control col-lg-12" 
                                        id={`percent_cgpa-${form.edu_id}`} 
                                        />
                                    </div>
                                    <div className="form-group col-lg-6 px-2">
                                        <label for={`pass_year-${form.edu_id}`} className="mb-1 form-label fw-bold">Passing out Year</label>
                                        <input 
                                        placeholder="enter your link" 
                                        name={`pass_year-${form.edu_id}`} 
                                        className="form-control col-lg-12" 
                                        id={`pass_year-${form.edu_id}`} 
                                        />
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        ))}
                        
                    </div>
                    
                </div>
            </div>
            
        
        </>
    )
}
export default Education;