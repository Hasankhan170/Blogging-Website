import {collection,addDoc, getDocs, doc, deleteDoc ,updateDoc } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js'
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"
import{db ,auth} from "./config.js"



const dashboardForm = document.querySelector('.dashboard-form')
const dashboardInput = document.querySelector('.dashboard-input')
const dashboardTextArea = document.querySelector('.dashboard-textarea')
const renderBlogs = document.querySelector('.renderBlogs')





