/**
 * Simplified syntax for a for loop.
 * @param options The options to use in the for loop.
 * @param callback The callback to trigger for each iteration.
 * @example
 * ```
 * const forRange = require("for-range");
 *
 * forRange({ min: 2, max: 10, step: 2 }, (i) => {
 *     if (i === 4) return; // Skip for 4
 *     if (i === 8) return false; // Stop for loop at 8
 *     console.log(i);
 * });
 *
 * // Native JS equaivent
 * for (let i = 2; i <= 10; i += 2) {
 *     if (i === 4) continue;
 *     if (i === 8) break;
 *     console.log(i);
 * }
 * ```
*/
declare function forRange(options: {
    /**
     * The number to start the for loop at.
     *
     * @default 0
    */
    min?: number,

    /**
     * The number to end the for loop at.
    */
    max: number,

    /**
     * The amount to add to the number each iteration
     *
     * @default 1
    */
    step?: number
}, callback: (i: number) => any): void;

export = forRange;
