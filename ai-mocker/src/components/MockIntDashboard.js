import React from 'react'

export default function MockIntDashboard() {
  return (
    <div className="container w-75 my-3">
      <h1>Tell us more about your job interviewing</h1>
      <p>Add Details about Job position, your skills and years of experience</p>

      <div class="mb-3">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Job Role/Job Position</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ex. Full Stack Developer"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Years of experience</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ex. 5"/>
        </div>
        <label for="exampleFormControlTextarea1" class="form-label">Job Description/ Tech Stack</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <div className="text-center">
        <button type="button" class="btn btn-primary btn-lg my-4">Submit</button>
      </div>
    </div>
  )
}
