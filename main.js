function main() {
    var canvas = document.getElementById("myCanvas");
    canvas.width=1000;  //window.innerWidth;
    canvas.height=1000; //window.innerHeight;
    var gl = canvas.getContext("webgl");

    var vertices = [
        //Vertex - vertex dan warna Segitiga-1
        0.0, 0.9, 0.1, 0.9, 0.9,   //x += 0.5 | y += 0,4
        1.0, 0.9, 0.5, 0.0, 0.5,
        0.0, 0.4, 0.5, 0.0, 0.5,
        //Vertex - vertex dan warna Segitiga-2
        1.0, 0.9, 0.5, 0.0, 0.5,
        1.0, 0.4, 0.5, 0.0, 0.5,
        0.0, 0.4, 0.5, 0.0, 0.5,
        //Vertex - vertex dan warna Segitiga-3
        0.0, 0.5, 0.5, 0.0, 0.5,
        1.0, -0.1, 0.5, 0.0, 0.5,
        0.0, -0.1, 0.5, 0.0, 0.5,
        //Vertex - vertex dan warna Segitiga-4
        0.1, 0.8, 1.0, 0.0, 0.0,
        0.9, 0.8, 1.0, 0.0, 0.0,
        0.1, 0.5, 1.0, 0.0, 0.0,
        //Vertex - vertex dan warna Segitiga-5
        0.1, 0.5, 1.0, 0.0, 0.0,
        0.9, 0.8, 1.0, 0.0, 0.0,
        0.9, 0.5, 1.0, 0.0, 0.0,
        //Vertex - vertex dan warna Segitiga-6
        0.1, -0.1, 1.0, 0.0, 0.0,
        0.8, -0.1, 1.0, 0.0, 0.0,
        0.1, 0.3, 1.0, 0.0, 0.0,

        //HURUF A
        //sumbu x -=1
        //=vertex 1 &
        -1.0, 0.9, 0.1, 0.9, 0.9,   
        0.0, 0.9, 0.5, 0.0, 0.5,
        -1.0, 0.4, 0.5, 0.0, 0.5,
        //=Vertex 2
        0.0, 0.9, 0.5, 0.0, 0.5,
        0.0, 0.4, 0.5, 0.0, 0.5,
        -1.0, 0.4, 0.5, 0.0, 0.5,
        //=Vertex 4 
        -0.9, 0.8, 1.0, 0.0, 0.0,
        -0.1, 0.8, 1.0, 0.0, 0.0,
        -0.9, 0.5, 1.0, 0.0, 0.0,
        //=Vertex 5
        -0.9, 0.5, 1.0, 0.0, 0.0,
        -0.1, 0.8, 1.0, 0.0, 0.0,
        -0.1, 0.5, 1.0, 0.0, 0.0,
        
        // sumbu y-=0.5
        //=vertex 1 &
        -1.0, 0.4, 0.1, 0.9, 0.9,   
        0.0, 0.4, 0.5, 0.0, 0.5,
        -1.0, -0.1, 0.5, 0.0, 0.5,
        //=Vertex 2
        0.0, 0.4, 0.5, 0.0, 0.5,
        0.0, -0.1, 0.5, 0.0, 0.5,
        -1.0, -0.1, 0.5, 0.0, 0.5,
        
        //=Vertex 4 
        -0.9, 0.3, 1.0, 0.0, 0.0,
        -0.1, 0.3, 1.0, 0.0, 0.0,
        -0.9, -0.1, 1.0, 0.0, 0.0,  //sumbu y -=0.6
        //=Vertex 5
        -0.9, -0.1, 1.0, 0.0, 0.0,   //sumbu y -=0.6
        -0.1, 0.3, 1.0, 0.0, 0.0,
        -0.1, -0.1, 1.0, 0.0, 0.0,   //sumbu y -=0.6
        ];

    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = document.getElementById("vertexShaderCode").text;
  
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
  
    var fragmentShaderCode = document.getElementById("fragmentShaderCode").text;
  
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
  
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
  
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    var aPosition = gl.getAttribLocation(shaderProgram, "a_Position");
    var aColor = gl.getAttribLocation(shaderProgram, "a_Color");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
        );
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
        );
    gl.enableVertexAttribArray(aPosition);
    gl.enableVertexAttribArray(aColor);

    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(0, 0, canvas.width, canvas.height);
  
    var offset = 0;
    var count = 100; //Jumlah titik (vertex*3)
    gl.drawArrays(gl.TRIANGLES, offset, count);


    var vertices2 = [
        //Vertex - vertex untuk membentuk Angka 3
        0.1, -0.1, 1.0, 1.0, 1.0,
        0.9, -0.1, 1.0, 1.0, 1.0,
        0.9, -0.9, 1.0, 1.0, 1.0,
        0.1, -0.9, 1.0, 1.0, 1.0,
        0.1, -0.74, 1.0, 1.0, 1.0,
        0.65, -0.74, 1.0, 1.0, 1.0,
        0.65, -0.58, 1.0, 1.0, 1.0,
        0.35, -0.58, 1.0, 1.0, 1.0,
        0.35, -0.42, 1.0, 1.0, 1.0,
        0.65, -0.42, 1.0, 1.0, 1.0,
        0.65, -0.26, 1.0, 1.0, 1.0,
        0.1, -0.26, 1.0, 1.0, 1.0,
    ];
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices2), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode2 = document.getElementById("vertexShaderCode").text;
  
    var vertexShader2 = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader2, vertexShaderCode2);
    gl.compileShader(vertexShader2);
    
    var fragmentShaderCode2 = document.getElementById("fragmentShaderCode").text;
  
    var fragmentShader2 = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader2, fragmentShaderCode2);
    gl.compileShader(fragmentShader2);
  
    var shaderProgram2 = gl.createProgram();
    gl.attachShader(shaderProgram2, vertexShader2);
    gl.attachShader(shaderProgram2, fragmentShader2);
    gl.linkProgram(shaderProgram2);
    gl.useProgram(shaderProgram2);
  
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    var aPosition2 = gl.getAttribLocation(shaderProgram2, "a_Position");
    var aColor2 = gl.getAttribLocation(shaderProgram2, "a_Color");
    gl.vertexAttribPointer(
        aPosition2,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
        );
    gl.vertexAttribPointer(
        aColor2,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
        );
    gl.enableVertexAttribArray(aPosition2);
    gl.enableVertexAttribArray(aColor2);
  
    var primitive2 = gl.LINE_LOOP;
    var offset2 = 0;
    var count2 = 12;
    gl.drawArrays(primitive2, offset2, count2);


    var vertices3 = [
        //Vertex - vertex untuk membentuk Angka 0
        //kotak luar
        -0.9, -0.1, 1.0, 1.0, 1.0,
        -0.1, -0.1, 1.0, 1.0, 1.0,
        
        -0.1, -0.1, 1.0, 1.0, 1.0,
        -0.1, -0.9, 1.0, 1.0, 1.0,
        
        -0.1, -0.9, 1.0, 1.0, 1.0,
        -0.9, -0.9, 1.0, 1.0, 1.0,
        
        -0.9, -0.9, 1.0, 1.0, 1.0,
        -0.9, -0.1, 1.0, 1.0, 1.0,

        //kotak dalam
        -0.74, -0.26, 1.0, 1.0, 1.0,
        -0.26, -0.26, 1.0, 1.0, 1.0,
        
        -0.26, -0.26, 1.0, 1.0, 1.0,
        -0.26, -0.74, 1.0, 1.0, 1.0,
        
        -0.26, -0.74, 1.0, 1.0, 1.0,
        -0.74, -0.74, 1.0, 1.0, 1.0,
        
        -0.74, -0.74, 1.0, 1.0, 1.0,
        -0.74, -0.26, 1.0, 1.0, 1.0,
    ];
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices3), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode3 = document.getElementById("vertexShaderCode").text;
  
    var vertexShader3 = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader3, vertexShaderCode3);
    gl.compileShader(vertexShader3);
    
    var fragmentShaderCode3 = document.getElementById("fragmentShaderCode").text;
  
    var fragmentShader3 = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader3, fragmentShaderCode3);
    gl.compileShader(fragmentShader3);
  
    var shaderProgram3 = gl.createProgram();
    gl.attachShader(shaderProgram3, vertexShader3);
    gl.attachShader(shaderProgram3, fragmentShader3);
    gl.linkProgram(shaderProgram3);
    gl.useProgram(shaderProgram3);
  
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    var aPosition3 = gl.getAttribLocation(shaderProgram3, "a_Position");
    var aColor3 = gl.getAttribLocation(shaderProgram3, "a_Color");
    gl.vertexAttribPointer(
        aPosition3,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
        );
    gl.vertexAttribPointer(
        aColor3,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
        );
    gl.enableVertexAttribArray(aPosition3);
    gl.enableVertexAttribArray(aColor3);
  
    var primitive3 = gl.LINES;
    var offset3 = 0;
    var count3 = 16;
    gl.drawArrays(primitive3, offset3, count3);

}