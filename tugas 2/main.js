function main() {
    var canvas = document.getElementById("canvas");
    var gl = canvas.getContext("webgl");
  
    // koordinat titik-titik

    // alfabet pertama (huruf A)
    var verticesA = [
        // top
        -0.9, -0.3, 0,                0.75, 0.75, 0.45,
        -1.35, -0.3, 0,                0.75, 0.75, 0.45,
        -1.35, -0.3, -0.9,             0.75, 0.75, 0.45,
        -0.9, -0.3, -0.9,             0.75, 0.75, 0.45,

        // outer left
        -1.35, -0.3, 0,                0.75, 0.75, 0.45,
        -2.1, -2.7, 0,                0.75, 0.75, 0.45,
        -2.1, -2.7, -0.9,             0.75, 0.75, 0.45,
        -1.35, -0.3, -0.9,             0.75, 0.75, 0.45,

        // inner left
        -0.9, -0.3, 0,                0.75, 0.75, 0.45,
        -1.65, -2.7, 0,                0.75, 0.75, 0.45,
        -1.65, -2.7, -0.9,             0.75, 0.75, 0.45,
        -0.9, -0.3, -0.9,             0.75, 0.75, 0.45,

        // outer right
        -0.9, -0.3, 0,                0.75, 0.75, 0.45,
        -0.15, -2.7, 0,                0.75, 0.75, 0.45,
        -0.15, -2.7, -0.9,             0.75, 0.75, 0.45,
        -0.9, -0.3, -0.9,             0.75, 0.75, 0.45,

        // inner right
        -1.35, -0.3, 0,                0.75, 0.75, 0.45,
        -0.6, -2.7, 0,                0.75, 0.75, 0.45,
        -0.6, -2.7, -0.9,             0.75, 0.75, 0.45,
        -1.35, -0.3, -0.9,             0.75, 0.75, 0.45,

        // bottom left
        -1.65, -2.7, 0,                0.25, 0.75, 0.45,
        -2.1, -2.7, 0,                0.25, 0.75, 0.45,
        -2.1, -2.7, -0.9,             0.25, 0.75, 0.45,
        -1.65, -2.7, -0.9,             0.25, 0.75, 0.45,

        // bottom right
        -0.15, -2.7, 0,                0.25, 0.75, 0.45,
        -0.6, -2.7, 0,                0.25, 0.75, 0.45,
        -0.6, -2.7, -0.9,             0.25, 0.75, 0.45,
        -0.15, -2.7, -0.9,             0.25, 0.75, 0.45,

        // front
        -0.9, -0.3, 0,                0.25, 0.75, 0.45,
        -1.65, -2.7, 0,                0.25, 0.75, 0.45,
        -2.1, -2.7, 0,                0.25, 0.75, 0.45,
        -1.35, -0.3, 0,                0.25, 0.75, 0.45,
        
        -0.9, -0.3, 0,                0.25, 0.75, 0.45,
        -0.15, -2.7, 0,                0.25, 0.75, 0.45,
        -0.6, -2.7, 0,                0.25, 0.75, 0.45,
        -1.35, -0.3, 0,                0.25, 0.75, 0.45,
        
        -1.65, -1.8, 0,                0.25, 0.75, 0.45,
        -0.75, -1.8, 0,                0.25, 0.75, 0.45,
        -0.75, -2.1, 0,                0.25, 0.75, 0.45,
        -1.65, -2.1, 0,                0.25, 0.75, 0.45,

        // back
        -0.9, -0.3, -0.9,             0.25, 0.75, 0.45,
        -1.65, -2.7, -0.9,             0.25, 0.75, 0.45,
        -2.1, -2.7, -0.9,             0.25, 0.75, 0.45,
        -1.35, -0.3, -0.9,             0.25, 0.75, 0.45,

        -0.9, -0.3, -0.9,             0.25, 0.75, 0.45,
        -0.15, -2.7, -0.9,             0.25, 0.75, 0.45,
        -0.6, -2.7, -0.9,             0.25, 0.75, 0.45,
        -1.35, -0.3, -0.9,             0.25, 0.75, 0.45,

        -1.65, -1.8, -0.9,             0.25, 0.75, 0.45,
        -0.75, -1.8, -0.9,             0.25, 0.75, 0.45,
        -0.75, -2.1, -0.9,             0.25, 0.75, 0.45,
        -1.65, -2.1, -0.9,             0.25, 0.75, 0.45,
    ];
  
    var indicesA = [
        0,  1,  2,     0,  2,  3,
        4,  5,  6,     4,  6,  7,   
        8,  9,  10,    8,  10, 11,  
        12, 13, 14,    12, 14, 15, 
        16, 17, 18,    16, 18, 19,  
        20, 21, 22,    20, 22, 23,
        24, 25, 26,    24, 26, 27,
        28, 29, 30,    28, 30, 31,
        32, 33, 34,    32, 34, 35,
        36, 37, 38,    36, 38, 39,
        40, 41, 42,    40, 42, 43,
        44, 45, 46,    44, 46, 47,
        48, 49, 50,    48, 50, 51,
    ];

    // alfabet kedua (huruf R)
    var verticesR = [
        // front
        -2.0, -1, 4,        0.25, 0.75, 0.45,      // Index: 0
        -2.0, 1, 4,         0.25, 0.75, 0.45,      // Index: 1
        -1.6, 1, 4,         0.25, 0.75, 0.45,      // Index: 2
        -1.6, -1, 4,        0.25, 0.75, 0.45,      // Index: 3
        -1.6, 0, 4,         0.25, 0.75, 0.45,      // Index: 4
        -1.2, 1, 4,         0.25, 0.75, 0.45,      // Index: 5
        -1.2, 0, 4,         0.25, 0.75, 0.45,      // Index: 6
        -1.6, -0.6, 4,      0.25, 0.75, 0.45,      // Index: 7
        -1.4, -1, 4,        0.25, 0.75, 0.45,      // Index: 8
        -1.0, -1, 4,        0.25, 0.75, 0.45,      // Index: 9

        // left
        -2.0, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 10 
        -2.0, 1, 3.5,       0.75, 0.75, 0.45,      // Index: 11
        -1.4, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 12
        -1.6, -0.6, 3.5,    0.75, 0.75, 0.45,      // Index: 13

        // top
        -1.2, 1, 3.5,       0.75, 0.75, 0.45,      // Index: 14

        // right
        -1.2, 0, 3.5,       0.75, 0.75, 0.45,      // Index: 15
        -1.6, 0, 3.5,       0.75, 0.75, 0.45,      // Index: 16
        -1.0, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 17
        -1.6, -0.6, 3.5,    0.75, 0.75, 0.45,      // Index: 18
        -1.6, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 19

        // back
        -2.0, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 20
        -2.0, 1, 3.5,       0.75, 0.75, 0.45,      // Index: 21
        -1.6, 1, 3.5,       0.75, 0.75, 0.45,      // Index: 22
        -1.6, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 23
        -1.6, 0, 3.5,       0.75, 0.75, 0.45,      // Index: 24
        -1.2, 1, 3.5,       0.75, 0.75, 0.45,      // Index: 25
        -1.2, 0, 3.5,       0.75, 0.75, 0.45,      // Index: 26
        -1.6, -0.6, 3.5,    0.75, 0.75, 0.45,      // Index: 27
        -1.4, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 28
        -1.0, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 29

        // left
        -2.0, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 10 
        -2.0, 1, 3.5,       0.75, 0.75, 0.45,      // Index: 11
        -1.4, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 12
        -1.6, -0.6, 3.5,    0.75, 0.75, 0.45,      // Index: 13

        // top
        -1.2, 1, 3.5,       0.75, 0.75, 0.45,      // Index: 14

        // right
        -1.2, 0, 3.5,       0.75, 0.75, 0.45,      // Index: 15
        -1.6, 0, 3.5,       0.75, 0.75, 0.45,      // Index: 16
        -1.0, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 17
        -1.6, -0.6, 3.5,    0.75, 0.75, 0.45,      // Index: 18
        -1.6, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 19

        // back
        -2.0, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 20
        -2.0, 1, 3.5,       0.75, 0.75, 0.45,      // Index: 21
        -1.6, 1, 3.5,       0.75, 0.75, 0.45,      // Index: 22
        -1.6, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 23
        -1.6, 0, 3.5,       0.75, 0.75, 0.45,      // Index: 24
        -1.2, 1, 3.5,       0.75, 0.75, 0.45,      // Index: 25
        -1.2, 0, 3.5,       0.75, 0.75, 0.45,      // Index: 26
        -1.6, -0.6, 3.5,    0.75, 0.75, 0.45,      // Index: 27
        -1.4, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 28
        -1.0, -1, 3.5,      0.75, 0.75, 0.45,      // Index: 29
    ];
  
    var indicesR = [
        // front
        0, 1, 2, 0, 2, 3,
        2, 4, 6, 2, 5, 6,
        4, 7, 8, 4, 8, 9,

        // left
        0, 1, 11, 0, 10, 11,
        7, 8, 13, 8, 12, 13,

        // top
        1, 5, 14, 1, 11, 14,

        // right
        5, 14, 15, 5, 6, 15,
        4, 16, 17, 4, 9, 17,
        3, 7, 18, 3, 18, 19,

        // bottom
        0, 3, 19, 0, 10, 19,
        8, 9, 17, 8, 12, 17,
        4, 15, 16, 4, 6, 15,

        // back
        20, 21, 22, 20, 22, 23,
        22, 24, 26, 22, 25, 26,
        24, 27, 28, 24, 28, 29,
    ];
  
    // digit pertama (angka 0)
    var vertices0 = [
        // front
        0, 2, 0,    0.75, 0.75, 0.45,   // Index: 0
        0, -1.5, 0,    0.75, 0.75, 0.45,   // Index: 1
        1.5, -1.5, 0,    0.75, 0.75, 0.45,   // Index: 2
        1.5, 2, 0,    0.75, 0.75, 0.45,   // Index: 3
        0, 2, 0,    0.75, 0.75, 0.45,   // Index: 4

        // inner front (x +-= 0.4 , y +-= -0.5)
        0.4, 1.5, 0,    0.75, 0.75, 0.45,   // Index: 5
        0.4, -1.0, 0,    0.75, 0.75, 0.45,   // Index: 6
        1.1, -1.0, 0,    0.75, 0.75, 0.45,   // Index: 7
        1.1, 1.5, 0,    0.75, 0.75, 0.45,   // Index: 8
        0.4, 1.5, 0,    0.75, 0.75, 0.45,   // Index: 9

        // back (x += 0.5 , y += 0.3)
        0.5, 2.3, 0,    1, 0, 1,   // Index: 10
        0.5, -1.2, 0,    1, 0, 1,   // Index: 11
        2, -1.2, 0,    1, 0, 1,   // Index: 12
        2, 2.3, 0,    1, 0, 1,   // Index: 13
        0.5, 2.3, 0,    1, 0, 1,   // Index: 14

        // inner back
        0.9, 1.8, 0,    1, 0, 1,   // Index: 15
        0.9, -0.7, 0,    1, 0, 1,   // Index: 16
        1.5, -0.7, 0,    1, 0, 1,   // Index: 17
        1.5, 1.8, 0,    1, 0, 1,   // Index: 18
        0.9, 1.8, 0,    1, 0, 1,   // Index: 19
    ];
  
    var indices0 = [
        // front
        0, 1,
        1, 2,
        2, 3,
        3, 4,
        4, 0,

        // inner front
        5, 6,
        6, 7,
        7, 8,
        8, 9,
        9, 5,

        // back
        10, 11,
        11, 12,
        12, 13,
        13, 14,
        14, 10,

        // inner back
        15, 16,
        16, 17,
        17, 18,
        18, 19,
        19, 15,

        // middle connection
        0, 10,
        1, 11,
        2, 12,
        3, 13,

        //inner middle connection
        5, 15,
        6, 16,
        7, 17,
        8, 18,
    ];
  
    // digit kedua (angka 3)
    var vertices3 = [
        // front
        2, 2, 0,    0.75, 0.75, 0.45,   // Index:  0 
        2, 1.5, 0,      0.75, 0.75, 0.45,   // Index:  1
        3.1, 1.5,  0,      0.75, 0.75, 0.45,   // Index:  2
        3.1, 0.4,  0,      0.75, 0.75, 0.45,   // Index:  3
        2.3, 0.4,  0,      0.75, 0.75, 0.45,   // Index:  4
        2.3, -0.1,  0,      0.75, 0.75, 0.45,   // Index:  5  
        3.1, -0.1,  0,      0.75, 0.75, 0.45,   // Index:  6
        3.1, -1,    0,      0.75, 0.75, 0.45,   // Index:  7
        2, -1,    0,      0.75, 0.75, 0.45,   // Index:  8 
        2,  -1.5,  0,      0.75, 0.75, 0.45,   // Index:  9
        3.5, -1.5,  0,      0.75, 0.75, 0.45,   // Index:  10
        3.5, 2,  0,      0.75, 0.75, 0.45,   // Index:  11
        2,   2,    0,      0.75, 0.75, 0.45,   // Index:  12
        
        //Bback (x =-0.3 y=+0.5)
        1.7,   2.5,    0,      1, 0, 1,   // Index:  13
        1.7,  2,  0,      1, 0, 1,   // Index:  14
        2.8, 2,  0,      1, 0, 1,   // Index:  15
        2.8, 0.9,  0,      1, 0, 1,   // Index:  16
        2, 0.9,  0,      1, 0, 1,   // Index:  17
        2, 0.4,  0,      1, 0, 1,   // Index:  18
        2.8, 0.4,  0,      1, 0, 1,   // Index:  19
        2.8, -0.5,    0,      1, 0, 1,   // Index:  20
        1.7, -0.5,    0,      1, 0, 1,   // Index:  21
        1.7,  -1,  0,      1, 0, 1,   // Index:  22
        3.2, -1,  0,      1, 0, 1,   // Index:  23
        3.2, 2.5,  0,      1, 0, 1,   // Index:  24
        1.7,   2.5,    0,      1, 0, 1,   // Index:  25

    ];
  
    var indices3 = [
        // front
        0, 1,
        1, 2,
        2, 3,
        3, 4,
        4, 5,
        5, 6,
        6, 7,
        7, 8,
        8, 9,
        9, 10,
        10, 11,
        11, 12,
        12, 0,

        // back
        13, 14,
        14, 15,
        15, 16,
        16, 17,
        17, 18,
        18, 19,
        19, 20,
        20, 21,
        21, 22,
        22, 23,
        23, 24,
        24, 25,
        25, 13,
 
        // middle connection
        0,13,
        1,14,
        2,15,
        3,16,
        4,17,
        5,18,
        6,19,
        7,20,
        8,21,
        9,22,
        10,23,
        11,24,
        12,25
    ];
  
    var objects = [
        {
            vertices: verticesA,
            indices: indicesA,
            type: gl.TRIANGLES,
        },
        {
            vertices: verticesR,
            indices: indicesR,
            type: gl.TRIANGLES,
        },
        {
            vertices: vertices0,
            indices: indices0,
            type: gl.LINES,
        },
        {
            vertices: vertices3,
            indices: indices3,
            type: gl.LINES,
        },
    ]
  
    // Vertex shader
    var vertexShaderCode = `
        attribute vec3 aPosition; // Karena 3d, kita ubah vec2 jadi vec3
        attribute vec3 aColor; // Vertex Color
        uniform mat4 uModel; // model = world
        uniform mat4 uView;
        uniform mat4 uProjection;
        varying vec3 vColor; // Fragment Color
        void main() {
            gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
            vColor = aColor;
        }
    `;
var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShaderObject, vertexShaderCode);
gl.compileShader(vertexShaderObject);

// Fragment shader
var fragmentShaderCode = `
    precision mediump float;
    varying vec3 vColor;
    void main() {
        gl_FragColor = vec4(vColor, 1.0);
    }
`;
var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
gl.compileShader(fragmentShaderObject);

// Shader program
var shaderProgram = gl.createProgram(); // Wadah dari executable (.exe)
gl.attachShader(shaderProgram, vertexShaderObject);
gl.attachShader(shaderProgram, fragmentShaderObject);
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);



// Variabel pointer ke GLSL
var uModel = gl.getUniformLocation(shaderProgram, "uModel");

// View
var cameraX = 0.0;
var cameraZ = 7.5;
var uView = gl.getUniformLocation(shaderProgram, "uView");
var view = mat4.create();

mat4.lookAt(
    view,
    [cameraX, 0.0, cameraZ], // Lokasi the eye or the camera
    [cameraX, 0.0, -10],    // The point where the camera look at
    [0.0, 1.0, 0.0]
);

// Projection
var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
var perspective = mat4.create();
mat4.perspective(perspective, Math.PI/3, 1.0, 0.5, 50.0);

function draw(vertices, indices, start = 0, end, glType) {
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // Kita mengajari GPU bagaimana caranya mengoleksi
    //  nilai posisi dari ARRAY_BUFFER
    //  untuk setiap verteks yang sedang diproses
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
        6 * Float32Array.BYTES_PER_ELEMENT, 
        0);
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
        6 * Float32Array.BYTES_PER_ELEMENT, 
        3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);  

    gl.drawElements(glType, indices.length, gl.UNSIGNED_SHORT, 0);
}
var thetaX = 0.0;
var thetaY = 0.0;
var freeze = false;
var horizontalSpeed = 0.0003;
var canvasWidth = 9;
var DeltaX = 0.0;
var DeltaY = 0.0;
var scaleSpeed = 0.0069;
var DeltaScale = 0;

const translate5 = () =>{
    var model = mat4.create();

    if (DeltaX >= (canvasWidth/2+2) || DeltaX <= (-canvasWidth/2+2)) {
      horizontalSpeed = horizontalSpeed * -1;
    }

    DeltaX += horizontalSpeed;

    mat4.translate(model, model, [DeltaX, DeltaY, 0.0]);
    
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");

    gl.uniformMatrix4fv(uModel,false, model);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);

    draw(objects[2].vertices, objects[2].indices, 0, objects[2].length, objects[2].type);
  }

  const scale6 = () =>{
    var model6 = mat4.create(); 

    if (DeltaScale >= 2 || DeltaScale <= -0.5) {
        scaleSpeed = scaleSpeed * -1;
    }
    
    DeltaScale += scaleSpeed;

    mat4.translate(model6, model6, [0, 0, DeltaScale]);

    gl.uniformMatrix4fv(uModel, false, model6);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);

    draw(objects[3].vertices, objects[3].indices, 0, objects[3].length, objects[3].type);
  }
  const rotateY = () =>{
    var modelY = mat4.create(); // Membuat matriks identitas
    mat4.rotateX(
        modelY, modelY, thetaX
    );

    gl.uniformMatrix4fv(uModel, false, modelY);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);

    draw(objects[1].vertices, objects[1].indices, 0, objects[1].length, objects[1].type);
  }
  const rotateB = () =>{
    var modelB = mat4.create(); // Membuat matriks identitas

    mat4.rotateY(
        modelB, modelB, thetaY
    );
    gl.uniformMatrix4fv(uModel, false, modelB);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);

    draw(objects[0].vertices, objects[0].indices, 0, objects[0].length, objects[0].type);
  }

function onKeydown(event) {
    if (event.keyCode == 37) { // Kiri
        thetaY += 0.1
    }
    if (event.keyCode == 39) {  // Kanan
        thetaY += -0.1;
    }

    if (event.keyCode == 38) {  // Atas
        thetaX += -0.1
    } else if (event.keyCode == 40) { // Bawah
        thetaX += 0.1
    }
}

function onKeyup(event) {
    if (event.keyCode == 32) freeze = !freeze;
    if (event.keyCode == 65 || event.keyCode == 68) horizontalSpeed = 0.0;
    if (event.keyCode == 87 || event.keyCode == 83) verticalSpeed = 0.0;
}


document.addEventListener("keydown", onKeydown);
document.addEventListener("keyup", onKeyup);

function render() {
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.125, 0.125, 0.15, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    scale6();
    translate5();
    rotateY();
    rotateB();
    requestAnimationFrame(render);
}
requestAnimationFrame(render);
}

window.onload = main;
