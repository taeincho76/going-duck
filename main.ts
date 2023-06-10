scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`empty cave`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level10`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    truck.vy = -100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes-up`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.gameOver(false)
})
let truck: Sprite = null
truck = sprites.create(assets.image`truck2`, SpriteKind.Player)
animation.runImageAnimation(
truck,
assets.animation`olor`,
100,
true
)
truck.ay = 300
truck.vx = 85
scene.cameraFollowSprite(truck)
truck.sayText("호기심에 의해 끝까지 가세요.")
pause(1500)
truck.sayText("끝에는 무언가 있습니다.")
pause(1500)
truck.sayText("목 좀 돌리고 하세요..")
pause(1500)
truck.sayText("4.5" + "초를 플레이 했습니다..")
pause(1500)
truck.sayText("F-Killer는 완벽합니다.")
pause(randint(1500, 2000))
truck.sayText("끝에는 아무것도 없다는")
pause(randint(1500, 2000))
truck.sayText("전설이 있습니다.")
pause(randint(1500, 2000))
truck.sayText("그래도, 계속 하시")
pause(randint(5000, 6000))
truck.sayText("겠습니")
pause(randint(5000, 6000))
truck.sayText("까?")
pause(randint(1500, 2000))
truck.sayText("라고 해봤")
pause(randint(2000, 3000))
truck.sayText("습니다.")
