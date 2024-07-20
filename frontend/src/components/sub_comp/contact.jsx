import React from 'react';
import '../../App.css'
function Contact(){
    return(
        <>
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
        </>
    )
}
export default Contact;