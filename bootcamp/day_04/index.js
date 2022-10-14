const { createInterface } = require("readline");
const { existsSync, readFileSync, writeFileSync, mkdirSync } = require("fs");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Apa kegiatanmu: ", (todo) => {
  rl.question("Tanggal berapa: ", (date) => {
    rl.question("Jam berapa: ", (time) => {
      const path = "./data";
      const file = "./data/todo.json";
      let datas = { todo, date, time };

      if (!existsSync(path)) {
        mkdirSync(path);
      }

      if (!existsSync(file)) {
        writeFileSync(file, "[]", "utf-8");
      }

      const loadTodo = () => {
        const files = readFileSync(file, "utf-8");
        const todos = JSON.parse(files);
        return todos;
      };

      const todosFunc = loadTodo();

      const duplikat = todosFunc.findIndex((todo) => todo.todo === todo);

      if (duplikat) {
        console.error("Kegiatan sudah ada");
        rl.close();
      }

      todosFunc.push(datas);

      writeFileSync(file, JSON.stringify(todosFunc));

      console.log(`Data todo sudah disimpan ke ${file}.`);

      todosFunc.forEach((todo, i) => {
        console.log(`${i + 1}. ${todo.todo} - ${todo.date} - ${todo.time}`);
      });

      rl.close();
    });
  });
});
