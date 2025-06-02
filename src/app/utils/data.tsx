
import flutterIcon from '@/app/assets/app_screen/svg_logo/flutter.svg'
import arduinoIcon from '@/app/assets/app_screen/svg_logo/arduino.svg'
import kashtIcon from '@/app/assets/app_screen/svg_logo/kasht.svg'
import nestjsIcon from '@/app/assets/app_screen/svg_logo/nestjs.svg'
import nodejsIcon from '@/app/assets/app_screen/svg_logo/nodejs.svg'
import webrtcIcon from '@/app/assets/app_screen/svg_logo/webrtc.svg'
import socketIcon from '@/app/assets/app_screen/svg_logo/socket.svg'
import socketioIcon from '@/app/assets/app_screen/svg_logo/socketio.svg'
import mazgarIcon from '@/app/assets/app_screen/svg_logo/mazgar.png'




import cafeImageWithoutMockup from '@/app/assets/app_screen/without_mockup/cafe.png'
import callImageWithoutMockup from '@/app/assets/app_screen/without_mockup/call.png'
import iotImageWithoutMockup from '@/app/assets/app_screen/without_mockup/iot.png'
import kashtImageWithoutMockup from '@/app/assets/app_screen/without_mockup/kasht.png'
import shopImageWithoutMockup from '@/app/assets/app_screen/without_mockup/shop.png'
import taskImageWithoutMockup from '@/app/assets/app_screen/without_mockup/task.png'
import mazgarImageWithoutMockup from '@/app/assets/app_screen/without_mockup/mazgar.png'

import { StaticImageData } from 'next/image'


export interface IProject {
    index: number,
    title: string,
    description: string,
    descriptionTitle: string,
    hasDownloadApk:boolean,
    apkUrl?: string,
    image: StaticImageData[],
    imageWithoutMockup: StaticImageData,
    githubUrl : string,
}



export const projects: IProject[] = [
    { 
        index: 0,
        title: "Flutter Shopping App",
        descriptionTitle: "A Shopping application ",
        description:"a flutter Applicatoin for shopping clothes , using Appwrite for Backend .The app supports a smooth toggle between light and dark mode,The app offers two languages: English and Persian. The user can switch between these two languages in the app's settings.",
        hasDownloadApk: true,
        image: [flutterIcon],
        apkUrl: 'https://www.shayadakar.ir/APKS/shop.apk',
        imageWithoutMockup: shopImageWithoutMockup,
        githubUrl :"https://github.com/m8mamad2/shop_app" ,
    },
    { 
        index: 2,
        title: "IoT LED Control Application ",
        descriptionTitle:"IoT LED Control Application using Flutter, ESP8266 and MQTT",
        description: "This project is an IoT solution that allows you to control an LED connected to an ESP8266 board using a Flutter mobile application. The communication between the app and the ESP8266 is facilitated by MQTT (Message Queuing Telemetry Transport)",
        hasDownloadApk: false,
        image: [flutterIcon, arduinoIcon],
        imageWithoutMockup: iotImageWithoutMockup,
        apkUrl:'https://github.com/m8mamad2/iot_app',
        githubUrl: "https://github.com/m8mamad2/iot_app",
    },
    { 
        index: 4,
        title: "Food Delivery App",
        descriptionTitle:"Food Delivery App with Flutter And Nestjs",
        description: "This is a full-stack food delivery app built with Flutter for the mobile front-end and NestJS for the back-end. The app enables users to browse restaurants, order food, track delivery in real-time, and communicate with delivery personnel via in-app chat.",
        hasDownloadApk: true,
        image: [flutterIcon,nestjsIcon, socketioIcon],
        imageWithoutMockup: cafeImageWithoutMockup,
        apkUrl:'https://www.shayadakar.ir/APKS/cafe.apk',
        githubUrl: "https://github.com/m8mamad2/cafe_app",
    },
    { 
        index: 3,
        title: "Kasht",
        descriptionTitle:"A Social Media App for Agricultural industry",
        description: "is a social media app built with Flutter, designed for users to share and explore photos and videos. The app supports user-generated content, follows the social interaction model with features such as likes, comments, and a personalized feed, have explore , chat , notification and ...",
        hasDownloadApk: true,
        image: [flutterIcon,kashtIcon],
        imageWithoutMockup: kashtImageWithoutMockup,
        apkUrl:"https://www.shayadakar.ir/APKS/kasht.apk",
        githubUrl: "Not Have Repo",
    },
    { 
        index: 5,
        title: "Flutter Video & Voice Call",
        descriptionTitle:"Flutter Application with WebRTC & Socket.IO & Background Service",
        description: "This Flutter application is runs in the background. It utilizes Socketfor real-time communication and WebRTC for handling voice and video calls. The backend of this project is developed using TypeScript, Socket, and Node.js, ensuring a reliable and scalable real-time communication system.",
        hasDownloadApk: false,
        image: [flutterIcon, webrtcIcon, socketIcon],
        imageWithoutMockup: callImageWithoutMockup,
        apkUrl:"https://github.com/m8mamad2/call_app",
        githubUrl: "https://github.com/m8mamad2/call_app",
    },
    { 
        index: 6,
        title: "Flutter Task Application",
        descriptionTitle:"Flutter Task Managment with Nodejs",
        description: "A Flutter application for manage Tasks , set Scheduling task and get Notification , Chart for see your works, Create Account for your task and ...",
        hasDownloadApk: true,
        image: [flutterIcon,nodejsIcon],
        imageWithoutMockup: taskImageWithoutMockup,
        apkUrl:"https://www.shayadakar.ir/APKS/task.apk",
        githubUrl: "https://github.com/m8mamad2/task_app",
    },
    { 
        index: 1,
        title: "Mazgar",
        descriptionTitle: "Payroll software",
        description: "Mazgar is a payroll application that creates a transparent relationship between employers and workers. Workers can log their work based on various methods (quantity, percentage, fixed amount, daily, or hourly), and after approval by the employer, they can instantly view their earnings in real-time.This application was developed as a full-stack project, covering both frontend and backend functionalities",
        hasDownloadApk: false,
        image: [mazgarIcon],
        imageWithoutMockup: mazgarImageWithoutMockup,
        apkUrl:'https://mazgar.com/',
        githubUrl :"https://mazgar.com/" ,
    },
];