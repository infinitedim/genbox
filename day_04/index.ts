import { createInterface, Interface } from "readline";
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "fs";

const rl: Interface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Apa kegiatanmu: ", (todo: string): void => {
  rl.question("Tanggal berapa: ", (date: string): void => {
    rl.question("Jam berapa: ", (time: string): void => {
      const path: string = "./data";
      const file: string = "./data/todo.json";
      let datas: {
        todo: string;
        date: string;
        time: string;
      } = { todo, date, time };

      if (!existsSync(path)) {
        mkdirSync(path);
      }

      if (!existsSync(file)) {
        writeFileSync(file, "[]", "utf-8");
      }

      const loadTodo = (): any => {
        const files: string = readFileSync(file, "utf-8");
        const todos: any = JSON.parse(files);
        return todos;
      };

      const todosFunc: any = loadTodo();

      const duplikat: any = todosFunc.findIndex(
        (todo: { todo: any }) => todo.todo === todo
      );

      if (duplikat) {
        console.error("Kegiatan sudah ada");
        rl.close();
      }

      todosFunc.push(datas);

      writeFileSync(file, JSON.stringify(todosFunc));

      console.log(`Data todo sudah disimpan ke ${file}.`);

      todosFunc.forEach(
        (todo: { todo: any; date: any; time: any }, i: number): void => {
          console.log(`${i + 1}. ${todo.todo} - ${todo.date} - ${todo.time}`);
        }
      );

      rl.close();
    });
  });
});
