/**
 * Color definition.
 * @module 3dfx */
/**
* set a bit.
*
* @param {number} i bit to set.
* @returns {number} number with given bit set.
*/
declare function FXBIT(i: number): number;
/**
 * (re)initialize simple texture memory management for given TMU.
 *
 * @param {GR_TMU} tmu the tmu to initialize.
 */
declare function FxTexMemInit(tmu: {
    TMU0: number;
    TMU1: number;
    TMU2: number;
}): void;
/**
 * try to find the next available memory for texture.
 *
 * @param {GR_TMU} tmu the TMU where this texture shall be used.
 * @param {TexInfo} info the texture.
 *
 * @returns {number} a start address or null.
 */
declare function FxTexMemGetStartAddress(tmu: {
    TMU0: number;
    TMU1: number;
    TMU2: number;
}, info: TexInfo): number;
/**
 * create empty vertex.
 * @returns {number[]} an empty vertex.
 */
declare function FxEmptyVertex(): number[];
/**
 * split up RGB value and store in vertex.
 *
 * @param {number[]} v the vertex to store in.
 * @param {number} idx start index of RGB values.
 * @param {number} rgb the RGB value.
 */
declare function FxRGB2Vertex(v: number[], idx: number, rgb: number): void;
declare namespace GR_PARAM {
    let XY: number;
    let Z: number;
    let W: number;
    let Q: number;
    let EXT: number;
    let A: number;
    let RGB: number;
    let PARGB: number;
    let ST0: number;
    let ST1: number;
    let ST2: number;
    let Q0: number;
    let Q1: number;
    let Q2: number;
}
declare namespace GR_CULL {
    let DISABLE: number;
    let NEGATIVE: number;
    let POSITIVE: number;
}
declare namespace GR_COMBINE_FUNCTION {
    let ZERO: number;
    let NONE: number;
    let LOCAL: number;
    let LOCAL_ALPHA: number;
    let SCALE_OTHER: number;
    let BLEND_OTHER: number;
    let SCALE_OTHER_ADD_LOCAL: number;
    let SCALE_OTHER_ADD_LOCAL_ALPHA: number;
    let SCALE_OTHER_MINUS_LOCAL: number;
    let SCALE_OTHER_MINUS_LOCAL_ADD_LOCAL: number;
    let BLEND: number;
    let SCALE_OTHER_MINUS_LOCAL_ADD_LOCAL_ALPHA: number;
    let SCALE_MINUS_LOCAL_ADD_LOCAL: number;
    let BLEND_LOCAL: number;
    let SCALE_MINUS_LOCAL_ADD_LOCAL_ALPHA: number;
}
declare namespace GR_COMBINE_FACTOR {
    let ZERO_1: number;
    export { ZERO_1 as ZERO };
    let NONE_1: number;
    export { NONE_1 as NONE };
    let LOCAL_1: number;
    export { LOCAL_1 as LOCAL };
    export let OTHER_ALPHA: number;
    let LOCAL_ALPHA_1: number;
    export { LOCAL_ALPHA_1 as LOCAL_ALPHA };
    export let TEXTURE_ALPHA: number;
    export let TEXTURE_RGB: number;
    export let DETAIL_FACTOR: number;
    export let LOD_FRACTION: number;
    export let ONE: number;
    export let ONE_MINUS_LOCAL: number;
    export let ONE_MINUS_OTHER_ALPHA: number;
    export let ONE_MINUS_LOCAL_ALPHA: number;
    export let ONE_MINUS_TEXTURE_ALPHA: number;
    export let ONE_MINUS_DETAIL_FACTOR: number;
    export let ONE_MINUS_LOD_FRACTION: number;
}
declare namespace GR_COMBINE_LOCAL {
    export let ITERATED: number;
    export let CONSTANT: number;
    let NONE_2: number;
    export { NONE_2 as NONE };
    export let DEPTH: number;
}
declare namespace GR_COMBINE_OTHER {
    let ITERATED_1: number;
    export { ITERATED_1 as ITERATED };
    export let TEXTURE: number;
    let CONSTANT_1: number;
    export { CONSTANT_1 as CONSTANT };
    let NONE_3: number;
    export { NONE_3 as NONE };
}
declare namespace GR_BLEND {
    let ZERO_2: number;
    export { ZERO_2 as ZERO };
    export let SRC_ALPHA: number;
    export let SRC_COLOR: number;
    export let DST_COLOR: number;
    export let DST_ALPHA: number;
    let ONE_1: number;
    export { ONE_1 as ONE };
    export let ONE_MINUS_SRC_ALPHA: number;
    export let ONE_MINUS_SRC_COLOR: number;
    export let ONE_MINUS_DST_COLOR: number;
    export let ONE_MINUS_DST_ALPHA: number;
    export let RESERVED_8: number;
    export let RESERVED_9: number;
    export let RESERVED_A: number;
    export let RESERVED_B: number;
    export let RESERVED_C: number;
    export let RESERVED_D: number;
    export let RESERVED_E: number;
    export let ALPHA_SATURATE: number;
    export let PREFOG_COLOR: number;
}
declare namespace GR_VERTEX {
    let POINTS: number;
    let LINE_STRIP: number;
    let LINES: number;
    let POLYGON: number;
    let TRIANGLE_STRIP: number;
    let TRIANGLE_FAN: number;
    let TRIANGLES: number;
    let TRIANGLE_STRIP_CONTINUE: number;
    let TRIANGLE_FAN_CONTINUE: number;
}
declare namespace GR_ENABLE {
    let AA_ORDERED: number;
    let ALLOW_MIPMAP_DITHER: number;
    let PASSTHRU: number;
    let SHAMELESS_PLUG: number;
    let VIDEO_SMOOTHING: number;
}
declare namespace GR_DITHER {
    let DISABLE_1: number;
    export { DISABLE_1 as DISABLE };
    export let D2x2: number;
    export let D4x4: number;
}
declare namespace GR_DEPTHBUFFER {
    let DISABLE_2: number;
    export { DISABLE_2 as DISABLE };
    export let ZBUFFER: number;
    export let WBUFFER: number;
    export let ZBUFFER_COMPARE_TO_BIAS: number;
    export let WBUFFER_COMPARE_TO_BIAS: number;
}
declare namespace GR_CMP {
    let NEVER: number;
    let LESS: number;
    let EQUAL: number;
    let LEQUAL: number;
    let GREATER: number;
    let NOTEQUAL: number;
    let GEQUAL: number;
    let ALWAYS: number;
}
declare namespace GR_FOG {
    let DISABLE_3: number;
    export { DISABLE_3 as DISABLE };
    export let WITH_TABLE_ON_FOGCOORD_EXT: number;
    export let WITH_TABLE_ON_Q: number;
    export let WITH_TABLE_ON_W: number;
    export let WITH_ITERATED_Z: number;
    export let MULT2: number;
    export let ADD2: number;
}
declare namespace GR_TMU {
    let TMU0: number;
    let TMU1: number;
    let TMU2: number;
}
declare namespace GR_TEXTUREFILTER {
    let POINT_SAMPLED: number;
    let BILINEAR: number;
}
declare namespace GR_TEXTURECLAMP {
    let WRAP: number;
    let CLAMP: number;
    let MIRROR_EXT: number;
}
declare namespace GR_MIPMAP {
    let DISABLE_4: number;
    export { DISABLE_4 as DISABLE };
    export let NEAREST: number;
    export let NEAREST_DITHER: number;
}
declare namespace GR_ORIGIN {
    let UPPER_LEFT: number;
    let LOWER_LEFT: number;
    let ANY: number;
}
declare namespace GR_ASPECT {
    let LOG2_8x1: number;
    let LOG2_4x1: number;
    let LOG2_2x1: number;
    let LOG2_1x1: number;
    let LOG2_1x2: number;
    let LOG2_1x4: number;
    let LOG2_1x8: number;
}
declare namespace GR_LOD {
    let LOG2_256: number;
    let LOG2_128: number;
    let LOG2_64: number;
    let LOG2_32: number;
    let LOG2_16: number;
    let LOG2_8: number;
    let LOG2_4: number;
    let LOG2_2: number;
    let LOG2_1: number;
}
declare namespace GR_TEXFMT {
    let BIT8: number;
    let RGB_332: number;
    let YIQ_422: number;
    let ALPHA_8: number;
    let INTENSITY_8: number;
    let ALPHA_INTENSITY_44: number;
    let P_8: number;
    let RSVD0: number;
    let P_8_6666: number;
    let P_8_6666_EXT: number;
    let RSVD1: number;
    let BIT16: number;
    let ARGB_8332: number;
    let AYIQ_8422: number;
    let RGB_565: number;
    let ARGB_1555: number;
    let ARGB_4444: number;
    let ALPHA_INTENSITY_88: number;
    let AP_88: number;
    let RSVD2: number;
    let RSVD4: number;
}
declare namespace GR_TEXTABLE {
    let NCC0: number;
    let NCC1: number;
    let PALETTE: number;
    let PALETTE_6666_EXT: number;
}
declare namespace GR_MIPMAPLEVELMASK {
    let EVEN: number;
    let ODD: number;
    let BOTH: number;
}
declare namespace GR_BUFFER {
    let FRONTBUFFER: number;
    let BACKBUFFER: number;
    let AUXBUFFER: number;
    let DEPTHBUFFER: number;
    let ALPHABUFFER: number;
    let TRIPLEBUFFER: number;
}
/** hard edge when assigning texture memory at 2MiB */
declare var TEXMEM_2MB_EDGE: number;
/** TMU memory start address/next address per TMU */
declare var _nextTexture: number[];
/** TMU memory end address per TMU */
declare var _lastTexture: number[];
//# sourceMappingURL=3dfx.d.ts.map