/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../assets/images/mud.png';
import img1 from '../assets/images/mudd.jpeg'
import PropTypes from 'prop-types';

const Profile = (props) => {
    return (
        <div className="flex justify-center w-full bg-fuchsia-200">
            <div className="lg:w-1/3.5 bg-gradient-to-r from-lime-200 to-green-300 mx-auto p-4 lg:p-1">
                <div className="relative">
                    <div className="text-white bg-neutral-700 h-28 flex items-center justify-center text-xl">
                        <h1>{props.company}</h1>
                    </div>
                    <div className="absolute inset-0 h-4 mx-auto my-auto w-36 h-36"></div>
                    <div className="h-14 bg-sky-200 flex justify-center">
                        <img
                            src={img}
                            className="rounded-full xl:h-36 xl:w-36 lg:h-32 lg:w-32 md:h-28 md:w-28 sm:h-24 sm:w-24 xs:w-20 xs:h-20 mt-[-2rem] border-4 border-white-600"
                            alt="profile"
                        />
                    </div>
                </div>
                <div className="name text-center mt-14">
                    <h1 className="text-2xl xs:text-xs sm:text-l md:text-2xl lg:text-3xl">
                        {props.fName}
                        <span className="font-bold">{props.lName}</span>
                    </h1>
                    <p className="text-sm">{props.working}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 justify-items-center">
                    <div className="class p-2 w-16 text-left font-semibold">ID </div>
                    <div className="class2 p-2 w-full text-left">: {props.id}</div>
                    <div className="class p-2 w-16 text-left font-semibold">DOB </div>
                    <div className="class2 p-2 w-full text-left">: {props.dob}</div>
                    <div className="class p-2 w-16 text-left font-semibold break-words">Phone </div>
                    <div className="class2 p-2 w-full text-left">: {props.phone} </div>
                    <div className="class p-2 w-16 text-left font-semibold">E-mail</div>
                    <div className="class2 p-2 w-full text-left">: {props.email} </div>
                    <div className="class p-2 w-16 text-left font-semibold">Join </div>
                    <div className="class2 p-2 w-full text-left">: {props.join} </div>
                    <div className="class p-2 w-16 text-left font-semibold">Expire </div>
                    <div className="class2 p-2 w-full text-left">: {props.expire}</div>
                </div>
                <div className="flex justify-center flex-wrap items-center h-12 bg-neutral-700">
                    <span className="text-white ml-4">A10 Solution</span>
                </div>
                <div className="h-12 bg-sky-200"></div>
            </div>
        </div>
    );
};

export default Profile;

Profile.propTypes = {
    company: PropTypes.string,
    fName: PropTypes.string,
    lName: PropTypes.string,
    working: PropTypes.string,
    id: PropTypes.number,
    dob: PropTypes.number,
    phone: PropTypes.number,
    email: PropTypes.string,
    join: PropTypes.number,
    expire: PropTypes.number,
};
