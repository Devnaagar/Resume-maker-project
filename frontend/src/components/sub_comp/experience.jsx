import React, { useState } from 'react';
import '../../App.css'
function Experience(){
    const [forms, setForms] = useState([{ exp_id: 1 }]);

    const addForm = () => {
        setForms([...forms, { exp_id: forms.length + 1 }]);
    };
    return(
        <>
            <div className="card mt-3">
                <div className="mt-3 ms-2">
                    <div class="row mx-2">
                        <div class="col-lg-12 d-flex">
                            <div class="col-lg-8"><h2 class="m-0"> Experience</h2></div>
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
                                                <div class="col-lg-8"><h2 class="m-0">Experience Details {form.edu_id}</h2></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2" key={form.exp_id}>
                                    <div className="form-group col-lg-12 px-2">
                                        <label for={`work_name-${form.exp_id}`} className="mb-1 form-label fw-bold">Worked as</label>
                                        <input placeholder="enter your GitHub profile" name={`work_name-${form.exp_id}`} className="form-control col-lg-12" 
                                        id={`work_name-${form.exp_id}`} />
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2" key={form.exp_id}>
                                    <div className="form-group col-lg-4 px-2">
                                        <label for={`location-${form.exp_id}`} className="mb-1 form-label fw-bold">Location</label>
                                        <input placeholder="enter your link" name={`location-${form.exp_id}`} className="form-control col-lg-12" id={`location-${form.exp_id}`} />
                                    </div>
                                    <div className="form-group col-lg-4 px-2">
                                        <label for={`start_mon-${form.exp_id}`} className="mb-1 form-label fw-bold">Start Month</label>
                                        <input type='date'placeholder="enter your GitHub profile" 
                                        name={`start_mon-${form.exp_id}`} className="form-control col-lg-12" id={`start_mon-${form.exp_id}`} />
                                    </div>
                                    <div className="form-group col-lg-4 px-2">
                                        <label for={`end_mon-${form.exp_id}`} className="mb-1 form-label fw-bold">End Month</label>
                                        <input type='date' placeholder="enter your link" name={`end_mon-${form.exp_id}`} className="form-control col-lg-12" 
                                        id={`end_mon-${form.exp_id}`} />
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2" key={form.exp_id}>
                                    <div className="form-group col-lg-12 px-2">
                                        <label for={`work_name-${form.exp_id}`} className="mb-1 form-label fw-bold">Description</label>
                                        <textarea placeholder="enter your GitHub profile" name={`desc-${form.exp_id}`} className="form-control col-lg-12" id={`desc-${form.exp_id}`} />
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
export default Experience;