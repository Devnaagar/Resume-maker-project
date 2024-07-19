import React, { useState } from 'react';
import '../../App.css'
function Project(){
    const [forms, setForms] = useState([{ proj_id: 1 }]);

    const addForm = () => {
        setForms([...forms, { proj_id: forms.length + 1 }]);
    };
    return(
        <>
            <div className="card mt-3">
                <div className="mt-3 ms-2">
                    <div class="row mx-2">
                        <div class="col-lg-12 d-flex">
                            <div class="col-lg-8"><h2 class="m-0"> Acedemic Projects</h2></div>
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
                                <div className="card mb-2">
                                    <div className="card-header m-0 p-2">
                                        <div class="row ">
                                            <div class="col-lg-12 d-flex">
                                                <div class="col-lg-8"><h3 class="m-0">Projects Details {form.edu_id}</h3></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2" key={form.proj_id}>
                                    <div className="form-group col-lg-12 px-2">
                                        <label for={`work_name-${form.proj_id}`} className="mb-1 form-label fw-bold">Worked as</label>
                                        <input placeholder="enter your GitHub profile" name={`work_name-${form.proj_id}`} className="form-control col-lg-12" id={`work_name-${form.proj_id}`} />
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2" key={form.proj_id}>
                                    <div className="form-group col-lg-4 px-2">
                                        <label for={`location-${form.proj_id}`} className="mb-1 form-label fw-bold">Location</label>
                                        <input placeholder="enter your link" name={`location-${form.proj_id}`} className="form-control col-lg-12" id={`location-${form.proj_id}`} />
                                    </div>
                                    <div className="form-group col-lg-4 px-2">
                                        <label for={`start_mon-${form.proj_id}`} className="mb-1 form-label fw-bold">Start Month</label>
                                        <input type='date' placeholder="enter your GitHub profile" name={`start_mon-${form.proj_id}`} className="form-control col-lg-12" id={`start_mon-${form.proj_id}`} />
                                    </div>
                                    <div className="form-group col-lg-4 px-2">
                                        <label for={`end_mon-${form.proj_id}`} className="mb-1 form-label fw-bold">End Month</label>
                                        <input type='date' placeholder="enter your link" name={`end_mon-${form.proj_id}`} className="form-control col-lg-12" id={`end_mon-${form.proj_id}`} />
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex flex-wrap my-2" key={form.proj_id}>
                                    <div className="form-group col-lg-12 px-2">
                                        <label for={`work_name-${form.proj_id}`} className="mb-1 form-label fw-bold">Description</label>
                                        <textarea placeholder="enter your GitHub profile" name={`desc-${form.proj_id}`} className="form-control col-lg-12" id={`desc-${form.proj_id}`} />
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
export default Project;