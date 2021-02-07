const mainAPI = "https://www.themealdb.com/api/json/v1/1/search.php";

// search button function declare
const search = document.getElementById("search");
search.addEventListener("click", function() {
    const meal = document.getElementById("meal").value;
    const url = `${mainAPI}?s=${meal}`;
    fetch(url)
        .then(response => response.json())
        .then(data => mealMenu(data.meals));
    const mealMenu = (food) => {
        if (food == null) {
            document.getElementById("not-found").innerText = "Sorry! Your FOOD search result not found...";
        } else {
            const menuList = document.getElementById("menuList");
            food.forEach(foods => {
                const foodDiv = document.createElement("div");
                foodDiv.className = "foods mt-5";
                const foodInfo = `
                    <div class="card" style="width: 18rem;" onclick="foodDetail('${foods.strMeal}')">
                    <img src="${foods.strMealThumb}" class="card-img-top img-thumbnail" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">${foods.strMeal}</h5>
                    </div>
                    </div>
                `
                foodDiv.innerHTML = foodInfo;
                menuList.appendChild(foodDiv);
            });
        }

    }
    document.getElementById("menuList").innerHTML = "";
    document.getElementById("food-info").innerHTML = "";
    document.getElementById("not-found").innerText = "";
});

// show food details

const foodDetail = (foodName) => {
    const url = `${mainAPI}?s=${foodName}`
    fetch(url)
        .then(response => response.json())
        .then(data => foodInformation(data.meals[0]));
}

const foodInformation = food => {
    const foodDetails = document.getElementById("food-info");
    foodDetails.innerHTML = `
        <img width="350" height="200" class="img-fluid detail-img" src="${food.strMealThumb}">
        <h1 class= "food-name">${food.strMeal}</h1>
        <h5 style="color: white;">—: FOOD Details :—</h5>
        <ul class="list-group">
            <li class="list-group-item list-group-item-action list-group-item-success">
                <input class="form-check-input me-1 " type="checkbox" value="" Checked>
                ${food.strIngredient1}
            </li>
            <li class="list-group-item list-group-item-action list-group-item-secondary">
                <input class="form-check-input me-1" type="checkbox" value="" Checked>
                ${food.strIngredient2}
            </li>
            <li class="list-group-item list-group-item-action list-group-item-success">
                <input class="form-check-input me-1" type="checkbox" value="" Checked>
                ${food.strIngredient3}
            </li>
            <li class="list-group-item list-group-item-action list-group-item-secondary">
                <input class="form-check-input me-1" type="checkbox" value="" Checked>
                ${food.strIngredient4}
            </li>
            <li class="list-group-item list-group-item-action list-group-item-success">
                <input class="form-check-input me-1" type="checkbox" value="" Checked>
                ${food.strIngredient5}
            </li>
            <li class="list-group-item list-group-item-action list-group-item-secondary">
                <input class="form-check-input me-1" type="checkbox" value="" Checked>
                ${food.strIngredient6}
            </li>
        </ul>
    `
}