const model = (m) => {
  let text = "abcdefghijklmnopqrstuvwxyz";
  let newText = text.split("");

  //   console.log(newText);

  return m.replace(/[a-z]/gi, function (el) {
    return newText.indexOf(el);
  });
};

console.log(model("beauty"));

const model2 = (game) => {
  let text = "abcdefghijklmnopqrstuvwxyz";
  let newText = text.split("");

  console.log(
    game.replace(/[a-z]/gi, function (game) {
      return newText.indexOf(game.toLowerCase()) + 1;
    })
  );
};

model2("r u A");
