let section = document.querySelector("section");

let add = document.querySelector("form button");
add.addEventListener("click", (e) => {
  e.preventDefault();

  let form = e.target.parentElement;
  let todoText = form.children[0].value;
  let todoMonth = form.children[1].value;
  let todoDate = form.children[2].value;
  //   console.log(todoText, todoTime, todoDate);

  //create a div for values
  let todo = document.createElement("div");
  todo.classList.add("todo");

  let text = document.createElement("p");
  text.classList.add("todo-text");
  text.innerHTML = todoText;

  let time = document.createElement("p");
  time.classList.add("todo-time");
  time.innerHTML = todoMonth + " / " + todoDate;

  todo.append(text);
  todo.append(time);

  // create check and trash button function

  let check = document.createElement("button");
  check.classList.add("check");
  check.innerHTML = '<i class="fa-solid fa-check"></i>';
  check.addEventListener("click", (e) => {
    let todoItem = e.target.parentElement;
    console.log(todoItem);
    todoItem.classList.toggle("done");
  });

  let trash = document.createElement("button");
  trash.classList.add("trash");
  trash.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trash.addEventListener("click", (e) => {
    let todoItem = e.target.parentElement;
    todoItem.addEventListener("animationend", () => {
      todoItem.remove();
    });

    todoItem.style.animation = "scaleDown 0.4s forwards";
  });

  todo.append(check);
  todo.append(trash);

  todo.style.animation = "scaleUp 0.3s forwards";

  section.append(todo);
});
