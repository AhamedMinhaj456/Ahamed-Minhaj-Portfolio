import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";

import agile from "../assets/agile.png";
import android from "../assets/android.png";
import arduino from "../assets/arduino.png";
import aws from "../assets/aws.png";
import angular from "../assets/angular.png";
import azure from "../assets/azure.png";
import C from "../assets/C.png";
import confluence from "../assets/confluence.png";
import CPlus from "../assets/C++.png";
import csharp from "../assets/csharp.png";
import dart from "../assets/dart.png";
import docker from "../assets/docker.png";
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
import next from "../assets/nextjs.png";
import numpy from "../assets/numpy.png";
import pandas from "../assets/pandas.png";
import photoshop from "../assets/photoshop.png";
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
  const categories = [
    {
      title: "Programming Languages",
      icon: "💻",
      gradient: "from-purple-900/40 to-blue-900/40",
      technologies: [
        { name: "C", icon: C },
        { name: "C++", icon: CPlus },
        { name: "C#", icon: csharp },
        { name: "Python", icon: python },
        { name: "Java", icon: java },
        { name: "JavaScript", icon: javascript },
      ],
    },
    {
      title: "Frontend Development",
      icon: "⚛️",
      gradient: "from-blue-900/40 to-cyan-900/40",
      technologies: [
        { name: "React", icon: reactImage },
        { name: "Angular", icon: angular },
        { name: "Next", icon: next },
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "Redux", icon: redux },
      ],
    },
    {
      title: "Backend Development",
      icon: "🔧",
      gradient: "from-teal-900/40 to-green-900/40",
      technologies: [
        { name: "Spring Boot", icon: springboot },
        { name: "Node.js", icon: nodejs },
      ],
    },
    {
      title: "Databases",
      icon: "💾",
      gradient: "from-indigo-900/40 to-purple-900/40",
      technologies: [
        { name: "MySQL", icon: mysql },
        { name: "MongoDB", icon: mongodb },
        { name: "SQLite", icon: sqlite },
      ],
    },
     {
      title: "DevOps & Tools",
      icon: "🛠️",
      gradient: "from-pink-900/40 to-purple-900/40",
      technologies: [
        { name: "Docker", icon: docker },
        { name: "Jenkins", icon: jenkins },
        { name: "Selenium", icon: selenium },
        { name: "GitHub", icon: github },
      ],
    },
    {
      title: "Cloud Platforms",
      icon: "☁️",
      gradient: "from-orange-900/40 to-red-900/40",
      technologies: [
        { name: "AWS", icon: aws },
        { name: "Azure", icon: azure },
        { name: "Google Cloud", icon: GoogleCloud },
        { name: "Heroku", icon: heroku },
      ],
    },
    {
      title: "Machine Learning",
      icon: "🤖",
      gradient: "from-green-900/40 to-emerald-900/40",
      technologies: [
        { name: "TensorFlow", icon: tensorflow },
        { name: "PyTorch", icon: pytorch },
        { name: "Keras", icon: keras },
        { name: "Scikit-Learn", icon: scikit },
        { name: "Numpy", icon: numpy },
        { name: "Pandas", icon: pandas },
        { name: "Matplotlib", icon: matplotlib },
        { name: "Seaborn", icon: seaborn },
        { name: "Theano", icon: theano },
      ],
    },
    {
      title: "Mobile Development",
      icon: "📱",
      gradient: "from-cyan-900/40 to-blue-900/40",
      technologies: [
        { name: "Flutter", icon: flutter },
        { name: "Dart", icon: dart },
        { name: "Kotlin", icon: kotlin },
        { name: "Android", icon: android },
        { name: "Firebase", icon: firebase },
      ],
    },
    {
      title: "Project Management",
      icon: "📊",
      gradient: "from-blue-900/40 to-indigo-900/40",
      technologies: [
        { name: "Jira", icon: jira },
        { name: "Confluence", icon: confluence },
        { name: "Agile", icon: agile },
      ],
    },
    {
      title: "Other Technologies",
      icon: "⚙️",
      gradient: "from-gray-800/40 to-slate-900/40",
      technologies: [
        { name: "Figma", icon: figma },
        { name: "Postman", icon: postman },
        { name: "Photoshop", icon: photoshop },
        { name: "Linux", icon: linux },
        { name: "Arduino", icon: arduino },
      ],
    },
  ];

  return (
    <div
      name="Technologies"
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 w-full min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Technologies
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${category.gradient} backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.technologies.map((tech, techIdx) => (
                  <div
                    key={techIdx}
                    className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-700/30 group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <p className="text-gray-200 text-sm font-medium text-center">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;