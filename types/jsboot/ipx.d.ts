/**
 * Convert a node address to a string.
 *
 * @param {IpxAddress} addr a node address.
 */
declare function IpxAddressToString(addr: IpxAddress): string;
/**
 * Convert an address in hex-string notation back to an JS array.
 *
 * @param {string} addr a string of 6 hex numbers separated by ':'.
 * @returns {IpxAddress} An array of six numbers.
 */
declare function IpxStringToAddress(addr: string): IpxAddress;
/**
 * discover nodes on the network.
 *
 * @param {number} num total number of nodes to search for (including the local node).
 * @param {IpxAddress[]} nodes an array to store the discovered nodes in.
 *
 * @returns {boolean} true if the wanted number of nodes was discovered, else false. The nodes array will contain the addresses of all found nodes.
 */
declare function IpxFindNodes(num: number, nodes: IpxAddress[]): boolean;
/**
 * Send data to all nodes in array.
 *
 * @param {string} data the data to send
 * @param {IpxAddress[]} nodes the node addresses to send to.
 */
declare function IpxAllNodes(data: string, nodes: IpxAddress[]): void;
/**
 * Send logmessages to logviewer using IPX networking.
 *
 * @param {string} str logmessage to send.
 */
declare function IpxDebug(str: string): void;
//# sourceMappingURL=ipx.d.ts.map