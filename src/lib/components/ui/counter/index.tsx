import { useState } from "react";


export function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="w-full h-32 bg-blue-500 mb-8">
            {/* <div className={styles.counter}>
                <button onClick={() => (setCount(count - 1))} aria-label="Decrease the counter by one">
                    <svg aria-hidden="true" viewBox="0 0 1 1">
                        <path d="M0,0.5 L1,0.5" />
                    </svg>
                </button>

                <div class="counter-viewport">
                    <div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
                        <strong class="hidden" aria-hidden="true">{Math.floor($displayed_count + 1)}</strong>
                        <strong>{Math.floor($displayed_count)}</strong>
                    </div>
                </div>

                <button on:click={() => (count += 1)} aria-label="Increase the counter by one">
                    <svg aria-hidden="true" viewBox="0 0 1 1">
                        <path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
                    </svg>
                </button>
            </div> */}
        </div>
    )
}


function modulo(n: number, m: number) {
    // handle negative numbers
    return ((n % m) + m) % m;
}

