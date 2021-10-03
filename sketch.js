
var bg,bgimg;
var astro,astroanime;
var oxygen,oxygenimg,oxygengrp;

function preload(){
  bgimg=loadImage("Pictures/moon.png");
  oxygenimg=loadImage("Pictures/OxygenTank.png");
  astroanime=loadAnimation("Pictures/a1.png","Pictures/a2.png",
  "Pictures/a3.png","Pictures/a4.png","Pictures/a5.png","Pictures/a6.png",
  "Pictures/a7.png","Pictures/a8.png","Pictures/a9.png","Pictures/a10.png"
  )

}

function setup() {
createCanvas(1900,940);

bg=createSprite(950,720,1900,940);
bg.addImage(bgimg)
bg.scale=1;
oxygengrp=new Group()
astro=createSprite(80,730);
astro.addAnimation("running",astroanime)

}

function draw() {
  background(0);
  drawSprites();
}

