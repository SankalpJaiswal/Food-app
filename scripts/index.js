const getFood = async() =>{

    try{
        let food = document.querySelector("#food").value;

        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);

        let data = await res.json();
        console.log('data:', data.meals);

        append(data.meals)
    }

    catch(err){
        console.log('err:', err)
    }
}

const append = (data) =>{

    document.querySelector("#container").innerHTML = "";

    data.forEach(({strInstructions, strMealThumb, strMeal, strYoutube, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 }) => {

        let div1 = document.createElement("div");

        let img = document.createElement("img");
        img.src = strMealThumb;

        let title = document.createElement("h3");
        title.innerText = strMeal;

        let video = document.createElement("iframe");
        video.src = strYoutube;
        video.allow = "fullscreen";

        let div2 = document.createElement("div");

        let ing = document.createElement("ul");
        ing.innerText = "Ingredients";

        let ing1 = document.createElement("li");
        ing1.innerText = strIngredient1;

        let ing2 = document.createElement("li");
        ing2.innerText = strIngredient2;

        let ing3 = document.createElement("li");
        ing3.innerText = strIngredient3;

        let ing4 = document.createElement("li");
        ing4.innerText = strIngredient4;

        let ing5 = document.createElement("li");
        ing5.innerText = strIngredient5;

        ing.append(ing1,ing2,ing3,ing4,ing5);

        let ins = document.createElement("p");
        ins.innerText = `Instructions - ${strInstructions}`         

        div1.append(img,title,video);
        div2.append(ing,ins);
        document.querySelector("#container").append(div1,div2); 
    });
}