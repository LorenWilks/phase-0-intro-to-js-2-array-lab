// Write your solution here!
   const cats = ["Milo", "Otis", "Garfield"];

   function destructivelyAppendCat() {
    cats.push("Ralph");
   }
   function destructivelyPrependCat(name) {
       cats.unshift(name);
   }
   function destructivelyRemoveLastCat(){
       cats.pop();
   }
   function destructivelyRemoveFirstCat() {
       cats.shift();
   }
   function appendCat(){
    const newCats = [...cats, "Broom"];
    return newCats;
   }
   function prependCat(){
    const newCats = ["Arnold", ...cats];
    return newCats;
   }
   function removeLastCat(){
    const newCats = cats.slice(0, cats.length - 1);
    return newCats;
   }
   function removeFirstCat(){
       const newCats = cats.slice(1);
       return newCats;
   }