controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnRandomTile(steve, assets.tile`myTile3`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (steve.isHittingTile(CollisionDirection.Bottom)) {
        steve.vy = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (steve.isHittingTile(CollisionDirection.Bottom)) {
        steve.vy = 120
    }
})
let steve: Sprite = null
tiles.setTilemap(tilemap`level1`)
steve = sprites.create(img`
    . . . e e e e e e e . . . . . . 
    . . . e d d d d d e . . . . . . 
    . . . . d f d f d . . . . . . . 
    . . . . d d d d d . . . . . . . 
    . . . . d f f f d . . . . . . . 
    . . . . d d d d d . . . . . . . 
    . . 8 8 8 8 8 8 8 8 8 . . . . . 
    . . 8 8 8 8 8 8 8 8 8 . . . . . 
    . . 8 8 8 8 8 8 8 8 8 . . . . . 
    . . d d 8 8 8 8 8 d d . . . . . 
    . . d d 8 8 8 8 8 d d . . . . . 
    . . d d 8 8 8 8 8 d d . . . . . 
    . . . . e e f e e . . . . . . . 
    . . . . e e f e e . . . . . . . 
    . . . . e e f e e . . . . . . . 
    . . . . e e f e e . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(steve, assets.tile`myTile1`)
tiles.coverAllTiles(assets.tile`myTile1`, assets.tile`myTile0`)
tiles.coverAllTiles(assets.tile`myTile3`, assets.tile`myTile0`)
scene.cameraFollowSprite(steve)
controller.moveSprite(steve, 100, 0)
steve.ay = 100
