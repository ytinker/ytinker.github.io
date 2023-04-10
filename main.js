import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, screen.width / screen.height, 0.1, 1000 );
scene.background = new VideoColorSpace('white');
const light = new THREE.AmbientLight( 0x040404 ); // soft white light

const renderer = new THREE.WebGLRenderer();
renderer.gammaFactor=2.2;
renderer.setSize( screen.width, screen.height );
document.body.appendChild( renderer.domElement );

// Set the camera position


scene.add( light );


// Load the GLB file and add it to the scene
const loader = new GLTFLoader();
loader.load( 'model.glb', function ( gltf ) {
	console.log('GLB file loaded successfully.');
	scene.add( gltf.scene );
  camera.position.z = 3;
  camera.position.y =0;
  camera.lookAt(scene.position); //add this line
  gltf.animations;
  gltf.scene;
  gltf.scenes;
  gltf.cameras;
  gltf.asset;
    // Set the model's position and scale

}, function ( xhr ) {
	console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
}, 
function ( error ) {
	console.error( error );
} );



    // Animate the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();