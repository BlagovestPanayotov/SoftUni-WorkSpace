function cats(inputCats) {

    class Cat {
        constructor (name, age) {
            this.name = name,
            this.age = age
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }

    }

    for(let currentCat of inputCats ){
        let catToArr = currentCat.split(' ');
        let cat = new Cat(catToArr[0],catToArr[1]);
        cat.meow();
    }


}


cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);