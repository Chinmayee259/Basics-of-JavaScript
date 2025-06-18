//Q1) Create and object for a product on amezon
const product = {
    title: "Ballpen",
    rating: 4,
    offer: 5,
    price: 270,
};

console.log(product);


//Q2) Create an object for an profile on Linkedin
const Profile = {
    userName : "shradhakhapra",
    posts : 195,
    followers : 569,
    following : 4,
    Profession : "Entrepreneur",
    workingAt : "Apna College",
    Experience : "Ex-Microsoft , DRDO",
    Bio : "To educate someone is the highest privilege",
    isFollow : false,
};

console.log(Profile);
console.log(Profile["userName"]);
console.log(typeof(Profile["isFollow"]));
