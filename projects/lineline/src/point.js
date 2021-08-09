export default class Point{
    constructor(x, y, draggable){
        this.position = {x: x, y: y};
        this.draggable = draggable;
        this.dragMargin = 10; //px
        this.radius = 10; //px
        this.dragging = false;
        this.offsetFromMouse = {x:0,y:0};
        this.visible = true;
    }  

    click(cursor){
        let dy = (cursor.y - this.position.y);
        let dx = (cursor.x - this.position.x);
        let distance = 
        Math.sqrt(dx*dx + dy*dy);
        if(distance <= this.radius+this.dragMargin && this.draggable){
            this.dragging = true;
            this.offsetFromMouse.x = dx;
            this.offsetFromMouse.y = dy;
        }
    }

    drag(cursor){
        this.position.x = cursor.x - this.offsetFromMouse.x; //retains its relative position to mouse from when it was clicked
        this.position.y = cursor.y - this.offsetFromMouse.y;
    }

    draw(ctx){
        if(this.visible){
            ctx.beginPath(); 
            ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false); 
            ctx.fillStyle = 'rgba(255,255,255,0.5)';
            ctx.fill(); 
        }
    }
}