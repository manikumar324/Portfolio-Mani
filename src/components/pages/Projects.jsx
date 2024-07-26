import React from 'react';
import foodsite from '../../assets/foodmunch.jpg';

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
                    <p className="text-color my-1">HTML & CSS</p>
                    <h6>Food Munch Website</h6>
                    <div className="d-flex justify-content-center">
                        <button
                            onClick={() =>
                            handleNavigate(
                                "https://github.com/manikumar324/Foodsite"
                            )
                            }
                            className="src-button"
                        >
                            Source Code
                        </button>
                    </div>
                </div>
                <div className="project-image1 rounded my-3">
                    <img className="image2" src={foodsite} alt="food-munch" />
                    <p className="text-color my-1">HTML & CSS</p>
                    <h6>Food Munch Website</h6>
                    <div className="d-flex justify-content-center">
                        <button
                            onClick={() =>
                            handleNavigate(
                                "https://github.com/manikumar324/Foodsite"
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
                    <img className="image2" src={foodsite} alt="food-munch" />
                    <p className="text-color my-1">HTML & CSS</p>
                    <h6>Food Munch Website</h6>
                        <div className="d-flex justify-content-center">
                            <button
                                onClick={() =>
                                handleNavigate(
                                    "https://github.com/manikumar324/Foodsite"
                                )
                                }
                                className="src-button"
                            >
                                Source Code
                            </button>
                        </div>
                </div>
                <div className="project-image2 rounded my-3">
                    <img className="image2" src={foodsite} alt="food-munch" />
                    <p className="text-color my-1">HTML & CSS</p>
                    <h6>Food Munch Website</h6>
                    <div className="d-flex justify-content-center">
                        <button
                            onClick={() =>
                            handleNavigate(
                                "https://github.com/manikumar324/Foodsite"
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