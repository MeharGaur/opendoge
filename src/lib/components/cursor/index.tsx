import { useRouter } from "next/router"
import { memo, useEffect } from "react"
import styles from "./.module.scss"
import { lerp } from "./lerp"

// Needs to be outside component, otherwise doesn't persist between renders
const followScale = {
    current: 1,
    target: 1
}

const cursorRotate = {
    current: 0,
    target: 0,
}

const crosshairGap = {
    current: 0,
    target: 0,

    rotationMap: [
        0, -90, 90, 0
    ],

    translationMap: [
        { direction: -1 },
        { direction: -1 },
        { direction: -1 },
        { direction: 1 },
    ]
}

const hoverablesSelector = "a, button, img"

export const mouse = {
    x: 0,
    y: 0
}


function CursorComponent() {
    const router = useRouter()

    useEffect(() => {
        window.addEventListener('mousemove', (event) => {
            mouse.x = event.clientX
            mouse.y = event.clientY
        }, { passive: true })

        const cursor = document.getElementById('cursor')!
        let cursorX = 0
        let cursorY = 0

        const cursorFollow = document.getElementById('cursorFollow')!
        const crosshairLines = cursorFollow.children as HTMLCollectionOf<HTMLDivElement>
        let followX = 0
        let followY = 0

        // Render loop

        function update() {
            cursorX = lerp(cursorX, mouse.x, 0.075)
            cursorY = lerp(cursorY, mouse.y, 0.075)
            cursorRotate.current = lerp(cursorRotate.current, cursorRotate.target, 0.05)

            followX = lerp(followX, mouse.x, 0.5)
            followY = lerp(followY, mouse.y, 0.5)
            followScale.current = lerp(followScale.current, followScale.target, 0.12)
            crosshairGap.current = lerp(crosshairGap.current, crosshairGap.target, 0.12)

            cursor.style.transform = `
                translate(${cursorX}px, ${cursorY}px) 
                rotate(${cursorRotate.current}deg)
            `

            cursorFollow.style.transform = `
                translate(${followX}px, ${followY}px) 
                scale(${followScale.current})
            `

            for (let i = 0; i < crosshairLines.length; i++) {
                crosshairLines[i].style.transform = `rotate(${crosshairGap.rotationMap[i]}deg) translateY(${crosshairGap.current * crosshairGap.translationMap[i].direction}px)`
            }

            requestAnimationFrame(update)
        }

        requestAnimationFrame(update)
    }, [])


    // Hoverables

    useEffect(() => {
        const hoverables = document.querySelectorAll(hoverablesSelector)

        for (const element of hoverables) {
            element.addEventListener("mouseenter", onMouseEnter, { passive: true })

            element.addEventListener("mouseleave", onMouseLeave, { passive: true })
        }
    }, [router.asPath])

    useEffect(() => () => {
        const hoverables = document.querySelectorAll(hoverablesSelector)

        for (const element of hoverables) {
            element.removeEventListener("mouseenter", onMouseEnter)
            element.removeEventListener("mouseleave", onMouseEnter)
        }
    }, [router.asPath])


    // JSX

    return (
        <div className="hidden lg:block" style={{
            position: 'fixed',
            zIndex: 99,
            top: 0, left: 0,
            pointerEvents: 'none',
            userSelect: 'none'
        }}>
            <div id="cursor" className={styles.cursor}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div id="cursorFollow" className={styles.follow}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}


function onMouseEnter(event: Event) {
    // followScale.target = 1.5
    cursorRotate.target = 135
    crosshairGap.target = 15
}

function onMouseLeave() {
    // followScale.target = 1
    cursorRotate.target = 0
    crosshairGap.target = 0
}



export const Cursor = memo(CursorComponent)
