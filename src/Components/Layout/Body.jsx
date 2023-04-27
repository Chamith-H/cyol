import "../../Styles/Layout/Body.css";

import Farm1 from "../../Assets/Icons/farm1.png";
import Farm2 from "../../Assets/Icons/Farm2.png";
import Farm3 from "../../Assets/Icons/Farm3.png";

import About1 from "../../Assets/Images/About1.jpg"
import About2 from "../../Assets/Images/About2.jpg"
import About3 from "../../Assets/Images/About3.jpg"

import Point from "../../Assets/Icons/Management_Point.jpg"

import { useRef, useEffect, useState } from "react"

const Body =( props )=> {
    const animate_1 = useRef(null)
    const [scrolled, setScrolled] = useState(false);

    

    const clients = [
                        {
                            title:'Farms',
                            image:Farm1,
                            description:'Empowering professional crop farmers with small to mid sized productioin'
                        },

                        {
                            title:'Enterprise Farms',
                            image:Farm2,
                            description:'Digitize Agri business companies with large and complex operations'
                        },

                        {
                            title:'Cooperative',
                            image:Farm3,
                            description:'Collaboratioin with farms in a cooperative to manage contracting transparently.'
                        },
                    ]

        const abouts = [
                        {
                            title:'Sample matching title',
                            image:About1,
                            description:'Lorem ipum dolor it amet, conect elit, ed do eiumod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui notrud exercitation ullamco labori nii ut aliquip ex ea commodo conequat.'
                        },

                        {
                            title:'Sample matching title',
                            image:About2,
                            description:'Lorem ipum dolor it amet, conect elit, ed do eiumod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui notrud exercitation ullamco labori nii ut aliquip ex ea commodo conequat.'
                        },

                        {
                            title:'Sample matching title',
                            image:About3,
                            description:'Lorem ipum dolor it amet, conect elit, ed do eiumod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui notrud exercitation ullamco labori nii ut aliquip ex ea commodo conequat.'
                        }
                      ]

        const managements = [
                                {
                                    image:'',
                                    title:'Improve Planning and Increase Crop Yields',
                                    class:'Planning'
                                },

                                {
                                    image:'',
                                    title:'One Platform for All Agricultural Data and Process Management',
                                    class:'Management'
                                },

                                {
                                    image:'',
                                    title:'A Real-Time View of Data',
                                    class:'ViewData'
                                }
                            ]

        const solutions = [
                            {
                                title:' Operational planning along the crop lifecycle.',
                                points: [
                                            'Scheduling the plantation operations farm/site/plot wise',
                                            'Manage agriculture activities/inputs',
                                            'Creating templates , creating crop plan(assigning crop template to the crop plan)'
                                        ]
                            },

                            {
                                title:'Transparent task management on the farm field.',
                                points: [
                                            'Daily record keeping of each plot',
                                            'Task allocation and monitoring task allocation',
                                            'Traceability of all materials used during the production process',
                                            'Record the daily production',
                                            'Manage post production'
                                        ]
                            },

                            {
                                title:'Food supply chain management.',
                                points: [
                                            'Sales, Inventory, and Operations Planning',
                                            'Demand Management and Insights',
                                            'Farm to Consumer Traceability',
                                            'Integrate ERP software to synchronize inventory and costs of production'
                                        ]
                            },

                            {
                                title:'Analytics and reporting.',
                                points: [
                                            'Gain deep insights into best performing fields, varieties and practices',
                                            'Automate data exchange with machinery ,connect weather stations and soil sensors',
                                            'Make fact-based decisions based on real-time insights into weather conditions, pest risk and crop health by field.'
                                        ]
                            }
                          ]

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 150) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
                          
        window.addEventListener('scroll', handleScroll);
                          
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
                          
    }, []);

    return (
        <div className="Body">
            <div className={scrolled? "Hero-Section Font-Scrolled mx-5 px-lg-5":"Hero-Section Font-Default mx-5 px-lg-5"}>
                <div className="Align-Hero-Contents">
                    <h1 className="text-center text-md-start"><strong>CREATE YOUR OWN LEGACY</strong></h1>
                    <h5 className="text-center text-md-start">Intelligent Farming and Provenance Solution</h5>

                    <div className="Align-Hero-Button d-flex justify-content-center justify-content-md-start">
                        <button>Book Now</button>
                    </div>
                </div>
            </div>

            <div className="Body-Contents">
                <div className="Our-Clients py-5">
                    <div className="px-lg-5 mx-4 mx-sm-5 Align-Section">
                        <h1 className="text-center Heading-Title">OUR <span>CLIENTS</span></h1>

                        <div className="Client-Cards">
                            <div className="row gx-4 gy-5 Client-Single-Card" ref={animate_1}>
                                {clients.map((client) => (
                                    <div className="col-md-4">
                                        <div className="Single-Client">
                                            <div className="Client-Card-Image py-5">
                                                <img src={client.image} alt="" />
                                            </div>

                                            <div className="Client-Status px-4 py-4">
                                                <h5>{client.title}</h5>
                                                <p>{client.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="About-CYOL py-5">
                    <div className="px-lg-5 mx-4 mx-sm-5 Align-Section">
                        <h1 className="text-center Heading-Title"><strong>ABOUT <span>CYOL</span></strong></h1>

                        <div className="About-Cards">
                            <div className="row gx-4 gy-5">
                                {abouts.map((about) => (
                                    <div className="col-md-4">
                                        <div className="About-Card">
                                            <img src={about.image} alt="" />
                                            <h5>{about.title}</h5>
                                            <p>{about.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Crop-Management">
                    <div className="px-lg-5 mx-4 mx-sm-5">
                        <h1 className="text-center px-sm-5">FULLY INTEGRATED <span>FARM FIELD</span> AND CROP MANAGEMENT</h1>
                    </div>
                </div>

                <div className="Crop-Management-Cards">
                    <div className="px-lg-5 mx-4 mx-sm-5">
                        <div className="row gx-4 gy-5">
                            {managements.map((management) => (
                                <div className="col-md-4">
                                    <div className={management.class}>
                                        <div className="Align-Management-Card ps-4 pe-5 pb-3">
                                            <h2>{management.title}</h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="Digital-Solutions">
                    <div className="px-lg-5 mx-4 mx-sm-5">
                        <h1 className="text-center Heading-Title">COMPLETE <span>DIGITAL SOLUTION</span> FOR EVERY FARM</h1>

                        <div className="row gx-4 gy-5 pt-4">
                            {solutions.map((solution) => (
                                <div className="col-sm-6">
                                    <div className="Single-Solution">
                                        <img className="mb-3" src={Point} alt="" />
                                        <h5 className="ms-2">{solution.title}</h5>

                                        <ul>
                                            {solution.points.map((point) => (
                                                <li>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;