let colors = ['#f0101c', '#f05697', '#0b469b', '#32b6c3', '#f78000', '#fddf0e', '#9fe063', '#315423', '#16141b','#ffffff'];
let PALETTE;

function setup() {
	createCanvas(1000,1000);
	colorMode(HSB, 360, 100, 100, 100);
	ellipseMode(CENTER);
	noLoop();
}

function draw() {
	recursivePattern(width/2,height/2,2*width,5);
}


function recursivePattern(x,y,mySize,level)
{
	level -= 1;
	PALETTE = shuffle(colors, true);
	PALETTE = PALETTE.slice(0, 3);
	patternColors(shuffle(PALETTE));
	pattern(randPattern(123));
	circlePattern(x,y,mySize,mySize);
	if (level >= 0)
	{
		for(let i=0;i < 5;i++)
		{
			let xx = random(0,width);
			let yy = random(0,height);
		  recursivePattern(xx,yy,mySize/2,level);
		}
	}
}

// taken from Sayama's https://openprocessing.org/sketch/1278485

function randPattern(t)
{
	const ptArr = [
		PTN.stripe(t / int(random(6, 12))),
		PTN.stripeCircle(t / int(random(6, 12))),
		PTN.stripePolygon(int(random(3, 7)),  int(random(6, 12))),
		PTN.stripeRadial(TAU /  int(random(6, 30))),
		PTN.wave(t / int(random(1, 3)), t / int(random(10, 20)), t / 5, t / 10),
		PTN.dot(t / 10, t / 10 * random(0.2, 1)),
		PTN.checked(t / int(random(5, 20)), t / int(random(5, 20))),
		PTN.cross(t / int(random(10, 20)), t / int(random(20, 40))),
	]
	return random(ptArr);
}