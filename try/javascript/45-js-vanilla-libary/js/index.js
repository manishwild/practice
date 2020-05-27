window.onload = ()=>{
//first we need to create a stage
var stage = new Konva.Stage({
    container:'container', //id of container div
    width:500,
    height:500
})
//then create layer
var layer = new Konva.Layer()
//create our shape
var circle = new Konva.Circle({
    x:stage.width()/2,
    y:stage.height()/2,
    radius:70,
    fill:'aqua',
    stroke:'blue',
    strokeWidth:4,
    draggable:true
})
//add the shape to the layer
layer.add(circle)
//add the layer to the stage
stage.add(layer)
//draw the image
layer.draw()




}