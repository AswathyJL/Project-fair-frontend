
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import main from '../assets/main.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { getHomeProjectAPI } from '../services/allAPI'




const Home = () => {

    const [allHomeProjects,setAllHomeProjects]=useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        getAllHomeProjects()
    },[])

    const getAllHomeProjects = async()=>{
        try {
            const result = await getHomeProjectAPI()
            if(result.status==200)
            {
                setAllHomeProjects(result.data)
            }
        } catch (err) {
            console.log(err);
            
        }
    }

    const handleProjects = () => {
        if(sessionStorage.getItem("token"))
        {
            navigate('/projects')
        }
        else
        {
            alert("Please login to get full access to our projects!!!")
        }
    }
  return (
    <>
        <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
            <div className='container'>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 style={{fontSize:'80px'}}><i className="fa-brands fa-docker"></i>Project Fair</h1>
                        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et delectus asperiores magni dignissimos. Pariatur harum natus, veniam enim at ab totam nihil nam maiores similique, incidunt vitae maxime nulla nisi!</p>
                        {
                            sessionStorage.getItem("token") ?
                            <Link to={'/dashboard'} className='btn btn-warning'>START TO EXPLORE</Link>
                            :
                            <Link to={'/login'} className='btn btn-warning'>START TO EXPLORE</Link>
                        }
                    </div>
                    <div className="col-lg-6">
                        <img className='img-fluid' src={main} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-5 text-center'>
            <h1 className='mb-5'>Explore Our Projects</h1>
            <marquee behavior="" direction="">
                <div className="d-flex">
                   {
                    allHomeProjects?.map(project=>(
                        <div key={project?._id} className="me-5">
                            <ProjectCard displayData= {project}/>
                        </div>
                    ))
                     
                   }
                </div>
            </marquee>
            <button onClick={handleProjects} className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS...</button>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
            <h1>Our Testimonials</h1>
            <div className='d-flex align-items-center justify-content-evenly mt-3 w-100'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='d-flex justify-content-center align-items-center flex-column'><img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                    <span className='mt-1'>Max Miller</span></Card.Title>
                    <Card.Text>
                        <div className='d-flex justify-content-center mb-1'>
                            <i className='fa-solid fa-star text-warning'></i>
                            <i className='fa-solid fa-star text-warning'></i>
                            <i className='fa-solid fa-star text-warning'></i>
                            <i className='fa-solid fa-star text-warning'></i>
                        </div>
                        <div style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam enim, vero consequuntur vitae fugiat excepturi est praesentium iure ullam quis nihil neque aperiam quia suscipit quasi eius atque tenetur.</div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='d-flex justify-content-center align-items-center flex-column'><img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://cdn4.vectorstock.com/i/1000x1000/36/98/male-user-circle-icon-black-avatar-vector-22753698.jpg" alt="" />
                    <span className='mt-1'>Thomas John</span></Card.Title>
                    <Card.Text>
                        <div className='d-flex justify-content-center mb-1'>
                            <i className='fa-solid fa-star text-warning'></i>
                            <i className='fa-solid fa-star text-warning'></i>
                            <i className='fa-solid fa-star text-warning'></i>
                            <i className='fa-solid fa-star text-warning'></i>
                        </div>
                        <div style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam enim, vero consequuntur vitae fugiat excepturi est praesentium iure ullam quis nihil neque aperiam quia suscipit quasi eius atque tenetur.</div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='d-flex justify-content-center align-items-center flex-column'><img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhRtMu2kfXZoCWKicfbHPozOzmtCiPZI0kg&s" alt="" />
                    <span className='mt-1'>Maya Yusef</span></Card.Title>
                    <Card.Text>
                        <div className='d-flex justify-content-center mb-1'>
                            <i className='fa-solid fa-star text-warning'></i>
                            <i className='fa-solid fa-star text-warning'></i>
                            <i className='fa-solid fa-star text-warning'></i>
                            <i className='fa-solid fa-star text-warning'></i>
                        </div>
                        <div style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam enim, vero consequuntur vitae fugiat excepturi est praesentium iure ullam quis nihil neque aperiam quia suscipit quasi eius atque tenetur.</div>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    </>
  )
}

export default Home