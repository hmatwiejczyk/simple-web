import { Collection } from "./models/Collection";
import { baseUrl } from "./environment";

const collection = new Collection(baseUrl);
collection.on('change', () => {
  console.log(collection);
})
collection.fetch();
