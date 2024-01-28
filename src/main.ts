import { TestClass } from './test/testcls';

let pink: number;
let str: string;

/*
** This function is called once when the script is started.
*/
function Setup() {
  pink = Color(241, 66, 244, 255); // define the color pink
  const test = new TestClass();
  test.setPrivateVal("test");
  const ret = test.getPrivateVal();
  MouseSetCursorMode(1);
}

/*
** This function is repeatedly until ESC is pressed or Stop() is called.
*/
function Loop() {
  ClearScreen(EGA.BLACK);
  TextXY(SizeX() / 2, SizeY() / 2, "Hello World!", pink, NO_COLOR);

  TextXY(2, 2, "rate=" + GetFramerate(), EGA.WHITE, NO_COLOR);
}

/*
** This function is called on any input.
*/
function Input(event) {
  str = JSON.stringify(event);
}
