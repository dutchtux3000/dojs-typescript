/**
 * @class
 */
declare function Socket(): void;
declare function Socket(host: string | IpAddress, rport: number, lport?: number): Socket;
declare class Socket {
    /**
     * @class
     */
    constructor();
    constructor(host: string | IpAddress, rport: number, lport?: number);
    /**
     * flush the socket output to the network.
     */
    Flush(): void;
    /**
     * close the socket.
     * @param {boolean} [doFlush=false] flush before close.
     */
    Close(doFlush?: boolean): void;
    /**
     * Wait until all written data is flushed.
     */
    WaitFlush(): void;
    /**
     * Wait on socket for incoming data with timeout.
     * @param {boolean} [timeout=1] max wait time.
     */
    WaitInput(timeout?: boolean): void;
    /**
     * Set binary or ascii mode for UDP/TCP sockets.
     * @param {number} mode one of SOCKET.MODE.
     */
    Mode(mode: number): void;
    /**
     * Sets non-flush mode on next TCP write.
     */
    NoFlush(): void;
    /**
     * Causes next transmission to have a flush (PUSH bit set).
     */
    FlushNext(): void;
    /**
     * Get number of bytes waiting to be read.
     * @returns {number} number of bytes waiting to be read.
     */
    DataReady(): number;
    /**
     * Check if the socket connection is established.
     * @returns {boolean} true if the connection is established.
     */
    Established(): boolean;
    /**
     * Get the remote host ip
     * @returns {IpAddress} IP of the remote host.
     */
    GetRemoteHost(): IpAddress;
    /**
     * Get the local port number.
     * @returns {number} the local port number.
     */
    GetLocalPort(): number;
    /**
     * Get the remote port number.
     * @returns {number} the remote port number.
     */
    GetRemotePort(): number;
    /**
     * Return the next line from the socket as string.
     * This method blocks until a newline is read.
     * @returns {string} the next line from the socket as string.
     */
    ReadLine(): string;
    /**
     * Return data as string.
     * This method blocks until 'len' bytes have been read.
     *
     * @param {number} len number of bytes to read from socket.
     *
     * @returns {string} data as string.
     */
    ReadString(len: number): string;
    /**
     * send string.
     * @param {string} str data to send.
     */
    WriteString(str: string): void;
    /**
     * Get the next byte from the socket as number.
     * @returns {number} the next byte from the socket.
     */
    ReadByte(): number;
    /**
     * write a byte to a socket.
     * @param {number} ch the byte to write.
     */
    WriteByte(ch: number): void;
    /**
     * Return data as array of numbers.
     * This method blocks until 'len' bytes have been read.
     *
     * @param {number} len number of bytes to read from socket.
     *
     * @returns {number[]} data as array.
     */
    ReadBytes(len: number): number[];
    /**
     * send binary data.
     * @param {number[]} data data to write as number array.
     */
    WriteBytes(data: number[]): void;
    /**
     * Return data as ByteArray.
     * This method blocks until 'len' bytes have been read.
     *
     * @param {number} len number of bytes to read from socket.
     *
     * @returns {ByteArray} data as ByteArray.
     */
    ReadInts(len: number): ByteArray;
    /**
     * send binary data.
     * @param {ByteArray} data data to write as ByteArray.
     */
    WriteInts(data: ByteArray): void;
}
//# sourceMappingURL=Socket.d.ts.map