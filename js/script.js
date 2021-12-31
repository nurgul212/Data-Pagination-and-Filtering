/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
// Global variables
const studentList = document.querySelector(".student-list");
const linkList = document.querySelector(".link-list");
const itemsPerPage = 9;



// showPage function creates and insert the elements needed to display a page of nine students
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage -1;

   studentList.innerHTML = '' ;

   for(let i = 0; i < list.length ; i++){

      if( startIndex <= i && i <= endIndex){
        
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

         // position='beforeend': Insert student's list item  inside the element, after its last child
      studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
}
// Call function
showPage(data, 1);


// addPagination function creates and insert the pagination buttons
function addPagination(list){
   const numOfPages = Math.ceil(list.length / itemsPerPage);
   // console.log(numOfPages);
   linkList.innerHTML = '';
   for (let i = 1; i <= numOfPages ; i++){
      let button = `
            <li>
               <button type="button"> ${i} </button>
            </li>
      `;

      linkList.insertAdjacentHTML("beforeend", button);
   }




}
// Call function
addPagination(data);