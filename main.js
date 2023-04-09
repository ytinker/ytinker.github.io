import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const loader = new GLTFLoader();

    // Create the scene, camera, and renderer
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add some lights to the scene
const ambientLight = new AmbientLight(0xffffff, 0.3);
const directionalLight = new DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(-1, 2, 4);
scene.add(ambientLight, directionalLight);

// Load the GLB file and add it to the scene
const loader = new GLTFLoader();
loader.load( 'miku_hatsune_rig.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );


    // Set the camera position
    camera.position.set(0, 1, 4);

    // Animate the scene
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();