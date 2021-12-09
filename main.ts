scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`Road Level 1`)
let Car = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 9 9 9 . . . . 
    . . . 9 d 9 9 9 9 9 9 c 9 . . . 
    . . 9 c d 9 9 9 9 9 9 c c 9 . . 
    . 9 c c d d d d d d 9 c c d 9 d 
    . 9 c 9 a a a a a a a b c d 9 9 
    . 9 9 a b b a b b b a a b d 9 9 
    . 9 a b b b a b b b b a 9 9 9 9 
    . a a 9 9 9 a 9 9 9 9 9 a 9 9 9 
    . a a a a a a f a a a f a 9 d d 
    . a a a a a a f a a f a a a 9 d 
    . a a a a a a f f f a a a a a a 
    . a f f f f a a a a f f f a a a 
    . . f f f f f a a f f f f f a . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(Car)
Car.z = 4
Car.setVelocity(100, 30)
controller.moveSprite(Car, 300, 300)
