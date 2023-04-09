import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Load the GLB file and add it to the scene
const loader = new GLTFLoader();
loader.load( '/model.glb', function ( gltf ) {
	console.log('GLB file loaded successfully.');
	scene.add( gltf.scene );
    // Set the model's position and scale
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.scale.set(20, 20, 20);
    gltf.scene.traverse( function( node ) { if ( node.isMesh ) node.material = new THREE.MeshStandardMaterial(); } );

}, function ( xhr ) {
	console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
}, 
function ( error ) {
	console.error( error );
} );

// Set the camera position
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;




    // Animate the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.gammaFactor=2.2;
  cube.rotation.x += 0.002;
  cube.rotation.y += 0.002;
  renderer.render(scene, camera);
}

animate();