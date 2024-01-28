export const __VERSION__: 2;
/**
 * create a on-screen text console.
 * @class
 * @param {Color} [fg] default text color
 * @param {Color} [bg] background color.
 * @param {boolean} [cmd] command callback function.
 * @param {Color} [cmdCol] color for command line.
 */
export function Console(fg?: typeof Color, bg?: typeof Color, cmd?: boolean, cmdCol?: typeof Color): void;
export class Console {
    /**
     * create a on-screen text console.
     * @class
     * @param {Color} [fg] default text color
     * @param {Color} [bg] background color.
     * @param {boolean} [cmd] command callback function.
     * @param {Color} [cmdCol] color for command line.
     */
    constructor(fg?: typeof Color, bg?: typeof Color, cmd?: boolean, cmdCol?: typeof Color);
    fg: number | typeof Color;
    bg: number | typeof Color;
    cmd: true;
    cmdCol: number | typeof Color;
    lines: (string | number)[][];
    max_lines: number;
    currentCmd: string;
    frame: number;
    /**
     * set the current command buffer.
     *
     * @param {String} txt the command line. use "" to clear current command.
     */
    SetInput(txt: string): void;
    /**
     * draw the console to the screen.
     *
     * @param {boolean} [clear] true to clear the screen before drawing the text.
     */
    Draw(clear?: boolean): void;
    /**
     * get the contents of the command buffer.
     *
     * @returns {string} the current command line content.
     */
    GetInput(): string;
    /**
     * handle user input. Usually called in Input().
     *
     * @param {Event} e the input event as provided by Input().
     * @see Input()
     */
    HandleInput(e: Event): void;
    /**
     * add a logmessage to the console.
     *
     * @param {string} txt the logmessage.
     * @param {Color} [col] the color for this logmessage
     */
    Log(txt: string, col?: typeof Color): void;
}
//# sourceMappingURL=console.d.ts.map