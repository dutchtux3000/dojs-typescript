export const __VERSION__: 3;
/**
 * create an evaluation chain.
 * @class
 */
export function EvalChain(): void;
export class EvalChain {
    chain: any[];
    /**
     * add a function to the chain.
     *
     * @param {function} f a function to be called by the chain.
     */
    Add(f: Function): void;
    /**
     * execute the next function (if any).
     *
     * @returns {boolean} true if there were any functions to execute, else false.
     */
    Step(): boolean;
    /**
     * @returns {number} number of entries in the chain.
     */
    Size(): number;
    /**
     * empty the chain, regardless of the remaining steps
     */
    Clear(): any[];
}
//# sourceMappingURL=evchain.d.ts.map