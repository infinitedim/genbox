import app from "./api";
import db from "./src/config/db.config";

const PORT: string | number = process.env.PORT || 88;

db.authenticate().then((): void => {
  app.listen(PORT, (): void =>
    console.log(`Server is listening on port ${PORT}`)
  );
});
