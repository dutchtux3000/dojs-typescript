/**
 * print javascript debug output if DEBUG is true.
 *
 * @param {string} str the message to print.
 */
declare function Debug(str: string): void;
/**
 * enable IPX remote debugging output.
 */
declare function EnableRemoteDebug(): void;
/**
 * Internal debug which does not redirect to IPX if enabled.
 *
 * @param {string} str the message to print.
 */
declare function _Debug(str: string): void;
/**
 * Print info message.
 *
 * @param {string} str the message to print.
 */
declare function Info(str: string): void;
/**
 * print an object as JSON to logfile.
 *
 * @param {*} obj the object to print
 */
declare function Dump(obj: any): void;
/**
 * try a specific filename which can ba a plain file or a ZIP-file entry. Throws an Exception if the file cant be read.
 *
 * @param {string} name module name.
 * @param {string} fname the file name to try.
 *
 * @returns the imported module.
 */
declare function RequireFile(name: string, fname: string): {};
/**
 * import a module.
 * DOjS modules are CommonJS modules where all exported symbols must be put into an object called 'exports'.
 * A module may provide an optional version using the __VERSION__ member.
 *
 * @param {string} name module file name.
 *
 * @returns the imported module.
 *
 * @example
 * exports.__VERSION__ = 23;        // declare module version
 * exports.myVar = 0;               // will be exported
 * exports.myFunc = function() {};  // will also be exported
 * var localVar;                    // will only be accessible in the module
 * function localFunction() {};     // will also only be accessible in the module
 */
declare function Require(name: string): any;
declare namespace Require {
    let _cache: any;
}
/**
 * include a module. The exported functions are copied into global scope.
 * @see {@link Require}
 * @param {string} name module file name.
 */
declare function Include(name: string): void;
/**
 * Alias for LoadLibrary().
 * @see LoadLibrary()
 */
declare function LoadModule(name: any): void;
/**
 * prefix a filename with the ZIP file the started script came from. The filename is not modified if the script was not loaded from a ZIP file.
 *
 * @param {string} fname file name.
 *
 * @returns {string} a ZIP-filename if the running script was loaded from a ZIP file or the passed filename.
 */
declare function ZipPrefix(fname: string): string;
/**
 * print startup info with screen details.
 */
declare function StartupInfo(): void;
/**
 * get char code.
 *
 * @param {string} s a string
 * @returns the ASCII-code of the first character.
 */
declare function CharCode(s: string): number;
/**
 * compare a keycode with a character.
 *
 * @param {number} k keycode from an Event
 * @param {string} s a string with one char
 */
declare function CompareKey(k: number, s: string): boolean;
/**
 * get random integer between min and max (or between 0 and min if max is not provided).
 *
 * @param {number} min min
 * @param {number} max max
 *
 * @returns {number} an integer between min and max.
 */
declare function RandomInt(min: number, max: number): number;
/**
 * create stop watch for benchmarking
 */
declare function StopWatch(): void;
declare class StopWatch {
    /**
     * start stopwatch.
     */
    Start(): void;
    start: number;
    stop: number;
    /**
     * stop stopwatch.
     */
    Stop(): void;
    /**
     * reset stopwatch.
     */
    Reset(): void;
    /**
     * get runtime in ms.
     * @returns {number} runtime in ms.
     */
    ResultMs(): number;
    /**
    * convert result to a readable string.
    *
    * @param {string} [name] name of the measured value.
    *
    * @returns {string} a string describing the runtime.
    */
    Result(name?: string): string;
    /**
     * print result as a readable string.
     *
     * @param {string} [name] name of the measured value.
     */
    Print(name?: string): void;
}
/**
 * get a random integer between [0..max[
 *
 * @param {number} max max value to return (eclusive).
 */
declare function GetRandomInt(max: number): number;
/**
 * Write the given value to io-port 80h to be displayed by a POST card.
 *
 * @param {number} val value to write to 0x80.
 */
declare function POST(val: number): void;
/**
 * read/write data to LPT data register.
 *
 * @param {number} port port number (0-3).
 * @param {number} data data to write, null to read
 *
 * @returns {number} current LPT value if data was null.
 *
 * @see GetParallelPorts
 */
declare function LPTRawData(port: number, data: number): number;
/**
 * read status register of LPT port.
 *
 * @param {number} port port number (0-3).
 *
 * @see GetParallelPorts
 */
declare function LPTRawStatus(port: number): number;
/**
 * write bits to LPT control register.
 *
 * @param {number} port port number (0-3).
 * @param {number} bits data to write
 *
 * @see GetParallelPorts
 */
declare function LPTRawControl(port: number, bits: number): void;
/**
 * reset parallel port.
 * @param {number} port port number (0-3).
 *
 * @see GetParallelPorts
 */
declare function LPTReset(port: number): void;
/**
 * send data to parallel port.
 * @param {number} port port number (0-3).
 * @param {string} data data to transfer.
 *
 * @see GetParallelPorts
 */
declare function LPTSend(port: number, data: string): void;
/**
 * read parallel port status.
 * @param {number} port port number (0-3).
 *
 * @see GetParallelPorts
 */
declare function LPTStatus(port: number): any;
declare var _lptPorts: any[];
declare namespace PARALLEL {
    namespace DATA {
        let ADDR: number;
        let BIT0: number;
        let BIT1: number;
        let BIT2: number;
        let BIT3: number;
        let BIT4: number;
        let BIT5: number;
        let BIT6: number;
        let BIT7: number;
    }
    namespace STATUS {
        let ADDR_1: number;
        export { ADDR_1 as ADDR };
        export let BUSY: number;
        export let ACK: number;
        export let PAPER_OUT: number;
        export let SELECT_IN: number;
        export let ERROR: number;
        export let TIMEOUT: number;
    }
    namespace CONTROL {
        let ADDR_2: number;
        export { ADDR_2 as ADDR };
        export let BIDI: number;
        export let SELECT_OUT: number;
        export let RESET: number;
        export let LINEFEED: number;
        export let STROBE: number;
    }
}
declare namespace SOUND {
    namespace Input {
        let MIC: number;
        let LINE: number;
        let CD: number;
    }
    namespace Bits {
        let BITS8: number;
        let BITS16: number;
    }
}
declare namespace SYSTEM {
    let MOUSE: number;
    let SOUND: number;
    let JOYSTICK: number;
    let KEYBOARD: number;
    let TIMER: number;
}
declare namespace MOUSE {
    namespace Mode {
        export let NONE: number;
        export let ARROW: number;
        let BUSY_1: number;
        export { BUSY_1 as BUSY };
        export let QUESTION: number;
        export let CURSOR_EDIT: number;
    }
    namespace Buttons {
        let LEFT: number;
        let RIGHT: number;
        let MIDDLE: number;
    }
}
declare namespace KEY {
    namespace Code {
        let NoKey: number;
        let KEY_A: number;
        let KEY_B: number;
        let KEY_C: number;
        let KEY_D: number;
        let KEY_E: number;
        let KEY_F: number;
        let KEY_G: number;
        let KEY_H: number;
        let KEY_I: number;
        let KEY_J: number;
        let KEY_K: number;
        let KEY_L: number;
        let KEY_M: number;
        let KEY_N: number;
        let KEY_O: number;
        let KEY_P: number;
        let KEY_Q: number;
        let KEY_R: number;
        let KEY_S: number;
        let KEY_T: number;
        let KEY_U: number;
        let KEY_V: number;
        let KEY_W: number;
        let KEY_X: number;
        let KEY_Y: number;
        let KEY_Z: number;
        let KEY_0: number;
        let KEY_1: number;
        let KEY_2: number;
        let KEY_3: number;
        let KEY_4: number;
        let KEY_5: number;
        let KEY_6: number;
        let KEY_7: number;
        let KEY_8: number;
        let KEY_9: number;
        let KEY_0_PAD: number;
        let KEY_1_PAD: number;
        let KEY_2_PAD: number;
        let KEY_3_PAD: number;
        let KEY_4_PAD: number;
        let KEY_5_PAD: number;
        let KEY_6_PAD: number;
        let KEY_7_PAD: number;
        let KEY_8_PAD: number;
        let KEY_9_PAD: number;
        let KEY_F1: number;
        let KEY_F2: number;
        let KEY_F3: number;
        let KEY_F4: number;
        let KEY_F5: number;
        let KEY_F6: number;
        let KEY_F7: number;
        let KEY_F8: number;
        let KEY_F9: number;
        let KEY_F10: number;
        let KEY_F11: number;
        let KEY_F12: number;
        let KEY_ESC: number;
        let KEY_TILDE: number;
        let KEY_MINUS: number;
        let KEY_EQUALS: number;
        let KEY_BACKSPACE: number;
        let KEY_TAB: number;
        let KEY_OPENBRACE: number;
        let KEY_CLOSEBRACE: number;
        let KEY_ENTER: number;
        let KEY_COLON: number;
        let KEY_QUOTE: number;
        let KEY_BACKSLASH: number;
        let KEY_BACKSLASH2: number;
        let KEY_COMMA: number;
        let KEY_STOP: number;
        let KEY_SLASH: number;
        let KEY_SPACE: number;
        let KEY_INSERT: number;
        let KEY_DEL: number;
        let KEY_HOME: number;
        let KEY_END: number;
        let KEY_PGUP: number;
        let KEY_PGDN: number;
        let KEY_LEFT: number;
        let KEY_RIGHT: number;
        let KEY_UP: number;
        let KEY_DOWN: number;
        let KEY_SLASH_PAD: number;
        let KEY_ASTERISK: number;
        let KEY_MINUS_PAD: number;
        let KEY_PLUS_PAD: number;
        let KEY_DEL_PAD: number;
        let KEY_ENTER_PAD: number;
        let KEY_PRTSCR: number;
        let KEY_PAUSE: number;
        let KEY_ABNT_C1: number;
        let KEY_YEN: number;
        let KEY_KANA: number;
        let KEY_CONVERT: number;
        let KEY_NOCONVERT: number;
        let KEY_AT: number;
        let KEY_CIRCUMFLEX: number;
        let KEY_COLON2: number;
        let KEY_KANJI: number;
        let KEY_EQUALS_PAD: number;
        let KEY_BACKQUOTE: number;
        let KEY_SEMICOLON: number;
        let KEY_COMMAND: number;
        let KEY_UNKNOWN1: number;
        let KEY_UNKNOWN2: number;
        let KEY_UNKNOWN3: number;
        let KEY_UNKNOWN4: number;
        let KEY_UNKNOWN5: number;
        let KEY_UNKNOWN6: number;
        let KEY_UNKNOWN7: number;
        let KEY_UNKNOWN8: number;
        let KEY_MODIFIERS: number;
        let KEY_LSHIFT: number;
        let KEY_RSHIFT: number;
        let KEY_LCONTROL: number;
        let KEY_RCONTROL: number;
        let KEY_ALT: number;
        let KEY_ALTGR: number;
        let KEY_LWIN: number;
        let KEY_RWIN: number;
        let KEY_MENU: number;
        let KEY_SCRLOCK: number;
        let KEY_NUMLOCK: number;
        let KEY_CAPSLOCK: number;
    }
}
//# sourceMappingURL=func.d.ts.map