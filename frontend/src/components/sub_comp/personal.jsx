import React from 'react';
import '../../App.css'
function Personal(){
    return(
        <>
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
        </>
    )
}
export default Personal;