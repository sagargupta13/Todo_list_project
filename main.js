// 1.Add the item first
// 2.Delete that item
// 3. search that item
// Steps 
// know the click of submit
// grab the value from the input type (text box)
// append in the list item
// make a delete button
// apply classes on the button
// Insert the delete button inside li tag

let form = document.getElementById("addForm")
let itemList = document.getElementById("items")
let filter = document.getElementById("filter")

//create a function to add the item 
function addItem(e) {
    e.preventDefault()// use to stop the reloading of the form
    let newItem = document.getElementById("item").value
    if (newItem == "") {
        alert("Please add some text in the field");
        return;
    }
    let li = document.createElement("li")
    li.className = "list-group-item"
    let node = document.createTextNode(newItem)
    li.appendChild(node)
    let list = document.getElementById("items")
    list.appendChild(li)
    document.getElementById("item").value = " "


    // create delete button
    let btn = document.createElement("button")
    btn.appendChild(document.createTextNode("X"))
    btn.className = 'btn btn-danger btn-sm float-right delete'
    li.appendChild(btn)
}

// create a function to delete the item
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you sure to delete this item")) {
            itemList.removeChild(e.target.parentElement)
        }
        else {
            alert("OK")
        }
    }
    else {
        console.log("Clicked on somewhere else")
    }
}

// create a function to search the item 
function filterItem(e) {
    let text = e.target.value.toLowerCase()
    let items = itemList.getElementsByTagName("li")
    let itemsArray = Array.from(items)
    itemsArray.forEach(function (value) {
        let itemName = value.firstChild.textContent
        console.log(itemName.toLowerCase().indexOf(text))
        if (itemName.toLowerCase().indexOf(text) != -1) {
            value.style.display = "block"

        } else {
            value.style.display = "none"
        }
    })
}



form.addEventListener("submit", addItem)
itemList.addEventListener("click", removeItem)
filter.addEventListener("keyup", filterItem)