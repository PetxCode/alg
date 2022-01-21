class BuildUp {
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

  toView() {
    let element = [];
    let Node = this.head;

    while (Node) {
      element.push(Node);
      Node = Node.next;
    }
    return element;
  }
}

const newBuild = new BuildUp();

newBuild.toAppend("Hello");
newBuild.toAppend("CodeLab");
newBuild.toAppend("Students");
newBuild.toAppend("of set");
newBuild.toAppend(05);
newBuild.toPrepend("That's It");
newBuild.toRemove("Peter,");

console.log(newBuild.toView());
