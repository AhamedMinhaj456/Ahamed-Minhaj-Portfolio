import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
//import nextjs from "../assets/nextjs.png";
//import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
//import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";

// ///////////////////
import agile from "../assets/agile.png";
import android from "../assets/android.png";
import arduino from "../assets/arduino.png";
import aws from "../assets/aws.png";
import azure from "../assets/azure.png";
//import bootstrap from "../assets/bootstrap.png";
import C from "../assets/C.png";
import confluence from "../assets/confluence.png";
import CPlus from "../assets/C++.png";
import csharp from "../assets/csharp.png";
import dart from "../assets/dart.png";
import docker from "../assets/docker.png";
//import express from "../assets/express.png";
import figma from "../assets/figma.png";
import firebase from "../assets/firebase.png";
import flutter from "../assets/flutter.png";
import GoogleCloud from "../assets/Google-Cloud.png";
import heroku from "../assets/heroku.png";
import java from "../assets/java.png";
import jenkins from "../assets/jenkins.png";
import jira from "../assets/jira.png";
import keras from "../assets/keras.png";
import kotlin from "../assets/kotlin.png";
import linux from "../assets/linux.png";
import matplotlib from "../assets/matplotlib.png";
import mysql from "../assets/mysql.png";
import numpy from "../assets/numpy.png";
//import openCV from "../assets/openCV.webp";
import pandas from "../assets/pandas.png";
import photoshop from "../assets/photoshop.png";
//import postgreSQL from "../assets/postgreSQL.png";
import postman from "../assets/postman.png";
import python from "../assets/python.png";
import pytorch from "../assets/pytorch.png";
import redux from "../assets/redux.png";
import scikit from "../assets/scikit-learn.png";
import seaborn from "../assets/seaborn.png";
import selenium from "../assets/selenium.png";
import springboot from "../assets/springboot.png";
import sqlite from "../assets/SQLite.png";
import theano from "../assets/theano.png";
import tensorflow from "../assets/tensorflow.png";


const Technologies = () => {
  const ProgrammingLanguages = [
   
    {
      id:1,
      src: C,
      title:"C",
      style:"shadow-green-500"
    },
    {
      id:2,
      src: CPlus,
      title:"C++",
      style:"shadow-green-500"
    },
    {
      id:3,
      src: csharp,
      title:"C#",
      style:"shadow-green-500"
    },
    {
      id:4,
      src: python,
      title:"Python",
      style:"shadow-green-500"
    },
    {
      id:5,
      src: java,
      title:"Java",
      style:"shadow-green-500"
    },
    {
      id:6,
      src: javascript,
      title:"JavaScript",
      style:"shadow-green-500"
    },
    
  ];

  const WebDevolopment = [
   
    {
      id:1,
      src: springboot,
      title:"Spring Boot",
      style:"shadow-green-500"
    },
    {
      id:2,
      src: reactImage,
      title:"React",
      style:"shadow-green-500"
    },
    {
      id:3,
      src: nodejs,
      title:"Node.js",
      style:"shadow-green-500"
    },
    {
      id:4,
      src: mysql,
      title:"MySQL",
      style:"shadow-green-500"
    },
    {
      id:5,
      src: mongodb,
      title:"MongoDB",
      style:"shadow-green-500"
    },
    {
      id:6,
      src: html,
      title:"HTML",
      style:"shadow-green-500"
    },
    {
      id:7,
      src: css,
      title:"CSS",
      style:"shadow-green-500"
    },
    {
      id:8,
      src: sqlite,
      title:"SQLite",
      style:"shadow-green-500"
    },
    {
      id:9,
      src: redux,
      title:"Redux",
      style:"shadow-green-500"
    },

    
  ];

  const MachineLearning = [
    {
      id: 1,
      src: numpy,
      title: "Numpy",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: scikit,
      title: "Scikit-Learn",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: pandas,
      title: "Pandas",
      style: "shadow-yellow-500",
    },
    {
      id:4,
      src: tensorflow,
      title:"TensorFlow",
      style:"shadow-green-500"
    },
    {
      id:5,
      src: seaborn,
      title:"Seaborn",
      style:"shadow-green-500"
    },
    {
      id:6,
      src: keras,
      title:"Keras",
      style:"shadow-green-500"
    },
    {
      id:7,
      src: theano,
      title:"Theano",
      style:"shadow-green-500"
    },
    {
      id:8,
      src: pytorch,
      title:"PyTorch",
      style:"shadow-green-500"
    },
    {
      id:9,
      src: matplotlib,
      title:"Matplotlib",
      style:"shadow-green-500"
    },
  ];

  const MobileApp = [
   
    {
      id:1,
      src: dart,
      title:"Dart",
      style:"shadow-green-500"
    },
    {
      id:1,
      src: flutter,
      title:"Flutter",
      style:"shadow-green-500"
    },
    {
      id:2,
      src: kotlin,
      title:"Kotlin",
      style:"shadow-green-500"
    },
    {
      id:3,
      src: firebase,
      title:"Firebase",
      style:"shadow-green-500"
    },
    {
      id:4,
      src: GoogleCloud,
      title:"Google Cloud",
      style:"shadow-green-500"
    },
    {
      id:5,
      src: android,
      title:"Android",
      style:"shadow-green-500"
    },
    
  ];

  const Devops = [
   
    {
      id:1,
      src: aws,
      title:"AWS",
      style:"shadow-green-500"
    },
    {
      id:2,
      src: azure,
      title:"Azure",
      style:"shadow-green-500"
    },
    {
      id:3,
      src: docker,
      title:"Docker",
      style:"shadow-green-500"
    },
    {
      id:4,
      src: jenkins,
      title:"Jenkins",
      style:"shadow-green-500"
    },
    {
      id:5,
      src: selenium,
      title:"Selenium",
      style:"shadow-green-500"
    },
    {
      id:6,
      src: heroku,
      title:"Heroku",
      style:"shadow-green-500"
    },
    
  ];

  const VersionControl = [
   
    {
      id:1,
      src: github,
      title:"GitHub",
      style:"shadow-green-500"
    }
    
  ];

  const ProjectManagment = [
   
    {
      id:1,
      src: jira,
      title:"Jira",
      style:"shadow-green-500"
    },
    {
      id:2,
      src: confluence,
      title:"Confluence",
      style:"shadow-green-500"
    },
    {
      id:3,
      src: agile,
      title:"Agile",
      style:"shadow-green-500"
    },
    
  ];

  const IdeTools = [
   
    {
      id:1,
      src: figma,
      title:"Figma",
      style:"shadow-green-500"
    },
    {
      id:2,
      src: postman,
      title:"Postman",
      style:"shadow-green-500"
    },
    {
      id:3,
      src: photoshop,
      title:"Photoshop",
      style:"shadow-green-500"
    },
    {
      id:4,
      src: linux,
      title:"linux",
      style:"shadow-green-500"
    },
    {
      id:5,
      src: arduino,
      title:"Arduino",
      style:"shadow-green-500"
    },
    
  ];


  
  return (
    <div
      name="Technologies"
      className="bg-gradient-to-b from-gray-800 to-white-100 via-black to-gray-800 w-full  mt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div >
          <p className="text-4xl font-bold p-2 border-b-4 border-gray-500 inline">
            Technologies
          </p>
          <p className="py-6">Programming Languages</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {ProgrammingLanguages.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div >
          <p className="py-6">Web Development</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {WebDevolopment.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div >
          <p className="py-6">Machine Learning</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {MachineLearning.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div >
          <p className="py-6">Mobile Application Development</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {MobileApp.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div >
          <p className="py-6">Devops</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {Devops.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div >
          <p className="py-6">Version Control</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {VersionControl.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div >
          <p className="py-6">Project Managment</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {ProjectManagment.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div >
          <p className="py-6">Others</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {IdeTools.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        
        
      </div>
    </div>
  );
};

export default Technologies;
