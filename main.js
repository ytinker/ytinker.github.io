import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Load the GLB file and add it to the scene
const loader = new GLTFLoader();
loader.load( 'model.glb', function ( gltf ) {
	console.log('GLB file loaded successfully.');
	scene.add( gltf.scene );
    // Set the model's position and scale
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.scale.set(100, 100, 100);

}, function ( xhr ) {
	console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
}, 
function ( error ) {
	console.error( error );
} );

// Set the camera position
camera.position.set(0, 10, 4);
const ambientLight = new THREE.AmbientLight( 0xffffff, 0.5 ); // color, intensity

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

camera.position.z = 5;

scene.add( ambientLight );

    // Animate the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();