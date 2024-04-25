// Get the buttons by their IDs
const btnViewGrid = document.getElementById("btn-view-grid");
const btnViewList = document.getElementById("btn-view-list");


function changeView(view){
    var items_wrapper = document.getElementById("items-wrapper");
    console.log("class and id of items_wrapper: ", items_wrapper.className, items_wrapper.id);
    if (view=="grid")
    {
        // Remove class "list-view" from items-wrapper
        items_wrapper.classList.remove("list-view");
        // Add class "grid-view" to items-wrapper
        items_wrapper.classList.add("grid-view");
    }
    else if (view=="list")
    {
        // Remove class "grid-view" from items-wrapper
        items_wrapper.classList.remove("grid-view");
        // Add class "list-view" to items-wrapper
        items_wrapper.classList.add("list-view");
    }
}



// Add click event listeners to the buttons
btnViewGrid.addEventListener("click", () => {
    // Code to execute when btn-view-grid is clicked
    console.log("Grid view clicked");
    changeView("grid");
});

btnViewList.addEventListener("click", () => {
    // Code to execute when btn-view-list is clicked
    console.log("List view clicked");
    // Call the changeView function with the argument "list"
    changeView("list");
});