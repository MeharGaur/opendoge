import styles from "./index.module.scss"
import { spring } from "svelte/motion"
import clsx from "clsx"
import { memo, useEffect, useState } from "react"

let customAmount = 0

function CounterComponent({ onChange }: { onChange: Function }) {
    let count = 0

    const displayedCount = spring(0)

    const [hasMounted, setHasMounted] = useState(false)

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    useEffect(() => setHasMounted(true), [])

    displayedCount.subscribe((value) => {
        if (hasMounted) {
            const digits = document.getElementById('counterDigits')!

            digits.style.transform = `translate(0, ${100 * modulo(value)}%)`
            digits.firstChild!.textContent = String(Math.floor(value + 1))
            digits.lastChild!.textContent = String(Math.floor(value))
        }
    })


    function updateCount(direction: number) {
        updateStore(count + direction)
    }

    function updateStore(amount: number) {
        count = amount

        displayedCount.set(count)
        onChange(count)
        
        setModalVisibility(false)
    }

    function setModalVisibility(visible: boolean) {
        const el = document.getElementById("counterDropdownContent")!
        
        el.style.visibility = visible ? "visible" : "hidden"

        if (visible) {
            el.querySelector("input")?.focus()
        }
    }

    return (
        <div className="w-full mb-8">
            <div className={styles.counter}>
                <button onClick={() => updateCount(-1)} className={clsx(styles.counter__button, "border border-solid border-white/[0.3] rounded-lg")} aria-label="Decrease the counter by one">
                    <svg aria-hidden="true" viewBox="0 0 1 1">
                        <path d="M0,0.5 L1,0.5" />
                    </svg>
                </button>

                <div className="dropdown">
                    <div tabIndex={0} onClick={() => setModalVisibility(true)} className={clsx(styles.counterViewport, "pl-1.5 pt-1.5 rounded-lg")}>
                        <div className={clsx(styles.counterViewport__hover, "absolute top-0 right-0 bottom-0 left-[7.5%] w-[85%] h-full rounded-lg")}></div>
                        <div id="counterDigits" className={styles.counterDigits}>
                            <strong className={styles.hidden} aria-hidden="true">0</strong>
                            <strong>0</strong>
                        </div>
                    </div>
                    
                    <div id="counterDropdownContent" tabIndex={0} className={clsx(styles.counter__dropdown, "dropdown-content menu bg-zinc-900/[0.9] mt-2 rounded-lg w-80 h-20 flex flex-row")}>
                        <input onKeyDown={(event) => event.key == 'Enter' && updateStore(customAmount)} onChange={(event) => customAmount=parseInt(event.target.value)} type="number" min="0" max="10000" placeholder="Type Amount" className="m-3 input h-14 bg-transparent w-full h-full text-xl rounded-sm" />
                        <button onClick={() => updateStore(customAmount)} className="btn btn-sm h-[100%] rounded-none rounded-r-lg">
                            <span className="text-sm">OK</span>
                        </button>
                    </div>
                </div>

                <button onClick={() => updateCount(1)} className={clsx(styles.counter__button, "border border-solid border-white/[0.3] rounded-lg")} aria-label="Increase the counter by one">
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

export const Counter = memo(CounterComponent)

