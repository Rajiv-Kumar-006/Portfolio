import React from 'react'
import project from './data/Data/projects.json'
const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id='projects'>
        <h1 data-aos="zoom-in-up"
          data-aos-duration="1000">PROJECTS</h1>
        <div className="row d-flex justify-content-center align-item-center">
          {project.map((data) => {
            return (
              <>
                <div key={data.id} className='my-4 mx-4 col-sm-6 col-md-4 col-lg-3'>
                  <div className="card bg-dark text-light" style={{ width: '18rem', boxShadow: '0px 0px 15px 2px #eebe2d' }} data-aos="flip-right"
                    data-aos-duration="1000">

                    <div className="img d-flex justify-content-center align-item-center p-3" >
                      <img src={data.imageSrc} className="card-img-top" alt="..."
                        style={{
                          width: '250px',
                          height: '200px',
                          border: '1px solid #FFC107',
                          borderRadius: '10px'
                        }}

                      />
                    </div>

                    <div className="card-body text-center" >
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.description}</p>
                      <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
                      <a href={data.demo} className="btn btn-warning">Source Code</a>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Projects
