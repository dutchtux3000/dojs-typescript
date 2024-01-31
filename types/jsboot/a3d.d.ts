/**
 * Use to create an empty matrix.
 *
 * @returns an empty matrix and empty translation {@link Matrix}.
 */
declare function GetEmptyMatrix(): {
    v: number[][];
    t: number[];
};
/**
 * Return the identity matrix the 'do nothing' identity matrix. Multiplying by the identity matrix has no effect.
 *
 * @returns a {@link Matrix}.
 */
declare function GetIdentityMatrix(): {
    v: number[][];
    t: number[];
};
/**
 * Constructs a translation matrix. When applied to the point (px, py, pz), this matrix will produce the point (px+x, py+y, pz+z).
 * In other words, it moves things sideways.
 *
 * @param {*} x x value or a vector as array.
 * @param {number} y y value.
 * @param {number} z y value.
 *
 * @returns a {@link Matrix}.
 */
declare function GetTranslationMatrix(x: any, y: number, z: number): {
    v: number[][];
    t: number[];
};
/**
 * Constructs a scaling matrix. When applied to the point (px, py, pz), this matrix will produce the point (px*x, py*y, pz*z).
 * In other words, it stretches or shrinks things.
 *
 * @param {*} x x value or a vector as array.
 * @param {number} y y value.
 * @param {number} z y value.
 *
 * @returns a {@link Matrix}.
 */
declare function GetScalingMatrix(x: any, y: number, z: number): {
    v: number[][];
    t: number[];
};
/**
 * Construct X axis rotation matrices. When applied to a point, these matrices will rotate it about the X axis by the specified angle (given in radians).
 *
 * @param {number} r rotation in radians.
 *
 * @returns a {@link Matrix}.
 */
declare function NGetXRotateMatrix(r: number): any;
/**
 * Construct Y axis rotation matrices. When applied to a point, these matrices will rotate it about the Y axis by the specified angle (given in radians).
 *
 * @param {number} r rotation in radians.
 *
 * @returns a {@link Matrix}.
 */
declare function NGetYRotateMatrix(r: number): any;
/**
 * Construct Z axis rotation matrices. When applied to a point, these matrices will rotate it about the Z axis by the specified angle (given in radians).
 *
 * @param {number} r rotation in radians.
 *
 * @returns a {@link Matrix}.
 */
declare function NGetZRotateMatrix(r: number): any;
/**
 * Constructs a transformation matrix which will rotate points around all three axes by the specified amounts (given in radians).
 * The direction of rotation can simply be found out with the right-hand rule: Point the dumb of your right hand towards the origin along the axis of rotation, and the fingers will curl in the positive direction of rotation.
 * E.g. if you rotate around the y axis, and look at the scene from above, a positive angle will rotate in clockwise direction.
 *
 * @param {*} x x value or a vector as array.
 * @param {number} y y value.
 * @param {number} z y value.
 *
 * @returns a {@link Matrix}.
 */
declare function NGetRotationMatrix(x: any, y: number, z: number): any;
/**
 * Rotates a matrix so that it is aligned along the specified coordinate vectors (they need not be normalized or perpendicular, but the up and front must not be equal).
 * A front vector of 0,0,-1 and up vector of 0,1,0 will return the identity matrix.
 *
 * @param {number} xfront
 * @param {number} yfront
 * @param {number} zfront
 * @param {number} xup
 * @param {number} yup
 * @param {number} zup
 *
 * @returns a {@link Matrix}.
 */
declare function GetAlignMatrix(xfront: number, yfront: number, zfront: number, xup: number, yup: number, zup: number): any;
/**
 * Constructs a transformation matrix which will rotate points around the specified x,y,z vector by the specified angle (given in radians).
 *
 * @param {*} x x value or a vector as array.
 * @param {number} y y value.
 * @param {number} z y value.
 * @param {number} a rotation value.
 *
 * @returns a {@link Matrix}.
 */
declare function GetVectorRotationMatrix(x: any, y: number, z: number, a: number): any;
/**
 * Constructs a transformation matrix which will rotate points around all three axes by the specified amounts (given in radians), scale the result by the specified amount (pass 1 for no change of scale), and then translate to the requested x, y, z position.
 *
 * @param {number} scale scaling value.
 * @param {number} xrot x-rotation value.
 * @param {number} yrot y-rotation value.
 * @param {number} zrot z-rotation value.
 * @param {number} x x value.
 * @param {number} y y value.
 * @param {number} z y value.
 *
 * @returns a {@link Matrix}.
 */
declare function NGetTransformationMatrix(scale: number, xrot: number, yrot: number, zrot: number, x: number, y: number, z: number): any;
/**
 * Constructs a camera matrix for translating world-space objects into a normalised view space, ready for the perspective projection.
 * The x, y, and z parameters specify the camera position, xfront, yfront, and zfront are the 'in front' vector specifying which way the camera is facing (this can be any length: normalisation is not required), and xup, yup, and zup are the 'up' direction vector.
 * The fov parameter specifies the field of view (ie. width of the camera focus) in radians.
 * For typical projections, a field of view in the region 32-48 will work well. 64 (90°) applies no extra scaling - so something which is one unit away from the viewer will be directly scaled to the viewport.
 * A bigger FOV moves you closer to the viewing plane, so more objects will appear. A smaller FOV moves you away from the viewing plane, which means you see a smaller part of the world.
 * Finally, the aspect ratio is used to scale the Y dimensions of the image relative to the X axis, so you can use it to adjust the proportions of the output image (set it to 1 for no scaling - but keep in mind that the projection also performs scaling according to the viewport size).
 * Typically, you will pass (float)w/(float)h, where w and h are the parameters you passed to set_projection_viewport.
 *
 * @param {number} x x camera position.
 * @param {number} y y camera position.
 * @param {number} z y camera position.
 * @param {number} xfront x camera facing.
 * @param {number} yfront y camera facing.
 * @param {number} zfront z camera facing.
 * @param {number} xup x of 'up direction'.
 * @param {number} yup y of 'up direction'.
 * @param {number} zup z of 'up direction'.
 * @param {number} fov field of view in radians.
 * @param {number} aspect aspect ratio.
 *
 * @returns {Matrix} a {@link Matrix}.
 */
declare function GetCameraMatrix(x: number, y: number, z: number, xfront: number, yfront: number, zfront: number, xup: number, yup: number, zup: number, fov: number, aspect: number): Matrix;
/**
 * Optimised routine for translating an already generated matrix: this simply adds in the translation offset, so there is no need to build two temporary matrices and then multiply them together.
 *
 * @param {number} m a {@link Matrix}.
 * @param {number} x x-offset or a vector as array.
 * @param {number} y y-offset.
 * @param {number} z z-offset.
 */
declare function QTranslateMatrix(m: number, x: number, y: number, z: number): void;
/**
 * Optimised routine for scaling an already generated matrix: this simply adds in the scale factor, so there is no need to build two temporary matrices and then multiply them together.
 *
 * @param {number} m a {@link Matrix}.
 * @param {number} scale scale factor
 */
declare function QScaleMatrix(m: number, scale: number): void;
/**
 * Multiplies two matrices.
 * The resulting matrix will have the same effect as the combination of m1 and m2, ie. when applied to a point p, (p * out) = ((p * m1) * m2).
 * Any number of transformations can be concatenated in this way.
 * Note that matrix multiplication is not commutative, ie. matrix_mul(m1, m2) != matrix_mul(m2, m1).
 *
 * @param {Matrix} m1 first {@link Matrix}.
 * @param {Matrix} m2 second {@link Matrix}.
 *
 * @returns a new {@link Matrix}.
 */
declare function NMatrixMul(m1: Matrix, m2: Matrix): {
    v: number[][];
    t: number[];
};
/**
 * Calculates the length of the vector (x, y, z), using that good 'ole Pythagoras theorem.
 *
 * @param {*} x x value or vector as array.
 * @param {number} y y value.
 * @param {number} z y value.
 *
 * @returns {number} vector length.
 */
declare function VectorLength(x: any, y: number, z: number): number;
/**
 * Converts the vector (x, y, z) to a unit vector.
 * This points in the same direction as the original vector, but has a length of one.
 *
 * @param {*} x x value or vector as array.
 * @param {number} y y value.
 * @param {number} z y value.
 *
 * @returns {number[]} a new vector.
 */
declare function NormalizeVector(x: any, y: number, z: number): number[];
/**
 * Calculates the dot product (x1, y1, z1) . (x2, y2, z2), returning the result.
 *
 * @param {*} x1 x value or first vector as array.
 * @param {*} y1 y value or second vector as array.
 * @param {number} z1 z value.
 * @param {number} x2 x value.
 * @param {number} y2 y value.
 * @param {number} z2 z value.
 *
 * @returns {number} dot product.
 */
declare function DotProduct(x1: any, y1: any, z1: number, x2: number, y2: number, z2: number): number;
/**
 * Calculates the cross product (x1, y1, z1) x (x2, y2, z2).
 * The cross product is perpendicular to both of the input vectors, so it can be used to generate polygon normals.
 *
 * @param {*} x1 x value or first vector as array.
 * @param {*} y1 y value or second vector as array.
 * @param {number} z1 z value.
 * @param {number} x2 x value.
 * @param {number} y2 y value.
 * @param {number} z2 z value.
 *
 * @returns {number[]} a new vector.
 */
declare function CrossProduct(x1: any, y1: any, z1: number, x2: number, y2: number, z2: number): number[];
/**
 * Finds the Z component of the normal vector to the specified three vertices (which must be part of a convex polygon).
 * This is used mainly in back-face culling. The back-faces of closed polyhedra are never visible to the viewer, therefore they never need to be drawn.
 * This can cull on average half the polygons from a scene.
 * If the normal is negative the polygon can safely be culled. If it is zero, the polygon is perpendicular to the screen.
 * However, this method of culling back-faces must only be used once the X and Y coordinates have been projected into screen space using PerspProject() (or if an orthographic (isometric) projection is being used).
 * Note that this function will fail if the three vertices are co-linear (they lie on the same line) in 3D space.
 *
 * @param {number[]} v1 first vector.
 * @param {number[]} v2 second vector.
 * @param {number[]} v3 third vector.
 *
 * @returns {number} z component.
 */
declare function NPolygonZNormal(v1: number[], v2: number[], v3: number[]): number;
/**
 * Multiplies the point (x, y, z) by the transformation matrix m.
 *
 * @param {Matrix} m the matrix
 * @param {*} x x value or vector as array.
 * @param {number} y y value.
 * @param {number} z y value.
 *
 * @returns {number[]} a new vector.
 */
declare function NApplyMatrix(m: Matrix, x: any, y: number, z: number): number[];
/**
 * Sets the viewport used to scale the output of the PerspProject() function.
 * Pass the dimensions of the screen area you want to draw onto, which will typically be 0, 0, SizeX(), and SizeY().
 * Also don't forget to pass an appropriate aspect ratio to GetCameraMatrix() later.
 * The width and height you specify here will determine how big your viewport is in 3d space.
 * So if an object in your 3D space is w units wide, it will fill the complete screen when you run into it (i.e., if it has a distance of 1.0 after the camera matrix was applied.
 * The fov and aspect-ratio parameters to get_camera_matrix also apply some scaling though, so this isn't always completely true).
 * If you pass -1/-1/2/2 as parameters, no extra scaling will be performed by the projection.
 */
declare function SetProjectionViewport(x: any, y: any, w: any, h: any): void;
declare function NPerspProject(x: any, y: any, z: any): any[];
/**
 * Allocates memory for a scene, `nedge' and `npoly' are your estimates of how many edges and how many polygons you will render (you cannot get over the limit specified here).
 *
 * @param {number} nedge max number of edges.
 * @param {number} npoly max number of polygons.
 */
declare function CreateScene(nedge: number, npoly: number): void;
/**
 * Puts a polygon in the rendering list. Nothing is really rendered at this moment. Should be called between ClearScene() and RenderScene().
 *
 * Arguments are the same as for Polygon3D().
 *
 * Unlike Polygon3D(), the polygon may be concave or self-intersecting. Shapes that penetrate one another may look OK, but they are not really handled by this code.
 *
 * @param {*} type
 * @param {*} texture
 * @param {*} vtx
 */
declare function ScenePolygon3D(type: any, texture: any, vtx: any): void;
/**
 * Renders all the specified ScenePolygon3D()'s on the current bitmap. Rendering is done one scanline at a time, with no pixel being processed more than once.
 *
 * Note that between ClearScene() and RenderScene() you shouldn't change the clip rectangle of the destination bitmap. For speed reasons, you should set the clip rectangle to the minimum.
 */
declare function RenderScene(): void;
/**
 * Initializes a scene.
 */
declare function ClearScene(): void;
/**
 * Deallocate memory previously allocated by CreateScene. Use this to avoid memory leaks in your program.
 */
declare function DestroyScene(): void;
declare namespace POLYTYPE {
    let FLAT: number;
    let GCOL: number;
    let GRGB: number;
    let ATEX: number;
    let PTEX: number;
    let ATEX_MASK: number;
    let PTEX_MASK: number;
    let ATEX_LIT: number;
    let PTEX_LIT: number;
    let ATEX_MASK_LIT: number;
    let PTEX_MASK_LIT: number;
    let ATEX_TRANS: number;
    let PTEX_TRANS: number;
    let ATEX_MASK_TRANS: number;
    let PTEX_MASK_TRANS: number;
    let MAX: number;
    let ZBUF: number;
}
/** scaling factor x for the perspective projection */
declare var _persp_xscale_f: number;
/** scaling factor y for the perspective projection */
declare var _persp_yscale_f: number;
/** scaling factor x offset for the perspective projection */
declare var _persp_xoffset_f: number;
/** scaling factor y offset for the perspective projection */
declare var _persp_yoffset_f: number;
//# sourceMappingURL=a3d.d.ts.map