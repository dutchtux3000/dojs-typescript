/**
 * libcpuid mapper.
 *
 * **Note: CPUID module must be loaded by calling LoadLibrary("cpuid") before using!**
 *
 * @see LoadLibrary()
 *
 * @module cpuid
 */
/**
 * @returns {number} always 1.
 */
declare function NumCpus(): number;
/**
 * @returns {boolean} true if the CPU supports the CPUID instruction, else false.
 */
declare function HasCpuId(): boolean;
/**
 *
 */
declare function CpuId(): void;
//# sourceMappingURL=Cpuid.d.ts.map