function listProcessor(input) {

    function processorBlueprint() {
        let arr = [];
        function add(x) {
            arr.push(x);
        }
        function remove(x) {
            arr = arr.filter(k => k !== x);
        }
        function print() {
            console.log(arr.join());
        }

        return {
            add,
            remove,
            print
        }
    }

    const processor = processorBlueprint();

    input.forEach(x => {
        const [command, str] = x.split(' ');
        processor[command](str);
    });

}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
console.log('-----------------');
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);