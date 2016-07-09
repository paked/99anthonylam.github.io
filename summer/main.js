var scene, camera, renderer;

function init(){
    scene= new THREE.Scene();
    var width= window.innerWidth;
    var height= window.innerHeight;
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 20000);
    camera.position.set(0,6,0);
    scene.add(camera);
    window.addEventListener('resize',function(){
        var width= window.innerWidth;
        var height= window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect= width/height;
        camera.updateProjectionMatrix();
    });
    var light= new THREE.PointLight(0xffffff);
    light.position.set(-100,200,100);
    scene.add(light);
/*    var loader= new THREE.JSONLoader();
    loader.load("treehouse_logo.js", function(geometry){
        var material= new THREE.MeshLambertMaterial({color: 0x55B663});
        mesh= new THREE.Mesh(geometry, material);
        scene.add(mesh);
    });*/
    
	var directions  = ["posx", "negx", "posy", "negy", "posz", "negz"];
	var imageSuffix = ".jpg";
	var skyGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );	
	var materialArray = [];
	for (var i = 0; i < 6; i++)
		materialArray.push( new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture(directions[i] + imageSuffix ),
			side: THREE.BackSide
		}));
	var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
	var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
	scene.add( skyBox );   
	
	var geometry = new THREE.Geometry();
for( var j = 0; j < Math.PI; j += 2 * Math.PI / 100 ) {
    var v = new THREE.Vector3( Math.cos( j ), Math.sin( j ), 0 );
    geometry.vertices.push( v );
}

line.setGeometry( geometry );
line.setGeometry( geometry, function( p ) { return 2; } ); // makes width 2 * lineWidth
line.setGeometry( geometry, function( p ) { return 1 - p; } ); // makes width taper
line.setGeometry( geometry, function( p ) { return 2 + Math.sin( 50 * p ); } ); // makes width sinusoidal
var material = new THREE.MeshLineMaterial();
var mesh = new THREE.Mesh( line.geometry, material ); // this syntax could definitely be improved!
scene.add( mesh );
	
	
	
	
	
	
	
	
	
// 	var waterTexture = new THREE.ImageUtils.loadTexture( 'water.jpg' );
// 	waterTexture.wrapS = waterTexture.wrapT = THREE.RepeatWrapping; 

// 	this.customUniforms2 = {
// 		baseTexture: 	{ type: "t", value: waterTexture },
// 		baseSpeed: 		{ type: "f", value: 1.15 },
// 		noiseScale:		{ type: "f", value: 0.2 },
// 		alpha: 			{ type: "f", value: 0.8 },
// 		time: 			{ type: "f", value: 1.0 }
// 	};
// 	var customMaterial2 = new THREE.ShaderMaterial( 
// 	{
// 	    uniforms: customUniforms2,
// 	}   );
// 	customMaterial2.side = THREE.DoubleSide;
// 	customMaterial2.transparent = true;
// 	var flatGeometry = new THREE.PlaneGeometry( 500, 100 );
//     var surface = new THREE.Mesh( flatGeometry, customMaterial2 );
// 	surface.position.set(60,50,150);
// 	scene.add( surface );	
    controls= new THREE.OrbitControls(camera, renderer.domElement);
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
}


init();
animate();