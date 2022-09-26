//problem statemet
//please find the customer's rating data for multiple resturants:-
 const  ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4}, 
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ]
                          //All output is shown in console
 // a. Calculate the Average rating for all the restaurants.
// b. List of all restuarants with average rating greater than 4.


// Solution (a):-

let filterResturantName = Array.from(new Set(ratingData.map(({ restaurant }) => restaurant)));  

let ratingResturant =[];
 filterResturantName.map ((frn)=>{
   tot = 0;
   c = 0;
   const filterData = ratingData.filter(obj => obj.restaurant == frn);
   filterData.map((item) =>{
    tot = filterData.reduce((x, y)  => x + y.rating, 0);
    c++;
   })
   ratingResturant.push({ 'resturant': frn,'averageRating' :(tot / c)});
   return ratingResturant;
 })
 //output of solution(a):-
console.log(ratingResturant)

//Solution(b):-
let rattingGreaterThanFour =ratingResturant.filter(item => item.averageRating >= 4);
// output of Solution(b) :-
console.log(rattingGreaterThanFour)
 