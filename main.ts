enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Dead
}
namespace SpriteKind {
    export const Ground = SpriteKind.create()
    export const Cloud = SpriteKind.create()
}
function initGround () {
    ground1 = sprites.create(img`
        ...................................................................................cccc...........................................................................
        ..................................................................................c....c..........................................................................
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc......ccccccccccccccccc....ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        .........................................................................................................cccc.....................................................
        ..................................................................................................................................................................
        ..cccc..c.......................c..cccc.........................cccc..c.............c..........................cccc..c...........c..ccc.................c..ccc....
        ..................................................................................................................................................................
        ...............cccc..c.........................cccc.c.......c..............cc.c........cccc..c.....cccc..c..................c...............cccc..c...............
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        `, SpriteKind.Ground)
    ground2 = sprites.create(img`
        .....................................................cccc..................cccc...................................................................................
        ....................................................c....c................c....c..................................................................................
        cccccccccccccccccccccccccccccccccccccccccccccccccccc......cccccccccccccccc......cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ....ccc..c.................ccc..c...........c..cccc..........................c.............c..cccc.........................cccc..c.......................c..cccc..
        ..................................................................................................................................................................
        ...............c..cccc...............c..................c..cccc.....c..cccc........c.cc..............c.......c.cccc.........................c..cccc...............
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        `, SpriteKind.Ground)
    ground1.setPosition(scene.screenWidth() / 2, 120)
    ground2.setPosition(ground1.x + scene.screenWidth(), 120)
    ground1.vx = -100
    ground2.vx = -100
    ground1.z = 2
    ground2.z = 2
}
function initRaptor () {
    raptor = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........................fff.....
        .......................fcccff...
        ......................fc1fcccf..
        ......................fccccccf..
        .................fffffcccccff...
        .............ffffcccccccccf.....
        .........ffffccccccccccccf......
        .....ffffcccccccccccccccf.......
        ...fccccccccccccccccccccf.......
        ..fccc......fffccccccfffcf......
        ...............ffcccf...cf......
        .................fccf..ff.......
        .................fcf............
        ................fccf............
        ................fcf.............
        ................fcf.............
        .................f..............
        `, SpriteKind.Player)
    run = animation.createAnimation(ActionKind.Walking, 100)
    run.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........................fff.....
        .......................fcccff...
        ......................fc1fcccf..
        ......................fccccccf..
        .................fffffcccccff...
        .............ffffcccccccccf.....
        .........ffffccccccccccccf......
        .....ffffcccccccccccccccf.......
        ..ffccccccccccccccccccccf.......
        ............fffccccccfffcf......
        ...............ffcccff..cf......
        .................fccff.ff.......
        .................fcfff..........
        ................fccf.ff.........
        ................fcf...f.........
        ................fcf....f........
        .................f..............
        `)
    run.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........................fff.....
        .......................fcccff...
        ......................fc1fcccf..
        ......................fccccccf..
        .................fffffcccccff...
        .........ffffffffcccccccccf.....
        .....ffffccccccccccccccccf......
        ..ffccccccccccccccccccccf.......
        ............ffcccccccccccf......
        ..............fcccccccffccf.....
        ...............ffffcccf..cf.....
        ................fffffcf.ff......
        ................fff.fcf.........
        ................ff.fccf.........
        ...............ff..fcf..........
        ..............f....fcf..........
        ....................f...........
        `)
    animation.attachAnimation(raptor, run)
    jump = animation.createAnimation(ActionKind.Jumping, 200)
    jump.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........................fff.....
        .......................fcccff...
        ......................fc1fcccf..
        ......................fccccccf..
        .................fffffcccccff...
        .............ffffcccccccccf.....
        ...........ffccccccccccccf......
        .........ffcccccccccccccf.......
        .......ffcccccccccccccccf.......
        ......fccc..fffccccccfffcf......
        .....fcc.......ffcccf...cf......
        .....fc..........fccf..ff.......
        ....cc...........fcf............
        ....f...........fccf............
        ................fcf.............
        ................fcf.............
        .................f..............
        `)
    animation.attachAnimation(raptor, jump)
    dead = animation.createAnimation(ActionKind.Dead, 200)
    dead.addAnimationFrame(img`
        ....................
        ..22...22...........
        .2322.2222..........
        .232222222..........
        .222222222..........
        ..22222b2...........
        ...222b2............
        ....222.............
        .....2..............
        ....................
        ....................
        ...........22...22..
        ..........2322.2222.
        ..........232222222.
        ..........222222222.
        ...........22222b2..
        ............222b2...
        .............222....
        ..............2.....
        ....................
        `)
    animation.attachAnimation(raptor, dead)
    raptor.z = 3
    raptor.setPosition(15, 94)
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (raptor.y == 94 && end == 0) {
        raptor.vy = -160
        animation.setAction(raptor, ActionKind.Jumping)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    end = 1
    animation.setAction(raptor, ActionKind.Dead)
    pause(50)
    game.over(false, effects.dissolve)
})
let cloud: Sprite = null
let cactus: Sprite = null
let choice = 0
let dead: animation.Animation = null
let jump: animation.Animation = null
let run: animation.Animation = null
let raptor: Sprite = null
let ground2: Sprite = null
let ground1: Sprite = null
let end = 0
let idle = 0
game.setDialogCursor(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ........................fff.....
    .......................fcccff...
    ......................fc1fcccf..
    ......................fccccccf..
    .................fffffcccccff...
    .............ffffcccccccccf.....
    .........ffffccccccccccccf......
    .....ffffcccccccccccccccf.......
    ...fccccccccccccccccccccf.......
    ..fccc......fffccccccfffcf......
    ...............ffcccf...cf......
    .................fccf..ff.......
    .................fcf............
    ................fccf............
    ................fcf.............
    ................fcf.............
    .................f..............
    `)
game.splash("dyno run to Texas")
scene.setBackgroundColor(1)
initGround()
initRaptor()
info.setScore(0)
end = 0
game.showLongText("Press any button to jump.", DialogLayout.Top)
game.onUpdate(function () {
    if (raptor.y < 94) {
        raptor.ay = 400
    } else {
        raptor.ay = 0
        raptor.y = 94
        if (end == 0) {
            animation.setAction(raptor, ActionKind.Walking)
        }
    }
})
game.onUpdateInterval(50, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(1000, function () {
    ground1.vx += -1
    ground2.vx += -1
})
game.onUpdateInterval(1000, function () {
    choice = randint(0, 4)
    if (choice == 0) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............f.................
            .............f777f..............
            .............77777..............
            .............77777..............
            .............777f7...7..........
            .........7..f77777..777.........
            ........777..77f77..777.........
            .......f777..77777.f7f7.........
            ........f77..77f77..777f........
            ........77777777f7..777.........
            ........777f777777..777.........
            .......f.7f777777777777.........
            .............7ff7777f77f........
            .............777f77777..........
            .............77777...f..........
            .............77777..............
            .............7f777f.............
            .............777f7..............
            .............77777..............
            .............77f77..............
            .............77777..............
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    } else if (choice == 1) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................22..............
            ...............22...............
            ...............ff...............
            ...............ff...............
            ........22222222222222222.......
            ........22222222222222222.......
            ........22222222222222222.......
            ........22222222222222222.......
            ........2fff222ff22ffffff.......
            ........22f2222f2f2f222f2.......
            ........22f2222f22ff222f2.......
            ........22f2222f222f222f2.......
            ........22222222222222222.......
            ........22222222222222222.......
            ........22222222222222222.......
            ........22222222222222222.......
            ........22222222222222222.......
            ........22222222222222222.......
            ........22222222222222222.......
            ........22222222222222222.......
            ........22222222222222222.......
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    } else if (choice == 2) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ...........7f...................
            .........f777...................
            ..........777......7............
            ........7.7f7f....777...........
            ........7.777.....7f7.7.........
            ........f7777.7f..777.f.........
            ..........777.7.7.77777.........
            ..........f7f77.7.77f.f.........
            ..........777...77777...........
            ..........777...f.7f7...........
            ..........777.....777...........
            ..........777.....777...........
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    }
})
game.onUpdateInterval(1500, function () {
    if (Math.percentChance(40)) {
        cloud = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................bbbb.bb.........
            ...............bb.....b.........
            .............bbb......bbb.......
            .............b..........bbbb....
            .............b.............b....
            ..........bbbb.............bbb..
            .........bb..................b..
            .....bbbbb...................bb.
            .....b........................b.
            .bb.bb..b......................b
            bb.......bbbbbbbbbbbbbbbbbbbbbbb
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, ground1.vx / 4, 0)
        cloud.y = randint(20, 60)
        cloud.setKind(SpriteKind.Cloud)
        cloud.z = 1
    }
})
forever(function () {
    if (ground2.x < -1 * (scene.screenWidth() / 2)) {
        ground2.x = ground1.x + scene.screenWidth()
    }
})
forever(function () {
    if (ground1.x < -1 * (scene.screenWidth() / 2)) {
        ground1.x = ground2.x + scene.screenWidth()
    }
})
