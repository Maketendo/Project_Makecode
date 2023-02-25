namespace SpriteKind {
    export const Monster = SpriteKind.create()
    export const Simulator = SpriteKind.create()
    export const Cam = SpriteKind.create()
    export const MiniMenu = SpriteKind.create()
    export const Text = SpriteKind.create()
    export const UI = SpriteKind.create()
}
function Monster_Anim () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c f f f f c c . . . . . . 
        . c f f f f f f f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f 2 2 f f f f c . . . 
        c f f f f f f f f f f f c . . . 
        c c b b 1 b f f f f f f d c . . 
        c 5 3 3 3 5 5 5 f f d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c c . 
        . c b b c 5 5 b b d d d d c d c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c . 
        . . c c c c c b 5 5 b c c c . . 
        . . c b b b c d 5 5 b c . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c f f f f f c . . . . . . 
        . c f f f f 2 2 f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f f f f f f f c . . . 
        c c b b 1 b f f f f f f c . . . 
        c 5 3 3 3 5 f f f f 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c c b 5 5 b d d d c . 
        . . . . . c d 5 5 b b c c c . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c f f f f f c . . . . . . 
        . c f f f f 2 2 f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f f f f f f f c . . . 
        c c b b 1 b f f f f f f c . . . 
        c 5 3 3 3 5 f f f f 5 5 d c . . 
        c 5 5 5 5 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c b 5 5 b d d d c c . 
        . . . . c d 5 5 b b c c c . . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c f f f f f c . . . . . . 
        . c f f f f 2 2 f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f f f f f f f c . . . 
        c c b b 1 b f f f f f f c . . . 
        c 5 3 3 3 5 f f f f f f d c . . 
        c 5 5 5 5 5 f f f 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c . 
        . c c c c c b b d d d d d d c c 
        . . . c c 5 5 b 5 5 d d d d d c 
        . . . . c b 5 5 b b c c c c c c 
        . . . . c c c c c c . . . . . . 
        . . . . . c b b b c . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c f f f f c c . . . . . . 
        . c f f f f f f f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f 2 2 f f f f c . . . 
        c c b b 1 b f f f f f f c . . . 
        c c 3 3 b b 5 f 5 5 5 f d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c c 
        . . . c b c c b 5 5 b c c c . . 
        . . . c c c d 5 5 b c . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c f f f f c c . . . . . . 
        . c f f f f f f f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f 2 2 f f f f c . . . 
        c f f f f f f f f f f f c . . . 
        c c b b 1 b f f f f f f d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d c c . 
        . . c b b c c c 5 5 b c c . . . 
        . . c c c c c d 5 5 c . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c f f f f c c . . . . . . 
        . c f f f f f f f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f 2 2 f f f f c . . . 
        c f f f f f f f f f f f c . . . 
        c c b b 1 b f f f f f f d c . . 
        c 5 3 3 3 5 5 5 f f d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c c . 
        . c b b c 5 5 b b d d d d c d c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c . 
        . . c c c c c b 5 5 b c c c . . 
        . . c b b b c d 5 5 b c . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c f f f f f c . . . . . . 
        . c f f f f 2 2 f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f f f f f f f c . . . 
        c c b b 1 b f f f f f f c . . . 
        c 5 3 3 3 5 f f f f 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c c b 5 5 b d d d c . 
        . . . . . c d 5 5 b b c c c . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c f f f f f c . . . . . . 
        . c f f f f 2 2 f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f f f f f f f c . . . 
        c c b b 1 b f f f f f f c . . . 
        c 5 3 3 3 5 f f f f 5 5 d c . . 
        c 5 5 5 5 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c b 5 5 b d d d c c . 
        . . . . c d 5 5 b b c c c . . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c f f f f f c . . . . . . 
        . c f f f f 2 2 f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f f f f f f f c . . . 
        c c b b 1 b f f f f f f c . . . 
        c 5 3 3 3 5 f f f f f f d c . . 
        c 5 5 5 5 5 f f f 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c . 
        . c c c c c b b d d d d d d c c 
        . . . c c 5 5 b 5 5 d d d d d c 
        . . . . c b 5 5 b b c c c c c c 
        . . . . c c c c c c . . . . . . 
        . . . . . c b b b c . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c f f f f c c . . . . . . 
        . c f f f f f f f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f 2 2 f f f f c . . . 
        c c b b 1 b f f f f f f c . . . 
        c c 3 3 b b 5 f 5 5 5 f d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c c 
        . . . c b c c b 5 5 b c c c . . 
        . . . c c c d 5 5 b c . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c f f f f c c . . . . . . 
        . c f f f f f f f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f 2 2 f f f f c . . . 
        c f f f f f f f f f f f c . . . 
        c c b b 1 b f f f f f f d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d c c . 
        . . c b b c c c 5 5 b c c . . . 
        . . c c c c c d 5 5 c . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c f f f f c c . . 
        . . . . . c f f f f f f f f c . 
        . . . . c f f f 2 2 f f f f f c 
        . . . c f f f f 2 2 f f f f f c 
        . . . c f f f f f f f f f f f c 
        . . c d f f f f f f b 1 b b c c 
        . . c d d d f f 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 b . 
        . c c d d d d b 5 5 c b b c . . 
        c d c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c d d d b 5 5 d c c c c . . . 
        . . c c c b 5 5 b c c c c c . . 
        . . . . c b 5 5 d c b b b c . . 
        `,img`
        . . . . . . . c c c c c . . . . 
        . . . . . . c f f f f f c c . . 
        . . . . . c f f 2 2 f f f f c . 
        . . . . c f f f 2 2 f f f f f c 
        . . . c f f f f f f f f f f f c 
        . . . c f f f f f f b 1 b b c c 
        . . c d 5 5 f f f f 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 b 5 5 5 5 c . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c d d d b 5 5 b c c c . . . . 
        . . c c c b b 5 5 d c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . . . . c b b b c . . . . 
        `,img`
        . . . . . . . c c c c c . . . . 
        . . . . . . c f f f f f c c . . 
        . . . . . c f f 2 2 f f f f c . 
        . . . . c f f f 2 2 f f f f f c 
        . . . c f f f f f f f f f f f c 
        . . . c f f f f f f b 1 b b c c 
        . . c d 5 5 f f f f 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 5 c 
        . . c d d d 5 5 5 b 5 5 5 5 c . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c c d d d b 5 5 b c c . . . . 
        . . . c c c b b 5 5 d c . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . . . . c b b b c . . . . 
        `,img`
        . . . . . . . c c c c c . . . . 
        . . . . . . c f f f f f c c . . 
        . . . . . c f f 2 2 f f f f c . 
        . . . . c f f f 2 2 f f f f f c 
        . . . c f f f f f f f f f f f c 
        . . . c f f f f f f b 1 b b c c 
        . . c d f f f f f f 5 3 3 3 5 c 
        . . c d d d 5 f f f 5 5 5 5 5 c 
        . . c d d d 5 5 5 b 5 5 5 5 c . 
        . . c d d d d b 5 5 c b b c . . 
        . c c d d d d b b 5 5 c b b c . 
        c c d d d d d d b b c c c c c . 
        c d d d d d 5 5 b 5 5 c c . . . 
        c c c c c c b b 5 5 b c . . . . 
        . . . . . . c c c c c c . . . . 
        . . . . . . c b b b c . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c f f f f c c . . 
        . . . . . c f f f f f f f f c . 
        . . . . c f f f 2 2 f f f f f c 
        . . . c f f f f 2 2 f f f f f c 
        . . . c f f f f f f b 1 b b c c 
        . . c d f 5 5 5 f 5 b b 3 3 c c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 b . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        c c d d d b 5 5 d c c c c . . . 
        . . c c c b 5 5 b c c b c . . . 
        . . . . . c b 5 5 d c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c f f f f c c . . 
        . . . . . c f f f f f f f f c . 
        . . . . c f f f 2 2 f f f f f c 
        . . . c f f f f 2 2 f f f f f c 
        . . . c f f f f f f f f f f f c 
        . . c d f f f f f f b 1 b b c c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 b . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c c d d b 5 5 d c c c c . . . 
        . . . c c b 5 5 c c c b b c . . 
        . . . . . c 5 5 d c c c c c . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c f f f f c c . . . . . . 
        . c f f f f f f f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f 2 2 f f f f c . . . 
        c f f f f f f f f f f f c . . . 
        c c b b 1 b f f f f f f d c . . 
        c 5 3 3 3 5 5 5 f f d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c c . 
        . c b b c 5 5 b b d d d d c d c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c . 
        . . c c c c c b 5 5 b c c c . . 
        . . c b b b c d 5 5 b c . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c f f f f f c . . . . . . 
        . c f f f f 2 2 f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f f f f f f f c . . . 
        c c b b 1 b f f f f f f c . . . 
        c 5 3 3 3 5 f f f f 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c c b 5 5 b d d d c . 
        . . . . . c d 5 5 b b c c c . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c f f f f f c . . . . . . 
        . c f f f f 2 2 f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f f f f f f f c . . . 
        c c b b 1 b f f f f f f c . . . 
        c 5 3 3 3 5 f f f f 5 5 d c . . 
        c 5 5 5 5 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c b 5 5 b d d d c c . 
        . . . . c d 5 5 b b c c c . . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c f f f f f c . . . . . . 
        . c f f f f 2 2 f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f f f f f f f c . . . 
        c c b b 1 b f f f f f f c . . . 
        c 5 3 3 3 5 f f f f f f d c . . 
        c 5 5 5 5 5 f f f 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c . 
        . c c c c c b b d d d d d d c c 
        . . . c c 5 5 b 5 5 d d d d d c 
        . . . . c b 5 5 b b c c c c c c 
        . . . . c c c c c c . . . . . . 
        . . . . . c b b b c . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c f f f f c c . . . . . . 
        . c f f f f f f f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f 2 2 f f f f c . . . 
        c c b b 1 b f f f f f f c . . . 
        c c 3 3 b b 5 f 5 5 5 f d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c c 
        . . . c b c c b 5 5 b c c c . . 
        . . . c c c d 5 5 b c . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c f f f f c c . . . . . . 
        . c f f f f f f f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f 2 2 f f f f c . . . 
        c f f f f f f f f f f f c . . . 
        c c b b 1 b f f f f f f d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d c c . 
        . . c b b c c c 5 5 b c c . . . 
        . . c c c c c d 5 5 c . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c f f f f c c . . . . . . 
        . c f f f f f f f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f 2 2 f f f f c . . . 
        c f f f f f f f f f f f c . . . 
        c f b b 1 b f f f f f f d c . . 
        c 5 3 3 3 f f f f f d f f c . . 
        . b 5 5 5 f 5 f f 5 d f d c . . 
        . . c b b c 5 5 f d d d d c c . 
        . c b b c 5 5 b b d d d d c d c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c . 
        . . c c c c c b 5 5 b c c c . . 
        . . c b b b c d 5 5 b c . . . . 
        `],
    1000,
    characterAnimations.rule(Predicate.NotMoving)
    )
}
function Player_1_Anim () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f 2 f 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f f f 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . . f f f f f f f . . . 
        . . f f f 2 2 2 f f f . . 
        . . f 5 f 2 2 2 f 5 f . . 
        . . f f f 2 2 2 f f f . . 
        . . . . f 2 f 2 f . . . . 
        . . . . f 2 f 2 f . . . . 
        . . . . f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f 2 f 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f f f 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . . f f f f f f f . . . 
        . . f f f 2 2 2 f f f . . 
        . . f 5 f 2 2 2 f 5 f . . 
        . . f f f 2 2 2 f f f . . 
        . . . . f 2 f f f . . . . 
        . . . . f 2 f . . . . . . 
        . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f 2 f 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f f f 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . . f f f f f f f . . . 
        . . f f f 2 2 2 f f f . . 
        . . f 5 f 2 2 2 f 5 f . . 
        . . f f f 2 2 2 f f f . . 
        . . . . f 2 f 2 f . . . . 
        . . . . f 2 f 2 f . . . . 
        . . . . f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f 2 f 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f f f 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . . f f f f f f f . . . 
        . . f f f 2 2 2 f f f . . 
        . . f 5 f 2 2 2 f 5 f . . 
        . . f f f 2 2 2 f f f . . 
        . . . . f f f 2 f . . . . 
        . . . . . . f 2 f . . . . 
        . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 6 6 6 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f f f f f . . . . 
        . . . . f 2 f 2 f . . . . 
        . . . . f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 6 6 6 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f f f f f . . . . 
        . . . . f 2 f . . . . . . 
        . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 6 6 6 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f f f f f . . . . 
        . . . . f 2 f 2 f . . . . 
        . . . . f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 6 6 6 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f f f f f . . . . 
        . . . . . . f 2 f . . . . 
        . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f 2 f 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f f f 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . . f f f f f f f . . . 
        . . f f f 2 2 2 f f f . . 
        . . f 5 f 2 2 2 f 5 f . . 
        . . f f f 2 2 2 f f f . . 
        . . . . f 2 f 2 f . . . . 
        . . . . f 2 f 2 f . . . . 
        . . . . f f f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 f 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 f f f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . 4 4 f f f f f f f f f . 
        . 6 6 f 5 5 5 5 5 5 5 f . 
        . 6 6 f f f f f f f f f . 
        . 4 4 4 f 2 2 f . . . . . 
        . 4 4 4 f 2 2 f . . . . . 
        . . . . f 2 2 f . . . . . 
        . . . . f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 f 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 f f f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . 4 4 f f f f f f f f f . 
        . 6 6 f 5 5 5 5 5 5 5 f . 
        . 6 6 f f f f f f f f f . 
        . 4 4 4 f 2 2 f 2 2 f . . 
        . 4 4 4 f 2 2 f f f f . . 
        . . . . f 2 2 f . . . . . 
        . . . . f f f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 f 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f f f 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . f f f f f f f f f 4 4 . 
        . f 5 5 5 5 5 5 5 f 6 6 . 
        . f f f f f f f f f 6 6 . 
        . . . . . f 2 2 f 4 4 4 . 
        . . . . . f 2 2 f 4 4 4 . 
        . . . . . f 2 2 f . . . . 
        . . . . . f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 f 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f f f 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . f f f f f f f f f 4 4 . 
        . f 5 5 5 5 5 5 5 f 6 6 . 
        . f f f f f f f f f 6 6 . 
        . . f 2 2 f 2 2 f 4 4 4 . 
        . . f f f f 2 2 f 4 4 4 . 
        . . . . . f 2 2 f . . . . 
        . . . . . f f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
}
sprites.onOverlap(SpriteKind.Monster, SpriteKind.Player, function (sprite, otherSprite) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.A)) {
        otherSprite.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)))
    }
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
        projectile = sprites.createProjectileFromSprite(img`
            . f f f . 
            f 5 5 5 f 
            f 5 5 5 f 
            f 5 5 5 f 
            . f f f . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50, 50)
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Four))
})
function Boot () {
    scene.setBackgroundImage(img`
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666ffffff
        6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666fffffff
        6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666fffffff
        6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666fffffff
        6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666fffffff
        6fffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff888888888888888888888888888888888888888888888888fff8888888888888888888888888888888ffffff88888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff88888888888888888888888888888888888888888888888fffff88888888888888888888888888888fffffff88888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff888888888888888888888888888888888888888888888ffffffff88888888888888888888888888fffffffff88888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff88888888888888888888888888888888888888888888ffffffffff888888888888888888888888ffffffffff88888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff888888888888888888888888888888888888888888ffffffffffff8888888888ff844448888888ffffffffff88888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff88888888888888888888888888888888888888888ffffffffffffff88888888fff84444888888fffffffffff88888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888888fffffffffffffff88888888fff84444888888fffffffffff88888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff888888888888888888888888888888888888888ffffffffffffffff88888888fff84444888888fffffffffff88888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff88888888888888888888888888888888888888fffffffffffffffff88888888ff777444888888fffffffffff88888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888fffffffffffff8ffff88888888ff777448888888fffffffffff88888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888ffffffffffff8ffff8888888888f777888888888fffffffffff88888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888fffffffffff8fffff88888888888f84888888888ffffffffff888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888fffffffffffffffffffffffffffff84444444444fffffffff8888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888ffffffffffffffff333ffffffffff8444444444444fffffff8888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888ffffffffffffff88333ffffffffff8444444444444ffffff88888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888fffffffffffff888333ffffffffff844444444444488888888888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888ffffffffffff88888ffffffffffff844444444444488888888888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888fff8fffffff888888fffffffffff7774444444444488888888888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888ffffffffff8888888fffffffffff7774444444444488888888888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888fffffffff88888888fffffffffff77744444444fffffffffff888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888fffffffff888888666fffffffffff844444888ffffffffffff888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff888888888888888888888888888888888888888fffffff888888666fffffffffff844488888ffffffffffff888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888888ffffff888888666fffffffffff844888888fffffffffffff88888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888888ffff8888888888ffffffffffff848888888fffffffffffff88888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888888fff88888888888888888888888888888888fffffffffffff88888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff888888888888888888888888888888888888888888888888888888444444444444848888888ffffffffffffff8888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff888888888888888888888888888888888888888888888888888888444444444444848888888ffffffffffffff8888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff888888888888888888888888888888888888888888888888888888444444444444844888888ffffffffffffff8888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff888888888888888888888888888888888888888888888888888888444444444444844488888ffffffffffffff8888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff888888888888888888888888888888888888888888888888888ffff44444444444844444444fffffffffffffff888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff88888888888888888888888888888888888888888888888888ffffff4444444444844444444fffffffffffffff888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff8888888888888888888888888888888888888888888888888ffffffff444444444844444444fffffffffffffff888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff88888888888888888888888888888888888888888888888ffffffffffff44444448444444444ffffffffffffff888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff88888888888888888888888888888888888888888888888ffffffffffff44444448444444444fffffffffffff8888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff88888888888888888888888888888888888888888888888ffffffffffff444444484444444444ffffffffffff8888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff88888888888888888888888888888888888888888888888ffffffffffff4444444844444444444488888888888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff88888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff88888888888888888888888888888888888888888888888ffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff88888888888888888888888888888888888888888888888fffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888fffffbbbbfffff44
        6fffff8888888888888888888888888888888888888888888888888fffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888fffffbbbbfffff44
        6fffff88888888888888888888888888888888888888888888888888fffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffbbbbfffff44
        6fffff88888888888888888888888888888888888888888888888888ffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffbbbbfffff44
        6fffff88888888888888888888888888888888888888888888888888ffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffbbbbfffff44
        6fffff888888888888888888888888888888888888888888888888888fffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff6666fffff44
        6fffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff6666fffff44
        688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff6666fffff44
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444eeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        `)
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c f f f f c c . . . . . . 
        . c f f f f f f f f c . . . . . 
        c f f f f f 2 2 f f f c . . . . 
        c f f f f f 2 2 f f f f c . . . 
        c f f f f f f f f f f f c . . . 
        c f b b 1 b f f f f f f d c . . 
        c 5 3 3 3 f f f f f d f f c . . 
        . b 5 5 5 f 5 f f 5 d f d c . . 
        . . c b b c 5 5 f d d d d c c . 
        . c b b c 5 5 b b d d d d c d c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c . 
        . . c c c c c b 5 5 b c c c . . 
        . . c b b b c d 5 5 b c . . . . 
        `, SpriteKind.Monster))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f 2 f 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . f 2 2 f f f 2 2 f . . 
        . . f 2 2 2 2 2 2 2 f . . 
        . . . f f f f f f f . . . 
        . . f f f 2 2 2 f f f . . 
        . . f 5 f 2 2 2 f 5 f . . 
        . . f f f 2 2 2 f f f . . 
        . . . . f 2 f 2 f . . . . 
        . . . . f 2 f 2 f . . . . 
        . . . . f f f f f . . . . 
        `, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 f 8 f 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 f f f 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . . f f f f f f f . . . 
        . . f f f 8 8 8 f f f . . 
        . . f 5 f 8 8 8 f 5 f . . 
        . . f f f 8 8 8 f f f . . 
        . . . . f 8 f 8 f . . . . 
        . . . . f 8 f 8 f . . . . 
        . . . . f f f f f . . . . 
        `, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 f 4 f 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 f f f 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 4 4 4 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f 4 f 4 f . . . . 
        . . . . f 4 f 4 f . . . . 
        . . . . f f f f f . . . . 
        `, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
    tiles.setCurrentTilemap(tilemap`level1`)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), assets.tile`myTile13`)
    tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), assets.tile`myTile13`)
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        Broken_Simulator = sprites.create(img`
            ffffffffffffffffffffffffffffff
            f4444f4444444444c4444444f4444f
            f4644f44444444444c444444f4644f
            f4644f44fffffffcccffff44f4664f
            f4644f44ffffcccfffcfffc4f4464f
            f4644f44ffcc22ff44c4fc44f4464f
            f4644f44ff2222ff44cccf44f4464f
            f4644f44ff2222ff44c4ff44f4464f
            f4644f44ff2222ffcc44ff44f4466f
            f4644f44fffffffffcffff44f4446f
            f4644f44ff7777ff6c66ff44f4446f
            f4644f44ff7777ff66c6ff44f4446f
            f4644f44ff7777ff666cff44f4446f
            f4644f44ff7777ff66ccff44f4466f
            f4644f44ffffffffffcfff44f4464f
            f4644f44fffffffffffcff44f4464f
            f4644fc444444444444c4444f4464f
            f4644f4c444444444444c444f4464f
            f4644f44cc444444c4444444f4464f
            f4644f44cfcffffcfffff444f4464f
            f4644f44cf4444ccccccccccf4464f
            f4644f4c4f4fffcffff4f444f4464f
            f4644f4ccf4f6c6666f4f444f4664f
            f4644f4c4ccfc66666f4f444f4644f
            f4644fc44f4cc66666f4f444f4644f
            f4644f444f4fcc6666f4f444f4644f
            f4644f444f4fffcffff4f444f4644f
            f4644f444f4444444444f444f4644f
            f4644f444f4444464644f444f4644f
            f4644f444f4464444444f444f4644f
            f4644f444f4666444644f444f4644f
            f4644f44cf4464446444f444f4644f
            f4644f444c4444444444f444f4464f
            f4644f444fcffffffffff444f4464f
            f4644f44444c4488444c4444f4464f
            f4644f444444c48844c44444f4464f
            f4644f44fffcccffffcfff44f4464f
            f4644f44fcc44c444c444f44f4464f
            f4644f4cc88884c44c444f44f4464f
            f4644f44f444844c6c666f44f4464f
            f4644f44f4444876c4444f44f4464f
            f4644f44f7777874c4444f44f4464f
            f4644f44f444484c88855f44f4464f
            f4644f44f444448c84444f44f4464f
            f4644f44f66666c444466f44f4464f
            f4644f44f44444c444644f44f4464f
            f4444f44f44444c444444f44f4444f
            f4444f44fffffcffffffff44f4444f
            f4444f4444444c4444444444f4444f
            ffffffffffffffffffffffffffffff
            `, SpriteKind.Simulator)
        tiles.placeOnTile(Broken_Simulator, value)
        tiles.setWallAt(value, true)
    }
    Cam = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Cam)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    AnimModule()
    INGAMEUI()
    color.startFade(color.Black, color.originalPalette)
}
function Player_2_Anim () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 f 8 f 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 f f f 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . . f f f f f f f . . . 
        . . f f f 8 8 8 f f f . . 
        . . f 5 f 8 8 8 f 5 f . . 
        . . f f f 8 8 8 f f f . . 
        . . . . f 8 f 8 f . . . . 
        . . . . f 8 f 8 f . . . . 
        . . . . f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 f 8 f 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 f f f 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . . f f f f f f f . . . 
        . . f f f 8 8 8 f f f . . 
        . . f 5 f 8 8 8 f 5 f . . 
        . . f f f 8 8 8 f f f . . 
        . . . . f 8 f f f . . . . 
        . . . . f 8 f . . . . . . 
        . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 f 8 f 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 f f f 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . . f f f f f f f . . . 
        . . f f f 8 8 8 f f f . . 
        . . f 5 f 8 8 8 f 5 f . . 
        . . f f f 8 8 8 f f f . . 
        . . . . f 8 f 8 f . . . . 
        . . . . f 8 f 8 f . . . . 
        . . . . f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 f 8 f 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 f f f 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . . f f f f f f f . . . 
        . . f f f 8 8 8 f f f . . 
        . . f 5 f 8 8 8 f 5 f . . 
        . . f f f 8 8 8 f f f . . 
        . . . . f f f 8 f . . . . 
        . . . . . . f 8 f . . . . 
        . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 6 6 6 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f f f f f . . . . 
        . . . . f 8 f 8 f . . . . 
        . . . . f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 6 6 6 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f f f f f . . . . 
        . . . . f 8 f . . . . . . 
        . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 6 6 6 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f f f f f . . . . 
        . . . . f 8 f 8 f . . . . 
        . . . . f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 6 6 6 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f f f f f . . . . 
        . . . . . . f 8 f . . . . 
        . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 f 8 f 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 f f f 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . . f f f f f f f . . . 
        . . f f f 8 8 8 f f f . . 
        . . f 5 f 8 8 8 f 5 f . . 
        . . f f f 8 8 8 f f f . . 
        . . . . f 8 f 8 f . . . . 
        . . . . f 8 f 8 f . . . . 
        . . . . f f f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 f 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 f f f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . 4 4 f f f f f f f f f . 
        . 6 6 f 5 5 5 5 5 5 5 f . 
        . 6 6 f f f f f f f f f . 
        . 4 4 4 f 8 8 f . . . . . 
        . 4 4 4 f 8 8 f . . . . . 
        . . . . f 8 8 f . . . . . 
        . . . . f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 f 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 f f f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . 4 4 f f f f f f f f f . 
        . 6 6 f 5 5 5 5 5 5 5 f . 
        . 6 6 f f f f f f f f f . 
        . 4 4 4 f 8 8 f 8 8 f . . 
        . 4 4 4 f 8 8 f f f f . . 
        . . . . f 8 8 f . . . . . 
        . . . . f f f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 f 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f f f 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . f f f f f f f f f 4 4 . 
        . f 5 5 5 5 5 5 5 f 6 6 . 
        . f f f f f f f f f 6 6 . 
        . . . . . f 8 8 f 4 4 4 . 
        . . . . . f 8 8 f 4 4 4 . 
        . . . . . f 8 8 f . . . . 
        . . . . . f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f 8 f 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . . f f f 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 f . . 
        . f f f f f f f f f 4 4 . 
        . f 5 5 5 5 5 5 5 f 6 6 . 
        . f f f f f f f f f 6 6 . 
        . . f 8 8 f 8 8 f 4 4 4 . 
        . . f f f f 8 8 f 4 4 4 . 
        . . . . . f 8 8 f . . . . 
        . . . . . f f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
}
function AnimModule () {
    Player_1_Anim()
    Player_2_Anim()
    Player_3_Anim()
    Monster_Anim()
}
function INGAMEUI () {
    Powerup = sprites.create(img`
        111111111111111111111
        1fffffffffffffffffff1
        1fffffffffffffffffff1
        1fffffffffffffffffff1
        1ff111111111ffffffff1
        1ff1fffffff1ffffffff1
        1ff1fffffff1ffffffff1
        1ff1fffffff1ffffffff1
        1ff1fffffff1ffffffff1
        1ff1fffffff1ffffffff1
        1ff1fffffff1ffffffff1
        1ff1fffffff1ffffffff1
        1f11111111111ff111ff1
        1f1f1ffffff11ff1f1ff1
        1f1f111111111ff111ff1
        1f1ff1ff1fffffffffff1
        1f1111ff1fffffffffff1
        1ffff1ff1fffffffffff1
        1ffff1111fffffffffff1
        1fffffffffffffffffff1
        111111111111111111111
        `, SpriteKind.UI)
    Powerup.setPosition(149, 109)
    Powerup.setFlag(SpriteFlag.RelativeToCamera, true)
    spriteutils.setLifeImage(img`
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        `)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.A)) {
        sprites.destroy(sprite)
        statusbar.value += -35
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setFlag(SpriteFlag.GhostThroughWalls, true)
})
spriteutils.addEventHandler(spriteutils.UpdatePriorityModifier.Before, spriteutils.UpdatePriority.Controller, function () {
	
})
function Player_3_Anim () {
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 f 4 f 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 f f f 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 4 4 4 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f 4 f 4 f . . . . 
        . . . . f 4 f 4 f . . . . 
        . . . . f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 f 4 f 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 f f f 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 4 4 4 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f 4 f f f . . . . 
        . . . . f 4 f . . . . . . 
        . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 f 4 f 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 f f f 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 4 4 4 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f 4 f 4 f . . . . 
        . . . . f 4 f 4 f . . . . 
        . . . . f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 f 4 f 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 f f f 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 4 4 4 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f f f 4 f . . . . 
        . . . . . . f 4 f . . . . 
        . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 6 6 6 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f f f f f . . . . 
        . . . . f 4 f 4 f . . . . 
        . . . . f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 6 6 6 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f f f f f . . . . 
        . . . . f 4 f . . . . . . 
        . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 6 6 6 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f f f f f . . . . 
        . . . . f 4 f 4 f . . . . 
        . . . . f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 6 6 6 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f f f f f . . . . 
        . . . . . . f 4 f . . . . 
        . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 f 4 f 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 f f f 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . . f f f f f f f . . . 
        . . f f f 4 4 4 f f f . . 
        . . f 5 f 4 4 4 f 5 f . . 
        . . f f f 4 4 4 f f f . . 
        . . . . f 4 f 4 f . . . . 
        . . . . f 4 f 4 f . . . . 
        . . . . f f f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 f 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 f f f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . 4 4 f f f f f f f f f . 
        . 6 6 f 5 5 5 5 5 5 5 f . 
        . 6 6 f f f f f f f f f . 
        . 4 4 4 f 4 4 f . . . . . 
        . 4 4 4 f 4 4 f . . . . . 
        . . . . f 4 4 f . . . . . 
        . . . . f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 f 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 f f f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . 4 4 f f f f f f f f f . 
        . 6 6 f 5 5 5 5 5 5 5 f . 
        . 6 6 f f f f f f f f f . 
        . 4 4 4 f 4 4 f 4 4 f . . 
        . 4 4 4 f 4 4 f f f f . . 
        . . . . f 4 4 f . . . . . 
        . . . . f f f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 f 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f f f 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . f f f f f f f f f 4 4 . 
        . f 5 5 5 5 5 5 5 f 6 6 . 
        . f f f f f f f f f 6 6 . 
        . . . . . f 4 4 f 4 4 4 . 
        . . . . . f 4 4 f 4 4 4 . 
        . . . . . f 4 4 f . . . . 
        . . . . . f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f . . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f 4 f 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . . f f f 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 f . . 
        . f f f f f f f f f 4 4 . 
        . f 5 5 5 5 5 5 5 f 6 6 . 
        . f f f f f f f f f 6 6 . 
        . . f 4 4 f 4 4 f 4 4 4 . 
        . . f f f f 4 4 f 4 4 4 . 
        . . . . . f 4 4 f . . . . 
        . . . . . f f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
}
let Powerup: Sprite = null
let Cam: Sprite = null
let Broken_Simulator: Sprite = null
let statusbar: StatusBarSprite = null
let projectile: Sprite = null
Boot()
game.onUpdate(function () {
	
})
game.onUpdateInterval(1, function () {
	
})
forever(function () {
	
})
