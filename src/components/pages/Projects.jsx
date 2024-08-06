import React from 'react';
import foodsite from '../../assets/foodmunch.png';
import todo from '../../assets/todolist.png';
import crud from '../../assets/crudoperations.png';
import chatapp from '../../assets/chat-app.png';

const Projects = () => {

    const handleNavigate = (url) => {
        window.open(url, "_blank");
      };
    
  return (
    <div className='project-page'>
        <div className='d-flex1 jutify-content-between'>
            <h3 className='px-3'>Portfolio</h3>
        </div>

        <div className='d-flex image-col gap-10 mx-auto'>
            <div>
                <div className="project-image2 rounded">
                    <img className="image2" src={foodsite} alt="food-munch" />
                    <p className="text-color my-1">React.js, Node.js, Express.js, Mongo db</p>
                    <h6>ONLINE FOOD RESTAURANT WEBSITE</h6>
                    <div className="d-flex justify-content-center">
                        <button
                            onClick={() =>
                            handleNavigate(
                                "https://github.com/manikumar324/Project_Frontend"
                            )
                            }
                            className="src-button"
                        >
                            Source Code
                        </button>
                    </div>
                </div>
                <div className="project-image1 rounded my-3">
                    <img className="image2" src={crud} alt="crud" />
                    <p className="text-color my-1">Node.js , Express.js & SQL</p>
                    <h6>CRUD OPERATIONS</h6>
                    <div className="d-flex justify-content-center">
                        <button
                            onClick={() =>
                            handleNavigate(
                                "https://github.com/manikumar324/crud_operations"
                            )
                            }
                            className="src-button"
                        >
                            Source Code
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="project-image1 rounded">
                    <img className="image2" src={todo} alt="todo" />
                    <p className="text-color my-1">React.js & Tailwind Css</p>
                    <h6>TO - DO LIST APPLICATION</h6>
                        <div className="d-flex justify-content-center">
                            <button
                                onClick={() =>
                                handleNavigate(
                                    "https://github.com/manikumar324/todo-application-using-REACT"
                                )
                                }
                                className="src-button"
                            >
                                Source Code
                            </button>
                        </div>
                </div>
                <div className="project-image2 rounded my-3">
                    <img className="image2" src={chatapp} alt="chatapp" />
                    <p className="text-color my-1">React.js, Node.js, Express.js, Css</p>
                    <h6>CHAT - APPLICATION</h6>
                    <div className="d-flex justify-content-center">
                        <button
                            onClick={() =>
                            handleNavigate(
                                "https://github.com/manikumar324/Chat-App"
                            )
                            }
                            className="src-button"
                        >
                            Source Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects;