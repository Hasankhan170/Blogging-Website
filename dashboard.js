import {collection,addDoc, getDocs, doc, deleteDoc ,updateDoc } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js'
import{ db } from "./config.js"




const dashboardForm = document.querySelector('.dashboard-form')
const dashboardInput = document.querySelector('.dashboard-input')
const dashboardTextArea = document.querySelector('.dashboard-textarea')
const renderBlogs = document.querySelector('.renderBlogs')





let arr = []

 async function getdata(){
    const querySnapshot = await getDocs(collection(db, "blogs"));
    arr = [] 
    querySnapshot.forEach((doc) => {
    console.log(doc.data());
    arr.push({...doc.data(), id:doc.id})
});
 renderData()


}

getdata()

function renderData(){
    renderBlogs.innerHTML = ''
    arr.forEach((item)=>{
        renderBlogs.innerHTML += `
        <h2 style ="color:black">${item.title}</h2>
        <p style ="color:black">${item.content}</p>`
    })
}

renderData()

dashboardForm.addEventListener('submit', async (e)=>{
    e.preventDefault()

    const userValues = {
        title: dashboardInput.value,
        content: dashboardTextArea.value,
    }

    try {
        const docRef = await addDoc(collection(db, "blogs"), userValues);
        arr.push({...userValues , id:docRef.id})
        renderData()
        console.log("Document written with ID: ", docRef.id);

      } catch (e) {
        console.error("Error adding document: ", e);
      }

       dashboardInput.value = ''
       dashboardTextArea.value = ''
    
})








