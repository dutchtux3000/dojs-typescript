/**
 * OpenGL mapping functions.
 * Please note that only some functions have been tested by me, most weren't.
 *
 * For a detailed OpenGL 1.1 documentation please refer to other sources.
 *
 * **Note: noise module must be loaded by calling LoadLibrary("ogl") before using!**
 *
 * @example
// The following functions are missing from the implementation (help is much appreciated)

// Vertex Arrays  (1.1)
GLAPI void GLAPIENTRY glVertexPointer(GLint size, GLenum type, GLsizei stride, const GLvoid * ptr);
GLAPI void GLAPIENTRY glNormalPointer(GLenum type, GLsizei stride, const GLvoid * ptr);
GLAPI void GLAPIENTRY glColorPointer(GLint size, GLenum type, GLsizei stride, const GLvoid * ptr);
GLAPI void GLAPIENTRY glIndexPointer(GLenum type, GLsizei stride, const GLvoid * ptr);
GLAPI void GLAPIENTRY glTexCoordPointer(GLint size, GLenum type, GLsizei stride, const GLvoid * ptr);
GLAPI void GLAPIENTRY glEdgeFlagPointer(GLsizei stride, const GLvoid * ptr);
GLAPI void GLAPIENTRY glGetPointerv(GLenum pname, void ** params);
GLAPI void GLAPIENTRY glArrayElement(GLint i);
GLAPI void GLAPIENTRY glDrawArrays(GLenum mode, GLint first, GLsizei count);
GLAPI void GLAPIENTRY glDrawElements(GLenum mode, GLsizei count, GLenum type, const GLvoid * indices);
GLAPI void GLAPIENTRY glInterleavedArrays(GLenum format, GLsizei stride, const GLvoid * pointer);

// Texture mapping
// 1.1 functions
GLAPI void GLAPIENTRY glPrioritizeTextures(GLsizei n, const GLuint * textures, const GLclampf * priorities);
GLAPI GLboolean GLAPIENTRY glAreTexturesResident(GLsizei n, const GLuint * textures, GLboolean * residences);
GLAPI void GLAPIENTRY glTexSubImage1D(GLenum target, GLint level, GLint xoffset, GLsizei width, GLenum format, GLenum type, const GLvoid * pixels);
GLAPI void GLAPIENTRY glTexSubImage2D(GLenum target, GLint level, GLint xoffset, GLint yoffset, GLsizei width, GLsizei height, GLenum format, GLenum type, const GLvoid * pixels);
GLAPI void GLAPIENTRY glCopyTexImage1D(GLenum target, GLint level, GLenum internalformat, GLint x, GLint y, GLsizei width, GLint border);
GLAPI void GLAPIENTRY glCopyTexImage2D(GLenum target, GLint level, GLenum internalformat, GLint x, GLint y, GLsizei width, GLsizei height, GLint border);
GLAPI void GLAPIENTRY glCopyTexSubImage1D(GLenum target, GLint level, GLint xoffset, GLint x, GLint y, GLsizei width);
GLAPI void GLAPIENTRY glCopyTexSubImage2D(GLenum target, GLint level, GLint xoffset, GLint yoffset, GLint x, GLint y, GLsizei width, GLsizei height);

// Evaluators
GLAPI void GLAPIENTRY glMap1d(GLenum target, GLdouble u1, GLdouble u2, GLint stride, GLint order, const GLdouble * points);
GLAPI void GLAPIENTRY glMap1f(GLenum target, GLfloat u1, GLfloat u2, GLint stride, GLint order, const GLfloat * points);
GLAPI void GLAPIENTRY glMap2d(GLenum target, GLdouble u1, GLdouble u2, GLint ustride, GLint uorder, GLdouble v1, GLdouble v2, GLint vstride, GLint vorder, const GLdouble* points); GLAPI void GLAPIENTRY glMap2f(GLenum target, GLfloat u1, GLfloat u2, GLint ustride, GLint uorder, GLfloat v1, GLfloat v2, GLint vstride, GLint vorder, const GLfloat* points);
GLAPI void GLAPIENTRY glGetMapdv(GLenum target, GLenum query, GLdouble * v);
GLAPI void GLAPIENTRY glGetMapfv(GLenum target, GLenum query, GLfloat * v);
GLAPI void GLAPIENTRY glGetMapiv(GLenum target, GLenum query, GLint * v);
GLAPI void GLAPIENTRY glEvalCoord1d(GLdouble u);
GLAPI void GLAPIENTRY glEvalCoord1f(GLfloat u);
GLAPI void GLAPIENTRY glEvalCoord1dv(const GLdouble * u);
GLAPI void GLAPIENTRY glEvalCoord1fv(const GLfloat * u);
GLAPI void GLAPIENTRY glEvalCoord2d(GLdouble u, GLdouble v);
GLAPI void GLAPIENTRY glEvalCoord2f(GLfloat u, GLfloat v);
GLAPI void GLAPIENTRY glEvalCoord2dv(const GLdouble * u);
GLAPI void GLAPIENTRY glEvalCoord2fv(const GLfloat * u);
GLAPI void GLAPIENTRY glMapGrid1d(GLint un, GLdouble u1, GLdouble u2);
GLAPI void GLAPIENTRY glMapGrid1f(GLint un, GLfloat u1, GLfloat u2);
GLAPI void GLAPIENTRY glMapGrid2d(GLint un, GLdouble u1, GLdouble u2, GLint vn, GLdouble v1, GLdouble v2);
GLAPI void GLAPIENTRY glMapGrid2f(GLint un, GLfloat u1, GLfloat u2, GLint vn, GLfloat v1, GLfloat v2);
GLAPI void GLAPIENTRY glEvalPoint1(GLint i);
GLAPI void GLAPIENTRY glEvalPoint2(GLint i, GLint j);
GLAPI void GLAPIENTRY glEvalMesh1(GLenum mode, GLint i1, GLint i2);
GLAPI void GLAPIENTRY glEvalMesh2(GLenum mode, GLint i1, GLint i2, GLint j1, GLint j2);

// Selection and Feedback
GLAPI void GLAPIENTRY glFeedbackBuffer(GLsizei size, GLenum type, GLfloat * buffer);
GLAPI void GLAPIENTRY glPassThrough(GLfloat token);
GLAPI void GLAPIENTRY glSelectBuffer(GLsizei size, GLuint * buffer);
GLAPI void GLAPIENTRY glInitNames(void);
GLAPI void GLAPIENTRY glLoadName(GLuint name);
GLAPI void GLAPIENTRY glPushName(GLuint name);
GLAPI void GLAPIENTRY glPopName(void);

// 1.2 functions
GLAPI void GLAPIENTRY glDrawRangeElements(GLenum mode, GLuint start, GLuint end, GLsizei count, GLenum type, const GLvoid * indices);
GLAPI void GLAPIENTRY glTexImage3D(GLenum target, GLint level, GLint internalFormat, GLsizei width, GLsizei height, GLsizei depth, GLint border, GLenum format, GLenum type, const GLvoid * pixels);
GLAPI void GLAPIENTRY glTexSubImage3D(GLenum target, GLint level, GLint xoffset, GLint yoffset, GLint zoffset, GLsizei width, GLsizei height, GLsizei depth, GLenum format, GLenum type, const GLvoid * pixels);
GLAPI void GLAPIENTRY glCopyTexSubImage3D(GLenum target, GLint level, GLint xoffset, GLint yoffset, GLint zoffset, GLint x, GLint y, GLsizei width, GLsizei height);

// 1.2 imaging extension functions
GLAPI void GLAPIENTRY glColorTable(GLenum target, GLenum internalformat, GLsizei width, GLenum format, GLenum type, const GLvoid * table);
GLAPI void GLAPIENTRY glColorSubTable(GLenum target, GLsizei start, GLsizei count, GLenum format, GLenum type, const GLvoid * data);
GLAPI void GLAPIENTRY glColorTableParameteriv(GLenum target, GLenum pname, const GLint * params);
GLAPI void GLAPIENTRY glColorTableParameterfv(GLenum target, GLenum pname, const GLfloat * params);
GLAPI void GLAPIENTRY glCopyColorSubTable(GLenum target, GLsizei start, GLint x, GLint y, GLsizei width);
GLAPI void GLAPIENTRY glCopyColorTable(GLenum target, GLenum internalformat, GLint x, GLint y, GLsizei width);
GLAPI void GLAPIENTRY glGetColorTable(GLenum target, GLenum format, GLenum type, GLvoid * table);
GLAPI void GLAPIENTRY glGetColorTableParameterfv(GLenum target, GLenum pname, GLfloat * params);
GLAPI void GLAPIENTRY glGetColorTableParameteriv(GLenum target, GLenum pname, GLint * params);
GLAPI void GLAPIENTRY glBlendEquation(GLenum mode);
GLAPI void GLAPIENTRY glBlendColor(GLclampf red, GLclampf green, GLclampf blue, GLclampf alpha);
GLAPI void GLAPIENTRY glHistogram(GLenum target, GLsizei width, GLenum internalformat, GLboolean sink);
GLAPI void GLAPIENTRY glResetHistogram(GLenum target);
GLAPI void GLAPIENTRY glGetHistogram(GLenum target, GLboolean reset, GLenum format, GLenum type, GLvoid * values);
GLAPI void GLAPIENTRY glGetHistogramParameterfv(GLenum target, GLenum pname, GLfloat * params);
GLAPI void GLAPIENTRY glGetHistogramParameteriv(GLenum target, GLenum pname, GLint * params);
GLAPI void GLAPIENTRY glMinmax(GLenum target, GLenum internalformat, GLboolean sink);
GLAPI void GLAPIENTRY glResetMinmax(GLenum target);
GLAPI void GLAPIENTRY glGetMinmax(GLenum target, GLboolean reset, GLenum format, GLenum types, GLvoid * values);
GLAPI void GLAPIENTRY glGetMinmaxParameterfv(GLenum target, GLenum pname, GLfloat * params);
GLAPI void GLAPIENTRY glGetMinmaxParameteriv(GLenum target, GLenum pname, GLint * params);
GLAPI void GLAPIENTRY glConvolutionFilter1D(GLenum target, GLenum internalformat, GLsizei width, GLenum format, GLenum type, const GLvoid * image);
GLAPI void GLAPIENTRY glConvolutionFilter2D(GLenum target, GLenum internalformat, GLsizei width, GLsizei height, GLenum format, GLenum type, const GLvoid * image);
GLAPI void GLAPIENTRY glConvolutionParameterf(GLenum target, GLenum pname, GLfloat params);
GLAPI void GLAPIENTRY glConvolutionParameterfv(GLenum target, GLenum pname, const GLfloat * params);
GLAPI void GLAPIENTRY glConvolutionParameteri(GLenum target, GLenum pname, GLint params);
GLAPI void GLAPIENTRY glConvolutionParameteriv(GLenum target, GLenum pname, const GLint * params);
GLAPI void GLAPIENTRY glCopyConvolutionFilter1D(GLenum target, GLenum internalformat, GLint x, GLint y, GLsizei width);
GLAPI void GLAPIENTRY glCopyConvolutionFilter2D(GLenum target, GLenum internalformat, GLint x, GLint y, GLsizei width, GLsizei height);
GLAPI void GLAPIENTRY glGetConvolutionFilter(GLenum target, GLenum format, GLenum type, GLvoid * image);
GLAPI void GLAPIENTRY glGetConvolutionParameterfv(GLenum target, GLenum pname, GLfloat * params);
GLAPI void GLAPIENTRY glGetConvolutionParameteriv(GLenum target, GLenum pname, GLint * params);
GLAPI void GLAPIENTRY glSeparableFilter2D(GLenum target, GLenum internalformat, GLsizei width, GLsizei height, GLenum format, GLenum type, const GLvoid * row, const GLvoid * column);
GLAPI void GLAPIENTRY glGetSeparableFilter(GLenum target, GLenum format, GLenum type, GLvoid * row, GLvoid * column, GLvoid * span);
 * @see {@link https://docs.microsoft.com/en-us/windows/win32/opengl/opengl|OpenGL documentation at Microsoft}
 * @see LoadLibrary()
 *
 * @module ogl
 */
/**
 * @var {*} OGL_WIDTH screen width
 */
/**
 * @var {*} OGL_HEIGHT screen height
 */
/**
 * OpenGL constants
 * @typedef {Object} GL
 * @property {*} 1PASS_EXT
 * @property {*} 1PASS_SGIS
 * @property {*} 2_BYTES
 * @property {*} 2D
 * @property {*} 2PASS_0_EXT
 * @property {*} 2PASS_0_SGIS
 * @property {*} 2PASS_1_EXT
 * @property {*} 2PASS_1_SGIS
 * @property {*} 3_BYTES
 * @property {*} 3D_COLOR_TEXTURE
 * @property {*} 3D_COLOR
 * @property {*} 3D
 * @property {*} 4_BYTES
 * @property {*} 422_AVERAGE_EXT
 * @property {*} 422_EXT
 * @property {*} 422_REV_AVERAGE_EXT
 * @property {*} 422_REV_EXT
 * @property {*} 4D_COLOR_TEXTURE
 * @property {*} 4PASS_0_EXT
 * @property {*} 4PASS_0_SGIS
 * @property {*} 4PASS_1_EXT
 * @property {*} 4PASS_1_SGIS
 * @property {*} 4PASS_2_EXT
 * @property {*} 4PASS_2_SGIS
 * @property {*} 4PASS_3_EXT
 * @property {*} 4PASS_3_SGIS
 * @property {*} ABGR_EXT
 * @property {*} ACCUM_ALPHA_BITS
 * @property {*} ACCUM_BLUE_BITS
 * @property {*} ACCUM_BUFFER_BIT
 * @property {*} ACCUM_CLEAR_VALUE
 * @property {*} ACCUM_GREEN_BITS
 * @property {*} ACCUM_RED_BITS
 * @property {*} ACCUM
 * @property {*} ACTIVE_TEXTURE_ARB
 * @property {*} ACTIVE_VERTEX_UNITS_ARB
 * @property {*} ADD_SIGNED_EXT
 * @property {*} ADD
 * @property {*} ALIASED_LINE_WIDTH_RANGE
 * @property {*} ALIASED_POINT_SIZE_RANGE
 * @property {*} ALL_ATTRIB_BITS
 * @property {*} ALL_CLIENT_ATTRIB_BITS
 * @property {*} ALLOW_DRAW_FRG_HINT_PGI
 * @property {*} ALLOW_DRAW_MEM_HINT_PGI
 * @property {*} ALLOW_DRAW_OBJ_HINT_PGI
 * @property {*} ALLOW_DRAW_WIN_HINT_PGI
 * @property {*} ALPHA_BIAS
 * @property {*} ALPHA_BITS
 * @property {*} ALPHA_MAX_CLAMP_INGR
 * @property {*} ALPHA_MAX_SGIX
 * @property {*} ALPHA_MIN_CLAMP_INGR
 * @property {*} ALPHA_MIN_SGIX
 * @property {*} ALPHA_SCALE
 * @property {*} ALPHA_TEST_FUNC
 * @property {*} ALPHA_TEST_REF
 * @property {*} ALPHA_TEST
 * @property {*} ALPHA
 * @property {*} ALPHA12_EXT
 * @property {*} ALPHA12
 * @property {*} ALPHA16_EXT
 * @property {*} ALPHA16
 * @property {*} ALPHA4_EXT
 * @property {*} ALPHA4
 * @property {*} ALPHA8_EXT
 * @property {*} ALPHA8
 * @property {*} ALWAYS_FAST_HINT_PGI
 * @property {*} ALWAYS_SOFT_HINT_PGI
 * @property {*} ALWAYS
 * @property {*} AMBIENT_AND_DIFFUSE
 * @property {*} AMBIENT
 * @property {*} AND_INVERTED
 * @property {*} AND_REVERSE
 * @property {*} AND
 * @property {*} ARRAY_ELEMENT_LOCK_COUNT_EXT
 * @property {*} ARRAY_ELEMENT_LOCK_FIRST_EXT
 * @property {*} ASYNC_DRAW_PIXELS_SGIX
 * @property {*} ASYNC_HISTOGRAM_SGIX
 * @property {*} ASYNC_MARKER_SGIX
 * @property {*} ASYNC_READ_PIXELS_SGIX
 * @property {*} ASYNC_TEX_IMAGE_SGIX
 * @property {*} ATTENUATION_EXT
 * @property {*} ATTRIB_STACK_DEPTH
 * @property {*} AUTO_NORMAL
 * @property {*} AUX_BUFFERS
 * @property {*} AUX0
 * @property {*} AUX1
 * @property {*} AUX2
 * @property {*} AUX3
 * @property {*} AVERAGE_EXT
 * @property {*} AVERAGE_HP
 * @property {*} BACK_LEFT
 * @property {*} BACK_NORMALS_HINT_PGI
 * @property {*} BACK_RIGHT
 * @property {*} BACK
 * @property {*} BGR_EXT
 * @property {*} BGR
 * @property {*} BGRA_EXT
 * @property {*} BGRA
 * @property {*} BIAS_BY_NEGATIVE_ONE_HALF_NV
 * @property {*} BINORMAL_ARRAY_EXT
 * @property {*} BINORMAL_ARRAY_POINTER_EXT
 * @property {*} BINORMAL_ARRAY_STRIDE_EXT
 * @property {*} BINORMAL_ARRAY_TYPE_EXT
 * @property {*} BITMAP_TOKEN
 * @property {*} BITMAP
 * @property {*} BLEND_COLOR_EXT
 * @property {*} BLEND_COLOR
 * @property {*} BLEND_DST_ALPHA_EXT
 * @property {*} BLEND_DST_RGB_EXT
 * @property {*} BLEND_DST
 * @property {*} BLEND_EQUATION_EXT
 * @property {*} BLEND_EQUATION
 * @property {*} BLEND_SRC_ALPHA_EXT
 * @property {*} BLEND_SRC_RGB_EXT
 * @property {*} BLEND_SRC
 * @property {*} BLEND
 * @property {*} BLUE_BIAS
 * @property {*} BLUE_BITS
 * @property {*} BLUE_MAX_CLAMP_INGR
 * @property {*} BLUE_MIN_CLAMP_INGR
 * @property {*} BLUE_SCALE
 * @property {*} BLUE
 * @property {*} BYTE
 * @property {*} C3F_V3F
 * @property {*} C4F_N3F_V3F
 * @property {*} C4UB_V2F
 * @property {*} C4UB_V3F
 * @property {*} CALLIGRAPHIC_FRAGMENT_SGIX
 * @property {*} CCW
 * @property {*} CLAMP_TO_BORDER_SGIS
 * @property {*} CLAMP_TO_EDGE_SGIS
 * @property {*} CLAMP_TO_EDGE
 * @property {*} CLAMP
 * @property {*} CLEAR
 * @property {*} CLIENT_ACTIVE_TEXTURE_ARB
 * @property {*} CLIENT_ATTRIB_STACK_DEPTH
 * @property {*} CLIENT_PIXEL_STORE_BIT
 * @property {*} CLIENT_VERTEX_ARRAY_BIT
 * @property {*} CLIP_FAR_HINT_PGI
 * @property {*} CLIP_NEAR_HINT_PGI
 * @property {*} CLIP_PLANE0
 * @property {*} CLIP_PLANE1
 * @property {*} CLIP_PLANE2
 * @property {*} CLIP_PLANE3
 * @property {*} CLIP_PLANE4
 * @property {*} CLIP_PLANE5
 * @property {*} CLIP_VOLUME_CLIPPING_HINT_EXT
 * @property {*} CMYK_EXT
 * @property {*} CMYKA_EXT
 * @property {*} COEFF
 * @property {*} COLOR_ARRAY_COUNT_EXT
 * @property {*} COLOR_ARRAY_EXT
 * @property {*} COLOR_ARRAY_LIST_IBM
 * @property {*} COLOR_ARRAY_LIST_STRIDE_IBM
 * @property {*} COLOR_ARRAY_PARALLEL_POINTERS_INTEL
 * @property {*} COLOR_ARRAY_POINTER_EXT
 * @property {*} COLOR_ARRAY_POINTER
 * @property {*} COLOR_ARRAY_SIZE_EXT
 * @property {*} COLOR_ARRAY_SIZE
 * @property {*} COLOR_ARRAY_STRIDE_EXT
 * @property {*} COLOR_ARRAY_STRIDE
 * @property {*} COLOR_ARRAY_TYPE_EXT
 * @property {*} COLOR_ARRAY_TYPE
 * @property {*} COLOR_ARRAY
 * @property {*} COLOR_BUFFER_BIT
 * @property {*} COLOR_CLEAR_VALUE
 * @property {*} COLOR_INDEX
 * @property {*} COLOR_INDEX1_EXT
 * @property {*} COLOR_INDEX12_EXT
 * @property {*} COLOR_INDEX16_EXT
 * @property {*} COLOR_INDEX2_EXT
 * @property {*} COLOR_INDEX4_EXT
 * @property {*} COLOR_INDEX8_EXT
 * @property {*} COLOR_INDEXES
 * @property {*} COLOR_LOGIC_OP
 * @property {*} COLOR_MATERIAL_FACE
 * @property {*} COLOR_MATERIAL_PARAMETER
 * @property {*} COLOR_MATERIAL
 * @property {*} COLOR_MATRIX_SGI
 * @property {*} COLOR_MATRIX_STACK_DEPTH_SGI
 * @property {*} COLOR_MATRIX_STACK_DEPTH
 * @property {*} COLOR_MATRIX
 * @property {*} COLOR_SUM_CLAMP_NV
 * @property {*} COLOR_SUM_EXT
 * @property {*} COLOR_TABLE_ALPHA_SIZE_EXT
 * @property {*} COLOR_TABLE_ALPHA_SIZE_SGI
 * @property {*} COLOR_TABLE_ALPHA_SIZE
 * @property {*} COLOR_TABLE_BIAS_SGI
 * @property {*} COLOR_TABLE_BIAS
 * @property {*} COLOR_TABLE_BLUE_SIZE_EXT
 * @property {*} COLOR_TABLE_BLUE_SIZE_SGI
 * @property {*} COLOR_TABLE_BLUE_SIZE
 * @property {*} COLOR_TABLE_FORMAT_EXT
 * @property {*} COLOR_TABLE_FORMAT_SGI
 * @property {*} COLOR_TABLE_FORMAT
 * @property {*} COLOR_TABLE_GREEN_SIZE_EXT
 * @property {*} COLOR_TABLE_GREEN_SIZE_SGI
 * @property {*} COLOR_TABLE_GREEN_SIZE
 * @property {*} COLOR_TABLE_INTENSITY_SIZE_EXT
 * @property {*} COLOR_TABLE_INTENSITY_SIZE_SGI
 * @property {*} COLOR_TABLE_INTENSITY_SIZE
 * @property {*} COLOR_TABLE_LUMINANCE_SIZE_EXT
 * @property {*} COLOR_TABLE_LUMINANCE_SIZE_SGI
 * @property {*} COLOR_TABLE_LUMINANCE_SIZE
 * @property {*} COLOR_TABLE_RED_SIZE_EXT
 * @property {*} COLOR_TABLE_RED_SIZE_SGI
 * @property {*} COLOR_TABLE_RED_SIZE
 * @property {*} COLOR_TABLE_SCALE_SGI
 * @property {*} COLOR_TABLE_SCALE
 * @property {*} COLOR_TABLE_SGI
 * @property {*} COLOR_TABLE_WIDTH_EXT
 * @property {*} COLOR_TABLE_WIDTH_SGI
 * @property {*} COLOR_TABLE_WIDTH
 * @property {*} COLOR_TABLE
 * @property {*} COLOR_WRITEMASK
 * @property {*} COLOR
 * @property {*} COLOR3_BIT_PGI
 * @property {*} COLOR4_BIT_PGI
 * @property {*} COMBINE_ALPHA_EXT
 * @property {*} COMBINE_EXT
 * @property {*} COMBINE_RGB_EXT
 * @property {*} COMBINE4_NV
 * @property {*} COMBINER_AB_DOT_PRODUCT_NV
 * @property {*} COMBINER_AB_OUTPUT_NV
 * @property {*} COMBINER_BIAS_NV
 * @property {*} COMBINER_CD_DOT_PRODUCT_NV
 * @property {*} COMBINER_CD_OUTPUT_NV
 * @property {*} COMBINER_COMPONENT_USAGE_NV
 * @property {*} COMBINER_INPUT_NV
 * @property {*} COMBINER_MAPPING_NV
 * @property {*} COMBINER_MUX_SUM_NV
 * @property {*} COMBINER_SCALE_NV
 * @property {*} COMBINER_SUM_OUTPUT_NV
 * @property {*} COMBINER0_NV
 * @property {*} COMBINER1_NV
 * @property {*} COMBINER2_NV
 * @property {*} COMBINER3_NV
 * @property {*} COMBINER4_NV
 * @property {*} COMBINER5_NV
 * @property {*} COMBINER6_NV
 * @property {*} COMBINER7_NV
 * @property {*} COMPILE_AND_EXECUTE
 * @property {*} COMPILE
 * @property {*} COMPRESSED_ALPHA_ARB
 * @property {*} COMPRESSED_INTENSITY_ARB
 * @property {*} COMPRESSED_LUMINANCE_ALPHA_ARB
 * @property {*} COMPRESSED_LUMINANCE_ARB
 * @property {*} COMPRESSED_RGB_ARB
 * @property {*} COMPRESSED_RGB_FXT1_3DFX
 * @property {*} COMPRESSED_RGB_S3TC_DXT1_EXT
 * @property {*} COMPRESSED_RGBA_ARB
 * @property {*} COMPRESSED_RGBA_FXT1_3DFX
 * @property {*} COMPRESSED_RGBA_S3TC_DXT1_EXT
 * @property {*} COMPRESSED_RGBA_S3TC_DXT3_EXT
 * @property {*} COMPRESSED_RGBA_S3TC_DXT5_EXT
 * @property {*} COMPRESSED_TEXTURE_FORMATS_ARB
 * @property {*} CONSERVE_MEMORY_HINT_PGI
 * @property {*} CONSTANT_ALPHA_EXT
 * @property {*} CONSTANT_ALPHA
 * @property {*} CONSTANT_ATTENUATION
 * @property {*} CONSTANT_BORDER_HP
 * @property {*} CONSTANT_BORDER
 * @property {*} CONSTANT_COLOR_EXT
 * @property {*} CONSTANT_COLOR
 * @property {*} CONSTANT_COLOR0_NV
 * @property {*} CONSTANT_COLOR1_NV
 * @property {*} CONSTANT_EXT
 * @property {*} CONVOLUTION_1D_EXT
 * @property {*} CONVOLUTION_1D
 * @property {*} CONVOLUTION_2D_EXT
 * @property {*} CONVOLUTION_2D
 * @property {*} CONVOLUTION_BORDER_COLOR_HP
 * @property {*} CONVOLUTION_BORDER_COLOR
 * @property {*} CONVOLUTION_BORDER_MODE_EXT
 * @property {*} CONVOLUTION_BORDER_MODE
 * @property {*} CONVOLUTION_FILTER_BIAS_EXT
 * @property {*} CONVOLUTION_FILTER_BIAS
 * @property {*} CONVOLUTION_FILTER_SCALE_EXT
 * @property {*} CONVOLUTION_FILTER_SCALE
 * @property {*} CONVOLUTION_FORMAT_EXT
 * @property {*} CONVOLUTION_FORMAT
 * @property {*} CONVOLUTION_HEIGHT_EXT
 * @property {*} CONVOLUTION_HEIGHT
 * @property {*} CONVOLUTION_HINT_SGIX
 * @property {*} CONVOLUTION_WIDTH_EXT
 * @property {*} CONVOLUTION_WIDTH
 * @property {*} COPY_INVERTED
 * @property {*} COPY_PIXEL_TOKEN
 * @property {*} COPY
 * @property {*} CUBIC_EXT
 * @property {*} CUBIC_HP
 * @property {*} CULL_FACE_MODE
 * @property {*} CULL_FACE
 * @property {*} CULL_VERTEX_EXT
 * @property {*} CULL_VERTEX_EYE_POSITION_EXT
 * @property {*} CULL_VERTEX_IBM
 * @property {*} CULL_VERTEX_OBJECT_POSITION_EXT
 * @property {*} CURRENT_BINORMAL_EXT
 * @property {*} CURRENT_BIT
 * @property {*} CURRENT_COLOR
 * @property {*} CURRENT_FOG_COORDINATE_EXT
 * @property {*} CURRENT_INDEX
 * @property {*} CURRENT_NORMAL
 * @property {*} CURRENT_RASTER_COLOR
 * @property {*} CURRENT_RASTER_DISTANCE
 * @property {*} CURRENT_RASTER_INDEX
 * @property {*} CURRENT_RASTER_NORMAL_SGIX
 * @property {*} CURRENT_RASTER_POSITION_VALID
 * @property {*} CURRENT_RASTER_POSITION
 * @property {*} CURRENT_RASTER_TEXTURE_COORDS
 * @property {*} CURRENT_SECONDARY_COLOR_EXT
 * @property {*} CURRENT_TANGENT_EXT
 * @property {*} CURRENT_TEXTURE_COORDS
 * @property {*} CURRENT_VERTEX_WEIGHT_EXT
 * @property {*} CURRENT_WEIGHT_ARB
 * @property {*} CW
 * @property {*} DECAL
 * @property {*} DECR_WRAP_EXT
 * @property {*} DECR
 * @property {*} DEFORMATIONS_MASK_SGIX
 * @property {*} DEPTH_BIAS
 * @property {*} DEPTH_BITS
 * @property {*} DEPTH_BUFFER_BIT
 * @property {*} DEPTH_CLEAR_VALUE
 * @property {*} DEPTH_COMPONENT
 * @property {*} DEPTH_COMPONENT16_SGIX
 * @property {*} DEPTH_COMPONENT24_SGIX
 * @property {*} DEPTH_COMPONENT32_SGIX
 * @property {*} DEPTH_FUNC
 * @property {*} DEPTH_PASS_INSTRUMENT_COUNTERS_SGIX
 * @property {*} DEPTH_PASS_INSTRUMENT_MAX_SGIX
 * @property {*} DEPTH_PASS_INSTRUMENT_SGIX
 * @property {*} DEPTH_RANGE
 * @property {*} DEPTH_SCALE
 * @property {*} DEPTH_TEST
 * @property {*} DEPTH_WRITEMASK
 * @property {*} DEPTH
 * @property {*} DETAIL_TEXTURE_2D_BINDING_SGIS
 * @property {*} DETAIL_TEXTURE_2D_SGIS
 * @property {*} DETAIL_TEXTURE_FUNC_POINTS_SGIS
 * @property {*} DETAIL_TEXTURE_LEVEL_SGIS
 * @property {*} DETAIL_TEXTURE_MODE_SGIS
 * @property {*} DIFFUSE
 * @property {*} DISCARD_NV
 * @property {*} DISTANCE_ATTENUATION_EXT
 * @property {*} DISTANCE_ATTENUATION_SGIS
 * @property {*} DITHER
 * @property {*} DOMAIN
 * @property {*} DONT_CARE
 * @property {*} DOT3_RGB_EXT
 * @property {*} DOT3_RGBA_EXT
 * @property {*} DOUBLE
 * @property {*} DOUBLEBUFFER
 * @property {*} DRAW_BUFFER
 * @property {*} DRAW_PIXEL_TOKEN
 * @property {*} DST_ALPHA
 * @property {*} DST_COLOR
 * @property {*} DUAL_ALPHA12_SGIS
 * @property {*} DUAL_ALPHA16_SGIS
 * @property {*} DUAL_ALPHA4_SGIS
 * @property {*} DUAL_ALPHA8_SGIS
 * @property {*} DUAL_INTENSITY12_SGIS
 * @property {*} DUAL_INTENSITY16_SGIS
 * @property {*} DUAL_INTENSITY4_SGIS
 * @property {*} DUAL_INTENSITY8_SGIS
 * @property {*} DUAL_LUMINANCE_ALPHA4_SGIS
 * @property {*} DUAL_LUMINANCE_ALPHA8_SGIS
 * @property {*} DUAL_LUMINANCE12_SGIS
 * @property {*} DUAL_LUMINANCE16_SGIS
 * @property {*} DUAL_LUMINANCE4_SGIS
 * @property {*} DUAL_LUMINANCE8_SGIS
 * @property {*} DUAL_TEXTURE_SELECT_SGIS
 * @property {*} E_TIMES_F_NV
 * @property {*} EDGE_FLAG_ARRAY_COUNT_EXT
 * @property {*} EDGE_FLAG_ARRAY_EXT
 * @property {*} EDGE_FLAG_ARRAY_LIST_IBM
 * @property {*} EDGE_FLAG_ARRAY_LIST_STRIDE_IBM
 * @property {*} EDGE_FLAG_ARRAY_POINTER_EXT
 * @property {*} EDGE_FLAG_ARRAY_POINTER
 * @property {*} EDGE_FLAG_ARRAY_STRIDE_EXT
 * @property {*} EDGE_FLAG_ARRAY_STRIDE
 * @property {*} EDGE_FLAG_ARRAY
 * @property {*} EDGE_FLAG
 * @property {*} EDGEFLAG_BIT_PGI
 * @property {*} EMBOSS_CONSTANT_NV
 * @property {*} EMBOSS_LIGHT_NV
 * @property {*} EMBOSS_MAP_NV
 * @property {*} EMISSION
 * @property {*} ENABLE_BIT
 * @property {*} EQUAL
 * @property {*} EQUIV
 * @property {*} EVAL_BIT
 * @property {*} EXP
 * @property {*} EXP2
 * @property {*} EXPAND_NEGATE_NV
 * @property {*} EXPAND_NORMAL_NV
 * @property {*} EXTENSIONS
 * @property {*} EYE_DISTANCE_TO_LINE_SGIS
 * @property {*} EYE_DISTANCE_TO_POINT_SGIS
 * @property {*} EYE_LINE_SGIS
 * @property {*} EYE_LINEAR
 * @property {*} EYE_PLANE_ABSOLUTE_NV
 * @property {*} EYE_PLANE
 * @property {*} EYE_POINT_SGIS
 * @property {*} EYE_RADIAL_NV
 * @property {*} FALSE
 * @property {*} FASTEST
 * @property {*} FEEDBACK_BUFFER_POINTER
 * @property {*} FEEDBACK_BUFFER_SIZE
 * @property {*} FEEDBACK_BUFFER_TYPE
 * @property {*} FEEDBACK
 * @property {*} FILL
 * @property {*} FILTER4_SGIS
 * @property {*} FLAT
 * @property {*} FLOAT
 * @property {*} FOG_BIT
 * @property {*} FOG_COLOR
 * @property {*} FOG_COORDINATE_ARRAY_EXT
 * @property {*} FOG_COORDINATE_ARRAY_LIST_IBM
 * @property {*} FOG_COORDINATE_ARRAY_LIST_STRIDE_IBM
 * @property {*} FOG_COORDINATE_ARRAY_POINTER_EXT
 * @property {*} FOG_COORDINATE_ARRAY_STRIDE_EXT
 * @property {*} FOG_COORDINATE_ARRAY_TYPE_EXT
 * @property {*} FOG_COORDINATE_EXT
 * @property {*} FOG_COORDINATE_SOURCE_EXT
 * @property {*} FOG_DENSITY
 * @property {*} FOG_DISTANCE_MODE_NV
 * @property {*} FOG_END
 * @property {*} FOG_FUNC_POINTS_SGIS
 * @property {*} FOG_FUNC_SGIS
 * @property {*} FOG_HINT
 * @property {*} FOG_INDEX
 * @property {*} FOG_MODE
 * @property {*} FOG_OFFSET_SGIX
 * @property {*} FOG_OFFSET_VALUE_SGIX
 * @property {*} FOG_SCALE_SGIX
 * @property {*} FOG_SCALE_VALUE_SGIX
 * @property {*} FOG_SPECULAR_TEXTURE_WIN
 * @property {*} FOG_START
 * @property {*} FOG
 * @property {*} FRAGMENT_COLOR_EXT
 * @property {*} FRAGMENT_COLOR_MATERIAL_FACE_SGIX
 * @property {*} FRAGMENT_COLOR_MATERIAL_PARAMETER_SGIX
 * @property {*} FRAGMENT_COLOR_MATERIAL_SGIX
 * @property {*} FRAGMENT_DEPTH_EXT
 * @property {*} FRAGMENT_LIGHT_MODEL_AMBIENT_SGIX
 * @property {*} FRAGMENT_LIGHT_MODEL_LOCAL_VIEWER_SGIX
 * @property {*} FRAGMENT_LIGHT_MODEL_NORMAL_INTERPOLATION_SGIX
 * @property {*} FRAGMENT_LIGHT_MODEL_TWO_SIDE_SGIX
 * @property {*} FRAGMENT_LIGHT0_SGIX
 * @property {*} FRAGMENT_LIGHT1_SGIX
 * @property {*} FRAGMENT_LIGHT2_SGIX
 * @property {*} FRAGMENT_LIGHT3_SGIX
 * @property {*} FRAGMENT_LIGHT4_SGIX
 * @property {*} FRAGMENT_LIGHT5_SGIX
 * @property {*} FRAGMENT_LIGHT6_SGIX
 * @property {*} FRAGMENT_LIGHT7_SGIX
 * @property {*} FRAGMENT_LIGHTING_SGIX
 * @property {*} FRAGMENT_MATERIAL_EXT
 * @property {*} FRAGMENT_NORMAL_EXT
 * @property {*} FRAMEZOOM_FACTOR_SGIX
 * @property {*} FRAMEZOOM_SGIX
 * @property {*} FRONT_AND_BACK
 * @property {*} FRONT_FACE
 * @property {*} FRONT_LEFT
 * @property {*} FRONT_RIGHT
 * @property {*} FRONT
 * @property {*} FULL_STIPPLE_HINT_PGI
 * @property {*} FUNC_ADD_EXT
 * @property {*} FUNC_ADD
 * @property {*} FUNC_REVERSE_SUBTRACT_EXT
 * @property {*} FUNC_REVERSE_SUBTRACT
 * @property {*} FUNC_SUBTRACT_EXT
 * @property {*} FUNC_SUBTRACT
 * @property {*} GENERATE_MIPMAP_HINT_SGIS
 * @property {*} GENERATE_MIPMAP_SGIS
 * @property {*} GEOMETRY_DEFORMATION_BIT_SGIX
 * @property {*} GEOMETRY_DEFORMATION_SGIX
 * @property {*} GEQUAL
 * @property {*} GLOBAL_ALPHA_FACTOR_SUN
 * @property {*} GLOBAL_ALPHA_SUN
 * @property {*} GREATER
 * @property {*} GREEN_BIAS
 * @property {*} GREEN_BITS
 * @property {*} GREEN_MAX_CLAMP_INGR
 * @property {*} GREEN_MIN_CLAMP_INGR
 * @property {*} GREEN_SCALE
 * @property {*} GREEN
 * @property {*} HALF_BIAS_NEGATE_NV
 * @property {*} HALF_BIAS_NORMAL_NV
 * @property {*} HINT_BIT
 * @property {*} HISTOGRAM_ALPHA_SIZE_EXT
 * @property {*} HISTOGRAM_ALPHA_SIZE
 * @property {*} HISTOGRAM_BLUE_SIZE_EXT
 * @property {*} HISTOGRAM_BLUE_SIZE
 * @property {*} HISTOGRAM_EXT
 * @property {*} HISTOGRAM_FORMAT_EXT
 * @property {*} HISTOGRAM_FORMAT
 * @property {*} HISTOGRAM_GREEN_SIZE_EXT
 * @property {*} HISTOGRAM_GREEN_SIZE
 * @property {*} HISTOGRAM_LUMINANCE_SIZE_EXT
 * @property {*} HISTOGRAM_LUMINANCE_SIZE
 * @property {*} HISTOGRAM_RED_SIZE_EXT
 * @property {*} HISTOGRAM_RED_SIZE
 * @property {*} HISTOGRAM_SINK_EXT
 * @property {*} HISTOGRAM_SINK
 * @property {*} HISTOGRAM_WIDTH_EXT
 * @property {*} HISTOGRAM_WIDTH
 * @property {*} HISTOGRAM
 * @property {*} IGNORE_BORDER_HP
 * @property {*} IMAGE_CUBIC_WEIGHT_HP
 * @property {*} IMAGE_MAG_FILTER_HP
 * @property {*} IMAGE_MIN_FILTER_HP
 * @property {*} IMAGE_ROTATE_ANGLE_HP
 * @property {*} IMAGE_ROTATE_ORIGIN_X_HP
 * @property {*} IMAGE_ROTATE_ORIGIN_Y_HP
 * @property {*} IMAGE_SCALE_X_HP
 * @property {*} IMAGE_SCALE_Y_HP
 * @property {*} IMAGE_TRANSFORM_2D_HP
 * @property {*} IMAGE_TRANSLATE_X_HP
 * @property {*} IMAGE_TRANSLATE_Y_HP
 * @property {*} INCR_WRAP_EXT
 * @property {*} INCR
 * @property {*} INDEX_ARRAY_COUNT_EXT
 * @property {*} INDEX_ARRAY_EXT
 * @property {*} INDEX_ARRAY_LIST_IBM
 * @property {*} INDEX_ARRAY_LIST_STRIDE_IBM
 * @property {*} INDEX_ARRAY_POINTER_EXT
 * @property {*} INDEX_ARRAY_POINTER
 * @property {*} INDEX_ARRAY_STRIDE_EXT
 * @property {*} INDEX_ARRAY_STRIDE
 * @property {*} INDEX_ARRAY_TYPE_EXT
 * @property {*} INDEX_ARRAY_TYPE
 * @property {*} INDEX_ARRAY
 * @property {*} INDEX_BIT_PGI
 * @property {*} INDEX_BITS
 * @property {*} INDEX_CLEAR_VALUE
 * @property {*} INDEX_LOGIC_OP
 * @property {*} INDEX_MATERIAL_EXT
 * @property {*} INDEX_MATERIAL_FACE_EXT
 * @property {*} INDEX_MATERIAL_PARAMETER_EXT
 * @property {*} INDEX_MODE
 * @property {*} INDEX_OFFSET
 * @property {*} INDEX_SHIFT
 * @property {*} INDEX_TEST_EXT
 * @property {*} INDEX_TEST_FUNC_EXT
 * @property {*} INDEX_TEST_REF_EXT
 * @property {*} INDEX_WRITEMASK
 * @property {*} INSTRUMENT_BUFFER_POINTER_SGIX
 * @property {*} INSTRUMENT_MEASUREMENTS_SGIX
 * @property {*} INT
 * @property {*} INTENSITY_EXT
 * @property {*} INTENSITY
 * @property {*} INTENSITY12_EXT
 * @property {*} INTENSITY12
 * @property {*} INTENSITY16_EXT
 * @property {*} INTENSITY16
 * @property {*} INTENSITY4_EXT
 * @property {*} INTENSITY4
 * @property {*} INTENSITY8_EXT
 * @property {*} INTENSITY8
 * @property {*} INTERLACE_READ_INGR
 * @property {*} INTERLACE_SGIX
 * @property {*} INTERPOLATE_EXT
 * @property {*} INVALID_ENUM
 * @property {*} INVALID_OPERATION
 * @property {*} INVALID_VALUE
 * @property {*} INVERT
 * @property {*} INVERTED_SCREEN_W_REND
 * @property {*} IR_INSTRUMENT1_SGIX
 * @property {*} IUI_N3F_V2F_EXT
 * @property {*} IUI_N3F_V3F_EXT
 * @property {*} IUI_V2F_EXT
 * @property {*} IUI_V3F_EXT
 * @property {*} KEEP
 * @property {*} LEFT
 * @property {*} LEQUAL
 * @property {*} LESS
 * @property {*} LIGHT_ENV_MODE_SGIX
 * @property {*} LIGHT_MODEL_AMBIENT
 * @property {*} LIGHT_MODEL_COLOR_CONTROL_EXT
 * @property {*} LIGHT_MODEL_COLOR_CONTROL
 * @property {*} LIGHT_MODEL_LOCAL_VIEWER
 * @property {*} LIGHT_MODEL_SPECULAR_VECTOR_APPLE
 * @property {*} LIGHT_MODEL_TWO_SIDE
 * @property {*} LIGHT0
 * @property {*} LIGHT1
 * @property {*} LIGHT2
 * @property {*} LIGHT3
 * @property {*} LIGHT4
 * @property {*} LIGHT5
 * @property {*} LIGHT6
 * @property {*} LIGHT7
 * @property {*} LIGHTING_BIT
 * @property {*} LIGHTING
 * @property {*} LINE_BIT
 * @property {*} LINE_LOOP
 * @property {*} LINE_RESET_TOKEN
 * @property {*} LINE_SMOOTH_HINT
 * @property {*} LINE_SMOOTH
 * @property {*} LINE_STIPPLE_PATTERN
 * @property {*} LINE_STIPPLE_REPEAT
 * @property {*} LINE_STIPPLE
 * @property {*} LINE_STRIP
 * @property {*} LINE_TOKEN
 * @property {*} LINE_WIDTH_GRANULARITY
 * @property {*} LINE_WIDTH_RANGE
 * @property {*} LINE_WIDTH
 * @property {*} LINE
 * @property {*} LINEAR_ATTENUATION
 * @property {*} LINEAR_CLIPMAP_LINEAR_SGIX
 * @property {*} LINEAR_CLIPMAP_NEAREST_SGIX
 * @property {*} LINEAR_DETAIL_ALPHA_SGIS
 * @property {*} LINEAR_DETAIL_COLOR_SGIS
 * @property {*} LINEAR_DETAIL_SGIS
 * @property {*} LINEAR_MIPMAP_LINEAR
 * @property {*} LINEAR_MIPMAP_NEAREST
 * @property {*} LINEAR_SHARPEN_ALPHA_SGIS
 * @property {*} LINEAR_SHARPEN_COLOR_SGIS
 * @property {*} LINEAR_SHARPEN_SGIS
 * @property {*} LINEAR
 * @property {*} LINES
 * @property {*} LIST_BASE
 * @property {*} LIST_BIT
 * @property {*} LIST_INDEX
 * @property {*} LIST_MODE
 * @property {*} LIST_PRIORITY_SGIX
 * @property {*} LOAD
 * @property {*} LOGIC_OP_MODE
 * @property {*} LOGIC_OP
 * @property {*} LUMINANCE_ALPHA
 * @property {*} LUMINANCE
 * @property {*} LUMINANCE12_ALPHA12_EXT
 * @property {*} LUMINANCE12_ALPHA12
 * @property {*} LUMINANCE12_ALPHA4_EXT
 * @property {*} LUMINANCE12_ALPHA4
 * @property {*} LUMINANCE12_EXT
 * @property {*} LUMINANCE12
 * @property {*} LUMINANCE16_ALPHA16_EXT
 * @property {*} LUMINANCE16_ALPHA16
 * @property {*} LUMINANCE16_EXT
 * @property {*} LUMINANCE16
 * @property {*} LUMINANCE4_ALPHA4_EXT
 * @property {*} LUMINANCE4_ALPHA4
 * @property {*} LUMINANCE4_EXT
 * @property {*} LUMINANCE4
 * @property {*} LUMINANCE6_ALPHA2_EXT
 * @property {*} LUMINANCE6_ALPHA2
 * @property {*} LUMINANCE8_ALPHA8_EXT
 * @property {*} LUMINANCE8_ALPHA8
 * @property {*} LUMINANCE8_EXT
 * @property {*} LUMINANCE8
 * @property {*} MAP_COLOR
 * @property {*} MAP_STENCIL
 * @property {*} MAP1_BINORMAL_EXT
 * @property {*} MAP1_COLOR_4
 * @property {*} MAP1_GRID_DOMAIN
 * @property {*} MAP1_GRID_SEGMENTS
 * @property {*} MAP1_INDEX
 * @property {*} MAP1_NORMAL
 * @property {*} MAP1_TANGENT_EXT
 * @property {*} MAP1_TEXTURE_COORD_1
 * @property {*} MAP1_TEXTURE_COORD_2
 * @property {*} MAP1_TEXTURE_COORD_3
 * @property {*} MAP1_TEXTURE_COORD_4
 * @property {*} MAP1_VERTEX_3
 * @property {*} MAP1_VERTEX_4
 * @property {*} MAP2_BINORMAL_EXT
 * @property {*} MAP2_COLOR_4
 * @property {*} MAP2_GRID_DOMAIN
 * @property {*} MAP2_GRID_SEGMENTS
 * @property {*} MAP2_INDEX
 * @property {*} MAP2_NORMAL
 * @property {*} MAP2_TANGENT_EXT
 * @property {*} MAP2_TEXTURE_COORD_1
 * @property {*} MAP2_TEXTURE_COORD_2
 * @property {*} MAP2_TEXTURE_COORD_3
 * @property {*} MAP2_TEXTURE_COORD_4
 * @property {*} MAP2_VERTEX_3
 * @property {*} MAP2_VERTEX_4
 * @property {*} MAT_AMBIENT_AND_DIFFUSE_BIT_PGI
 * @property {*} MAT_AMBIENT_BIT_PGI
 * @property {*} MAT_COLOR_INDEXES_BIT_PGI
 * @property {*} MAT_DIFFUSE_BIT_PGI
 * @property {*} MAT_EMISSION_BIT_PGI
 * @property {*} MAT_SHININESS_BIT_PGI
 * @property {*} MAT_SPECULAR_BIT_PGI
 * @property {*} MATERIAL_SIDE_HINT_PGI
 * @property {*} MATRIX_MODE
 * @property {*} MAX_3D_TEXTURE_SIZE_EXT
 * @property {*} MAX_3D_TEXTURE_SIZE
 * @property {*} MAX_3D_TEXTURE_SIZE
 * @property {*} MAX_4D_TEXTURE_SIZE_SGIS
 * @property {*} MAX_ACTIVE_LIGHTS_SGIX
 * @property {*} MAX_ASYNC_DRAW_PIXELS_SGIX
 * @property {*} MAX_ASYNC_HISTOGRAM_SGIX
 * @property {*} MAX_ASYNC_READ_PIXELS_SGIX
 * @property {*} MAX_ASYNC_TEX_IMAGE_SGIX
 * @property {*} MAX_ATTRIB_STACK_DEPTH
 * @property {*} MAX_CLIENT_ATTRIB_STACK_DEPTH
 * @property {*} MAX_CLIP_PLANES
 * @property {*} MAX_CLIPMAP_DEPTH_SGIX
 * @property {*} MAX_CLIPMAP_VIRTUAL_DEPTH_SGIX
 * @property {*} MAX_COLOR_MATRIX_STACK_DEPTH_SGI
 * @property {*} MAX_COLOR_MATRIX_STACK_DEPTH
 * @property {*} MAX_CONVOLUTION_HEIGHT_EXT
 * @property {*} MAX_CONVOLUTION_HEIGHT
 * @property {*} MAX_CONVOLUTION_WIDTH_EXT
 * @property {*} MAX_CONVOLUTION_WIDTH
 * @property {*} MAX_CUBE_MAP_TEXTURE_SIZE_ARB
 * @property {*} MAX_CUBE_MAP_TEXTURE_SIZE_EXT
 * @property {*} MAX_DEFORMATION_ORDER_SGIX
 * @property {*} MAX_ELEMENTS_INDICES_EXT
 * @property {*} MAX_ELEMENTS_INDICES
 * @property {*} MAX_ELEMENTS_VERTICES_EXT
 * @property {*} MAX_ELEMENTS_VERTICES
 * @property {*} MAX_EVAL_ORDER
 * @property {*} MAX_EXT
 * @property {*} MAX_FOG_FUNC_POINTS_SGIS
 * @property {*} MAX_FRAGMENT_LIGHTS_SGIX
 * @property {*} MAX_FRAMEZOOM_FACTOR_SGIX
 * @property {*} MAX_GENERAL_COMBINERS_NV
 * @property {*} MAX_LIGHTS
 * @property {*} MAX_LIST_NESTING
 * @property {*} MAX_MODELVIEW_STACK_DEPTH
 * @property {*} MAX_NAME_STACK_DEPTH
 * @property {*} MAX_PIXEL_MAP_TABLE
 * @property {*} MAX_PIXEL_TRANSFORM_2D_STACK_DEPTH_EXT
 * @property {*} MAX_PROJECTION_STACK_DEPTH
 * @property {*} MAX_SHININESS_NV
 * @property {*} MAX_SPOT_EXPONENT_NV
 * @property {*} MAX_TEXTURE_LOD_BIAS_EXT
 * @property {*} MAX_TEXTURE_MAX_ANISOTROPY_EXT
 * @property {*} MAX_TEXTURE_SIZE
 * @property {*} MAX_TEXTURE_STACK_DEPTH
 * @property {*} MAX_TEXTURE_UNITS_ARB
 * @property {*} MAX_VERTEX_ARRAY_RANGE_ELEMENT_NV
 * @property {*} MAX_VERTEX_HINT_PGI
 * @property {*} MAX_VERTEX_UNITS_ARB
 * @property {*} MAX_VIEWPORT_DIMS
 * @property {*} MAX
 * @property {*} MIN_EXT
 * @property {*} MIN
 * @property {*} MINMAX_EXT
 * @property {*} MINMAX_FORMAT_EXT
 * @property {*} MINMAX_FORMAT
 * @property {*} MINMAX_SINK_EXT
 * @property {*} MINMAX_SINK
 * @property {*} MINMAX
 * @property {*} MODELVIEW_MATRIX
 * @property {*} MODELVIEW_MATRIX1_EXT
 * @property {*} MODELVIEW_STACK_DEPTH
 * @property {*} MODELVIEW
 * @property {*} MODELVIEW0_ARB
 * @property {*} MODELVIEW0_EXT
 * @property {*} MODELVIEW0_MATRIX_EXT
 * @property {*} MODELVIEW0_STACK_DEPTH_EXT
 * @property {*} MODELVIEW1_ARB
 * @property {*} MODELVIEW1_EXT
 * @property {*} MODELVIEW1_STACK_DEPTH_EXT
 * @property {*} MODELVIEW10_ARB
 * @property {*} MODELVIEW11_ARB
 * @property {*} MODELVIEW12_ARB
 * @property {*} MODELVIEW13_ARB
 * @property {*} MODELVIEW14_ARB
 * @property {*} MODELVIEW15_ARB
 * @property {*} MODELVIEW16_ARB
 * @property {*} MODELVIEW17_ARB
 * @property {*} MODELVIEW18_ARB
 * @property {*} MODELVIEW19_ARB
 * @property {*} MODELVIEW2_ARB
 * @property {*} MODELVIEW20_ARB
 * @property {*} MODELVIEW21_ARB
 * @property {*} MODELVIEW22_ARB
 * @property {*} MODELVIEW23_ARB
 * @property {*} MODELVIEW24_ARB
 * @property {*} MODELVIEW25_ARB
 * @property {*} MODELVIEW26_ARB
 * @property {*} MODELVIEW27_ARB
 * @property {*} MODELVIEW28_ARB
 * @property {*} MODELVIEW29_ARB
 * @property {*} MODELVIEW3_ARB
 * @property {*} MODELVIEW30_ARB
 * @property {*} MODELVIEW31_ARB
 * @property {*} MODELVIEW4_ARB
 * @property {*} MODELVIEW5_ARB
 * @property {*} MODELVIEW6_ARB
 * @property {*} MODELVIEW7_ARB
 * @property {*} MODELVIEW8_ARB
 * @property {*} MODELVIEW9_ARB
 * @property {*} MODULATE
 * @property {*} MULT
 * @property {*} MULTISAMPLE_3DFX
 * @property {*} MULTISAMPLE_ARB
 * @property {*} MULTISAMPLE_BIT_3DFX
 * @property {*} MULTISAMPLE_BIT_ARB
 * @property {*} MULTISAMPLE_EXT
 * @property {*} MULTISAMPLE_SGIS
 * @property {*} N3F_V3F
 * @property {*} NAME_STACK_DEPTH
 * @property {*} NAND
 * @property {*} NATIVE_GRAPHICS_BEGIN_HINT_PGI
 * @property {*} NATIVE_GRAPHICS_END_HINT_PGI
 * @property {*} NATIVE_GRAPHICS_HANDLE_PGI
 * @property {*} NEAREST_CLIPMAP_LINEAR_SGIX
 * @property {*} NEAREST_CLIPMAP_NEAREST_SGIX
 * @property {*} NEAREST_MIPMAP_LINEAR
 * @property {*} NEAREST_MIPMAP_NEAREST
 * @property {*} NEAREST
 * @property {*} NEVER
 * @property {*} NICEST
 * @property {*} NO_ERROR
 * @property {*} NONE
 * @property {*} NOOP
 * @property {*} NOR
 * @property {*} NORMAL_ARRAY_COUNT_EXT
 * @property {*} NORMAL_ARRAY_EXT
 * @property {*} NORMAL_ARRAY_LIST_IBM
 * @property {*} NORMAL_ARRAY_LIST_STRIDE_IBM
 * @property {*} NORMAL_ARRAY_PARALLEL_POINTERS_INTEL
 * @property {*} NORMAL_ARRAY_POINTER_EXT
 * @property {*} NORMAL_ARRAY_POINTER
 * @property {*} NORMAL_ARRAY_STRIDE_EXT
 * @property {*} NORMAL_ARRAY_STRIDE
 * @property {*} NORMAL_ARRAY_TYPE_EXT
 * @property {*} NORMAL_ARRAY_TYPE
 * @property {*} NORMAL_ARRAY
 * @property {*} NORMAL_BIT_PGI
 * @property {*} NORMAL_MAP_ARB
 * @property {*} NORMAL_MAP_EXT
 * @property {*} NORMAL_MAP_NV
 * @property {*} NORMALIZE
 * @property {*} NOTEQUAL
 * @property {*} NUM_COMPRESSED_TEXTURE_FORMATS_ARB
 * @property {*} NUM_GENERAL_COMBINERS_NV
 * @property {*} OBJECT_DISTANCE_TO_LINE_SGIS
 * @property {*} OBJECT_DISTANCE_TO_POINT_SGIS
 * @property {*} OBJECT_LINE_SGIS
 * @property {*} OBJECT_LINEAR
 * @property {*} OBJECT_PLANE
 * @property {*} OBJECT_POINT_SGIS
 * @property {*} OCCLUSION_TEST_HP
 * @property {*} OCCLUSION_TEST_RESULT_HP
 * @property {*} ONE_MINUS_CONSTANT_ALPHA_EXT
 * @property {*} ONE_MINUS_CONSTANT_ALPHA
 * @property {*} ONE_MINUS_CONSTANT_COLOR_EXT
 * @property {*} ONE_MINUS_CONSTANT_COLOR
 * @property {*} ONE_MINUS_DST_ALPHA
 * @property {*} ONE_MINUS_DST_COLOR
 * @property {*} ONE_MINUS_SRC_ALPHA
 * @property {*} ONE_MINUS_SRC_COLOR
 * @property {*} ONE
 * @property {*} OPERAND0_ALPHA_EXT
 * @property {*} OPERAND0_RGB_EXT
 * @property {*} OPERAND1_ALPHA_EXT
 * @property {*} OPERAND1_RGB_EXT
 * @property {*} OPERAND2_ALPHA_EXT
 * @property {*} OPERAND2_RGB_EXT
 * @property {*} OPERAND3_ALPHA_EXT
 * @property {*} OPERAND3_ALPHA_NV
 * @property {*} OPERAND3_RGB_EXT
 * @property {*} OPERAND3_RGB_NV
 * @property {*} OPERAND4_ALPHA_EXT
 * @property {*} OPERAND4_RGB_EXT
 * @property {*} OPERAND5_ALPHA_EXT
 * @property {*} OPERAND5_RGB_EXT
 * @property {*} OPERAND6_ALPHA_EXT
 * @property {*} OPERAND6_RGB_EXT
 * @property {*} OPERAND7_ALPHA_EXT
 * @property {*} OPERAND7_RGB_EXT
 * @property {*} OR_INVERTED
 * @property {*} OR_REVERSE
 * @property {*} OR
 * @property {*} ORDER
 * @property {*} OUT_OF_MEMORY
 * @property {*} PACK_ALIGNMENT
 * @property {*} PACK_CMYK_HINT_EXT
 * @property {*} PACK_IMAGE_DEPTH_SGIS
 * @property {*} PACK_IMAGE_HEIGHT_EXT
 * @property {*} PACK_IMAGE_HEIGHT
 * @property {*} PACK_IMAGE_HEIGHT
 * @property {*} PACK_LSB_FIRST
 * @property {*} PACK_RESAMPLE_SGIX
 * @property {*} PACK_ROW_LENGTH
 * @property {*} PACK_SKIP_IMAGES_EXT
 * @property {*} PACK_SKIP_IMAGES
 * @property {*} PACK_SKIP_IMAGES
 * @property {*} PACK_SKIP_PIXELS
 * @property {*} PACK_SKIP_ROWS
 * @property {*} PACK_SKIP_VOLUMES_SGIS
 * @property {*} PACK_SUBSAMPLE_RATE_SGIX
 * @property {*} PACK_SWAP_BYTES
 * @property {*} PARALLEL_ARRAYS_INTEL
 * @property {*} PASS_THROUGH_TOKEN
 * @property {*} PERSPECTIVE_CORRECTION_HINT
 * @property {*} PERTURB_EXT
 * @property {*} PHONG_HINT_WIN
 * @property {*} PHONG_WIN
 * @property {*} PIXEL_CUBIC_WEIGHT_EXT
 * @property {*} PIXEL_FRAGMENT_ALPHA_SOURCE_SGIS
 * @property {*} PIXEL_FRAGMENT_RGB_SOURCE_SGIS
 * @property {*} PIXEL_GROUP_COLOR_SGIS
 * @property {*} PIXEL_MAG_FILTER_EXT
 * @property {*} PIXEL_MAP_A_TO_A_SIZE
 * @property {*} PIXEL_MAP_A_TO_A
 * @property {*} PIXEL_MAP_B_TO_B_SIZE
 * @property {*} PIXEL_MAP_B_TO_B
 * @property {*} PIXEL_MAP_G_TO_G_SIZE
 * @property {*} PIXEL_MAP_G_TO_G
 * @property {*} PIXEL_MAP_I_TO_A_SIZE
 * @property {*} PIXEL_MAP_I_TO_A
 * @property {*} PIXEL_MAP_I_TO_B_SIZE
 * @property {*} PIXEL_MAP_I_TO_B
 * @property {*} PIXEL_MAP_I_TO_G_SIZE
 * @property {*} PIXEL_MAP_I_TO_G
 * @property {*} PIXEL_MAP_I_TO_I_SIZE
 * @property {*} PIXEL_MAP_I_TO_I
 * @property {*} PIXEL_MAP_I_TO_R_SIZE
 * @property {*} PIXEL_MAP_I_TO_R
 * @property {*} PIXEL_MAP_R_TO_R_SIZE
 * @property {*} PIXEL_MAP_R_TO_R
 * @property {*} PIXEL_MAP_S_TO_S_SIZE
 * @property {*} PIXEL_MAP_S_TO_S
 * @property {*} PIXEL_MIN_FILTER_EXT
 * @property {*} PIXEL_MODE_BIT
 * @property {*} PIXEL_SUBSAMPLE_2424_SGIX
 * @property {*} PIXEL_SUBSAMPLE_4242_SGIX
 * @property {*} PIXEL_SUBSAMPLE_4444_SGIX
 * @property {*} PIXEL_TEX_GEN_MODE_SGIX
 * @property {*} PIXEL_TEX_GEN_SGIX
 * @property {*} PIXEL_TEXTURE_SGIS
 * @property {*} PIXEL_TILE_BEST_ALIGNMENT_SGIX
 * @property {*} PIXEL_TILE_CACHE_INCREMENT_SGIX
 * @property {*} PIXEL_TILE_CACHE_SIZE_SGIX
 * @property {*} PIXEL_TILE_GRID_DEPTH_SGIX
 * @property {*} PIXEL_TILE_GRID_HEIGHT_SGIX
 * @property {*} PIXEL_TILE_GRID_WIDTH_SGIX
 * @property {*} PIXEL_TILE_HEIGHT_SGIX
 * @property {*} PIXEL_TILE_WIDTH_SGIX
 * @property {*} PIXEL_TRANSFORM_2D_EXT
 * @property {*} PIXEL_TRANSFORM_2D_MATRIX_EXT
 * @property {*} PIXEL_TRANSFORM_2D_STACK_DEPTH_EXT
 * @property {*} POINT_BIT
 * @property {*} POINT_FADE_THRESHOLD_SIZE_EXT
 * @property {*} POINT_FADE_THRESHOLD_SIZE_SGIS
 * @property {*} POINT_SIZE_GRANULARITY
 * @property {*} POINT_SIZE_MAX_EXT
 * @property {*} POINT_SIZE_MAX_SGIS
 * @property {*} POINT_SIZE_MIN_EXT
 * @property {*} POINT_SIZE_MIN_SGIS
 * @property {*} POINT_SIZE_RANGE
 * @property {*} POINT_SIZE
 * @property {*} POINT_SMOOTH_HINT
 * @property {*} POINT_SMOOTH
 * @property {*} POINT_TOKEN
 * @property {*} POINT
 * @property {*} POINTS
 * @property {*} POLYGON_BIT
 * @property {*} POLYGON_MODE
 * @property {*} POLYGON_OFFSET_BIAS_EXT
 * @property {*} POLYGON_OFFSET_EXT
 * @property {*} POLYGON_OFFSET_FACTOR_EXT
 * @property {*} POLYGON_OFFSET_FACTOR
 * @property {*} POLYGON_OFFSET_FILL
 * @property {*} POLYGON_OFFSET_LINE
 * @property {*} POLYGON_OFFSET_POINT
 * @property {*} POLYGON_OFFSET_UNITS
 * @property {*} POLYGON_SMOOTH_HINT
 * @property {*} POLYGON_SMOOTH
 * @property {*} POLYGON_STIPPLE_BIT
 * @property {*} POLYGON_STIPPLE
 * @property {*} POLYGON_TOKEN
 * @property {*} POLYGON
 * @property {*} POSITION
 * @property {*} POST_COLOR_MATRIX_ALPHA_BIAS_SGI
 * @property {*} POST_COLOR_MATRIX_ALPHA_BIAS
 * @property {*} POST_COLOR_MATRIX_ALPHA_SCALE_SGI
 * @property {*} POST_COLOR_MATRIX_ALPHA_SCALE
 * @property {*} POST_COLOR_MATRIX_BLUE_BIAS_SGI
 * @property {*} POST_COLOR_MATRIX_BLUE_BIAS
 * @property {*} POST_COLOR_MATRIX_BLUE_SCALE_SGI
 * @property {*} POST_COLOR_MATRIX_BLUE_SCALE
 * @property {*} POST_COLOR_MATRIX_COLOR_TABLE_SGI
 * @property {*} POST_COLOR_MATRIX_COLOR_TABLE
 * @property {*} POST_COLOR_MATRIX_GREEN_BIAS_SGI
 * @property {*} POST_COLOR_MATRIX_GREEN_BIAS
 * @property {*} POST_COLOR_MATRIX_GREEN_SCALE_SGI
 * @property {*} POST_COLOR_MATRIX_GREEN_SCALE
 * @property {*} POST_COLOR_MATRIX_RED_BIAS_SGI
 * @property {*} POST_COLOR_MATRIX_RED_BIAS
 * @property {*} POST_COLOR_MATRIX_RED_SCALE_SGI
 * @property {*} POST_COLOR_MATRIX_RED_SCALE
 * @property {*} POST_CONVOLUTION_ALPHA_BIAS_EXT
 * @property {*} POST_CONVOLUTION_ALPHA_BIAS
 * @property {*} POST_CONVOLUTION_ALPHA_SCALE_EXT
 * @property {*} POST_CONVOLUTION_ALPHA_SCALE
 * @property {*} POST_CONVOLUTION_BLUE_BIAS_EXT
 * @property {*} POST_CONVOLUTION_BLUE_BIAS
 * @property {*} POST_CONVOLUTION_BLUE_SCALE_EXT
 * @property {*} POST_CONVOLUTION_BLUE_SCALE
 * @property {*} POST_CONVOLUTION_COLOR_TABLE_SGI
 * @property {*} POST_CONVOLUTION_COLOR_TABLE
 * @property {*} POST_CONVOLUTION_GREEN_BIAS_EXT
 * @property {*} POST_CONVOLUTION_GREEN_BIAS
 * @property {*} POST_CONVOLUTION_GREEN_SCALE_EXT
 * @property {*} POST_CONVOLUTION_GREEN_SCALE
 * @property {*} POST_CONVOLUTION_RED_BIAS_EXT
 * @property {*} POST_CONVOLUTION_RED_BIAS
 * @property {*} POST_CONVOLUTION_RED_SCALE_EXT
 * @property {*} POST_CONVOLUTION_RED_SCALE
 * @property {*} POST_IMAGE_TRANSFORM_COLOR_TABLE_HP
 * @property {*} POST_TEXTURE_FILTER_BIAS_RANGE_SGIX
 * @property {*} POST_TEXTURE_FILTER_BIAS_SGIX
 * @property {*} POST_TEXTURE_FILTER_SCALE_RANGE_SGIX
 * @property {*} POST_TEXTURE_FILTER_SCALE_SGIX
 * @property {*} PREFER_DOUBLEBUFFER_HINT_PGI
 * @property {*} PREVIOUS_EXT
 * @property {*} PRIMARY_COLOR_EXT
 * @property {*} PRIMARY_COLOR_NV
 * @property {*} PROJECTION_MATRIX
 * @property {*} PROJECTION_STACK_DEPTH
 * @property {*} PROJECTION
 * @property {*} PROXY_COLOR_TABLE_SGI
 * @property {*} PROXY_COLOR_TABLE
 * @property {*} PROXY_HISTOGRAM_EXT
 * @property {*} PROXY_HISTOGRAM
 * @property {*} PROXY_POST_COLOR_MATRIX_COLOR_TABLE_SGI
 * @property {*} PROXY_POST_COLOR_MATRIX_COLOR_TABLE
 * @property {*} PROXY_POST_CONVOLUTION_COLOR_TABLE_SGI
 * @property {*} PROXY_POST_CONVOLUTION_COLOR_TABLE
 * @property {*} PROXY_POST_IMAGE_TRANSFORM_COLOR_TABLE_HP
 * @property {*} PROXY_TEXTURE_1D_EXT
 * @property {*} PROXY_TEXTURE_1D
 * @property {*} PROXY_TEXTURE_2D_EXT
 * @property {*} PROXY_TEXTURE_2D
 * @property {*} PROXY_TEXTURE_3D_EXT
 * @property {*} PROXY_TEXTURE_3D
 * @property {*} PROXY_TEXTURE_3D
 * @property {*} PROXY_TEXTURE_4D_SGIS
 * @property {*} PROXY_TEXTURE_COLOR_TABLE_SGI
 * @property {*} PROXY_TEXTURE_CUBE_MAP_ARB
 * @property {*} PROXY_TEXTURE_CUBE_MAP_EXT
 * @property {*} Q
 * @property {*} QUAD_ALPHA4_SGIS
 * @property {*} QUAD_ALPHA8_SGIS
 * @property {*} QUAD_INTENSITY4_SGIS
 * @property {*} QUAD_INTENSITY8_SGIS
 * @property {*} QUAD_LUMINANCE4_SGIS
 * @property {*} QUAD_LUMINANCE8_SGIS
 * @property {*} QUAD_STRIP
 * @property {*} QUAD_TEXTURE_SELECT_SGIS
 * @property {*} QUADRATIC_ATTENUATION
 * @property {*} QUADS
 * @property {*} R
 * @property {*} R1UI_C3F_V3F_SUN
 * @property {*} R1UI_C4F_N3F_V3F_SUN
 * @property {*} R1UI_C4UB_V3F_SUN
 * @property {*} R1UI_N3F_V3F_SUN
 * @property {*} R1UI_T2F_C4F_N3F_V3F_SUN
 * @property {*} R1UI_T2F_N3F_V3F_SUN
 * @property {*} R1UI_T2F_V3F_SUN
 * @property {*} R1UI_V3F_SUN
 * @property {*} R3_G3_B2
 * @property {*} RASTER_POSITION_UNCLIPPED_IBM
 * @property {*} READ_BUFFER
 * @property {*} RECLAIM_MEMORY_HINT_PGI
 * @property {*} RED_BIAS
 * @property {*} RED_BITS
 * @property {*} RED_MAX_CLAMP_INGR
 * @property {*} RED_MIN_CLAMP_INGR
 * @property {*} RED_SCALE
 * @property {*} RED
 * @property {*} REDUCE_EXT
 * @property {*} REDUCE
 * @property {*} REFERENCE_PLANE_EQUATION_SGIX
 * @property {*} REFERENCE_PLANE_SGIX
 * @property {*} REFLECTION_MAP_ARB
 * @property {*} REFLECTION_MAP_EXT
 * @property {*} REFLECTION_MAP_NV
 * @property {*} REGISTER_COMBINERS_NV
 * @property {*} RENDER_MODE
 * @property {*} RENDER
 * @property {*} RENDERER
 * @property {*} REPEAT
 * @property {*} REPLACE_EXT
 * @property {*} REPLACE_MIDDLE_SUN
 * @property {*} REPLACE_OLDEST_SUN
 * @property {*} REPLACE
 * @property {*} REPLACEMENT_CODE_ARRAY_POINTER_SUN
 * @property {*} REPLACEMENT_CODE_ARRAY_STRIDE_SUN
 * @property {*} REPLACEMENT_CODE_ARRAY_SUN
 * @property {*} REPLACEMENT_CODE_ARRAY_TYPE_SUN
 * @property {*} REPLACEMENT_CODE_SUN
 * @property {*} REPLICATE_BORDER_HP
 * @property {*} REPLICATE_BORDER
 * @property {*} RESAMPLE_DECIMATE_SGIX
 * @property {*} RESAMPLE_REPLICATE_SGIX
 * @property {*} RESAMPLE_ZERO_FILL_SGIX
 * @property {*} RESCALE_NORMAL_EXT
 * @property {*} RESCALE_NORMAL
 * @property {*} RESTART_SUN
 * @property {*} RETURN
 * @property {*} RGB_SCALE_EXT
 * @property {*} RGB
 * @property {*} RGB10_A2_EXT
 * @property {*} RGB10_A2
 * @property {*} RGB10_EXT
 * @property {*} RGB10
 * @property {*} RGB12_EXT
 * @property {*} RGB12
 * @property {*} RGB16_EXT
 * @property {*} RGB16
 * @property {*} RGB2_EXT
 * @property {*} RGB4_EXT
 * @property {*} RGB4
 * @property {*} RGB5_A1_EXT
 * @property {*} RGB5_A1
 * @property {*} RGB5_EXT
 * @property {*} RGB5
 * @property {*} RGB8_EXT
 * @property {*} RGB8
 * @property {*} RGBA_MODE
 * @property {*} RGBA
 * @property {*} RGBA12_EXT
 * @property {*} RGBA12
 * @property {*} RGBA16_EXT
 * @property {*} RGBA16
 * @property {*} RGBA2_EXT
 * @property {*} RGBA2
 * @property {*} RGBA4_EXT
 * @property {*} RGBA4
 * @property {*} RGBA8_EXT
 * @property {*} RGBA8
 * @property {*} RIGHT
 * @property {*} S
 * @property {*} SAMPLE_ALPHA_TO_COVERAGE_ARB
 * @property {*} SAMPLE_ALPHA_TO_MASK_EXT
 * @property {*} SAMPLE_ALPHA_TO_MASK_SGIS
 * @property {*} SAMPLE_ALPHA_TO_ONE_ARB
 * @property {*} SAMPLE_ALPHA_TO_ONE_EXT
 * @property {*} SAMPLE_ALPHA_TO_ONE_SGIS
 * @property {*} SAMPLE_BUFFERS_3DFX
 * @property {*} SAMPLE_BUFFERS_ARB
 * @property {*} SAMPLE_BUFFERS_EXT
 * @property {*} SAMPLE_BUFFERS_SGIS
 * @property {*} SAMPLE_COVERAGE_ARB
 * @property {*} SAMPLE_COVERAGE_INVERT_ARB
 * @property {*} SAMPLE_COVERAGE_VALUE_ARB
 * @property {*} SAMPLE_MASK_EXT
 * @property {*} SAMPLE_MASK_INVERT_EXT
 * @property {*} SAMPLE_MASK_INVERT_SGIS
 * @property {*} SAMPLE_MASK_SGIS
 * @property {*} SAMPLE_MASK_VALUE_EXT
 * @property {*} SAMPLE_MASK_VALUE_SGIS
 * @property {*} SAMPLE_PATTERN_EXT
 * @property {*} SAMPLE_PATTERN_SGIS
 * @property {*} SAMPLES_3DFX
 * @property {*} SAMPLES_ARB
 * @property {*} SAMPLES_EXT
 * @property {*} SAMPLES_SGIS
 * @property {*} SCALE_BY_FOUR_NV
 * @property {*} SCALE_BY_ONE_HALF_NV
 * @property {*} SCALE_BY_TWO_NV
 * @property {*} SCISSOR_BIT
 * @property {*} SCISSOR_BOX
 * @property {*} SCISSOR_TEST
 * @property {*} SCREEN_COORDINATES_REND
 * @property {*} SECONDARY_COLOR_ARRAY_EXT
 * @property {*} SECONDARY_COLOR_ARRAY_LIST_IBM
 * @property {*} SECONDARY_COLOR_ARRAY_LIST_STRIDE_IBM
 * @property {*} SECONDARY_COLOR_ARRAY_POINTER_EXT
 * @property {*} SECONDARY_COLOR_ARRAY_SIZE_EXT
 * @property {*} SECONDARY_COLOR_ARRAY_STRIDE_EXT
 * @property {*} SECONDARY_COLOR_ARRAY_TYPE_EXT
 * @property {*} SECONDARY_COLOR_NV
 * @property {*} SELECT
 * @property {*} SELECTION_BUFFER_POINTER
 * @property {*} SELECTION_BUFFER_SIZE
 * @property {*} SEPARABLE_2D_EXT
 * @property {*} SEPARABLE_2D
 * @property {*} SEPARATE_SPECULAR_COLOR_EXT
 * @property {*} SEPARATE_SPECULAR_COLOR
 * @property {*} SET
 * @property {*} SHADE_MODEL
 * @property {*} SHADOW_AMBIENT_SGIX
 * @property {*} SHADOW_ATTENUATION_EXT
 * @property {*} SHARED_TEXTURE_PALETTE_EXT
 * @property {*} SHARPEN_TEXTURE_FUNC_POINTS_SGIS
 * @property {*} SHININESS
 * @property {*} SHORT
 * @property {*} SIGNED_IDENTITY_NV
 * @property {*} SIGNED_NEGATE_NV
 * @property {*} SINGLE_COLOR_EXT
 * @property {*} SINGLE_COLOR
 * @property {*} SMOOTH_LINE_WIDTH_GRANULARITY
 * @property {*} SMOOTH_LINE_WIDTH_RANGE
 * @property {*} SMOOTH_POINT_SIZE_GRANULARITY
 * @property {*} SMOOTH_POINT_SIZE_RANGE
 * @property {*} SMOOTH
 * @property {*} SOURCE0_ALPHA_EXT
 * @property {*} SOURCE0_RGB_EXT
 * @property {*} SOURCE1_ALPHA_EXT
 * @property {*} SOURCE1_RGB_EXT
 * @property {*} SOURCE2_ALPHA_EXT
 * @property {*} SOURCE2_RGB_EXT
 * @property {*} SOURCE3_ALPHA_EXT
 * @property {*} SOURCE3_ALPHA_NV
 * @property {*} SOURCE3_RGB_EXT
 * @property {*} SOURCE3_RGB_NV
 * @property {*} SOURCE4_ALPHA_EXT
 * @property {*} SOURCE4_RGB_EXT
 * @property {*} SOURCE5_ALPHA_EXT
 * @property {*} SOURCE5_RGB_EXT
 * @property {*} SOURCE6_ALPHA_EXT
 * @property {*} SOURCE6_RGB_EXT
 * @property {*} SOURCE7_ALPHA_EXT
 * @property {*} SOURCE7_RGB_EXT
 * @property {*} SPARE0_NV
 * @property {*} SPARE0_PLUS_SECONDARY_COLOR_NV
 * @property {*} SPARE1_NV
 * @property {*} SPECULAR
 * @property {*} SPHERE_MAP
 * @property {*} SPOT_CUTOFF
 * @property {*} SPOT_DIRECTION
 * @property {*} SPOT_EXPONENT
 * @property {*} SPRITE_AXIAL_SGIX
 * @property {*} SPRITE_AXIS_SGIX
 * @property {*} SPRITE_EYE_ALIGNED_SGIX
 * @property {*} SPRITE_MODE_SGIX
 * @property {*} SPRITE_OBJECT_ALIGNED_SGIX
 * @property {*} SPRITE_SGIX
 * @property {*} SPRITE_TRANSLATION_SGIX
 * @property {*} SRC_ALPHA_SATURATE
 * @property {*} SRC_ALPHA
 * @property {*} SRC_COLOR
 * @property {*} STACK_OVERFLOW
 * @property {*} STACK_UNDERFLOW
 * @property {*} STENCIL_BITS
 * @property {*} STENCIL_BUFFER_BIT
 * @property {*} STENCIL_CLEAR_VALUE
 * @property {*} STENCIL_FAIL
 * @property {*} STENCIL_FUNC
 * @property {*} STENCIL_INDEX
 * @property {*} STENCIL_PASS_DEPTH_FAIL
 * @property {*} STENCIL_PASS_DEPTH_PASS
 * @property {*} STENCIL_REF
 * @property {*} STENCIL_TEST
 * @property {*} STENCIL_VALUE_MASK
 * @property {*} STENCIL_WRITEMASK
 * @property {*} STENCIL
 * @property {*} STEREO
 * @property {*} STRICT_DEPTHFUNC_HINT_PGI
 * @property {*} STRICT_LIGHTING_HINT_PGI
 * @property {*} STRICT_SCISSOR_HINT_PGI
 * @property {*} SUBPIXEL_BITS
 * @property {*} T
 * @property {*} T2F_C3F_V3F
 * @property {*} T2F_C4F_N3F_V3F
 * @property {*} T2F_C4UB_V3F
 * @property {*} T2F_IUI_N3F_V2F_EXT
 * @property {*} T2F_IUI_N3F_V3F_EXT
 * @property {*} T2F_IUI_V2F_EXT
 * @property {*} T2F_IUI_V3F_EXT
 * @property {*} T2F_N3F_V3F
 * @property {*} T2F_V3F
 * @property {*} T4F_C4F_N3F_V4F
 * @property {*} T4F_V4F
 * @property {*} TABLE_TOO_LARGE_EXT
 * @property {*} TABLE_TOO_LARGE
 * @property {*} TANGENT_ARRAY_EXT
 * @property {*} TANGENT_ARRAY_POINTER_EXT
 * @property {*} TANGENT_ARRAY_STRIDE_EXT
 * @property {*} TANGENT_ARRAY_TYPE_EXT
 * @property {*} TEXCOORD1_BIT_PGI
 * @property {*} TEXCOORD2_BIT_PGI
 * @property {*} TEXCOORD3_BIT_PGI
 * @property {*} TEXCOORD4_BIT_PGI
 * @property {*} TEXTURE_1D_BINDING_EXT
 * @property {*} TEXTURE_1D
 * @property {*} TEXTURE_2D_BINDING_EXT
 * @property {*} TEXTURE_2D
 * @property {*} TEXTURE_3D_BINDING_EXT
 * @property {*} TEXTURE_3D_EXT
 * @property {*} TEXTURE_3D
 * @property {*} TEXTURE_3D
 * @property {*} TEXTURE_4D_BINDING_SGIS
 * @property {*} TEXTURE_4D_SGIS
 * @property {*} TEXTURE_4DSIZE_SGIS
 * @property {*} TEXTURE_ALPHA_SIZE_EXT
 * @property {*} TEXTURE_ALPHA_SIZE
 * @property {*} TEXTURE_APPLICATION_MODE_EXT
 * @property {*} TEXTURE_BASE_LEVEL_SGIS
 * @property {*} TEXTURE_BASE_LEVEL
 * @property {*} TEXTURE_BINDING_1D
 * @property {*} TEXTURE_BINDING_2D
 * @property {*} TEXTURE_BINDING_3D
 * @property {*} TEXTURE_BINDING_CUBE_MAP_ARB
 * @property {*} TEXTURE_BINDING_CUBE_MAP_EXT
 * @property {*} TEXTURE_BIT
 * @property {*} TEXTURE_BLUE_SIZE_EXT
 * @property {*} TEXTURE_BLUE_SIZE
 * @property {*} TEXTURE_BORDER_COLOR
 * @property {*} TEXTURE_BORDER
 * @property {*} TEXTURE_CLIPMAP_CENTER_SGIX
 * @property {*} TEXTURE_CLIPMAP_DEPTH_SGIX
 * @property {*} TEXTURE_CLIPMAP_FRAME_SGIX
 * @property {*} TEXTURE_CLIPMAP_LOD_OFFSET_SGIX
 * @property {*} TEXTURE_CLIPMAP_OFFSET_SGIX
 * @property {*} TEXTURE_CLIPMAP_VIRTUAL_DEPTH_SGIX
 * @property {*} TEXTURE_COLOR_TABLE_SGI
 * @property {*} TEXTURE_COLOR_WRITEMASK_SGIS
 * @property {*} TEXTURE_COMPARE_OPERATOR_SGIX
 * @property {*} TEXTURE_COMPARE_SGIX
 * @property {*} TEXTURE_COMPONENTS
 * @property {*} TEXTURE_COMPRESSED_ARB
 * @property {*} TEXTURE_COMPRESSED_IMAGE_SIZE_ARB
 * @property {*} TEXTURE_COMPRESSION_HINT_ARB
 * @property {*} TEXTURE_CONSTANT_DATA_SUNX
 * @property {*} TEXTURE_COORD_ARRAY_COUNT_EXT
 * @property {*} TEXTURE_COORD_ARRAY_EXT
 * @property {*} TEXTURE_COORD_ARRAY_LIST_IBM
 * @property {*} TEXTURE_COORD_ARRAY_LIST_STRIDE_IBM
 * @property {*} TEXTURE_COORD_ARRAY_PARALLEL_POINTERS_INTEL
 * @property {*} TEXTURE_COORD_ARRAY_POINTER_EXT
 * @property {*} TEXTURE_COORD_ARRAY_POINTER
 * @property {*} TEXTURE_COORD_ARRAY_SIZE_EXT
 * @property {*} TEXTURE_COORD_ARRAY_SIZE
 * @property {*} TEXTURE_COORD_ARRAY_STRIDE_EXT
 * @property {*} TEXTURE_COORD_ARRAY_STRIDE
 * @property {*} TEXTURE_COORD_ARRAY_TYPE_EXT
 * @property {*} TEXTURE_COORD_ARRAY_TYPE
 * @property {*} TEXTURE_COORD_ARRAY
 * @property {*} TEXTURE_CUBE_MAP_ARB
 * @property {*} TEXTURE_CUBE_MAP_EXT
 * @property {*} TEXTURE_CUBE_MAP_NEGATIVE_X_ARB
 * @property {*} TEXTURE_CUBE_MAP_NEGATIVE_X_EXT
 * @property {*} TEXTURE_CUBE_MAP_NEGATIVE_Y_ARB
 * @property {*} TEXTURE_CUBE_MAP_NEGATIVE_Y_EXT
 * @property {*} TEXTURE_CUBE_MAP_NEGATIVE_Z_ARB
 * @property {*} TEXTURE_CUBE_MAP_NEGATIVE_Z_EXT
 * @property {*} TEXTURE_CUBE_MAP_POSITIVE_X_ARB
 * @property {*} TEXTURE_CUBE_MAP_POSITIVE_X_EXT
 * @property {*} TEXTURE_CUBE_MAP_POSITIVE_Y_ARB
 * @property {*} TEXTURE_CUBE_MAP_POSITIVE_Y_EXT
 * @property {*} TEXTURE_CUBE_MAP_POSITIVE_Z_ARB
 * @property {*} TEXTURE_CUBE_MAP_POSITIVE_Z_EXT
 * @property {*} TEXTURE_DEFORMATION_BIT_SGIX
 * @property {*} TEXTURE_DEFORMATION_SGIX
 * @property {*} TEXTURE_DEPTH_EXT
 * @property {*} TEXTURE_DEPTH
 * @property {*} TEXTURE_DEPTH
 * @property {*} TEXTURE_ENV_BIAS_SGIX
 * @property {*} TEXTURE_ENV_COLOR
 * @property {*} TEXTURE_ENV_MODE
 * @property {*} TEXTURE_ENV
 * @property {*} TEXTURE_FILTER_CONTROL_EXT
 * @property {*} TEXTURE_FILTER4_SIZE_SGIS
 * @property {*} TEXTURE_GEN_MODE
 * @property {*} TEXTURE_GEN_Q
 * @property {*} TEXTURE_GEN_R
 * @property {*} TEXTURE_GEN_S
 * @property {*} TEXTURE_GEN_T
 * @property {*} TEXTURE_GEQUAL_R_SGIX
 * @property {*} TEXTURE_GREEN_SIZE_EXT
 * @property {*} TEXTURE_GREEN_SIZE
 * @property {*} TEXTURE_HEIGHT
 * @property {*} TEXTURE_INDEX_SIZE_EXT
 * @property {*} TEXTURE_INTENSITY_SIZE_EXT
 * @property {*} TEXTURE_INTENSITY_SIZE
 * @property {*} TEXTURE_INTERNAL_FORMAT
 * @property {*} TEXTURE_LEQUAL_R_SGIX
 * @property {*} TEXTURE_LIGHT_EXT
 * @property {*} TEXTURE_LIGHTING_MODE_HP
 * @property {*} TEXTURE_LOD_BIAS_EXT
 * @property {*} TEXTURE_LOD_BIAS_R_SGIX
 * @property {*} TEXTURE_LOD_BIAS_S_SGIX
 * @property {*} TEXTURE_LOD_BIAS_T_SGIX
 * @property {*} TEXTURE_LUMINANCE_SIZE_EXT
 * @property {*} TEXTURE_LUMINANCE_SIZE
 * @property {*} TEXTURE_MAG_FILTER
 * @property {*} TEXTURE_MATERIAL_FACE_EXT
 * @property {*} TEXTURE_MATERIAL_PARAMETER_EXT
 * @property {*} TEXTURE_MATRIX
 * @property {*} TEXTURE_MAX_ANISOTROPY_EXT
 * @property {*} TEXTURE_MAX_LEVEL_SGIS
 * @property {*} TEXTURE_MAX_LEVEL
 * @property {*} TEXTURE_MAX_LOD_SGIS
 * @property {*} TEXTURE_MAX_LOD
 * @property {*} TEXTURE_MIN_FILTER
 * @property {*} TEXTURE_MIN_LOD_SGIS
 * @property {*} TEXTURE_MIN_LOD
 * @property {*} TEXTURE_MULTI_BUFFER_HINT_SGIX
 * @property {*} TEXTURE_NORMAL_EXT
 * @property {*} TEXTURE_POST_SPECULAR_HP
 * @property {*} TEXTURE_PRE_SPECULAR_HP
 * @property {*} TEXTURE_PRIORITY_EXT
 * @property {*} TEXTURE_PRIORITY
 * @property {*} TEXTURE_RED_SIZE_EXT
 * @property {*} TEXTURE_RED_SIZE
 * @property {*} TEXTURE_RESIDENT_EXT
 * @property {*} TEXTURE_RESIDENT
 * @property {*} TEXTURE_STACK_DEPTH
 * @property {*} TEXTURE_TOO_LARGE_EXT
 * @property {*} TEXTURE_WIDTH
 * @property {*} TEXTURE_WRAP_Q_SGIS
 * @property {*} TEXTURE_WRAP_R_EXT
 * @property {*} TEXTURE_WRAP_R
 * @property {*} TEXTURE_WRAP_R
 * @property {*} TEXTURE_WRAP_S
 * @property {*} TEXTURE_WRAP_T
 * @property {*} TEXTURE
 * @property {*} TEXTURE0_ARB
 * @property {*} TEXTURE1_ARB
 * @property {*} TEXTURE10_ARB
 * @property {*} TEXTURE11_ARB
 * @property {*} TEXTURE12_ARB
 * @property {*} TEXTURE13_ARB
 * @property {*} TEXTURE14_ARB
 * @property {*} TEXTURE15_ARB
 * @property {*} TEXTURE16_ARB
 * @property {*} TEXTURE17_ARB
 * @property {*} TEXTURE18_ARB
 * @property {*} TEXTURE19_ARB
 * @property {*} TEXTURE2_ARB
 * @property {*} TEXTURE20_ARB
 * @property {*} TEXTURE21_ARB
 * @property {*} TEXTURE22_ARB
 * @property {*} TEXTURE23_ARB
 * @property {*} TEXTURE24_ARB
 * @property {*} TEXTURE25_ARB
 * @property {*} TEXTURE26_ARB
 * @property {*} TEXTURE27_ARB
 * @property {*} TEXTURE28_ARB
 * @property {*} TEXTURE29_ARB
 * @property {*} TEXTURE3_ARB
 * @property {*} TEXTURE30_ARB
 * @property {*} TEXTURE31_ARB
 * @property {*} TEXTURE4_ARB
 * @property {*} TEXTURE5_ARB
 * @property {*} TEXTURE6_ARB
 * @property {*} TEXTURE7_ARB
 * @property {*} TEXTURE8_ARB
 * @property {*} TEXTURE9_ARB
 * @property {*} TRANSFORM_BIT
 * @property {*} TRANSFORM_HINT_APPLE
 * @property {*} TRANSPOSE_COLOR_MATRIX_ARB
 * @property {*} TRANSPOSE_MODELVIEW_MATRIX_ARB
 * @property {*} TRANSPOSE_PROJECTION_MATRIX_ARB
 * @property {*} TRANSPOSE_TEXTURE_MATRIX_ARB
 * @property {*} TRIANGLE_FAN
 * @property {*} TRIANGLE_LIST_SUN
 * @property {*} TRIANGLE_STRIP
 * @property {*} TRIANGLES
 * @property {*} TRUE
 * @property {*} UNPACK_ALIGNMENT
 * @property {*} UNPACK_CMYK_HINT_EXT
 * @property {*} UNPACK_CONSTANT_DATA_SUNX
 * @property {*} UNPACK_IMAGE_DEPTH_SGIS
 * @property {*} UNPACK_IMAGE_HEIGHT_EXT
 * @property {*} UNPACK_IMAGE_HEIGHT
 * @property {*} UNPACK_IMAGE_HEIGHT
 * @property {*} UNPACK_LSB_FIRST
 * @property {*} UNPACK_RESAMPLE_SGIX
 * @property {*} UNPACK_ROW_LENGTH
 * @property {*} UNPACK_SKIP_IMAGES_EXT
 * @property {*} UNPACK_SKIP_IMAGES
 * @property {*} UNPACK_SKIP_IMAGES
 * @property {*} UNPACK_SKIP_PIXELS
 * @property {*} UNPACK_SKIP_ROWS
 * @property {*} UNPACK_SKIP_VOLUMES_SGIS
 * @property {*} UNPACK_SUBSAMPLE_RATE_SGIX
 * @property {*} UNPACK_SWAP_BYTES
 * @property {*} UNSIGNED_BYTE_2_3_3_REV
 * @property {*} UNSIGNED_BYTE_3_3_2_EXT
 * @property {*} UNSIGNED_BYTE_3_3_2
 * @property {*} UNSIGNED_BYTE
 * @property {*} UNSIGNED_IDENTITY_NV
 * @property {*} UNSIGNED_INT_10_10_10_2_EXT
 * @property {*} UNSIGNED_INT_10_10_10_2
 * @property {*} UNSIGNED_INT_2_10_10_10_REV
 * @property {*} UNSIGNED_INT_8_8_8_8_EXT
 * @property {*} UNSIGNED_INT_8_8_8_8_REV
 * @property {*} UNSIGNED_INT_8_8_8_8
 * @property {*} UNSIGNED_INT
 * @property {*} UNSIGNED_INVERT_NV
 * @property {*} UNSIGNED_SHORT_1_5_5_5_REV
 * @property {*} UNSIGNED_SHORT_4_4_4_4_EXT
 * @property {*} UNSIGNED_SHORT_4_4_4_4_REV
 * @property {*} UNSIGNED_SHORT_4_4_4_4
 * @property {*} UNSIGNED_SHORT_5_5_5_1_EXT
 * @property {*} UNSIGNED_SHORT_5_5_5_1
 * @property {*} UNSIGNED_SHORT_5_6_5_REV
 * @property {*} UNSIGNED_SHORT_5_6_5
 * @property {*} UNSIGNED_SHORT
 * @property {*} V2F
 * @property {*} V3F
 * @property {*} VARIABLE_A_NV
 * @property {*} VARIABLE_B_NV
 * @property {*} VARIABLE_C_NV
 * @property {*} VARIABLE_D_NV
 * @property {*} VARIABLE_E_NV
 * @property {*} VARIABLE_F_NV
 * @property {*} VARIABLE_G_NV
 * @property {*} VENDOR
 * @property {*} VERSION
 * @property {*} VERTEX_ARRAY_COUNT_EXT
 * @property {*} VERTEX_ARRAY_EXT
 * @property {*} VERTEX_ARRAY_LIST_IBM
 * @property {*} VERTEX_ARRAY_LIST_STRIDE_IBM
 * @property {*} VERTEX_ARRAY_PARALLEL_POINTERS_INTEL
 * @property {*} VERTEX_ARRAY_POINTER_EXT
 * @property {*} VERTEX_ARRAY_POINTER
 * @property {*} VERTEX_ARRAY_RANGE_LENGTH_NV
 * @property {*} VERTEX_ARRAY_RANGE_NV
 * @property {*} VERTEX_ARRAY_RANGE_POINTER_NV
 * @property {*} VERTEX_ARRAY_RANGE_VALID_NV
 * @property {*} VERTEX_ARRAY_SIZE_EXT
 * @property {*} VERTEX_ARRAY_SIZE
 * @property {*} VERTEX_ARRAY_STRIDE_EXT
 * @property {*} VERTEX_ARRAY_STRIDE
 * @property {*} VERTEX_ARRAY_TYPE_EXT
 * @property {*} VERTEX_ARRAY_TYPE
 * @property {*} VERTEX_ARRAY
 * @property {*} VERTEX_BLEND_ARB
 * @property {*} VERTEX_CONSISTENT_HINT_PGI
 * @property {*} VERTEX_DATA_HINT_PGI
 * @property {*} VERTEX_PRECLIP_HINT_SGIX
 * @property {*} VERTEX_PRECLIP_SGIX
 * @property {*} VERTEX_WEIGHT_ARRAY_EXT
 * @property {*} VERTEX_WEIGHT_ARRAY_POINTER_EXT
 * @property {*} VERTEX_WEIGHT_ARRAY_SIZE_EXT
 * @property {*} VERTEX_WEIGHT_ARRAY_STRIDE_EXT
 * @property {*} VERTEX_WEIGHT_ARRAY_TYPE_EXT
 * @property {*} VERTEX_WEIGHTING_EXT
 * @property {*} VERTEX23_BIT_PGI
 * @property {*} VERTEX4_BIT_PGI
 * @property {*} VIEWPORT_BIT
 * @property {*} VIEWPORT
 * @property {*} WEIGHT_ARRAY_ARB
 * @property {*} WEIGHT_ARRAY_POINTER_ARB
 * @property {*} WEIGHT_ARRAY_SIZE_ARB
 * @property {*} WEIGHT_ARRAY_STRIDE_ARB
 * @property {*} WEIGHT_ARRAY_TYPE_ARB
 * @property {*} WEIGHT_SUM_UNITY_ARB
 * @property {*} WIDE_LINE_HINT_PGI
 * @property {*} WRAP_BORDER_SUN
 * @property {*} XOR
 * @property {*} YCRCB_422_SGIX
 * @property {*} YCRCB_444_SGIX
 * @property {*} YCRCB_SGIX
 * @property {*} YCRCBA_SGIX
 * @property {*} ZERO
 * @property {*} ZOOM_X
 * @property {*} ZOOM_Y
 */
/** */
declare function glInit(): void;
/** */
declare function glShutdown(): void;
/** */
declare function glFlush(): void;
/** */
declare function glFinish(): void;
/** */
declare function glEnd(): void;
/** */
declare function glLoadIdentity(): void;
/** */
declare function glPushMatrix(): void;
/** */
declare function glPopMatrix(): void;
/** */
declare function glEndList(): void;
/** */
declare function glGetError(): void;
/** */
declare function glPopAttrib(): void;
/** */
declare function glPopClientAttrib(): void;
/** */
declare function glGetPolygonStipple(): void;
/** */
declare function glutWireDodecahedron(): void;
/** */
declare function glutSolidDodecahedron(): void;
/** */
declare function glutWireOctahedron(): void;
/** */
declare function glutSolidOctahedron(): void;
/** */
declare function glutWireTetrahedron(): void;
/** */
declare function glutSolidTetrahedron(): void;
/** */
declare function glutWireIcosahedron(): void;
/** */
declare function glutSolidIcosahedron(): void;
/**
 * @param {boolean} b
 */
declare function glDepthMask(b: boolean): void;
/**
 * @param {boolean} b
 */
declare function glEdgeFlag(b: boolean): void;
/**
 * @param {number} num
 */
declare function glBegin(num: number): void;
/**
 * @param {number} num
 */
declare function glCallList(num: number): void;
/**
 * @param {number} num
 */
declare function glClear(num: number): void;
/**
 * @param {number} num
 */
declare function glCullFace(num: number): void;
/**
 * @param {number} num
 */
declare function glDisable(num: number): void;
/**
 * @param {number} num
 */
declare function glEnable(num: number): void;
/**
 * @param {number} num
 */
declare function glIndex(num: number): void;
/**
 * @param {number} num
 */
declare function glListBase(num: number): void;
/**
 * @param {number} num
 */
declare function glMatrixMode(num: number): void;
/**
 * @param {number} num
 */
declare function glClearIndex(num: number): void;
/**
 * @param {number} num
 */
declare function glLineWidth(num: number): void;
/**
 * @param {number} num
 */
declare function glPointSize(num: number): void;
/**
 * @param {number} num
 */
declare function glDisableClientState(num: number): void;
/**
 * @param {number} num
 */
declare function glDrawBuffer(num: number): void;
/**
 * @param {number} num
 */
declare function glEnableClientState(num: number): void;
/**
 * @param {number} num
 */
declare function glIndexMask(num: number): void;
/**
 * @param {number} num
 */
declare function glFrontFace(num: number): void;
/**
 * @param {number} num
 */
declare function glLogicOp(num: number): void;
/**
 * @param {number} num
 */
declare function glPushAttrib(num: number): void;
/**
 * @param {number} num
 */
declare function glPushClientAttrib(num: number): void;
/**
 * @param {number} num
 */
declare function glReadBuffer(num: number): void;
/**
 * @param {number} num
 */
declare function glClearDepth(num: number): void;
/**
 * @param {number} num
 */
declare function glDepthFunc(num: number): void;
/**
 * @param {number} num
 */
declare function glShadeModel(num: number): void;
/**
 * @param {number} num
 */
declare function glStencilMask(num: number): void;
/**
 * @param {number} num
 */
declare function glClearStencil(num: number): void;
/**
 * @param {number} num
 * @returns {number[]}
 */
declare function glGetClipPlane(num: number): number[];
/**
 * @param {number} num
 * @returns {boolean[]}
 */
declare function glGetBoolean(num: number): boolean[];
/**
 * @param {number} num
 * @returns {number[]}
 */
declare function glGetDouble(num: number): number[];
/**
 * @param {number} num
 * @returns {number[]}
 */
declare function glGetFloat(num: number): number[];
/**
 * @param {number} num
 * @returns {number[]}
 */
declare function glGetInteger(num: number): number[];
/**
 * @param {number[]} num
 */
declare function glLoadMatrix(num: number[]): void;
/**
 * @param {number[]} num
 */
declare function glMultMatrix(num: number[]): void;
/**
 * @param {number} num
 */
declare function glCallLists(num: number): void;
/**
 * @param {number} num
 * @returns {number[]}
 */
declare function glGenTextures(num: number): number[];
/**
 * @param {number[]} num
 */
declare function glPolygonStipple(num: number[]): void;
/**
 * @param {Bitmap} bm
 */
declare function glDrawPixels(bm: Bitmap): void;
/**
 * @param {number} num
 */
declare function glutWireCube(num: number): void;
/**
 * @param {number} num
 */
declare function glutSolidCube(num: number): void;
/**
 * @param {number|number[]} num
 */
declare function glDeleteTextures(num: number | number[]): void;
/**
 * @param {number} num
 * @returns {string}
 */
declare function glGetString(num: number): string;
/**
 * @param {number} num
 * @returns {number}
 */
declare function glGenLists(num: number): number;
/**
 * @param {number} num
 * @returns {number}
 */
declare function glRenderMode(num: number): number;
/**
 * @param {number} num
 * @returns {boolean}
 */
declare function glIsTexture(num: number): boolean;
/**
 * @param {number} num
 * @returns {boolean}
 */
declare function glIsEnabled(num: number): boolean;
/**
 * @param {number} num
 * @returns {boolean}
 */
declare function glIsList(num: number): boolean;
/**
 * @param {number|number[]} num
 */
declare function glTexCoord1(num: number | number[]): void;
/**
 * @param {number} num
 * @returns {number[]}
 */
declare function glGetPixelMap(num: number): number[];
/**
 * @param {number} num1
 * @param {number} num2
 */
declare function glDeleteLists(num1: number, num2: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 */
declare function glNewList(num1: number, num2: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 */
declare function glBindTexture(num1: number, num2: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 */
declare function glPolygonOffset(num1: number, num2: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 */
declare function glAlphaFunc(num1: number, num2: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 */
declare function glBlendFunc(num1: number, num2: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 */
declare function glPolygonMode(num1: number, num2: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 */
declare function glHint(num1: number, num2: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 */
declare function glLineStipple(num1: number, num2: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 */
declare function glAccum(num1: number, num2: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 */
declare function glDepthRange(num1: number, num2: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 */
declare function glColorMaterial(num1: number, num2: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 */
declare function glPixelZoom(num1: number, num2: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 */
declare function glPixelStore(num1: number, num2: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 */
declare function glPixelTransfer(num1: number, num2: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number[]}
 */
declare function glGetLight(num1: number, num2: number): number[];
/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number[]}
 */
declare function glGetMaterial(num1: number, num2: number): number[];
/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number[]}
 */
declare function glGetTexParameter(num1: number, num2: number): number[];
/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number[]}
 */
declare function glGetTexEnv(num1: number, num2: number): number[];
/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number[]}
 */
declare function glGetTexGen(num1: number, num2: number): number[];
/**
 * @param {number} num1
 * @param {number[]} num2
 */
declare function glClipPlane(num1: number, num2: number[]): void;
/**
 * @param {number|number[]} num1
 * @param {number} [num2]
 */
declare function glVertex2(num1: number | number[], num2?: number): void;
/**
 * @param {number|number[]} num1
 * @param {number} [num2]
 */
declare function glTexCoord2(num1: number | number[], num2?: number): void;
/**
 * @param {number|number[]} num1
 * @param {number} [num2]
 */
declare function glRasterPos2(num1: number | number[], num2?: number): void;
/**
* @param {number} num1
* @param {number[]} num2
*/
declare function glPixelMap(num1: number, num2: number[]): void;
/**
* @param {number} num1
* @param {number|number[]} num2
*/
declare function glFog(num1: number, num2: number | number[]): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @returns {Bitmap}
 */
declare function glGetTexImage(num1: number, num2: number): Bitmap;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 */
declare function glutWireSphere(num1: number, num2: number, num3: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 */
declare function glutSolidSphere(num1: number, num2: number, num3: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 */
declare function glTranslate(num1: number, num2: number, num3: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 */
declare function glScale(num1: number, num2: number, num3: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 */
declare function glStencilFunc(num1: number, num2: number, num3: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 */
declare function glStencilOp(num1: number, num2: number, num3: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @returns {number[]}
 */
declare function glGetTexLevelParameter(num1: number, num2: number, num3: number): number[];
/**
 * @param {number|number[]} num1
 * @param {number} [num2]
 * @param {number} [num3]
 */
declare function glTexCoord3(num1: number | number[], num2?: number, num3?: number): void;
/**
 * @param {number|number[]} num1
 * @param {number} [num2]
 * @param {number} [num3]
 */
declare function glColor3(num1: number | number[], num2?: number, num3?: number): void;
/**
 * @param {number|number[]} num1
 * @param {number} [num2]
 * @param {number} [num3]
 */
declare function glVertex3(num1: number | number[], num2?: number, num3?: number): void;
/**
 * @param {number|number[]} num1
 * @param {number} [num2]
 * @param {number} [num3]
 */
declare function glNormal3(num1: number | number[], num2?: number, num3?: number): void;
/**
 * @param {number|number[]} num1
 * @param {number} [num2]
 * @param {number} [num3]
 */
declare function glRasterPos3(num1: number | number[], num2?: number, num3?: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number|number[]} num3
 */
declare function glMaterial(num1: number, num2: number, num3: number | number[]): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number|number[]} num3
 */
declare function glLight(num1: number, num2: number, num3: number | number[]): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number|number[]} num3
 */
declare function glLightModel(num1: number, num2: number, num3: number | number[]): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number|number[]} num3
 */
declare function glTexParameter(num1: number, num2: number, num3: number | number[]): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number|number[]} num3
 */
declare function glTexEnv(num1: number, num2: number, num3: number | number[]): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number|number[]} num3
 */
declare function glTexGen(num1: number, num2: number, num3: number | number[]): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 */
declare function glRotate(num1: number, num2: number, num3: number, num4: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 */
declare function glClearColor(num1: number, num2: number, num3: number, num4: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 */
declare function glRect(num1: number, num2: number, num3: number, num4: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 */
declare function glViewport(num1: number, num2: number, num3: number, num4: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 */
declare function glScissor(num1: number, num2: number, num3: number, num4: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 */
declare function glClearAccum(num1: number, num2: number, num3: number, num4: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 */
declare function glutWireTorus(num1: number, num2: number, num3: number, num4: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 */
declare function glutSolidTorus(num1: number, num2: number, num3: number, num4: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 */
declare function glutWireCone(num1: number, num2: number, num3: number, num4: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 */
declare function glutSolidCone(num1: number, num2: number, num3: number, num4: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 */
declare function gluPerspective(num1: number, num2: number, num3: number, num4: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 */
declare function gluOrtho2D(num1: number, num2: number, num3: number, num4: number): void;
/**
 * @param {number} b1
 * @param {number} b2
 * @param {number} b3
 * @param {number} b4
 */
declare function glColorMask(b1: number, b2: number, b3: number, b4: number): void;
/**
 * @param {number|number[]} num1
 * @param {number} [num2]
 * @param {number} [num3]
 * @param {number} [num4]
 */
declare function glTexCoord4(num1: number | number[], num2?: number, num3?: number, num4?: number): void;
/**
 * @param {number|number[]} num1
 * @param {number} [num2]
 * @param {number} [num3]
 * @param {number} [num4]
 */
declare function glVertex4(num1: number | number[], num2?: number, num3?: number, num4?: number): void;
/**
 * @param {number|number[]} num1
 * @param {number} [num2]
 * @param {number} [num3]
 * @param {number} [num4]
 */
declare function glColor4(num1: number | number[], num2?: number, num3?: number, num4?: number): void;
/**
 * @param {number|number[]} num1
 * @param {number} [num2]
 * @param {number} [num3]
 * @param {number} [num4]
 */
declare function glRasterPos4(num1: number | number[], num2?: number, num3?: number, num4?: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {Bitmap} bm
 */
declare function glTexImage2D(num1: number, num2: number, num3: number, bm: Bitmap): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {Bitmap} bm
 */
declare function glTexImage1D(num1: number, num2: number, num3: number, bm: Bitmap): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 * @returns {Bitmap}
 */
declare function glReadPixels(num1: number, num2: number, num3: number, num4: number): Bitmap;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 * @param {number} num5
 */
declare function glCopyPixels(num1: number, num2: number, num3: number, num4: number, num5: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 * @param {number} num5
 * @param {number} num6
 */
declare function glFrustum(num1: number, num2: number, num3: number, num4: number, num5: number, num6: number): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 * @param {number} num5
 * @param {number} num6
 */
declare function glOrtho(num1: number, num2: number, num3: number, num4: number, num5: number, num6: number): void;
/**
 *
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 * @param {number} num5
 * @param {number} num6
 * @param {number[]} num7
 */
declare function glBitmap(num1: number, num2: number, num3: number, num4: number, num5: number, num6: number, num7: number[]): void;
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 * @param {number} num5
 * @param {number} num6
 * @param {number} num7
 * @param {number} num8
 * @param {number} num9
 */
declare function gluLookAt(num1: number, num2: number, num3: number, num4: number, num5: number, num6: number, num7: number, num8: number, num9: number): void;
/**
 * OpenGL constants
 */
type GL = {
    /**
     * 1PASS_EXT
     */
    "": any;
    ABGR_EXT: any;
    ACCUM_ALPHA_BITS: any;
    ACCUM_BLUE_BITS: any;
    ACCUM_BUFFER_BIT: any;
    ACCUM_CLEAR_VALUE: any;
    ACCUM_GREEN_BITS: any;
    ACCUM_RED_BITS: any;
    ACCUM: any;
    ACTIVE_TEXTURE_ARB: any;
    ACTIVE_VERTEX_UNITS_ARB: any;
    ADD_SIGNED_EXT: any;
    ADD: any;
    ALIASED_LINE_WIDTH_RANGE: any;
    ALIASED_POINT_SIZE_RANGE: any;
    ALL_ATTRIB_BITS: any;
    ALL_CLIENT_ATTRIB_BITS: any;
    ALLOW_DRAW_FRG_HINT_PGI: any;
    ALLOW_DRAW_MEM_HINT_PGI: any;
    ALLOW_DRAW_OBJ_HINT_PGI: any;
    ALLOW_DRAW_WIN_HINT_PGI: any;
    ALPHA_BIAS: any;
    ALPHA_BITS: any;
    ALPHA_MAX_CLAMP_INGR: any;
    ALPHA_MAX_SGIX: any;
    ALPHA_MIN_CLAMP_INGR: any;
    ALPHA_MIN_SGIX: any;
    ALPHA_SCALE: any;
    ALPHA_TEST_FUNC: any;
    ALPHA_TEST_REF: any;
    ALPHA_TEST: any;
    ALPHA: any;
    ALPHA12_EXT: any;
    ALPHA12: any;
    ALPHA16_EXT: any;
    ALPHA16: any;
    ALPHA4_EXT: any;
    ALPHA4: any;
    ALPHA8_EXT: any;
    ALPHA8: any;
    ALWAYS_FAST_HINT_PGI: any;
    ALWAYS_SOFT_HINT_PGI: any;
    ALWAYS: any;
    AMBIENT_AND_DIFFUSE: any;
    AMBIENT: any;
    AND_INVERTED: any;
    AND_REVERSE: any;
    AND: any;
    ARRAY_ELEMENT_LOCK_COUNT_EXT: any;
    ARRAY_ELEMENT_LOCK_FIRST_EXT: any;
    ASYNC_DRAW_PIXELS_SGIX: any;
    ASYNC_HISTOGRAM_SGIX: any;
    ASYNC_MARKER_SGIX: any;
    ASYNC_READ_PIXELS_SGIX: any;
    ASYNC_TEX_IMAGE_SGIX: any;
    ATTENUATION_EXT: any;
    ATTRIB_STACK_DEPTH: any;
    AUTO_NORMAL: any;
    AUX_BUFFERS: any;
    AUX0: any;
    AUX1: any;
    AUX2: any;
    AUX3: any;
    AVERAGE_EXT: any;
    AVERAGE_HP: any;
    BACK_LEFT: any;
    BACK_NORMALS_HINT_PGI: any;
    BACK_RIGHT: any;
    BACK: any;
    BGR_EXT: any;
    BGR: any;
    BGRA_EXT: any;
    BGRA: any;
    BIAS_BY_NEGATIVE_ONE_HALF_NV: any;
    BINORMAL_ARRAY_EXT: any;
    BINORMAL_ARRAY_POINTER_EXT: any;
    BINORMAL_ARRAY_STRIDE_EXT: any;
    BINORMAL_ARRAY_TYPE_EXT: any;
    BITMAP_TOKEN: any;
    BITMAP: any;
    BLEND_COLOR_EXT: any;
    BLEND_COLOR: any;
    BLEND_DST_ALPHA_EXT: any;
    BLEND_DST_RGB_EXT: any;
    BLEND_DST: any;
    BLEND_EQUATION_EXT: any;
    BLEND_EQUATION: any;
    BLEND_SRC_ALPHA_EXT: any;
    BLEND_SRC_RGB_EXT: any;
    BLEND_SRC: any;
    BLEND: any;
    BLUE_BIAS: any;
    BLUE_BITS: any;
    BLUE_MAX_CLAMP_INGR: any;
    BLUE_MIN_CLAMP_INGR: any;
    BLUE_SCALE: any;
    BLUE: any;
    BYTE: any;
    C3F_V3F: any;
    C4F_N3F_V3F: any;
    C4UB_V2F: any;
    C4UB_V3F: any;
    CALLIGRAPHIC_FRAGMENT_SGIX: any;
    CCW: any;
    CLAMP_TO_BORDER_SGIS: any;
    CLAMP_TO_EDGE_SGIS: any;
    CLAMP_TO_EDGE: any;
    CLAMP: any;
    CLEAR: any;
    CLIENT_ACTIVE_TEXTURE_ARB: any;
    CLIENT_ATTRIB_STACK_DEPTH: any;
    CLIENT_PIXEL_STORE_BIT: any;
    CLIENT_VERTEX_ARRAY_BIT: any;
    CLIP_FAR_HINT_PGI: any;
    CLIP_NEAR_HINT_PGI: any;
    CLIP_PLANE0: any;
    CLIP_PLANE1: any;
    CLIP_PLANE2: any;
    CLIP_PLANE3: any;
    CLIP_PLANE4: any;
    CLIP_PLANE5: any;
    CLIP_VOLUME_CLIPPING_HINT_EXT: any;
    CMYK_EXT: any;
    CMYKA_EXT: any;
    COEFF: any;
    COLOR_ARRAY_COUNT_EXT: any;
    COLOR_ARRAY_EXT: any;
    COLOR_ARRAY_LIST_IBM: any;
    COLOR_ARRAY_LIST_STRIDE_IBM: any;
    COLOR_ARRAY_PARALLEL_POINTERS_INTEL: any;
    COLOR_ARRAY_POINTER_EXT: any;
    COLOR_ARRAY_POINTER: any;
    COLOR_ARRAY_SIZE_EXT: any;
    COLOR_ARRAY_SIZE: any;
    COLOR_ARRAY_STRIDE_EXT: any;
    COLOR_ARRAY_STRIDE: any;
    COLOR_ARRAY_TYPE_EXT: any;
    COLOR_ARRAY_TYPE: any;
    COLOR_ARRAY: any;
    COLOR_BUFFER_BIT: any;
    COLOR_CLEAR_VALUE: any;
    COLOR_INDEX: any;
    COLOR_INDEX1_EXT: any;
    COLOR_INDEX12_EXT: any;
    COLOR_INDEX16_EXT: any;
    COLOR_INDEX2_EXT: any;
    COLOR_INDEX4_EXT: any;
    COLOR_INDEX8_EXT: any;
    COLOR_INDEXES: any;
    COLOR_LOGIC_OP: any;
    COLOR_MATERIAL_FACE: any;
    COLOR_MATERIAL_PARAMETER: any;
    COLOR_MATERIAL: any;
    COLOR_MATRIX_SGI: any;
    COLOR_MATRIX_STACK_DEPTH_SGI: any;
    COLOR_MATRIX_STACK_DEPTH: any;
    COLOR_MATRIX: any;
    COLOR_SUM_CLAMP_NV: any;
    COLOR_SUM_EXT: any;
    COLOR_TABLE_ALPHA_SIZE_EXT: any;
    COLOR_TABLE_ALPHA_SIZE_SGI: any;
    COLOR_TABLE_ALPHA_SIZE: any;
    COLOR_TABLE_BIAS_SGI: any;
    COLOR_TABLE_BIAS: any;
    COLOR_TABLE_BLUE_SIZE_EXT: any;
    COLOR_TABLE_BLUE_SIZE_SGI: any;
    COLOR_TABLE_BLUE_SIZE: any;
    COLOR_TABLE_FORMAT_EXT: any;
    COLOR_TABLE_FORMAT_SGI: any;
    COLOR_TABLE_FORMAT: any;
    COLOR_TABLE_GREEN_SIZE_EXT: any;
    COLOR_TABLE_GREEN_SIZE_SGI: any;
    COLOR_TABLE_GREEN_SIZE: any;
    COLOR_TABLE_INTENSITY_SIZE_EXT: any;
    COLOR_TABLE_INTENSITY_SIZE_SGI: any;
    COLOR_TABLE_INTENSITY_SIZE: any;
    COLOR_TABLE_LUMINANCE_SIZE_EXT: any;
    COLOR_TABLE_LUMINANCE_SIZE_SGI: any;
    COLOR_TABLE_LUMINANCE_SIZE: any;
    COLOR_TABLE_RED_SIZE_EXT: any;
    COLOR_TABLE_RED_SIZE_SGI: any;
    COLOR_TABLE_RED_SIZE: any;
    COLOR_TABLE_SCALE_SGI: any;
    COLOR_TABLE_SCALE: any;
    COLOR_TABLE_SGI: any;
    COLOR_TABLE_WIDTH_EXT: any;
    COLOR_TABLE_WIDTH_SGI: any;
    COLOR_TABLE_WIDTH: any;
    COLOR_TABLE: any;
    COLOR_WRITEMASK: any;
    COLOR: any;
    COLOR3_BIT_PGI: any;
    COLOR4_BIT_PGI: any;
    COMBINE_ALPHA_EXT: any;
    COMBINE_EXT: any;
    COMBINE_RGB_EXT: any;
    COMBINE4_NV: any;
    COMBINER_AB_DOT_PRODUCT_NV: any;
    COMBINER_AB_OUTPUT_NV: any;
    COMBINER_BIAS_NV: any;
    COMBINER_CD_DOT_PRODUCT_NV: any;
    COMBINER_CD_OUTPUT_NV: any;
    COMBINER_COMPONENT_USAGE_NV: any;
    COMBINER_INPUT_NV: any;
    COMBINER_MAPPING_NV: any;
    COMBINER_MUX_SUM_NV: any;
    COMBINER_SCALE_NV: any;
    COMBINER_SUM_OUTPUT_NV: any;
    COMBINER0_NV: any;
    COMBINER1_NV: any;
    COMBINER2_NV: any;
    COMBINER3_NV: any;
    COMBINER4_NV: any;
    COMBINER5_NV: any;
    COMBINER6_NV: any;
    COMBINER7_NV: any;
    COMPILE_AND_EXECUTE: any;
    COMPILE: any;
    COMPRESSED_ALPHA_ARB: any;
    COMPRESSED_INTENSITY_ARB: any;
    COMPRESSED_LUMINANCE_ALPHA_ARB: any;
    COMPRESSED_LUMINANCE_ARB: any;
    COMPRESSED_RGB_ARB: any;
    COMPRESSED_RGB_FXT1_3DFX: any;
    COMPRESSED_RGB_S3TC_DXT1_EXT: any;
    COMPRESSED_RGBA_ARB: any;
    COMPRESSED_RGBA_FXT1_3DFX: any;
    COMPRESSED_RGBA_S3TC_DXT1_EXT: any;
    COMPRESSED_RGBA_S3TC_DXT3_EXT: any;
    COMPRESSED_RGBA_S3TC_DXT5_EXT: any;
    COMPRESSED_TEXTURE_FORMATS_ARB: any;
    CONSERVE_MEMORY_HINT_PGI: any;
    CONSTANT_ALPHA_EXT: any;
    CONSTANT_ALPHA: any;
    CONSTANT_ATTENUATION: any;
    CONSTANT_BORDER_HP: any;
    CONSTANT_BORDER: any;
    CONSTANT_COLOR_EXT: any;
    CONSTANT_COLOR: any;
    CONSTANT_COLOR0_NV: any;
    CONSTANT_COLOR1_NV: any;
    CONSTANT_EXT: any;
    CONVOLUTION_1D_EXT: any;
    CONVOLUTION_1D: any;
    CONVOLUTION_2D_EXT: any;
    CONVOLUTION_2D: any;
    CONVOLUTION_BORDER_COLOR_HP: any;
    CONVOLUTION_BORDER_COLOR: any;
    CONVOLUTION_BORDER_MODE_EXT: any;
    CONVOLUTION_BORDER_MODE: any;
    CONVOLUTION_FILTER_BIAS_EXT: any;
    CONVOLUTION_FILTER_BIAS: any;
    CONVOLUTION_FILTER_SCALE_EXT: any;
    CONVOLUTION_FILTER_SCALE: any;
    CONVOLUTION_FORMAT_EXT: any;
    CONVOLUTION_FORMAT: any;
    CONVOLUTION_HEIGHT_EXT: any;
    CONVOLUTION_HEIGHT: any;
    CONVOLUTION_HINT_SGIX: any;
    CONVOLUTION_WIDTH_EXT: any;
    CONVOLUTION_WIDTH: any;
    COPY_INVERTED: any;
    COPY_PIXEL_TOKEN: any;
    COPY: any;
    CUBIC_EXT: any;
    CUBIC_HP: any;
    CULL_FACE_MODE: any;
    CULL_FACE: any;
    CULL_VERTEX_EXT: any;
    CULL_VERTEX_EYE_POSITION_EXT: any;
    CULL_VERTEX_IBM: any;
    CULL_VERTEX_OBJECT_POSITION_EXT: any;
    CURRENT_BINORMAL_EXT: any;
    CURRENT_BIT: any;
    CURRENT_COLOR: any;
    CURRENT_FOG_COORDINATE_EXT: any;
    CURRENT_INDEX: any;
    CURRENT_NORMAL: any;
    CURRENT_RASTER_COLOR: any;
    CURRENT_RASTER_DISTANCE: any;
    CURRENT_RASTER_INDEX: any;
    CURRENT_RASTER_NORMAL_SGIX: any;
    CURRENT_RASTER_POSITION_VALID: any;
    CURRENT_RASTER_POSITION: any;
    CURRENT_RASTER_TEXTURE_COORDS: any;
    CURRENT_SECONDARY_COLOR_EXT: any;
    CURRENT_TANGENT_EXT: any;
    CURRENT_TEXTURE_COORDS: any;
    CURRENT_VERTEX_WEIGHT_EXT: any;
    CURRENT_WEIGHT_ARB: any;
    CW: any;
    DECAL: any;
    DECR_WRAP_EXT: any;
    DECR: any;
    DEFORMATIONS_MASK_SGIX: any;
    DEPTH_BIAS: any;
    DEPTH_BITS: any;
    DEPTH_BUFFER_BIT: any;
    DEPTH_CLEAR_VALUE: any;
    DEPTH_COMPONENT: any;
    DEPTH_COMPONENT16_SGIX: any;
    DEPTH_COMPONENT24_SGIX: any;
    DEPTH_COMPONENT32_SGIX: any;
    DEPTH_FUNC: any;
    DEPTH_PASS_INSTRUMENT_COUNTERS_SGIX: any;
    DEPTH_PASS_INSTRUMENT_MAX_SGIX: any;
    DEPTH_PASS_INSTRUMENT_SGIX: any;
    DEPTH_RANGE: any;
    DEPTH_SCALE: any;
    DEPTH_TEST: any;
    DEPTH_WRITEMASK: any;
    DEPTH: any;
    DETAIL_TEXTURE_2D_BINDING_SGIS: any;
    DETAIL_TEXTURE_2D_SGIS: any;
    DETAIL_TEXTURE_FUNC_POINTS_SGIS: any;
    DETAIL_TEXTURE_LEVEL_SGIS: any;
    DETAIL_TEXTURE_MODE_SGIS: any;
    DIFFUSE: any;
    DISCARD_NV: any;
    DISTANCE_ATTENUATION_EXT: any;
    DISTANCE_ATTENUATION_SGIS: any;
    DITHER: any;
    DOMAIN: any;
    DONT_CARE: any;
    DOT3_RGB_EXT: any;
    DOT3_RGBA_EXT: any;
    DOUBLE: any;
    DOUBLEBUFFER: any;
    DRAW_BUFFER: any;
    DRAW_PIXEL_TOKEN: any;
    DST_ALPHA: any;
    DST_COLOR: any;
    DUAL_ALPHA12_SGIS: any;
    DUAL_ALPHA16_SGIS: any;
    DUAL_ALPHA4_SGIS: any;
    DUAL_ALPHA8_SGIS: any;
    DUAL_INTENSITY12_SGIS: any;
    DUAL_INTENSITY16_SGIS: any;
    DUAL_INTENSITY4_SGIS: any;
    DUAL_INTENSITY8_SGIS: any;
    DUAL_LUMINANCE_ALPHA4_SGIS: any;
    DUAL_LUMINANCE_ALPHA8_SGIS: any;
    DUAL_LUMINANCE12_SGIS: any;
    DUAL_LUMINANCE16_SGIS: any;
    DUAL_LUMINANCE4_SGIS: any;
    DUAL_LUMINANCE8_SGIS: any;
    DUAL_TEXTURE_SELECT_SGIS: any;
    E_TIMES_F_NV: any;
    EDGE_FLAG_ARRAY_COUNT_EXT: any;
    EDGE_FLAG_ARRAY_EXT: any;
    EDGE_FLAG_ARRAY_LIST_IBM: any;
    EDGE_FLAG_ARRAY_LIST_STRIDE_IBM: any;
    EDGE_FLAG_ARRAY_POINTER_EXT: any;
    EDGE_FLAG_ARRAY_POINTER: any;
    EDGE_FLAG_ARRAY_STRIDE_EXT: any;
    EDGE_FLAG_ARRAY_STRIDE: any;
    EDGE_FLAG_ARRAY: any;
    EDGE_FLAG: any;
    EDGEFLAG_BIT_PGI: any;
    EMBOSS_CONSTANT_NV: any;
    EMBOSS_LIGHT_NV: any;
    EMBOSS_MAP_NV: any;
    EMISSION: any;
    ENABLE_BIT: any;
    EQUAL: any;
    EQUIV: any;
    EVAL_BIT: any;
    EXP: any;
    EXP2: any;
    EXPAND_NEGATE_NV: any;
    EXPAND_NORMAL_NV: any;
    EXTENSIONS: any;
    EYE_DISTANCE_TO_LINE_SGIS: any;
    EYE_DISTANCE_TO_POINT_SGIS: any;
    EYE_LINE_SGIS: any;
    EYE_LINEAR: any;
    EYE_PLANE_ABSOLUTE_NV: any;
    EYE_PLANE: any;
    EYE_POINT_SGIS: any;
    EYE_RADIAL_NV: any;
    FALSE: any;
    FASTEST: any;
    FEEDBACK_BUFFER_POINTER: any;
    FEEDBACK_BUFFER_SIZE: any;
    FEEDBACK_BUFFER_TYPE: any;
    FEEDBACK: any;
    FILL: any;
    FILTER4_SGIS: any;
    FLAT: any;
    FLOAT: any;
    FOG_BIT: any;
    FOG_COLOR: any;
    FOG_COORDINATE_ARRAY_EXT: any;
    FOG_COORDINATE_ARRAY_LIST_IBM: any;
    FOG_COORDINATE_ARRAY_LIST_STRIDE_IBM: any;
    FOG_COORDINATE_ARRAY_POINTER_EXT: any;
    FOG_COORDINATE_ARRAY_STRIDE_EXT: any;
    FOG_COORDINATE_ARRAY_TYPE_EXT: any;
    FOG_COORDINATE_EXT: any;
    FOG_COORDINATE_SOURCE_EXT: any;
    FOG_DENSITY: any;
    FOG_DISTANCE_MODE_NV: any;
    FOG_END: any;
    FOG_FUNC_POINTS_SGIS: any;
    FOG_FUNC_SGIS: any;
    FOG_HINT: any;
    FOG_INDEX: any;
    FOG_MODE: any;
    FOG_OFFSET_SGIX: any;
    FOG_OFFSET_VALUE_SGIX: any;
    FOG_SCALE_SGIX: any;
    FOG_SCALE_VALUE_SGIX: any;
    FOG_SPECULAR_TEXTURE_WIN: any;
    FOG_START: any;
    FOG: any;
    FRAGMENT_COLOR_EXT: any;
    FRAGMENT_COLOR_MATERIAL_FACE_SGIX: any;
    FRAGMENT_COLOR_MATERIAL_PARAMETER_SGIX: any;
    FRAGMENT_COLOR_MATERIAL_SGIX: any;
    FRAGMENT_DEPTH_EXT: any;
    FRAGMENT_LIGHT_MODEL_AMBIENT_SGIX: any;
    FRAGMENT_LIGHT_MODEL_LOCAL_VIEWER_SGIX: any;
    FRAGMENT_LIGHT_MODEL_NORMAL_INTERPOLATION_SGIX: any;
    FRAGMENT_LIGHT_MODEL_TWO_SIDE_SGIX: any;
    FRAGMENT_LIGHT0_SGIX: any;
    FRAGMENT_LIGHT1_SGIX: any;
    FRAGMENT_LIGHT2_SGIX: any;
    FRAGMENT_LIGHT3_SGIX: any;
    FRAGMENT_LIGHT4_SGIX: any;
    FRAGMENT_LIGHT5_SGIX: any;
    FRAGMENT_LIGHT6_SGIX: any;
    FRAGMENT_LIGHT7_SGIX: any;
    FRAGMENT_LIGHTING_SGIX: any;
    FRAGMENT_MATERIAL_EXT: any;
    FRAGMENT_NORMAL_EXT: any;
    FRAMEZOOM_FACTOR_SGIX: any;
    FRAMEZOOM_SGIX: any;
    FRONT_AND_BACK: any;
    FRONT_FACE: any;
    FRONT_LEFT: any;
    FRONT_RIGHT: any;
    FRONT: any;
    FULL_STIPPLE_HINT_PGI: any;
    FUNC_ADD_EXT: any;
    FUNC_ADD: any;
    FUNC_REVERSE_SUBTRACT_EXT: any;
    FUNC_REVERSE_SUBTRACT: any;
    FUNC_SUBTRACT_EXT: any;
    FUNC_SUBTRACT: any;
    GENERATE_MIPMAP_HINT_SGIS: any;
    GENERATE_MIPMAP_SGIS: any;
    GEOMETRY_DEFORMATION_BIT_SGIX: any;
    GEOMETRY_DEFORMATION_SGIX: any;
    GEQUAL: any;
    GLOBAL_ALPHA_FACTOR_SUN: any;
    GLOBAL_ALPHA_SUN: any;
    GREATER: any;
    GREEN_BIAS: any;
    GREEN_BITS: any;
    GREEN_MAX_CLAMP_INGR: any;
    GREEN_MIN_CLAMP_INGR: any;
    GREEN_SCALE: any;
    GREEN: any;
    HALF_BIAS_NEGATE_NV: any;
    HALF_BIAS_NORMAL_NV: any;
    HINT_BIT: any;
    HISTOGRAM_ALPHA_SIZE_EXT: any;
    HISTOGRAM_ALPHA_SIZE: any;
    HISTOGRAM_BLUE_SIZE_EXT: any;
    HISTOGRAM_BLUE_SIZE: any;
    HISTOGRAM_EXT: any;
    HISTOGRAM_FORMAT_EXT: any;
    HISTOGRAM_FORMAT: any;
    HISTOGRAM_GREEN_SIZE_EXT: any;
    HISTOGRAM_GREEN_SIZE: any;
    HISTOGRAM_LUMINANCE_SIZE_EXT: any;
    HISTOGRAM_LUMINANCE_SIZE: any;
    HISTOGRAM_RED_SIZE_EXT: any;
    HISTOGRAM_RED_SIZE: any;
    HISTOGRAM_SINK_EXT: any;
    HISTOGRAM_SINK: any;
    HISTOGRAM_WIDTH_EXT: any;
    HISTOGRAM_WIDTH: any;
    HISTOGRAM: any;
    IGNORE_BORDER_HP: any;
    IMAGE_CUBIC_WEIGHT_HP: any;
    IMAGE_MAG_FILTER_HP: any;
    IMAGE_MIN_FILTER_HP: any;
    IMAGE_ROTATE_ANGLE_HP: any;
    IMAGE_ROTATE_ORIGIN_X_HP: any;
    IMAGE_ROTATE_ORIGIN_Y_HP: any;
    IMAGE_SCALE_X_HP: any;
    IMAGE_SCALE_Y_HP: any;
    IMAGE_TRANSFORM_2D_HP: any;
    IMAGE_TRANSLATE_X_HP: any;
    IMAGE_TRANSLATE_Y_HP: any;
    INCR_WRAP_EXT: any;
    INCR: any;
    INDEX_ARRAY_COUNT_EXT: any;
    INDEX_ARRAY_EXT: any;
    INDEX_ARRAY_LIST_IBM: any;
    INDEX_ARRAY_LIST_STRIDE_IBM: any;
    INDEX_ARRAY_POINTER_EXT: any;
    INDEX_ARRAY_POINTER: any;
    INDEX_ARRAY_STRIDE_EXT: any;
    INDEX_ARRAY_STRIDE: any;
    INDEX_ARRAY_TYPE_EXT: any;
    INDEX_ARRAY_TYPE: any;
    INDEX_ARRAY: any;
    INDEX_BIT_PGI: any;
    INDEX_BITS: any;
    INDEX_CLEAR_VALUE: any;
    INDEX_LOGIC_OP: any;
    INDEX_MATERIAL_EXT: any;
    INDEX_MATERIAL_FACE_EXT: any;
    INDEX_MATERIAL_PARAMETER_EXT: any;
    INDEX_MODE: any;
    INDEX_OFFSET: any;
    INDEX_SHIFT: any;
    INDEX_TEST_EXT: any;
    INDEX_TEST_FUNC_EXT: any;
    INDEX_TEST_REF_EXT: any;
    INDEX_WRITEMASK: any;
    INSTRUMENT_BUFFER_POINTER_SGIX: any;
    INSTRUMENT_MEASUREMENTS_SGIX: any;
    INT: any;
    INTENSITY_EXT: any;
    INTENSITY: any;
    INTENSITY12_EXT: any;
    INTENSITY12: any;
    INTENSITY16_EXT: any;
    INTENSITY16: any;
    INTENSITY4_EXT: any;
    INTENSITY4: any;
    INTENSITY8_EXT: any;
    INTENSITY8: any;
    INTERLACE_READ_INGR: any;
    INTERLACE_SGIX: any;
    INTERPOLATE_EXT: any;
    INVALID_ENUM: any;
    INVALID_OPERATION: any;
    INVALID_VALUE: any;
    INVERT: any;
    INVERTED_SCREEN_W_REND: any;
    IR_INSTRUMENT1_SGIX: any;
    IUI_N3F_V2F_EXT: any;
    IUI_N3F_V3F_EXT: any;
    IUI_V2F_EXT: any;
    IUI_V3F_EXT: any;
    KEEP: any;
    LEFT: any;
    LEQUAL: any;
    LESS: any;
    LIGHT_ENV_MODE_SGIX: any;
    LIGHT_MODEL_AMBIENT: any;
    LIGHT_MODEL_COLOR_CONTROL_EXT: any;
    LIGHT_MODEL_COLOR_CONTROL: any;
    LIGHT_MODEL_LOCAL_VIEWER: any;
    LIGHT_MODEL_SPECULAR_VECTOR_APPLE: any;
    LIGHT_MODEL_TWO_SIDE: any;
    LIGHT0: any;
    LIGHT1: any;
    LIGHT2: any;
    LIGHT3: any;
    LIGHT4: any;
    LIGHT5: any;
    LIGHT6: any;
    LIGHT7: any;
    LIGHTING_BIT: any;
    LIGHTING: any;
    LINE_BIT: any;
    LINE_LOOP: any;
    LINE_RESET_TOKEN: any;
    LINE_SMOOTH_HINT: any;
    LINE_SMOOTH: any;
    LINE_STIPPLE_PATTERN: any;
    LINE_STIPPLE_REPEAT: any;
    LINE_STIPPLE: any;
    LINE_STRIP: any;
    LINE_TOKEN: any;
    LINE_WIDTH_GRANULARITY: any;
    LINE_WIDTH_RANGE: any;
    LINE_WIDTH: any;
    LINE: any;
    LINEAR_ATTENUATION: any;
    LINEAR_CLIPMAP_LINEAR_SGIX: any;
    LINEAR_CLIPMAP_NEAREST_SGIX: any;
    LINEAR_DETAIL_ALPHA_SGIS: any;
    LINEAR_DETAIL_COLOR_SGIS: any;
    LINEAR_DETAIL_SGIS: any;
    LINEAR_MIPMAP_LINEAR: any;
    LINEAR_MIPMAP_NEAREST: any;
    LINEAR_SHARPEN_ALPHA_SGIS: any;
    LINEAR_SHARPEN_COLOR_SGIS: any;
    LINEAR_SHARPEN_SGIS: any;
    LINEAR: any;
    LINES: any;
    LIST_BASE: any;
    LIST_BIT: any;
    LIST_INDEX: any;
    LIST_MODE: any;
    LIST_PRIORITY_SGIX: any;
    LOAD: any;
    LOGIC_OP_MODE: any;
    LOGIC_OP: any;
    LUMINANCE_ALPHA: any;
    LUMINANCE: any;
    LUMINANCE12_ALPHA12_EXT: any;
    LUMINANCE12_ALPHA12: any;
    LUMINANCE12_ALPHA4_EXT: any;
    LUMINANCE12_ALPHA4: any;
    LUMINANCE12_EXT: any;
    LUMINANCE12: any;
    LUMINANCE16_ALPHA16_EXT: any;
    LUMINANCE16_ALPHA16: any;
    LUMINANCE16_EXT: any;
    LUMINANCE16: any;
    LUMINANCE4_ALPHA4_EXT: any;
    LUMINANCE4_ALPHA4: any;
    LUMINANCE4_EXT: any;
    LUMINANCE4: any;
    LUMINANCE6_ALPHA2_EXT: any;
    LUMINANCE6_ALPHA2: any;
    LUMINANCE8_ALPHA8_EXT: any;
    LUMINANCE8_ALPHA8: any;
    LUMINANCE8_EXT: any;
    LUMINANCE8: any;
    MAP_COLOR: any;
    MAP_STENCIL: any;
    MAP1_BINORMAL_EXT: any;
    MAP1_COLOR_4: any;
    MAP1_GRID_DOMAIN: any;
    MAP1_GRID_SEGMENTS: any;
    MAP1_INDEX: any;
    MAP1_NORMAL: any;
    MAP1_TANGENT_EXT: any;
    MAP1_TEXTURE_COORD_1: any;
    MAP1_TEXTURE_COORD_2: any;
    MAP1_TEXTURE_COORD_3: any;
    MAP1_TEXTURE_COORD_4: any;
    MAP1_VERTEX_3: any;
    MAP1_VERTEX_4: any;
    MAP2_BINORMAL_EXT: any;
    MAP2_COLOR_4: any;
    MAP2_GRID_DOMAIN: any;
    MAP2_GRID_SEGMENTS: any;
    MAP2_INDEX: any;
    MAP2_NORMAL: any;
    MAP2_TANGENT_EXT: any;
    MAP2_TEXTURE_COORD_1: any;
    MAP2_TEXTURE_COORD_2: any;
    MAP2_TEXTURE_COORD_3: any;
    MAP2_TEXTURE_COORD_4: any;
    MAP2_VERTEX_3: any;
    MAP2_VERTEX_4: any;
    MAT_AMBIENT_AND_DIFFUSE_BIT_PGI: any;
    MAT_AMBIENT_BIT_PGI: any;
    MAT_COLOR_INDEXES_BIT_PGI: any;
    MAT_DIFFUSE_BIT_PGI: any;
    MAT_EMISSION_BIT_PGI: any;
    MAT_SHININESS_BIT_PGI: any;
    MAT_SPECULAR_BIT_PGI: any;
    MATERIAL_SIDE_HINT_PGI: any;
    MATRIX_MODE: any;
    MAX_3D_TEXTURE_SIZE_EXT: any;
    MAX_3D_TEXTURE_SIZE: any;
    MAX_4D_TEXTURE_SIZE_SGIS: any;
    MAX_ACTIVE_LIGHTS_SGIX: any;
    MAX_ASYNC_DRAW_PIXELS_SGIX: any;
    MAX_ASYNC_HISTOGRAM_SGIX: any;
    MAX_ASYNC_READ_PIXELS_SGIX: any;
    MAX_ASYNC_TEX_IMAGE_SGIX: any;
    MAX_ATTRIB_STACK_DEPTH: any;
    MAX_CLIENT_ATTRIB_STACK_DEPTH: any;
    MAX_CLIP_PLANES: any;
    MAX_CLIPMAP_DEPTH_SGIX: any;
    MAX_CLIPMAP_VIRTUAL_DEPTH_SGIX: any;
    MAX_COLOR_MATRIX_STACK_DEPTH_SGI: any;
    MAX_COLOR_MATRIX_STACK_DEPTH: any;
    MAX_CONVOLUTION_HEIGHT_EXT: any;
    MAX_CONVOLUTION_HEIGHT: any;
    MAX_CONVOLUTION_WIDTH_EXT: any;
    MAX_CONVOLUTION_WIDTH: any;
    MAX_CUBE_MAP_TEXTURE_SIZE_ARB: any;
    MAX_CUBE_MAP_TEXTURE_SIZE_EXT: any;
    MAX_DEFORMATION_ORDER_SGIX: any;
    MAX_ELEMENTS_INDICES_EXT: any;
    MAX_ELEMENTS_INDICES: any;
    MAX_ELEMENTS_VERTICES_EXT: any;
    MAX_ELEMENTS_VERTICES: any;
    MAX_EVAL_ORDER: any;
    MAX_EXT: any;
    MAX_FOG_FUNC_POINTS_SGIS: any;
    MAX_FRAGMENT_LIGHTS_SGIX: any;
    MAX_FRAMEZOOM_FACTOR_SGIX: any;
    MAX_GENERAL_COMBINERS_NV: any;
    MAX_LIGHTS: any;
    MAX_LIST_NESTING: any;
    MAX_MODELVIEW_STACK_DEPTH: any;
    MAX_NAME_STACK_DEPTH: any;
    MAX_PIXEL_MAP_TABLE: any;
    MAX_PIXEL_TRANSFORM_2D_STACK_DEPTH_EXT: any;
    MAX_PROJECTION_STACK_DEPTH: any;
    MAX_SHININESS_NV: any;
    MAX_SPOT_EXPONENT_NV: any;
    MAX_TEXTURE_LOD_BIAS_EXT: any;
    MAX_TEXTURE_MAX_ANISOTROPY_EXT: any;
    MAX_TEXTURE_SIZE: any;
    MAX_TEXTURE_STACK_DEPTH: any;
    MAX_TEXTURE_UNITS_ARB: any;
    MAX_VERTEX_ARRAY_RANGE_ELEMENT_NV: any;
    MAX_VERTEX_HINT_PGI: any;
    MAX_VERTEX_UNITS_ARB: any;
    MAX_VIEWPORT_DIMS: any;
    MAX: any;
    MIN_EXT: any;
    MIN: any;
    MINMAX_EXT: any;
    MINMAX_FORMAT_EXT: any;
    MINMAX_FORMAT: any;
    MINMAX_SINK_EXT: any;
    MINMAX_SINK: any;
    MINMAX: any;
    MODELVIEW_MATRIX: any;
    MODELVIEW_MATRIX1_EXT: any;
    MODELVIEW_STACK_DEPTH: any;
    MODELVIEW: any;
    MODELVIEW0_ARB: any;
    MODELVIEW0_EXT: any;
    MODELVIEW0_MATRIX_EXT: any;
    MODELVIEW0_STACK_DEPTH_EXT: any;
    MODELVIEW1_ARB: any;
    MODELVIEW1_EXT: any;
    MODELVIEW1_STACK_DEPTH_EXT: any;
    MODELVIEW10_ARB: any;
    MODELVIEW11_ARB: any;
    MODELVIEW12_ARB: any;
    MODELVIEW13_ARB: any;
    MODELVIEW14_ARB: any;
    MODELVIEW15_ARB: any;
    MODELVIEW16_ARB: any;
    MODELVIEW17_ARB: any;
    MODELVIEW18_ARB: any;
    MODELVIEW19_ARB: any;
    MODELVIEW2_ARB: any;
    MODELVIEW20_ARB: any;
    MODELVIEW21_ARB: any;
    MODELVIEW22_ARB: any;
    MODELVIEW23_ARB: any;
    MODELVIEW24_ARB: any;
    MODELVIEW25_ARB: any;
    MODELVIEW26_ARB: any;
    MODELVIEW27_ARB: any;
    MODELVIEW28_ARB: any;
    MODELVIEW29_ARB: any;
    MODELVIEW3_ARB: any;
    MODELVIEW30_ARB: any;
    MODELVIEW31_ARB: any;
    MODELVIEW4_ARB: any;
    MODELVIEW5_ARB: any;
    MODELVIEW6_ARB: any;
    MODELVIEW7_ARB: any;
    MODELVIEW8_ARB: any;
    MODELVIEW9_ARB: any;
    MODULATE: any;
    MULT: any;
    MULTISAMPLE_3DFX: any;
    MULTISAMPLE_ARB: any;
    MULTISAMPLE_BIT_3DFX: any;
    MULTISAMPLE_BIT_ARB: any;
    MULTISAMPLE_EXT: any;
    MULTISAMPLE_SGIS: any;
    N3F_V3F: any;
    NAME_STACK_DEPTH: any;
    NAND: any;
    NATIVE_GRAPHICS_BEGIN_HINT_PGI: any;
    NATIVE_GRAPHICS_END_HINT_PGI: any;
    NATIVE_GRAPHICS_HANDLE_PGI: any;
    NEAREST_CLIPMAP_LINEAR_SGIX: any;
    NEAREST_CLIPMAP_NEAREST_SGIX: any;
    NEAREST_MIPMAP_LINEAR: any;
    NEAREST_MIPMAP_NEAREST: any;
    NEAREST: any;
    NEVER: any;
    NICEST: any;
    NO_ERROR: any;
    NONE: any;
    NOOP: any;
    NOR: any;
    NORMAL_ARRAY_COUNT_EXT: any;
    NORMAL_ARRAY_EXT: any;
    NORMAL_ARRAY_LIST_IBM: any;
    NORMAL_ARRAY_LIST_STRIDE_IBM: any;
    NORMAL_ARRAY_PARALLEL_POINTERS_INTEL: any;
    NORMAL_ARRAY_POINTER_EXT: any;
    NORMAL_ARRAY_POINTER: any;
    NORMAL_ARRAY_STRIDE_EXT: any;
    NORMAL_ARRAY_STRIDE: any;
    NORMAL_ARRAY_TYPE_EXT: any;
    NORMAL_ARRAY_TYPE: any;
    NORMAL_ARRAY: any;
    NORMAL_BIT_PGI: any;
    NORMAL_MAP_ARB: any;
    NORMAL_MAP_EXT: any;
    NORMAL_MAP_NV: any;
    NORMALIZE: any;
    NOTEQUAL: any;
    NUM_COMPRESSED_TEXTURE_FORMATS_ARB: any;
    NUM_GENERAL_COMBINERS_NV: any;
    OBJECT_DISTANCE_TO_LINE_SGIS: any;
    OBJECT_DISTANCE_TO_POINT_SGIS: any;
    OBJECT_LINE_SGIS: any;
    OBJECT_LINEAR: any;
    OBJECT_PLANE: any;
    OBJECT_POINT_SGIS: any;
    OCCLUSION_TEST_HP: any;
    OCCLUSION_TEST_RESULT_HP: any;
    ONE_MINUS_CONSTANT_ALPHA_EXT: any;
    ONE_MINUS_CONSTANT_ALPHA: any;
    ONE_MINUS_CONSTANT_COLOR_EXT: any;
    ONE_MINUS_CONSTANT_COLOR: any;
    ONE_MINUS_DST_ALPHA: any;
    ONE_MINUS_DST_COLOR: any;
    ONE_MINUS_SRC_ALPHA: any;
    ONE_MINUS_SRC_COLOR: any;
    ONE: any;
    OPERAND0_ALPHA_EXT: any;
    OPERAND0_RGB_EXT: any;
    OPERAND1_ALPHA_EXT: any;
    OPERAND1_RGB_EXT: any;
    OPERAND2_ALPHA_EXT: any;
    OPERAND2_RGB_EXT: any;
    OPERAND3_ALPHA_EXT: any;
    OPERAND3_ALPHA_NV: any;
    OPERAND3_RGB_EXT: any;
    OPERAND3_RGB_NV: any;
    OPERAND4_ALPHA_EXT: any;
    OPERAND4_RGB_EXT: any;
    OPERAND5_ALPHA_EXT: any;
    OPERAND5_RGB_EXT: any;
    OPERAND6_ALPHA_EXT: any;
    OPERAND6_RGB_EXT: any;
    OPERAND7_ALPHA_EXT: any;
    OPERAND7_RGB_EXT: any;
    OR_INVERTED: any;
    OR_REVERSE: any;
    OR: any;
    ORDER: any;
    OUT_OF_MEMORY: any;
    PACK_ALIGNMENT: any;
    PACK_CMYK_HINT_EXT: any;
    PACK_IMAGE_DEPTH_SGIS: any;
    PACK_IMAGE_HEIGHT_EXT: any;
    PACK_IMAGE_HEIGHT: any;
    PACK_LSB_FIRST: any;
    PACK_RESAMPLE_SGIX: any;
    PACK_ROW_LENGTH: any;
    PACK_SKIP_IMAGES_EXT: any;
    PACK_SKIP_IMAGES: any;
    PACK_SKIP_PIXELS: any;
    PACK_SKIP_ROWS: any;
    PACK_SKIP_VOLUMES_SGIS: any;
    PACK_SUBSAMPLE_RATE_SGIX: any;
    PACK_SWAP_BYTES: any;
    PARALLEL_ARRAYS_INTEL: any;
    PASS_THROUGH_TOKEN: any;
    PERSPECTIVE_CORRECTION_HINT: any;
    PERTURB_EXT: any;
    PHONG_HINT_WIN: any;
    PHONG_WIN: any;
    PIXEL_CUBIC_WEIGHT_EXT: any;
    PIXEL_FRAGMENT_ALPHA_SOURCE_SGIS: any;
    PIXEL_FRAGMENT_RGB_SOURCE_SGIS: any;
    PIXEL_GROUP_COLOR_SGIS: any;
    PIXEL_MAG_FILTER_EXT: any;
    PIXEL_MAP_A_TO_A_SIZE: any;
    PIXEL_MAP_A_TO_A: any;
    PIXEL_MAP_B_TO_B_SIZE: any;
    PIXEL_MAP_B_TO_B: any;
    PIXEL_MAP_G_TO_G_SIZE: any;
    PIXEL_MAP_G_TO_G: any;
    PIXEL_MAP_I_TO_A_SIZE: any;
    PIXEL_MAP_I_TO_A: any;
    PIXEL_MAP_I_TO_B_SIZE: any;
    PIXEL_MAP_I_TO_B: any;
    PIXEL_MAP_I_TO_G_SIZE: any;
    PIXEL_MAP_I_TO_G: any;
    PIXEL_MAP_I_TO_I_SIZE: any;
    PIXEL_MAP_I_TO_I: any;
    PIXEL_MAP_I_TO_R_SIZE: any;
    PIXEL_MAP_I_TO_R: any;
    PIXEL_MAP_R_TO_R_SIZE: any;
    PIXEL_MAP_R_TO_R: any;
    PIXEL_MAP_S_TO_S_SIZE: any;
    PIXEL_MAP_S_TO_S: any;
    PIXEL_MIN_FILTER_EXT: any;
    PIXEL_MODE_BIT: any;
    PIXEL_SUBSAMPLE_2424_SGIX: any;
    PIXEL_SUBSAMPLE_4242_SGIX: any;
    PIXEL_SUBSAMPLE_4444_SGIX: any;
    PIXEL_TEX_GEN_MODE_SGIX: any;
    PIXEL_TEX_GEN_SGIX: any;
    PIXEL_TEXTURE_SGIS: any;
    PIXEL_TILE_BEST_ALIGNMENT_SGIX: any;
    PIXEL_TILE_CACHE_INCREMENT_SGIX: any;
    PIXEL_TILE_CACHE_SIZE_SGIX: any;
    PIXEL_TILE_GRID_DEPTH_SGIX: any;
    PIXEL_TILE_GRID_HEIGHT_SGIX: any;
    PIXEL_TILE_GRID_WIDTH_SGIX: any;
    PIXEL_TILE_HEIGHT_SGIX: any;
    PIXEL_TILE_WIDTH_SGIX: any;
    PIXEL_TRANSFORM_2D_EXT: any;
    PIXEL_TRANSFORM_2D_MATRIX_EXT: any;
    PIXEL_TRANSFORM_2D_STACK_DEPTH_EXT: any;
    POINT_BIT: any;
    POINT_FADE_THRESHOLD_SIZE_EXT: any;
    POINT_FADE_THRESHOLD_SIZE_SGIS: any;
    POINT_SIZE_GRANULARITY: any;
    POINT_SIZE_MAX_EXT: any;
    POINT_SIZE_MAX_SGIS: any;
    POINT_SIZE_MIN_EXT: any;
    POINT_SIZE_MIN_SGIS: any;
    POINT_SIZE_RANGE: any;
    POINT_SIZE: any;
    POINT_SMOOTH_HINT: any;
    POINT_SMOOTH: any;
    POINT_TOKEN: any;
    POINT: any;
    POINTS: any;
    POLYGON_BIT: any;
    POLYGON_MODE: any;
    POLYGON_OFFSET_BIAS_EXT: any;
    POLYGON_OFFSET_EXT: any;
    POLYGON_OFFSET_FACTOR_EXT: any;
    POLYGON_OFFSET_FACTOR: any;
    POLYGON_OFFSET_FILL: any;
    POLYGON_OFFSET_LINE: any;
    POLYGON_OFFSET_POINT: any;
    POLYGON_OFFSET_UNITS: any;
    POLYGON_SMOOTH_HINT: any;
    POLYGON_SMOOTH: any;
    POLYGON_STIPPLE_BIT: any;
    POLYGON_STIPPLE: any;
    POLYGON_TOKEN: any;
    POLYGON: any;
    POSITION: any;
    POST_COLOR_MATRIX_ALPHA_BIAS_SGI: any;
    POST_COLOR_MATRIX_ALPHA_BIAS: any;
    POST_COLOR_MATRIX_ALPHA_SCALE_SGI: any;
    POST_COLOR_MATRIX_ALPHA_SCALE: any;
    POST_COLOR_MATRIX_BLUE_BIAS_SGI: any;
    POST_COLOR_MATRIX_BLUE_BIAS: any;
    POST_COLOR_MATRIX_BLUE_SCALE_SGI: any;
    POST_COLOR_MATRIX_BLUE_SCALE: any;
    POST_COLOR_MATRIX_COLOR_TABLE_SGI: any;
    POST_COLOR_MATRIX_COLOR_TABLE: any;
    POST_COLOR_MATRIX_GREEN_BIAS_SGI: any;
    POST_COLOR_MATRIX_GREEN_BIAS: any;
    POST_COLOR_MATRIX_GREEN_SCALE_SGI: any;
    POST_COLOR_MATRIX_GREEN_SCALE: any;
    POST_COLOR_MATRIX_RED_BIAS_SGI: any;
    POST_COLOR_MATRIX_RED_BIAS: any;
    POST_COLOR_MATRIX_RED_SCALE_SGI: any;
    POST_COLOR_MATRIX_RED_SCALE: any;
    POST_CONVOLUTION_ALPHA_BIAS_EXT: any;
    POST_CONVOLUTION_ALPHA_BIAS: any;
    POST_CONVOLUTION_ALPHA_SCALE_EXT: any;
    POST_CONVOLUTION_ALPHA_SCALE: any;
    POST_CONVOLUTION_BLUE_BIAS_EXT: any;
    POST_CONVOLUTION_BLUE_BIAS: any;
    POST_CONVOLUTION_BLUE_SCALE_EXT: any;
    POST_CONVOLUTION_BLUE_SCALE: any;
    POST_CONVOLUTION_COLOR_TABLE_SGI: any;
    POST_CONVOLUTION_COLOR_TABLE: any;
    POST_CONVOLUTION_GREEN_BIAS_EXT: any;
    POST_CONVOLUTION_GREEN_BIAS: any;
    POST_CONVOLUTION_GREEN_SCALE_EXT: any;
    POST_CONVOLUTION_GREEN_SCALE: any;
    POST_CONVOLUTION_RED_BIAS_EXT: any;
    POST_CONVOLUTION_RED_BIAS: any;
    POST_CONVOLUTION_RED_SCALE_EXT: any;
    POST_CONVOLUTION_RED_SCALE: any;
    POST_IMAGE_TRANSFORM_COLOR_TABLE_HP: any;
    POST_TEXTURE_FILTER_BIAS_RANGE_SGIX: any;
    POST_TEXTURE_FILTER_BIAS_SGIX: any;
    POST_TEXTURE_FILTER_SCALE_RANGE_SGIX: any;
    POST_TEXTURE_FILTER_SCALE_SGIX: any;
    PREFER_DOUBLEBUFFER_HINT_PGI: any;
    PREVIOUS_EXT: any;
    PRIMARY_COLOR_EXT: any;
    PRIMARY_COLOR_NV: any;
    PROJECTION_MATRIX: any;
    PROJECTION_STACK_DEPTH: any;
    PROJECTION: any;
    PROXY_COLOR_TABLE_SGI: any;
    PROXY_COLOR_TABLE: any;
    PROXY_HISTOGRAM_EXT: any;
    PROXY_HISTOGRAM: any;
    PROXY_POST_COLOR_MATRIX_COLOR_TABLE_SGI: any;
    PROXY_POST_COLOR_MATRIX_COLOR_TABLE: any;
    PROXY_POST_CONVOLUTION_COLOR_TABLE_SGI: any;
    PROXY_POST_CONVOLUTION_COLOR_TABLE: any;
    PROXY_POST_IMAGE_TRANSFORM_COLOR_TABLE_HP: any;
    PROXY_TEXTURE_1D_EXT: any;
    PROXY_TEXTURE_1D: any;
    PROXY_TEXTURE_2D_EXT: any;
    PROXY_TEXTURE_2D: any;
    PROXY_TEXTURE_3D_EXT: any;
    PROXY_TEXTURE_3D: any;
    PROXY_TEXTURE_4D_SGIS: any;
    PROXY_TEXTURE_COLOR_TABLE_SGI: any;
    PROXY_TEXTURE_CUBE_MAP_ARB: any;
    PROXY_TEXTURE_CUBE_MAP_EXT: any;
    Q: any;
    QUAD_ALPHA4_SGIS: any;
    QUAD_ALPHA8_SGIS: any;
    QUAD_INTENSITY4_SGIS: any;
    QUAD_INTENSITY8_SGIS: any;
    QUAD_LUMINANCE4_SGIS: any;
    QUAD_LUMINANCE8_SGIS: any;
    QUAD_STRIP: any;
    QUAD_TEXTURE_SELECT_SGIS: any;
    QUADRATIC_ATTENUATION: any;
    QUADS: any;
    R: any;
    R1UI_C3F_V3F_SUN: any;
    R1UI_C4F_N3F_V3F_SUN: any;
    R1UI_C4UB_V3F_SUN: any;
    R1UI_N3F_V3F_SUN: any;
    R1UI_T2F_C4F_N3F_V3F_SUN: any;
    R1UI_T2F_N3F_V3F_SUN: any;
    R1UI_T2F_V3F_SUN: any;
    R1UI_V3F_SUN: any;
    R3_G3_B2: any;
    RASTER_POSITION_UNCLIPPED_IBM: any;
    READ_BUFFER: any;
    RECLAIM_MEMORY_HINT_PGI: any;
    RED_BIAS: any;
    RED_BITS: any;
    RED_MAX_CLAMP_INGR: any;
    RED_MIN_CLAMP_INGR: any;
    RED_SCALE: any;
    RED: any;
    REDUCE_EXT: any;
    REDUCE: any;
    REFERENCE_PLANE_EQUATION_SGIX: any;
    REFERENCE_PLANE_SGIX: any;
    REFLECTION_MAP_ARB: any;
    REFLECTION_MAP_EXT: any;
    REFLECTION_MAP_NV: any;
    REGISTER_COMBINERS_NV: any;
    RENDER_MODE: any;
    RENDER: any;
    RENDERER: any;
    REPEAT: any;
    REPLACE_EXT: any;
    REPLACE_MIDDLE_SUN: any;
    REPLACE_OLDEST_SUN: any;
    REPLACE: any;
    REPLACEMENT_CODE_ARRAY_POINTER_SUN: any;
    REPLACEMENT_CODE_ARRAY_STRIDE_SUN: any;
    REPLACEMENT_CODE_ARRAY_SUN: any;
    REPLACEMENT_CODE_ARRAY_TYPE_SUN: any;
    REPLACEMENT_CODE_SUN: any;
    REPLICATE_BORDER_HP: any;
    REPLICATE_BORDER: any;
    RESAMPLE_DECIMATE_SGIX: any;
    RESAMPLE_REPLICATE_SGIX: any;
    RESAMPLE_ZERO_FILL_SGIX: any;
    RESCALE_NORMAL_EXT: any;
    RESCALE_NORMAL: any;
    RESTART_SUN: any;
    RETURN: any;
    RGB_SCALE_EXT: any;
    RGB: any;
    RGB10_A2_EXT: any;
    RGB10_A2: any;
    RGB10_EXT: any;
    RGB10: any;
    RGB12_EXT: any;
    RGB12: any;
    RGB16_EXT: any;
    RGB16: any;
    RGB2_EXT: any;
    RGB4_EXT: any;
    RGB4: any;
    RGB5_A1_EXT: any;
    RGB5_A1: any;
    RGB5_EXT: any;
    RGB5: any;
    RGB8_EXT: any;
    RGB8: any;
    RGBA_MODE: any;
    RGBA: any;
    RGBA12_EXT: any;
    RGBA12: any;
    RGBA16_EXT: any;
    RGBA16: any;
    RGBA2_EXT: any;
    RGBA2: any;
    RGBA4_EXT: any;
    RGBA4: any;
    RGBA8_EXT: any;
    RGBA8: any;
    RIGHT: any;
    S: any;
    SAMPLE_ALPHA_TO_COVERAGE_ARB: any;
    SAMPLE_ALPHA_TO_MASK_EXT: any;
    SAMPLE_ALPHA_TO_MASK_SGIS: any;
    SAMPLE_ALPHA_TO_ONE_ARB: any;
    SAMPLE_ALPHA_TO_ONE_EXT: any;
    SAMPLE_ALPHA_TO_ONE_SGIS: any;
    SAMPLE_BUFFERS_3DFX: any;
    SAMPLE_BUFFERS_ARB: any;
    SAMPLE_BUFFERS_EXT: any;
    SAMPLE_BUFFERS_SGIS: any;
    SAMPLE_COVERAGE_ARB: any;
    SAMPLE_COVERAGE_INVERT_ARB: any;
    SAMPLE_COVERAGE_VALUE_ARB: any;
    SAMPLE_MASK_EXT: any;
    SAMPLE_MASK_INVERT_EXT: any;
    SAMPLE_MASK_INVERT_SGIS: any;
    SAMPLE_MASK_SGIS: any;
    SAMPLE_MASK_VALUE_EXT: any;
    SAMPLE_MASK_VALUE_SGIS: any;
    SAMPLE_PATTERN_EXT: any;
    SAMPLE_PATTERN_SGIS: any;
    SAMPLES_3DFX: any;
    SAMPLES_ARB: any;
    SAMPLES_EXT: any;
    SAMPLES_SGIS: any;
    SCALE_BY_FOUR_NV: any;
    SCALE_BY_ONE_HALF_NV: any;
    SCALE_BY_TWO_NV: any;
    SCISSOR_BIT: any;
    SCISSOR_BOX: any;
    SCISSOR_TEST: any;
    SCREEN_COORDINATES_REND: any;
    SECONDARY_COLOR_ARRAY_EXT: any;
    SECONDARY_COLOR_ARRAY_LIST_IBM: any;
    SECONDARY_COLOR_ARRAY_LIST_STRIDE_IBM: any;
    SECONDARY_COLOR_ARRAY_POINTER_EXT: any;
    SECONDARY_COLOR_ARRAY_SIZE_EXT: any;
    SECONDARY_COLOR_ARRAY_STRIDE_EXT: any;
    SECONDARY_COLOR_ARRAY_TYPE_EXT: any;
    SECONDARY_COLOR_NV: any;
    SELECT: any;
    SELECTION_BUFFER_POINTER: any;
    SELECTION_BUFFER_SIZE: any;
    SEPARABLE_2D_EXT: any;
    SEPARABLE_2D: any;
    SEPARATE_SPECULAR_COLOR_EXT: any;
    SEPARATE_SPECULAR_COLOR: any;
    SET: any;
    SHADE_MODEL: any;
    SHADOW_AMBIENT_SGIX: any;
    SHADOW_ATTENUATION_EXT: any;
    SHARED_TEXTURE_PALETTE_EXT: any;
    SHARPEN_TEXTURE_FUNC_POINTS_SGIS: any;
    SHININESS: any;
    SHORT: any;
    SIGNED_IDENTITY_NV: any;
    SIGNED_NEGATE_NV: any;
    SINGLE_COLOR_EXT: any;
    SINGLE_COLOR: any;
    SMOOTH_LINE_WIDTH_GRANULARITY: any;
    SMOOTH_LINE_WIDTH_RANGE: any;
    SMOOTH_POINT_SIZE_GRANULARITY: any;
    SMOOTH_POINT_SIZE_RANGE: any;
    SMOOTH: any;
    SOURCE0_ALPHA_EXT: any;
    SOURCE0_RGB_EXT: any;
    SOURCE1_ALPHA_EXT: any;
    SOURCE1_RGB_EXT: any;
    SOURCE2_ALPHA_EXT: any;
    SOURCE2_RGB_EXT: any;
    SOURCE3_ALPHA_EXT: any;
    SOURCE3_ALPHA_NV: any;
    SOURCE3_RGB_EXT: any;
    SOURCE3_RGB_NV: any;
    SOURCE4_ALPHA_EXT: any;
    SOURCE4_RGB_EXT: any;
    SOURCE5_ALPHA_EXT: any;
    SOURCE5_RGB_EXT: any;
    SOURCE6_ALPHA_EXT: any;
    SOURCE6_RGB_EXT: any;
    SOURCE7_ALPHA_EXT: any;
    SOURCE7_RGB_EXT: any;
    SPARE0_NV: any;
    SPARE0_PLUS_SECONDARY_COLOR_NV: any;
    SPARE1_NV: any;
    SPECULAR: any;
    SPHERE_MAP: any;
    SPOT_CUTOFF: any;
    SPOT_DIRECTION: any;
    SPOT_EXPONENT: any;
    SPRITE_AXIAL_SGIX: any;
    SPRITE_AXIS_SGIX: any;
    SPRITE_EYE_ALIGNED_SGIX: any;
    SPRITE_MODE_SGIX: any;
    SPRITE_OBJECT_ALIGNED_SGIX: any;
    SPRITE_SGIX: any;
    SPRITE_TRANSLATION_SGIX: any;
    SRC_ALPHA_SATURATE: any;
    SRC_ALPHA: any;
    SRC_COLOR: any;
    STACK_OVERFLOW: any;
    STACK_UNDERFLOW: any;
    STENCIL_BITS: any;
    STENCIL_BUFFER_BIT: any;
    STENCIL_CLEAR_VALUE: any;
    STENCIL_FAIL: any;
    STENCIL_FUNC: any;
    STENCIL_INDEX: any;
    STENCIL_PASS_DEPTH_FAIL: any;
    STENCIL_PASS_DEPTH_PASS: any;
    STENCIL_REF: any;
    STENCIL_TEST: any;
    STENCIL_VALUE_MASK: any;
    STENCIL_WRITEMASK: any;
    STENCIL: any;
    STEREO: any;
    STRICT_DEPTHFUNC_HINT_PGI: any;
    STRICT_LIGHTING_HINT_PGI: any;
    STRICT_SCISSOR_HINT_PGI: any;
    SUBPIXEL_BITS: any;
    T: any;
    T2F_C3F_V3F: any;
    T2F_C4F_N3F_V3F: any;
    T2F_C4UB_V3F: any;
    T2F_IUI_N3F_V2F_EXT: any;
    T2F_IUI_N3F_V3F_EXT: any;
    T2F_IUI_V2F_EXT: any;
    T2F_IUI_V3F_EXT: any;
    T2F_N3F_V3F: any;
    T2F_V3F: any;
    T4F_C4F_N3F_V4F: any;
    T4F_V4F: any;
    TABLE_TOO_LARGE_EXT: any;
    TABLE_TOO_LARGE: any;
    TANGENT_ARRAY_EXT: any;
    TANGENT_ARRAY_POINTER_EXT: any;
    TANGENT_ARRAY_STRIDE_EXT: any;
    TANGENT_ARRAY_TYPE_EXT: any;
    TEXCOORD1_BIT_PGI: any;
    TEXCOORD2_BIT_PGI: any;
    TEXCOORD3_BIT_PGI: any;
    TEXCOORD4_BIT_PGI: any;
    TEXTURE_1D_BINDING_EXT: any;
    TEXTURE_1D: any;
    TEXTURE_2D_BINDING_EXT: any;
    TEXTURE_2D: any;
    TEXTURE_3D_BINDING_EXT: any;
    TEXTURE_3D_EXT: any;
    TEXTURE_3D: any;
    TEXTURE_4D_BINDING_SGIS: any;
    TEXTURE_4D_SGIS: any;
    TEXTURE_4DSIZE_SGIS: any;
    TEXTURE_ALPHA_SIZE_EXT: any;
    TEXTURE_ALPHA_SIZE: any;
    TEXTURE_APPLICATION_MODE_EXT: any;
    TEXTURE_BASE_LEVEL_SGIS: any;
    TEXTURE_BASE_LEVEL: any;
    TEXTURE_BINDING_1D: any;
    TEXTURE_BINDING_2D: any;
    TEXTURE_BINDING_3D: any;
    TEXTURE_BINDING_CUBE_MAP_ARB: any;
    TEXTURE_BINDING_CUBE_MAP_EXT: any;
    TEXTURE_BIT: any;
    TEXTURE_BLUE_SIZE_EXT: any;
    TEXTURE_BLUE_SIZE: any;
    TEXTURE_BORDER_COLOR: any;
    TEXTURE_BORDER: any;
    TEXTURE_CLIPMAP_CENTER_SGIX: any;
    TEXTURE_CLIPMAP_DEPTH_SGIX: any;
    TEXTURE_CLIPMAP_FRAME_SGIX: any;
    TEXTURE_CLIPMAP_LOD_OFFSET_SGIX: any;
    TEXTURE_CLIPMAP_OFFSET_SGIX: any;
    TEXTURE_CLIPMAP_VIRTUAL_DEPTH_SGIX: any;
    TEXTURE_COLOR_TABLE_SGI: any;
    TEXTURE_COLOR_WRITEMASK_SGIS: any;
    TEXTURE_COMPARE_OPERATOR_SGIX: any;
    TEXTURE_COMPARE_SGIX: any;
    TEXTURE_COMPONENTS: any;
    TEXTURE_COMPRESSED_ARB: any;
    TEXTURE_COMPRESSED_IMAGE_SIZE_ARB: any;
    TEXTURE_COMPRESSION_HINT_ARB: any;
    TEXTURE_CONSTANT_DATA_SUNX: any;
    TEXTURE_COORD_ARRAY_COUNT_EXT: any;
    TEXTURE_COORD_ARRAY_EXT: any;
    TEXTURE_COORD_ARRAY_LIST_IBM: any;
    TEXTURE_COORD_ARRAY_LIST_STRIDE_IBM: any;
    TEXTURE_COORD_ARRAY_PARALLEL_POINTERS_INTEL: any;
    TEXTURE_COORD_ARRAY_POINTER_EXT: any;
    TEXTURE_COORD_ARRAY_POINTER: any;
    TEXTURE_COORD_ARRAY_SIZE_EXT: any;
    TEXTURE_COORD_ARRAY_SIZE: any;
    TEXTURE_COORD_ARRAY_STRIDE_EXT: any;
    TEXTURE_COORD_ARRAY_STRIDE: any;
    TEXTURE_COORD_ARRAY_TYPE_EXT: any;
    TEXTURE_COORD_ARRAY_TYPE: any;
    TEXTURE_COORD_ARRAY: any;
    TEXTURE_CUBE_MAP_ARB: any;
    TEXTURE_CUBE_MAP_EXT: any;
    TEXTURE_CUBE_MAP_NEGATIVE_X_ARB: any;
    TEXTURE_CUBE_MAP_NEGATIVE_X_EXT: any;
    TEXTURE_CUBE_MAP_NEGATIVE_Y_ARB: any;
    TEXTURE_CUBE_MAP_NEGATIVE_Y_EXT: any;
    TEXTURE_CUBE_MAP_NEGATIVE_Z_ARB: any;
    TEXTURE_CUBE_MAP_NEGATIVE_Z_EXT: any;
    TEXTURE_CUBE_MAP_POSITIVE_X_ARB: any;
    TEXTURE_CUBE_MAP_POSITIVE_X_EXT: any;
    TEXTURE_CUBE_MAP_POSITIVE_Y_ARB: any;
    TEXTURE_CUBE_MAP_POSITIVE_Y_EXT: any;
    TEXTURE_CUBE_MAP_POSITIVE_Z_ARB: any;
    TEXTURE_CUBE_MAP_POSITIVE_Z_EXT: any;
    TEXTURE_DEFORMATION_BIT_SGIX: any;
    TEXTURE_DEFORMATION_SGIX: any;
    TEXTURE_DEPTH_EXT: any;
    TEXTURE_DEPTH: any;
    TEXTURE_ENV_BIAS_SGIX: any;
    TEXTURE_ENV_COLOR: any;
    TEXTURE_ENV_MODE: any;
    TEXTURE_ENV: any;
    TEXTURE_FILTER_CONTROL_EXT: any;
    TEXTURE_FILTER4_SIZE_SGIS: any;
    TEXTURE_GEN_MODE: any;
    TEXTURE_GEN_Q: any;
    TEXTURE_GEN_R: any;
    TEXTURE_GEN_S: any;
    TEXTURE_GEN_T: any;
    TEXTURE_GEQUAL_R_SGIX: any;
    TEXTURE_GREEN_SIZE_EXT: any;
    TEXTURE_GREEN_SIZE: any;
    TEXTURE_HEIGHT: any;
    TEXTURE_INDEX_SIZE_EXT: any;
    TEXTURE_INTENSITY_SIZE_EXT: any;
    TEXTURE_INTENSITY_SIZE: any;
    TEXTURE_INTERNAL_FORMAT: any;
    TEXTURE_LEQUAL_R_SGIX: any;
    TEXTURE_LIGHT_EXT: any;
    TEXTURE_LIGHTING_MODE_HP: any;
    TEXTURE_LOD_BIAS_EXT: any;
    TEXTURE_LOD_BIAS_R_SGIX: any;
    TEXTURE_LOD_BIAS_S_SGIX: any;
    TEXTURE_LOD_BIAS_T_SGIX: any;
    TEXTURE_LUMINANCE_SIZE_EXT: any;
    TEXTURE_LUMINANCE_SIZE: any;
    TEXTURE_MAG_FILTER: any;
    TEXTURE_MATERIAL_FACE_EXT: any;
    TEXTURE_MATERIAL_PARAMETER_EXT: any;
    TEXTURE_MATRIX: any;
    TEXTURE_MAX_ANISOTROPY_EXT: any;
    TEXTURE_MAX_LEVEL_SGIS: any;
    TEXTURE_MAX_LEVEL: any;
    TEXTURE_MAX_LOD_SGIS: any;
    TEXTURE_MAX_LOD: any;
    TEXTURE_MIN_FILTER: any;
    TEXTURE_MIN_LOD_SGIS: any;
    TEXTURE_MIN_LOD: any;
    TEXTURE_MULTI_BUFFER_HINT_SGIX: any;
    TEXTURE_NORMAL_EXT: any;
    TEXTURE_POST_SPECULAR_HP: any;
    TEXTURE_PRE_SPECULAR_HP: any;
    TEXTURE_PRIORITY_EXT: any;
    TEXTURE_PRIORITY: any;
    TEXTURE_RED_SIZE_EXT: any;
    TEXTURE_RED_SIZE: any;
    TEXTURE_RESIDENT_EXT: any;
    TEXTURE_RESIDENT: any;
    TEXTURE_STACK_DEPTH: any;
    TEXTURE_TOO_LARGE_EXT: any;
    TEXTURE_WIDTH: any;
    TEXTURE_WRAP_Q_SGIS: any;
    TEXTURE_WRAP_R_EXT: any;
    TEXTURE_WRAP_R: any;
    TEXTURE_WRAP_S: any;
    TEXTURE_WRAP_T: any;
    TEXTURE: any;
    TEXTURE0_ARB: any;
    TEXTURE1_ARB: any;
    TEXTURE10_ARB: any;
    TEXTURE11_ARB: any;
    TEXTURE12_ARB: any;
    TEXTURE13_ARB: any;
    TEXTURE14_ARB: any;
    TEXTURE15_ARB: any;
    TEXTURE16_ARB: any;
    TEXTURE17_ARB: any;
    TEXTURE18_ARB: any;
    TEXTURE19_ARB: any;
    TEXTURE2_ARB: any;
    TEXTURE20_ARB: any;
    TEXTURE21_ARB: any;
    TEXTURE22_ARB: any;
    TEXTURE23_ARB: any;
    TEXTURE24_ARB: any;
    TEXTURE25_ARB: any;
    TEXTURE26_ARB: any;
    TEXTURE27_ARB: any;
    TEXTURE28_ARB: any;
    TEXTURE29_ARB: any;
    TEXTURE3_ARB: any;
    TEXTURE30_ARB: any;
    TEXTURE31_ARB: any;
    TEXTURE4_ARB: any;
    TEXTURE5_ARB: any;
    TEXTURE6_ARB: any;
    TEXTURE7_ARB: any;
    TEXTURE8_ARB: any;
    TEXTURE9_ARB: any;
    TRANSFORM_BIT: any;
    TRANSFORM_HINT_APPLE: any;
    TRANSPOSE_COLOR_MATRIX_ARB: any;
    TRANSPOSE_MODELVIEW_MATRIX_ARB: any;
    TRANSPOSE_PROJECTION_MATRIX_ARB: any;
    TRANSPOSE_TEXTURE_MATRIX_ARB: any;
    TRIANGLE_FAN: any;
    TRIANGLE_LIST_SUN: any;
    TRIANGLE_STRIP: any;
    TRIANGLES: any;
    TRUE: any;
    UNPACK_ALIGNMENT: any;
    UNPACK_CMYK_HINT_EXT: any;
    UNPACK_CONSTANT_DATA_SUNX: any;
    UNPACK_IMAGE_DEPTH_SGIS: any;
    UNPACK_IMAGE_HEIGHT_EXT: any;
    UNPACK_IMAGE_HEIGHT: any;
    UNPACK_LSB_FIRST: any;
    UNPACK_RESAMPLE_SGIX: any;
    UNPACK_ROW_LENGTH: any;
    UNPACK_SKIP_IMAGES_EXT: any;
    UNPACK_SKIP_IMAGES: any;
    UNPACK_SKIP_PIXELS: any;
    UNPACK_SKIP_ROWS: any;
    UNPACK_SKIP_VOLUMES_SGIS: any;
    UNPACK_SUBSAMPLE_RATE_SGIX: any;
    UNPACK_SWAP_BYTES: any;
    UNSIGNED_BYTE_2_3_3_REV: any;
    UNSIGNED_BYTE_3_3_2_EXT: any;
    UNSIGNED_BYTE_3_3_2: any;
    UNSIGNED_BYTE: any;
    UNSIGNED_IDENTITY_NV: any;
    UNSIGNED_INT_10_10_10_2_EXT: any;
    UNSIGNED_INT_10_10_10_2: any;
    UNSIGNED_INT_2_10_10_10_REV: any;
    UNSIGNED_INT_8_8_8_8_EXT: any;
    UNSIGNED_INT_8_8_8_8_REV: any;
    UNSIGNED_INT_8_8_8_8: any;
    UNSIGNED_INT: any;
    UNSIGNED_INVERT_NV: any;
    UNSIGNED_SHORT_1_5_5_5_REV: any;
    UNSIGNED_SHORT_4_4_4_4_EXT: any;
    UNSIGNED_SHORT_4_4_4_4_REV: any;
    UNSIGNED_SHORT_4_4_4_4: any;
    UNSIGNED_SHORT_5_5_5_1_EXT: any;
    UNSIGNED_SHORT_5_5_5_1: any;
    UNSIGNED_SHORT_5_6_5_REV: any;
    UNSIGNED_SHORT_5_6_5: any;
    UNSIGNED_SHORT: any;
    V2F: any;
    V3F: any;
    VARIABLE_A_NV: any;
    VARIABLE_B_NV: any;
    VARIABLE_C_NV: any;
    VARIABLE_D_NV: any;
    VARIABLE_E_NV: any;
    VARIABLE_F_NV: any;
    VARIABLE_G_NV: any;
    VENDOR: any;
    VERSION: any;
    VERTEX_ARRAY_COUNT_EXT: any;
    VERTEX_ARRAY_EXT: any;
    VERTEX_ARRAY_LIST_IBM: any;
    VERTEX_ARRAY_LIST_STRIDE_IBM: any;
    VERTEX_ARRAY_PARALLEL_POINTERS_INTEL: any;
    VERTEX_ARRAY_POINTER_EXT: any;
    VERTEX_ARRAY_POINTER: any;
    VERTEX_ARRAY_RANGE_LENGTH_NV: any;
    VERTEX_ARRAY_RANGE_NV: any;
    VERTEX_ARRAY_RANGE_POINTER_NV: any;
    VERTEX_ARRAY_RANGE_VALID_NV: any;
    VERTEX_ARRAY_SIZE_EXT: any;
    VERTEX_ARRAY_SIZE: any;
    VERTEX_ARRAY_STRIDE_EXT: any;
    VERTEX_ARRAY_STRIDE: any;
    VERTEX_ARRAY_TYPE_EXT: any;
    VERTEX_ARRAY_TYPE: any;
    VERTEX_ARRAY: any;
    VERTEX_BLEND_ARB: any;
    VERTEX_CONSISTENT_HINT_PGI: any;
    VERTEX_DATA_HINT_PGI: any;
    VERTEX_PRECLIP_HINT_SGIX: any;
    VERTEX_PRECLIP_SGIX: any;
    VERTEX_WEIGHT_ARRAY_EXT: any;
    VERTEX_WEIGHT_ARRAY_POINTER_EXT: any;
    VERTEX_WEIGHT_ARRAY_SIZE_EXT: any;
    VERTEX_WEIGHT_ARRAY_STRIDE_EXT: any;
    VERTEX_WEIGHT_ARRAY_TYPE_EXT: any;
    VERTEX_WEIGHTING_EXT: any;
    VERTEX23_BIT_PGI: any;
    VERTEX4_BIT_PGI: any;
    VIEWPORT_BIT: any;
    VIEWPORT: any;
    WEIGHT_ARRAY_ARB: any;
    WEIGHT_ARRAY_POINTER_ARB: any;
    WEIGHT_ARRAY_SIZE_ARB: any;
    WEIGHT_ARRAY_STRIDE_ARB: any;
    WEIGHT_ARRAY_TYPE_ARB: any;
    WEIGHT_SUM_UNITY_ARB: any;
    WIDE_LINE_HINT_PGI: any;
    WRAP_BORDER_SUN: any;
    XOR: any;
    YCRCB_422_SGIX: any;
    YCRCB_444_SGIX: any;
    YCRCB_SGIX: any;
    YCRCBA_SGIX: any;
    ZERO: any;
    ZOOM_X: any;
    ZOOM_Y: any;
};
//# sourceMappingURL=OGL.d.ts.map