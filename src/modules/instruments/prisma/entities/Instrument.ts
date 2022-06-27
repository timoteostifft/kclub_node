import { v4 as uuidV4 } from "uuid";

class Instrument {
  id: string;
  name: string;
  amount: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Instrument };
