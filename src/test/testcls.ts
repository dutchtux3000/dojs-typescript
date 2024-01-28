export class TestClass {

  private privateVal: string;

  constructor() {

  }

  setPrivateVal(privateVal: string): void {
    this.privateVal = privateVal;
  }

  getPrivateVal() {
    return this.privateVal;
  }
}

export const __VERSION__ = 1;