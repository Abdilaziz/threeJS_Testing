// Our Javascript will go here.

// var THREE = require('three');
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
const scene = new Scene();
// field of view, aspect ratio, near , far ( parameters used to describe a folcrum for the cameras perspective )
var camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new WebGLRenderer();
// setSize(window.innerWidth/2, window.innerHeight/2, false) will render your app at half resolution, 
// given that your <canvas> has 100% width and height
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement ); // add canvas element to the DOM

// create a cube wit these vertices and fill (color)
var geometry = new BoxGeometry( 1, 1, 1 );
var material = new MeshBasicMaterial( { color: 0x00ff00 } );
// a mesh is an object that takes geometry and applies a material to it
var cube = new Mesh( geometry, material );
// by default things added tot the scene will be added to coordinates (0,0,0)
scene.add( cube );
// this is why you move the camera out so there is no overlap
camera.position.z = 5;

// loop that causes renderer to draw the scene every time the screen is refreshed
// (60 times per second on most screens)
// requestAnimationFrame has many advantages when compared to setInterval (like pausing when user navigates to another browser tab)
function animate() {
    requestAnimationFrame( animate );
    // animation to rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
}
animate();