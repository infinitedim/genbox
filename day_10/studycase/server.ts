import app from "./api";

const PORT: string | number = process.env.PORT || 88;

app.listen(PORT, (): void =>
  console.log(`Server is listening on port ${PORT}`),
);
