const model = (text) => {
  // a=1, b=2, c=3

  let letters = "abcdefghijklmnopqrstuvwxyz".split("");
  return text.replace(/[a-z]/gi, function (el) {
    return letters.indexOf(el.toLowerCase()) + 1;
  });
};
// console.log(model("Tunde is a Boy"));

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let Node = { value: value, next: null };
    if (this.tail) {
      this.tail.next = Node;
    }
    this.tail = Node;

    if (!this.head) {
      this.head = Node;
    }
  }

  prepend(value) {
    let Node = { value: value, next: this.head };

    if (this.head) {
      this.head = Node;
    }
  }

  remove(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head.next = this.head;
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

  print() {
    let element = [];
    let Node = this.head;

    while (Node) {
      element.push(Node);
      Node = Node.next;
    }
    return element;
  }
}

const build = new LinkedList();

build.append("Hello");
build.append("From");
build.append("CodeLab");
build.append("Wilmer");
build.append("05");
build.remove("Gideon");

console.log(build.print());
