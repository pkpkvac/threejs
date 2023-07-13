// Scene Mesh Camera Renderer

// Scene
const scene = new THREE.Scene();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(
  75,
  aspect.width / aspect.height,
  1,
  2000
); // near value is 1, far value is 2000
camera.position.z = 3;

scene.add(camera);

// Renderer - responsible for drawing the scene on teh canvas
const canvas = document.querySelector(".draw"); // select canvas element
const renderer = new THREE.WebGLRenderer({ canvas }); // add webglrenderer
renderer.setSize(aspect.width, aspect.height); // set size of renderer

// Clock class
const clock = new THREE.Clock();

const animate = () => {
  // GetElapsedTime
  const elapsedTime = clock.getElapsedTime();

  // Update Rotation on X axis
  mesh.rotation.y = elapsedTime * (Math.PI / 2); // 360 degrees

  // Renderer
  renderer.render(scene, camera); // render scene and camera

  // RequestAnimationFrame
  window.requestAnimationFrame(animate);
};
animate();

// mesh.rotation.x += 0.01;
// mesh.position.x += 0.01;
// mesh.position.z += 0.01;
// function will get called 60 times per second on some devices, 0.01 * 60 = 0.6 on X per second
// function will get called 120 times per second on some devices, 0.01 * 120 = 1.2 on X per second
// so we need to use a clock to make it consistent
// fps
