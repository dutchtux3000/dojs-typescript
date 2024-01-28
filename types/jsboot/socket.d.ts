/** @module tcpip */
/**
 * socket mode definition.
 * @property {*} MODE.BINARY binary data stream
 * @property {*} MODE.ASCII ascii data stream
 * @property {*} MODE.CHKS use UDP checksum (default)
 * @property {*} MODE.NOCHK no UDP checksum
 * @property {*} MODE.NAGLE Nagle's algorithm
 * @property {*} MODE.NONAGLE don't use Nagle's algorithm
 *
 * @property {*} TYPE.TCP_CLIENT tcp client socket
 * @property {*} TYPE.TCP_SERVER tcp server socket
 * @property {*} TYPE.UDP udp socket
 *
 * @property {*} UDP.ANY receives any packet, outgoing packets are broadcast.
 * @property {*} UDP.FIRST No packets may be sent until a packet has been received. This first fills in the remote IP address and port number.
 *
 * @property {*} SERVER.ANY TCP server socket bind address for any local ip address.
 */
declare function Socket(): void;
/**
 * Create a TCP client socket (outgoing connection).
 *
 * @param {(IpAddress|string)} host IP or host name to connect to
 * @param {number} rport remote port.
 * @param {number} [lport] local port.
 *
 * @returns {Socket} A TCP client socket.
 */
declare function Socket(host: (IpAddress | string), rport: number, lport?: number): Socket;
/**
 * Create a UDP socket.
 *
 * @param {(IpAddress|string)} host IP or host name to receive from or one of SOCKET.UDP.
 * @param {number} rport remote port.
 * @param {number} [lport] local port.
 *
 * @returns {Socket} An UDP socket.
 */
declare function UdpSocket(host: (IpAddress | string), rport: number, lport?: number): Socket;
/**
 * create a server socket.
 *
 * @param {(IpAddress|string)} host hostname/IP-address to bind to. SOCKET.SERVER.ANY to bind to 0.0.0.0
 * @param {number} lport local port to listen for incoming connections.
 *
 * @returns {Socket} A server socket.
 */
declare function ServerSocket(host: (IpAddress | string), lport: number): Socket;
/**
 * @deprecated use Curl() instead!
 *
 * do a HTTP GET request and return the answer as array.
 *
 * @param {string} url the URL to retrieve, must start with "http://".
 * @param {string[]} head an array containing extra header fields and their values. Only fields defined in that array will be send with the request, no extra headers will be added.
 *
 * @returns {HTTPResult} an array containing the HTTP response code, message, header (as string) and the response body (as an array of integer, one int per byte).
 * @see Curl
 */
declare function http_get(url: string, head: string[]): HTTPResult;
/**
 * @deprecated use Curl() instead!
 *
 * convert the data array returned by http_get() into a string.
 *
 * @param {HTTPResult} res The array returned from http_get()
 *
 * @returns {string} a string or null if res was invalid.
 * @see Curl
 */
declare function http_string_content(res: HTTPResult): string;
/**
 * @deprecated use Curl() instead!
 *
 * check if a HTTP request succeeded.
 *
 * @param {HTTPResult} res The array returned from http_get().
 *
 * @returns {boolean} TRUE is the request returned code 200.
 * @see Curl
 */
declare function http_ok(res: HTTPResult): boolean;
/**
 * @deprecated use Curl() instead!
 *
 * extract all response headers.
 *
 * @param {HTTPResult} res The array returned from http_get().
 *
 * @returns {Object} a dictionary with header->value mapping or null if res was invalid.
 * @see Curl
 */
declare function http_headers(res: HTTPResult): any;
/**
 * extract all response headers.
 *
 * @param {CurlResult} res The array returned from Curl.DoRequest().
 *
 * @returns {Object} a dictionary with header->value mapping.
 * @see Curl
 */
declare function CurlExtractHeaders(resp: any): any;
/**
 * URL decode a string.
 *
 * @param {string} str encoded string
 *
 * @returns {string} decoded string.
 */
declare function urldecode(str: string): string;
/**
 * URL encode a string.
 *
 * @param {string} str decoded string
 *
 * @returns {string} encoded string.
 */
declare function urlencode(str: string): string;
//# sourceMappingURL=socket.d.ts.map