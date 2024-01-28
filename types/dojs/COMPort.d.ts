/**
 * open a COM port.
 *
 * **Note: COMPort module must be loaded by calling LoadLibrary("comport") before using!**
 *
 * @see LoadLibrary()
 *
 * @class
 *
 * @param {number} port one of COM.PORT: COM1, COM2, COM3, COM4.
 * @param {number} baud one of COM.BAUD: B50, B75, B110, B134, B150, B200, B300, B600, B1200, B1800, B2400, B4800, B9600, B19200, B38400, B57600, B115200
 * @param {number} bits one of COM.BIT: BITS_5, BITS_6, BITS_7, BITS_8
 * @param {number} parity one of COM.PARITY: NO_PARITY, ODD_PARITY, EVEN_PARITY, MARK_PARITY, SPACE_PARITY
 * @param {number} stop one of COM.STOP: STOP_1, STOP_2
 * @param {number} flow one of COM.FLOW: NO_CONTROL, XON_XOFF, RTS_CTS
 * @param {number} [addr] optional: port io address
 * @param {number} [irq] optional: port IRQ
 */
declare function COMPort(port: number, baud: number, bits: number, parity: number, stop: number, flow: number, addr?: number, irq?: number): void;
declare class COMPort {
    /**
     * open a COM port.
     *
     * **Note: COMPort module must be loaded by calling LoadLibrary("comport") before using!**
     *
     * @see LoadLibrary()
     *
     * @class
     *
     * @param {number} port one of COM.PORT: COM1, COM2, COM3, COM4.
     * @param {number} baud one of COM.BAUD: B50, B75, B110, B134, B150, B200, B300, B600, B1200, B1800, B2400, B4800, B9600, B19200, B38400, B57600, B115200
     * @param {number} bits one of COM.BIT: BITS_5, BITS_6, BITS_7, BITS_8
     * @param {number} parity one of COM.PARITY: NO_PARITY, ODD_PARITY, EVEN_PARITY, MARK_PARITY, SPACE_PARITY
     * @param {number} stop one of COM.STOP: STOP_1, STOP_2
     * @param {number} flow one of COM.FLOW: NO_CONTROL, XON_XOFF, RTS_CTS
     * @param {number} [addr] optional: port io address
     * @param {number} [irq] optional: port IRQ
     */
    constructor(port: number, baud: number, bits: number, parity: number, stop: number, flow: number, addr?: number, irq?: number);
    /**
     * close port.
     */
    Close(): void;
    /**
     * flush input buffer.
     */
    FlushInput(): void;
    /**
     * flush output buffer.
     */
    FlushOutput(): void;
    /**
     * check state of send buffer.
     * @returns {boolean} true if the output buffer is empty.
     */
    IsOutputEmpty(): boolean;
    /**
     * check state of send buffer.
     * @returns {boolean} true if the output buffer is full.
     */
    IsOutputFull(): boolean;
    /**
     * check state of receive buffer.
     * @returns {boolean} true if the input buffer is empty.
     */
    IsInputEmpty(): boolean;
    /**
     * check state of receive buffer.
     * @returns {boolean} true if the input buffer is full.
     */
    IsInputFull(): boolean;
    /**
     * Write a single byte to COM port.
     * @param {number} ch the byte to write.
     */
    WriteByte(ch: number): void;
    /**
     * Write a string to COM port.
     * @param {string} txt the string to write.
     */
    WriteString(txt: string): void;
    /**
     * read a byte from COM port
     * @returns {number} the value of the byte.
     */
    ReadByte(): number;
    /**
     * read a string from the receive buffer.
     * @returns {string} contents of the received buffer.
     */
    ReadBuffer(): string;
}
//# sourceMappingURL=COMPort.d.ts.map