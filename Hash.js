

class Hash {
    constructor(type, depth, array=[], isObject=false, key=null){
        this.type = type
        this.depth = depth
        this.isObject = isObject
        this.key = key
        this.array = array
        this.#sort(this.array)
        this.#createTable()
    }

    #createTable(){
        if(typeof this.type == "string" && this.depth > 0){
            this.array = new Array(26**this.depth)
        }
    }

    #sort(array){
        if(array.length == 0){
            return
        }
    }

    insert(data){

    }

    hash(data){
       
        let index = 0
        if(typeof this.type == "string"){
            let lowercaseHash = data.slice(0, this.depth).toLowerCase()
            let bucketSize = 26**this.depth

            for(let i = 0; i < this.depth; i++){
                bucketSize /= 26
                let char = lowercaseHash.charCodeAt(i) - 97  // a is 97 in ascii
                index += char * bucketSize
            }
        }

    }
}

let hash = new Hash("hello", 3)
// hash.hash("bbrse")

/* 





*/
