function main() {
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");
  
  var verticesLeft = [];
  var verticesRight = [];
  var verticesCenter = [];

  // huruf R
  var cubePoints1 = [
    [0.2, 0.25, 0.1],   
    [0.3, 0.25, 0.1],   
    [0.3, -0.25, 0.1],
    [0.2, -0.25, 0.1],  
    [0.2, 0.25, -0.1],   
    [0.3, 0.25, -0.1],   
    [0.3, -0.25, -0.1],
    [0.2, -0.25, -0.1],
  ];

  var cubePoints2 = [
    [0.3, 0.25, 0.1],   
    [0.4, 0.25, 0.1],   
    [0.5, 0.15, 0.1],
    [0.3, 0.15, 0.1],  
    [0.3, 0.25, -0.1],   
    [0.4, 0.25, -0.1],   
    [0.5, 0.15, -0.1],
    [0.3, 0.15, -0.1], 
  ];
  
  var cubePoints3 = [
    [0.4, 0.15, 0.1],   
    [0.5, 0.15, 0.1],   
    [0.5, 0.05, 0.1],
    [0.4, 0.05, 0.1],  
    [0.4, 0.15, -0.1],   
    [0.5, 0.15, -0.1],   
    [0.5, 0.05, -0.1],
    [0.4, 0.05, -0.1],  
  ];

  var cubePoints4 = [
    [0.3, 0.05, 0.1],   
    [0.5, 0.05, 0.1],   
    [0.4, -0.05, 0.1],
    [0.3, -0.05, 0.1],  
    [0.3, 0.05, -0.1],   
    [0.5, 0.05, -0.1],   
    [0.4, -0.05, -0.1],
    [0.3, -0.05, -0.1],    
  ];

  var cubePoints5 = [
    [0.3, -0.05, 0.1],   
    [0.4, -0.05, 0.1],   
    [0.5, -0.25, 0.1],
    [0.4, -0.25, 0.1],  
    [0.3, -0.05, -0.1],   
    [0.4, -0.05, -0.1],   
    [0.5, -0.25, -0.1],
    [0.4, -0.25, -0.1],         
  ];

  // angka 3
  var cubePoints6 = [
    [-0.4, 0.25, 0.1],   
    [-0.3, 0.25, 0.1],   
    [-0.3, 0.15, 0.1],
    [-0.5, 0.15, 0.1],  
    [-0.4, 0.25, -0.1],   
    [-0.3, 0.25, -0.1],   
    [-0.3, 0.15, -0.1],
    [-0.5, 0.15, -0.1],  
  ];

  var cubePoints7 = [
    [-0.3, 0.25, 0.1],   
    [-0.2, 0.25, 0.1],   
    [-0.2, -0.25, 0.1],
    [-0.3, -0.25, 0.1],  
    [-0.3, 0.25, -0.1],   
    [-0.2, 0.25, -0.1],   
    [-0.2, -0.25, -0.1],
    [-0.3, -0.25, -0.1],           
  ];

  var cubePoints8 = [
    [-0.4, 0.05, 0.1],   
    [-0.3, 0.05, 0.1],   
    [-0.3, -0.05, 0.1],
    [-0.4, -0.05, 0.1],  
    [-0.4, 0.05, -0.1],   
    [-0.3, 0.05, -0.1],   
    [-0.3, -0.05, -0.1],
    [-0.4, -0.05, -0.1],   
  ];

  var cubePoints9 = [
    [-0.5, -0.15, 0.1],   
    [-0.3, -0.15, 0.1],   
    [-0.3, -0.25, 0.1],
    [-0.4, -0.25, 0.1],  
    [-0.5, -0.15, -0.1],   
    [-0.3, -0.15, -0.1],   
    [-0.3, -0.25, -0.1],
    [-0.4, -0.25, -0.1],  
  ];

  var cubeNormals2 = [
    [-0.817039961064,0.3697760050126,0.1],  
    [-0.5826501888849,0.3697760050126,0.1],         
    [-0.5826501888849,0.2751340866928,0.1],   
    [-0.817039961064,0.2751340866928,0.1],  
    [-0.817039961064,0.3697760050126,-0.1], 
    [-0.5826501888849,0.3697760050126,-0.1],         
    [-0.5826501888849,0.2751340866928,-0.1],
    [-0.817039961064,0.2751340866928,-0.1]           
  ];

  var cubeColors = [
    [],
    [0.9, 0.9, 0],    
    [0.9, 0.9, 0],    
    [0.9, 0.9, 0],    
    [0.9, 0.9, 0],    
    [0.9, 0.9, 0],    
    [0.9, 0.9, 0],    
    []
  ];

  var cubeWhite = [
    [-0.05, 0.05, 0.05],
    [-0.05, -0.05, 0.05],
    [0.05, -0.05, 0.05],
    [0.05, 0.05, 0.05],
    [-0.05, 0.05, -0.05],
    [-0.05, -0.05, -0.05],
    [0.05, -0.05, -0.05],
    [0.05, 0.05, -0.05],
  ];

  var cubeWhiteColors = [
    [],
    [1.0, 1.0, 1.0],   
    [1.0, 1.0, 1.0],   
    [1.0, 1.0, 1.0],   
    [1.0, 1.0, 1.0],   
    [1.0, 1.0, 1.0],   
    [1.0, 1.0, 1.0],   
    []
  ];

  var cubeNormalsRight = [
    [],
    [0.0, 0.0, -1.0],    
    [0.0, -1.0, 0.0],    
    [1.0, 0.0, 0.0],    
    [0.0, 1.0, 0.0],   
    [0.0, 0.0, 1.0],   
    [-1.0, 0.0, 0.0],   
    []
  ];

  var cubeNormalsLeft = [
    [],
    [0.0, 0.0, -1.0],    
    [0.0, -1.0, 0.0],    
    [-1.0, 0.0, 0.0],    
    [0.0, 1.0, 0.0],   
    [0.0, 0.0, 1.0],   
    [1.0, 0.0, 0.0],   
    []
  ]; 

  var cubeNormals2 = [
    [],
    [0.0, 0.0, -1.0],   
    [-1.0, 0.0, 0.0],   
    [0.0, -1.0, 0.0],    
    [1.0, 0.0, 0.0],    
    [0.0, 0.0, 1.0],    
    [0.0, 1.0, 0.0],    
    []
  ];


  function quad(cube , cubeColor, cubeNormal, a, b, c, d, vertices) {
    var indices = [a, b, c, c, d, a];

    for (var i = 0; i < indices.length; i++) {
      var point = cube[indices[i]];
      for (var j = 0; j < point.length; j++) {
        vertices.push(point[j]);
      }
      var color = cubeColor[a];
      for (var j = 0; j < color.length; j++) {
        vertices.push(color[j]);
      }
      var normal = cubeNormal[a];
      for (var j = 0; j < normal.length; j++) {
        vertices.push(normal[j]);
      }
    }
  }

  // huruf R
  quad(cubePoints1, cubeColors, cubeNormalsRight, 1, 2, 3, 0, verticesRight);
  quad(cubePoints1, cubeColors, cubeNormalsRight, 2, 6, 7, 3, verticesRight);
  quad(cubePoints1, cubeColors, cubeNormalsRight, 3, 7, 4, 0, verticesRight);
  quad(cubePoints1, cubeColors, cubeNormalsRight, 4, 5, 1, 0, verticesRight);
  quad(cubePoints1, cubeColors, cubeNormalsRight, 5, 4, 7, 6, verticesRight);
  quad(cubePoints1, cubeColors, cubeNormalsRight, 6, 2, 1, 5, verticesRight);

  quad(cubePoints2, cubeColors, cubeNormalsRight, 1, 2, 3, 0, verticesRight);
  quad(cubePoints2, cubeColors, cubeNormalsRight, 2, 6, 7, 3, verticesRight);
  quad(cubePoints2, cubeColors, cubeNormalsRight, 3, 7, 4, 0, verticesRight);
  quad(cubePoints2, cubeColors, cubeNormalsRight, 4, 5, 1, 0, verticesRight);
  quad(cubePoints2, cubeColors, cubeNormalsRight, 5, 4, 7, 6, verticesRight);
  quad(cubePoints2, cubeColors, cubeNormalsRight, 6, 2, 1, 5, verticesRight);

  quad(cubePoints3, cubeColors, cubeNormalsRight, 1, 2, 3, 0, verticesRight); 
  quad(cubePoints3, cubeColors, cubeNormalsRight, 2, 6, 7, 3, verticesRight); 
  quad(cubePoints3, cubeColors, cubeNormalsRight, 3, 7, 4, 0, verticesRight);
  quad(cubePoints3, cubeColors, cubeNormalsRight, 4, 5, 1, 0, verticesRight); 
  quad(cubePoints3, cubeColors, cubeNormalsRight, 5, 4, 7, 6, verticesRight); 
  quad(cubePoints3, cubeColors, cubeNormalsRight, 6, 2, 1, 5, verticesRight);

  quad(cubePoints4, cubeColors, cubeNormalsRight, 1, 2, 3, 0, verticesRight); 
  quad(cubePoints4, cubeColors, cubeNormalsRight, 2, 6, 7, 3, verticesRight); 
  quad(cubePoints4, cubeColors, cubeNormalsRight, 3, 7, 4, 0, verticesRight);
  quad(cubePoints4, cubeColors, cubeNormalsRight, 4, 5, 1, 0, verticesRight); 
  quad(cubePoints4, cubeColors, cubeNormalsRight, 5, 4, 7, 6, verticesRight); 
  quad(cubePoints4, cubeColors, cubeNormalsRight, 6, 2, 1, 5, verticesRight);

  quad(cubePoints5, cubeColors, cubeNormalsRight, 1, 2, 3, 0, verticesRight); 
  quad(cubePoints5, cubeColors, cubeNormalsRight, 2, 6, 7, 3, verticesRight); 
  quad(cubePoints5, cubeColors, cubeNormalsRight, 3, 7, 4, 0, verticesRight);
  quad(cubePoints5, cubeColors, cubeNormalsRight, 4, 5, 1, 0, verticesRight); 
  quad(cubePoints5, cubeColors, cubeNormalsRight, 5, 4, 7, 6, verticesRight); 
  quad(cubePoints5, cubeColors, cubeNormalsRight, 6, 2, 1, 5, verticesRight);

  // angka 3
  quad(cubePoints6, cubeColors, cubeNormalsLeft, 1, 2, 3, 0, verticesLeft); 
  quad(cubePoints6, cubeColors, cubeNormalsLeft, 2, 6, 7, 3, verticesLeft); 
  quad(cubePoints6, cubeColors, cubeNormalsLeft, 3, 7, 4, 0, verticesLeft);
  quad(cubePoints6, cubeColors, cubeNormalsLeft, 4, 5, 1, 0, verticesLeft); 
  quad(cubePoints6, cubeColors, cubeNormalsLeft, 5, 4, 7, 6, verticesLeft); 
  quad(cubePoints6, cubeColors, cubeNormalsLeft, 6, 2, 1, 5, verticesLeft);

  quad(cubePoints7, cubeColors, cubeNormalsLeft, 1, 2, 3, 0, verticesLeft); 
  quad(cubePoints7, cubeColors, cubeNormalsLeft, 2, 6, 7, 3, verticesLeft); 
  quad(cubePoints7, cubeColors, cubeNormalsLeft, 3, 7, 4, 0, verticesLeft);
  quad(cubePoints7, cubeColors, cubeNormalsLeft, 4, 5, 1, 0, verticesLeft); 
  quad(cubePoints7, cubeColors, cubeNormalsLeft, 5, 4, 7, 6, verticesLeft); 
  quad(cubePoints7, cubeColors, cubeNormalsLeft, 6, 2, 1, 5, verticesLeft);

  quad(cubePoints8, cubeColors, cubeNormalsLeft, 1, 2, 3, 0, verticesLeft); 
  quad(cubePoints8, cubeColors, cubeNormalsLeft, 2, 6, 7, 3, verticesLeft); 
  quad(cubePoints8, cubeColors, cubeNormalsLeft, 3, 7, 4, 0, verticesLeft); 
  quad(cubePoints8, cubeColors, cubeNormalsLeft, 4, 5, 1, 0, verticesLeft); 
  quad(cubePoints8, cubeColors, cubeNormalsLeft, 5, 4, 7, 6, verticesLeft); 
  quad(cubePoints8, cubeColors, cubeNormalsLeft, 6, 2, 1, 5, verticesLeft); 


  quad(cubePoints9, cubeColors, cubeNormalsLeft, 1, 2, 3, 0, verticesLeft); 
  quad(cubePoints9, cubeColors, cubeNormalsLeft, 2, 6, 7, 3, verticesLeft); 
  quad(cubePoints9, cubeColors, cubeNormalsLeft, 3, 7, 4, 0, verticesLeft); 
  quad(cubePoints9, cubeColors, cubeNormalsLeft, 4, 5, 1, 0, verticesLeft); 
  quad(cubePoints9, cubeColors, cubeNormalsLeft, 5, 4, 7, 6, verticesLeft); 
  quad(cubePoints9, cubeColors, cubeNormalsLeft, 6, 2, 1, 5, verticesLeft);

  
  // white cube
  quad(cubeWhite, cubeWhiteColors, cubeNormals2, 1, 2, 3, 0, verticesCenter); 
  quad(cubeWhite, cubeWhiteColors, cubeNormals2, 2, 6, 7, 3, verticesCenter); 
  quad(cubeWhite, cubeWhiteColors, cubeNormals2, 3, 7, 4, 0, verticesCenter);
  quad(cubeWhite, cubeWhiteColors, cubeNormals2, 4, 5, 1, 0, verticesCenter); 
  quad(cubeWhite, cubeWhiteColors, cubeNormals2, 5, 4, 7, 6, verticesCenter); 
  quad(cubeWhite, cubeWhiteColors, cubeNormals2, 6, 2, 1, 5, verticesCenter);

  
  

  var vertexShaderSource = document.getElementById("vertexShaderSource").text;
  var fragmentShaderSource = document.getElementById("fragmentShaderSource").text;

  // Buat .c di GPU
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);

  // Kompilasi .c agar menjadi .o
  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);

  // Siapkan wadah untuk .exe (shader program)
  var shaderProgram = gl.createProgram();

  // Masukkan .o ke dalam wadah .exe
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  // Sambungkan antar .o agar bisa menjadi
  //    runnable context di dalam wadah .exe tadi
  gl.linkProgram(shaderProgram);

  // Mulai menggunakan konteks (cat)
  gl.useProgram(shaderProgram);

  // Ajarkan attribute a_Position di GPU
  //  tentang pengambilan data verteks dari ARRAY_BUFFER
  var aPositionLoc = gl.getAttribLocation(shaderProgram, "a_Position");
  var aColorLoc = gl.getAttribLocation(shaderProgram, "a_Color");
  var aNormalLoc = gl.getAttribLocation(shaderProgram, "a_Normal");
  

  gl.enable(gl.DEPTH_TEST);

  var primitive = gl.TRIANGLES;
  var offset = 0;
  // var nVertex = 36 * 7;

  var u_Model = gl.getUniformLocation(shaderProgram, 'u_Model');
  var u_View = gl.getUniformLocation(shaderProgram, 'u_View');
  var u_Projection = gl.getUniformLocation(shaderProgram, 'u_Projection');
  var model = glMatrix.mat4.create();
  var view = glMatrix.mat4.create();
  var projection = glMatrix.mat4.create();
  gl.uniformMatrix4fv(u_Projection, false, projection);

  var uNormalModel = gl.getUniformLocation(shaderProgram, 'u_NormalModel');
  var uAmbientColor = gl.getUniformLocation(shaderProgram, 'u_AmbientColor');
  gl.uniform3fv(uAmbientColor, [0.303, 0.303, 0.303]);  // desimalnya = 3 digit terakhir nrp + 300
  var uLightColor = gl.getUniformLocation(shaderProgram, 'u_LightColor');
  gl.uniform3fv(uLightColor, [1, 1, 1]);
  var uLightPosition = gl.getUniformLocation(shaderProgram, 'u_LightPosition');
  gl.uniform3fv(uLightPosition, [0, 0, 0]);
  var uSpecularColor = gl.getUniformLocation(shaderProgram, 'u_Specularcolor');
  var shininessVal = gl.getUniformLocation(shaderProgram, 'shininessVal');

 
  let lightPositionX = 0;
  let lightPositionZ = 0;
  let LightColor = 1;
  var linearspeed = 0.1;
  var angularspeed = glMatrix.glMatrix.toRadian(1);

  function onKeyDown(event) {
    console.log(event.keyCode);

    // Untuk testing rotation

    if (event.keyCode == 37) {
      glMatrix.mat4.rotate(view, view, angularspeed, [0.0, -linearspeed, 0.0]);
    } 
    else if (event.keyCode == 39) {
      glMatrix.mat4.rotate(view, view, angularspeed, [0.0, linearspeed, 0.0]);
    } 

    if (event.keyCode == 73) {

      for (let i = 0; i < 36 * 9; i++) {
        if (i % 9 == 0) {
          verticesCenter[2 + i] += 0.01;
        }
      }

      lightPositionZ -= 0.01;
    } 
    if (event.keyCode == 75) {
      for (let i = 0; i < 36 * 9; i++) {
        if (i % 9 == 0) {
          verticesCenter[2 + i] -= 0.01;
        }
      }
      lightPositionZ += 0.01;
    }

    if (event.keyCode == 76) {

      for (let i = 0; i < 36 * 9; i++) {
        if (i % 9 == 0) {
          verticesCenter[i] += 0.01;
        }
      }

      lightPositionX -= 0.01;
    } 
    if (event.keyCode == 74) {
      for (let i = 0; i < 36 * 9; i++) {
        if (i % 9 == 0) {
          verticesCenter[i] -= 0.01;
        }
      }
      lightPositionX += 0.01;
    }
  }
  document.addEventListener('keydown', onKeyDown);

  var lastPointOnTrackBall, currentPointOnTrackBall;
  var lastQuat = glMatrix.quat.create();
  function computeCurrentQuat() {
    // Secara berkala hitung quaternion rotasi setiap ada perubahan posisi titik pointer mouse
    var axisFromCrossProduct = glMatrix.vec3.cross(glMatrix.vec3.create(), lastPointOnTrackBall, currentPointOnTrackBall);
    var angleFromDotProduct = Math.acos(glMatrix.vec3.dot(lastPointOnTrackBall, currentPointOnTrackBall));
    var rotationQuat = glMatrix.quat.setAxisAngle(glMatrix.quat.create(), axisFromCrossProduct, angleFromDotProduct);
    glMatrix.quat.normalize(rotationQuat, rotationQuat);
    return glMatrix.quat.multiply(glMatrix.quat.create(), rotationQuat, lastQuat);
  }
  // Memproyeksikan pointer mouse agar jatuh ke permukaan ke virtual trackball
  function getProjectionPointOnSurface(point) {
    var radius = canvas.width / 3;  // Jari-jari virtual trackball kita tentukan sebesar 1/3 lebar kanvas
    var center = glMatrix.vec3.fromValues(canvas.width / 2, canvas.height / 2, 0);  // Titik tengah virtual trackball
    var pointVector = glMatrix.vec3.subtract(glMatrix.vec3.create(), point, center);
    pointVector[1] = pointVector[1] * (-1); // Flip nilai y, karena koordinat piksel makin ke bawah makin besar
    var radius2 = radius * radius;
    var length2 = pointVector[0] * pointVector[0] + pointVector[1] * pointVector[1];
    if (length2 <= radius2) pointVector[2] = Math.sqrt(radius2 - length2); // Dapatkan nilai z melalui rumus Pytagoras
    else {  // Atur nilai z sebagai 0, lalu x dan y sebagai paduan Pytagoras yang membentuk sisi miring sepanjang radius
      pointVector[0] *= radius / Math.sqrt(length2);
      pointVector[1] *= radius / Math.sqrt(length2);
      pointVector[2] = 0;
    }
    return glMatrix.vec3.normalize(glMatrix.vec3.create(), pointVector);
  }

  // Memutar kubus secara virtual trackball (teknik quaternion) menggunakan mouse
  var rotation = glMatrix.mat4.create();
  var dragging;
  function onMouseDown(event) {
    var x = event.clientX;
    var y = event.clientY;
    var rect = event.target.getBoundingClientRect();
    // Saat mouse diklik-kiri di area aktif browser,
    //  maka flag dragging akan diaktifkan
    if (
      rect.left <= x &&
      rect.right > x &&
      rect.top <= y &&
      rect.bottom > y
    ) {
      dragging = true;
    }
    // Untuk keperluan perhitungan di virtual trackball
    lastPointOnTrackBall = getProjectionPointOnSurface(glMatrix.vec3.fromValues(x, y, 0));
    currentPointOnTrackBall = lastPointOnTrackBall;
  }
  function onMouseUp(event) {
    // Ketika klik-kiri mouse dilipas
    dragging = false;
    if (currentPointOnTrackBall != lastPointOnTrackBall) {
      lastQuat = computeCurrentQuat();
    }
  }
  function onMouseMove(event) {
    if (dragging) {
      var x = event.clientX;
      var y = event.clientY;
      // Perhitungan putaran quaternion
      currentPointOnTrackBall = getProjectionPointOnSurface(glMatrix.vec3.fromValues(x, y, 0));
      glMatrix.mat4.fromQuat(rotation, computeCurrentQuat());
    }
  }
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('mousemove', onMouseMove);



  const drawVertices = (objectVertices, shininess, clear) => {
    var vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(objectVertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

  gl.vertexAttribPointer(
    aPositionLoc,
    3,
    gl.FLOAT,
    false,
    9 * Float32Array.BYTES_PER_ELEMENT,
    0);
  gl.vertexAttribPointer(
    aColorLoc,
    3,
    gl.FLOAT,
    false,
    9 * Float32Array.BYTES_PER_ELEMENT,
    3 * Float32Array.BYTES_PER_ELEMENT);
  gl.vertexAttribPointer(
    aNormalLoc,
    3,
    gl.FLOAT,
    false,
    9 * Float32Array.BYTES_PER_ELEMENT,
    6 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aPositionLoc);
  gl.enableVertexAttribArray(aColorLoc);
  gl.enableVertexAttribArray(aNormalLoc);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.uniformMatrix4fv(u_Model, false, model);
    gl.uniformMatrix4fv(u_View, false, view);

    // adjust lighting
    gl.uniform3fv(uLightPosition, [lightPositionX, 0, lightPositionZ]);
    gl.uniform3fv(uLightColor, [LightColor, LightColor, LightColor]);
    // gl.uniform3fv(uSpecularColor, [1.0, 1.0, 1.0]);

    var normalModel = glMatrix.mat3.create();

    gl.uniform1f(shininessVal, shininess);
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

        if (clear) {
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      }
      gl.drawArrays(primitive, offset, objectVertices.length / 9);
  }
  
  function render() {
    model = glMatrix.mat4.create();
    glMatrix.mat4.multiply(model, model, rotation);
    gl.uniformMatrix4fv(u_Model, false, model);
    var normal = glMatrix.mat3.create();
    glMatrix.mat3.normalFromMat4(normal, model);
    gl.uniformMatrix3fv(uNormalModel, false, normal);
    gl.clearColor(0.0, 0.0, 0.1, 1)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    drawVertices(verticesLeft, 100, true);
    drawVertices(verticesRight, 1, false);
    drawVertices(verticesCenter, 300, false);
    requestAnimationFrame(render);
    resizer();
  }
  requestAnimationFrame(render);

  function resizer() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    minVal = Math.min(gl.canvas.width, gl.canvas.height);
    gl.viewport(gl.canvas.width / 2 - minVal / 2, gl.canvas.height / 2 - minVal / 2, minVal, minVal);
  }

  window.addEventListener('resize', resizer);
  
}
