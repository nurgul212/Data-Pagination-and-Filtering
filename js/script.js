/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
// Global variables
let studentList = document.querySelector(".student-list");
const itemsPerPage = 9;
const currentPage = 1;



// showPage function creates and insert/append the elements needed to display a page of nine students
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage -1;

   studentList.innerHTML = '' ;

   for(let i = 0; i < list.length ; i++){

      if(i >= startIndex && i <= endIndex){
        
         let studentItem = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last} </h3>
                  <span class="email">${list[i].email}</span>
               </div>

               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div> 
            </li>                     
         `;
      studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
}
showPage(data, currentPage);


