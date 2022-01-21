const model = (text) => {
  let word = "abcdefghijklmnopqrstuvwxyz".split("");
  return text.replace(/[a-z]/gi, function (el) {
    return word.indexOf(el.toLowerCase()) + 1;
  });
};

// console.log(model("A BOY"));

const model2 = (numb) => {
  return console.log(parseInt(String(numb).split("").reverse().join("")));
};

// model2(3141);

const model3 = (numb) => {
  // Math.pow(x, 2)
  const xx = [];
  const x = String(numb).split("");
  for (s of x) {
    xx.push(Math.pow(parseInt(s), 2));
  }

  return console.log(xx.join(""));
};
// model3(27);

const model4 = (text) => {
  let xx = [];
  let word = text.split(" ");
  console.log(word);
  for (s of word) {
    xx.push(s.length);
  }

  console.log(Math.min(...xx));
};

// model4("This is the best time of my life!");

//Link-List Algorithm
class Build {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  toAppend(value) {
    let Node = { value: value, next: null };

    if (this.tail) {
      this.tail.next = Node;
    }
    this.tail = Node;

    if (!this.head) {
      this.head = Node;
    }
  }

  toPrepend(value) {
    let Node = { value: value, next: this.head };
    if (this.head) {
      this.head = Node;
    }
  }

  toRemove(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let Node = this.head;

    while (Node.next) {
      if (Node.next.value === value) {
        Node.next = Node.next.next;
      } else {
        Node = Node.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = Node;
    }
  }

  toPrint() {
    let element = [];
    let Node = this.head;

    while (Node) {
      element.push(Node);
      Node = Node.next;
    }
    return element;
  }
}

const newBuild = new Build();

newBuild.toAppend("Hello");
newBuild.toAppend("CodeLab");
newBuild.toAppend("Wilmer");
newBuild.toAppend("01");
newBuild.toRemove("CodeLab");

console.log(newBuild.toPrint());
