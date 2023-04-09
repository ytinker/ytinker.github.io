import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.151.3/build/three.min.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.151.3/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const loader = new GLTFLoader();

loader.load( 'miku_hatsune_rig.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {
	
	console.error( error );

} );