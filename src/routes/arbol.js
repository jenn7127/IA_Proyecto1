class Node {
    constructor (value) {
      this.value = value
      this.hijos= []
    }

}

class Tree {
    constructor () {
      this.root = null
    }
  
    isEmpty () {
      return this.root === null
    }

    getHijos(){
        return this.root.hijos.length
    }

    getNodo(){
        return this.root;
    }




add(value){
    // arbol no tiene elementos
    if (this.isEmpty()) {
      this.root = new Node(value)
      return
    }

    var aux = this.root

    while (aux) {
        aux=hijos
        aux.push(new Node(value))       
    }
  }
}