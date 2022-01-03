/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
// Global variables
const studentList = document.querySelector(".student-list");
const pageButtons = document.querySelector(".link-list");
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


// addPagination function creates and insert all pagination buttons and 
// adds functionality to the page to show all of the students
function addPagination(list){
   const numOfPages = Math.ceil(list.length / itemsPerPage);
   // console.log(numOfPages);
   pageButtons.innerHTML = '';
   for (let i = 1; i <= numOfPages ; i++){
      let button = `
            <li>
               <button type="button">${i}</button>
            </li>
      `;

      pageButtons.insertAdjacentHTML("beforeend", button);
   }
   const buttons =  pageButtons.getElementsByTagName("button");
  
    // add the 'active' class to the first button
   buttons[0].className='active';

   // Create an addEventListener on linkList that will be called when there is a click event
  pageButtons.addEventListener("click", (e) => {
     const clickedButton = e.target;
      if (clickedButton.tagName === "BUTTON") {
            for(let i = 0; i < buttons.length; i++){
               buttons[i].className = '';
            }
            
            clickedButton.className = 'active';
            showPage(list, clickedButton.textContent);   
         }
  });

}
// Call function
addPagination(data);



//For Exceeds Expectations Mark, I am going to add search bar and search button as a template literal into HTML
const searchBar = document.querySelector("header");
let searchForm = `
                  <label for="search" class="student-search">
                     <span>Search by name</span>
                     <input id="search" placeholder="Search by name...">
                     <button type="button" id="button">
                        <img src="img/icn-search.svg" alt="Search icon">
                     </button>
                   </label>
                   `;
searchBar.insertAdjacentHTML("beforeend", searchForm);


const search = document.getElementById("search"); 
const errorMessage = document.createElement('p'); 
errorMessage.className = 'errorMessage';
searchBar.parentNode.appendChild(errorMessage);

//searchFilter function is used to find a student by first or last name, errorMessage will be returned if there are no matches
function searchFilter(inputName, studentsList){
   let filteredName = [];
   errorMessage.textContent = '';
   for(let i = 0 ; i < studentsList.length; i++){
      if(studentsList[i].name.first.toLowerCase().includes(inputName.toLowerCase()) || 
      studentsList[i].name.last.toLowerCase().includes(inputName.toLowerCase()) ){
         filteredName.push(studentsList[i]);
         errorMessage.style.display="none";
      } else if (filteredName.length == 0) { 
         errorMessage.textContent = '" ' + inputName +' " '+ ' is not found, please try again.';
         errorMessage.style.display="block";
      }
   }
   showPage(filteredName,1);
   addPagination(filteredName);
}

let searchName= "";
const inputSearch = document.querySelector("#search");
inputSearch.addEventListener("keyup", (e) => {
   searchName = e.target.value;
   searchFilter(searchName, data);
 });
