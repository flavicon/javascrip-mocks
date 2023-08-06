import File from './file.js';
import { rejects, deepStrictEqual } from "assert";
import { error } from "./constants.js";

(async () => {
  {
    const filePath = './mocks/empty-file-invalid.csv';
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = './mocks/four-items-invalid.csv';
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = './mocks/three-items-valid.csv';
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        "id": 1,
        "name": "Flavio Silva",
        "profession": "Web Developer",
        "age": 25
      },
      {
        "id": 2,
        "name": "Marcos Antonio",
        "profession": "Contador",
        "age": 34
      },
      {
        "id": 3,
        "name": "José Moreira",
        "profession": "Bancario",
        "age": 60
      }
    ];
    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();