

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 3, 3, 3 );
var geoSphere = new THREE.SphereGeometry(0.2, 16, 16);
var geoCone = new THREE.ConeGeometry(0.1, 0.2, 8, 4, false, 0, 2*Math.PI);

function randomColor (){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}

for (let i = 0; i < 100; i++) {
    var color = randomColor();
    var material = new THREE.MeshBasicMaterial({color: color, aoMapIntensity: 0.6});
    var cube = new THREE.Mesh( geometry, material );
    var sphere = new THREE.Mesh( geoSphere, material );
    var cone = new THREE.Mesh(geoCone, material);
    cone.position.set((Math.random()-0.5), (Math.random()-0.5), (Math.random()-0.5)).normalize();
    //  cone.rotation.x = 2
    cone.position.x *= 50;
    cone.position.y *= 50;
    cone.position.z *= 50;
    cone.name = "sphere" + i;
    scene.add( cone );
    sphere.position.set((Math.random()-0.5), (Math.random()-0.5), (Math.random()-0.5)).normalize();
    sphere.position.x *= 50;
    sphere.position.y *= 50;
    sphere.position.z *= 50;
    sphere.name = "sphere" + i;
    scene.add( sphere );
    cube.position.set((Math.random()-0.5), (Math.random()-0.5), (Math.random()-0.5)).normalize();
    cube.position.x *= 50;
    cube.position.y *= 50;
    cube.position.z *= 50;
    cube.rotation.y = Math.random()*360;
    cube.name = "cube" + i;
    scene.add( cube );


}


camera.position.z = 0;
camera.position.x = 0;
camera.position.y = 0;

console.log(scene);
var animate = function () {
    requestAnimationFrame( animate );


    scene.children.forEach(function(element) {
        //   var dx = Math.random()*0.1;
        var dy = Math.random()*0.3;
        var dz = Math.random()*2;
        let rx = Math.random()*0.01;

//element.position.x += dx;
//element.position.y += dy;
        const BOX = 50;
        element.position.z += dz;
        element.rotation.x += rx;

        if (element.position.x > BOX) {
            element.position.x = -BOX;
        }
        if (element.position.y > BOX) {
            element.position.y = -BOX;
        }
        if (element.position.z > BOX) {
            element.position.z = -BOX;
        }

    });
    let camdy = 0.01;
    camera.rotation.z += camdy;
    camera.rotation.y += camdy;
    camera.rotation.x += camdy;
    console.log(camera.position.y);

    renderer.render( scene, camera );
};

animate();
