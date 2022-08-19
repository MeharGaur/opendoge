import styles from "./index.module.scss"
import { spring } from "svelte/motion"


export function Counter() {
    let count = 0
    const displayedCount = spring(0)

    displayedCount.subscribe((value) => {
        if (typeof window != "undefined") {
            const digits = document.getElementById('counterDigits')!

            digits.style.transform = `translate(0, ${100 * modulo(value)}%)`
            digits.firstChild!.textContent = String(Math.floor(value + 1))
            digits.lastChild!.textContent = String(Math.floor(value))
        }
    })

    function updateCount(direction: number) {
        count += direction
        displayedCount.set(count)
    }

    return (
        <div className="w-full h-32 bg-blue-500 mb-8">
            <div className={styles.counter}>
                <button onClick={() => updateCount(-1)} aria-label="Decrease the counter by one">
                    <svg aria-hidden="true" viewBox="0 0 1 1">
                        <path d="M0,0.5 L1,0.5" />
                    </svg>
                </button>

                <div className={styles.counterViewport}>
                    <div id="counterDigits" className={styles.counterDigits}>
                        <strong className={styles.hidden} aria-hidden="true">0</strong>
                        <strong>0</strong>
                    </div>
                </div>

                <button onClick={() => updateCount(1)} aria-label="Increase the counter by one">
                    <svg aria-hidden="true" viewBox="0 0 1 1">
                        <path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
                    </svg>
                </button>
            </div>
        </div>
    )
}




function modulo(n: number, m: number = 1) {
    // handle negative numbers
    return ((n % m) + m) % m;
}

