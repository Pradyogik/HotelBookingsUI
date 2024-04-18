import React from 'react'

const Features = () => {
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
            />
            <section className="bg-[#EBB71F] bg-opacity-10 py-8">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-5xl font-medium font-poppins text-[#B01432] mb-10 mt-4">Why us?</h2>
                    <div className="flex flex-wrap -mx-4 justify-center"> {/* Add justify-center here */}
                        <div className="w-full md:w-auto px-4 mb-8 text-[#263238] ">
                            <div className="bg-white border font-poppins border-[#FD7E14] text-[#263238] p-8 shadow-md rounded-3xl">
                                <i className="fas fa-lock text-4xl  text-blue-500 mb-4" />
                                <h3 className="text-2xl font-bold   mb-2">Budget Friendly</h3>
                            </div>
                        </div>
                        <div className="w-full  md:w-auto px-4 mb-8">
                            <div className="bg-white p-8 border border-[#FD7E14] text-[#263238] shadow-md rounded-3xl">
                                <i className="fas fa-globe-americas text-4xl text-blue-500 mb-4" />
                                <h3 className="text-2xl font-poppins font-bold  mb-2">Clean & Hygenic</h3>
                            </div>
                        </div>
                        <div className="w-full md:w-auto px-4 mb-8">
                            <div className="bg-white p-8  border border-[#FD7E14] text-[#263238] shadow-md rounded-3xl">
                                <i className="fas fa-users text-4xl text-blue-500 mb-4" />
                                <h3 className="text-2xl font-poppins font-bold  mb-2">
                                    Collaborative
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features