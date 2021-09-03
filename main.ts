scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    story.printText("teleporting...", 50, 50, 5, 9)
    tiles.placeOnRandomTile(steve, assets.tile`myTile3`)
    story.printText("teleportation done.", 50, 50, 5, 9)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (steve.isHittingTile(CollisionDirection.Bottom)) {
        steve.vy = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    story.printText("YOU DID IT!!!!!!!!!!!!!!!!!(this is the end)", 50, 50, 5, 9)
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (steve.isHittingTile(CollisionDirection.Bottom)) {
        steve.vy = 120
    }
})
let steve: Sprite = null
story.printText("WELCOME TO MINECRAFT PARKOUR HARD!!!!!!!!!!!!!!", 50, 50, 1, 15)
tiles.setTilemap(tilemap`level2`)
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
tiles.placeOnRandomTile(steve, assets.tile`myTile2`)
tiles.coverAllTiles(assets.tile`myTile2`, assets.tile`myTile0`)
tiles.coverAllTiles(assets.tile`myTile3`, assets.tile`myTile0`)
tiles.coverAllTiles(assets.tile`myTile4`, assets.tile`myTile0`)
scene.cameraFollowSprite(steve)
controller.moveSprite(steve, 100, 0)
steve.ay = 100
