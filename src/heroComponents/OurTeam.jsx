import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";


import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";




const OurTeam = () => {
    return (
        <div className='flex flex-col justify-center items-center my-40 '>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
            <span className='text-center mx-5'>We’re a cross-disciplinary team that loves to create user-centric digital product that addresses the health needs of ou society</span>

            <div className='flex flex-col md:flex-row flex-wrap justify-center items-center mt-5'>
            <Card className=" md:w-96 m-5">
                <CardHeader floated={false} className="h-80">
                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Natalie Paisley
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        CEO / Co-Founder
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Twitter">
                        <RiTwitterXLine />
                    </Tooltip>
                    <Tooltip content="Follow">
                        <ImFacebook2 />
                    </Tooltip>
                    <Tooltip content="Follow">
                        <FaLinkedin />
                    </Tooltip>
                </CardFooter>
            </Card>

            <Card className=" md:w-96 m-5">
                <CardHeader floated={false} className="h-80">
                    <img src="https://media.istockphoto.com/id/1464618883/photo/portrait-young-asian-woman-developer-programmer-software-engineer-it-support-look-at-camera.jpg?s=612x612&w=0&k=20&c=76sqLaMtZB2ZgQl7M2NrOUJSPCp3wKFj0aVEW9TH8q8=" className='w-full h-full' alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Natalie Paisley
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        CEO / Co-Founder
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Twitter">
                        <RiTwitterXLine />
                    </Tooltip>
                    <Tooltip content="Follow">
                        <ImFacebook2 />
                    </Tooltip>
                    <Tooltip content="Follow">
                        <FaLinkedin />
                    </Tooltip>
                </CardFooter>
            </Card>

            <Card className=" md:w-96 m-5">
                <CardHeader floated={false} className="h-80">
                    <img src="https://img.freepik.com/free-photo/young-smiling-african-man-standing-using-laptop_171337-12867.jpg" className='w-full h-full' alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Natalie Paisley
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        CEO / Co-Founder
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Twitter">
                        <RiTwitterXLine />
                    </Tooltip>
                    <Tooltip content="Follow">
                        <ImFacebook2 />
                    </Tooltip>
                    <Tooltip content="Follow">
                        <FaLinkedin />
                    </Tooltip>
                </CardFooter>
            </Card>
        </div>
        </div>
    )
}

export default OurTeam